import nodemailer from 'nodemailer';
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;

// Optional: Store visits in MongoDB if available
const visitSchema = new mongoose.Schema({
  ip: String,
  city: String,
  region: String,
  country: String,
  referrer: String,
  pageUrl: String,
  userAgent: String,
  visitedAt: { type: Date, default: Date.now }
});

const Visit = mongoose.models.Visit || mongoose.model('Visit', visitSchema);

let cachedConnection = null;
async function connectToDatabase() {
  if (!MONGO_URI) return null;
  if (cachedConnection && mongoose.connection.readyState === 1) {
    return cachedConnection;
  }
  try {
    cachedConnection = await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 4000,
    });
    return cachedConnection;
  } catch (err) {
    console.warn('MongoDB visit logging skipped:', err.message);
    return null;
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const body = req.method === 'POST' ? req.body || {} : req.query || {};

    // Extract visitor telemetry
    const rawCity = req.headers['x-vercel-ip-city'];
    const city = rawCity ? decodeURIComponent(rawCity) : (body.city || 'Unknown City');
    const region = req.headers['x-vercel-ip-country-region'] || body.region || '';
    const country = req.headers['x-vercel-ip-country'] || body.country || 'Unknown Country';
    const forwarded = req.headers['x-forwarded-for'];
    const ip = forwarded ? forwarded.split(',')[0].trim() : (req.socket?.remoteAddress || 'Unknown IP');
    const userAgent = req.headers['user-agent'] || body.userAgent || 'Unknown Device/Browser';
    const referrer = body.referrer || req.headers['referer'] || 'Direct Visit';
    const pageUrl = body.url || 'https://jairaj-portfolio.vercel.app';
    const formattedTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium'
    });

    // Optional MongoDB logging
    connectToDatabase()
      .then(async (conn) => {
        if (conn) {
          await Visit.create({
            ip,
            city,
            region,
            country,
            referrer,
            pageUrl,
            userAgent
          });
        }
      })
      .catch((err) => console.warn('Visit log error:', err.message));

    // Email notification configuration
    const emailUser = process.env.EMAIL_USER || 'jairajjuly@gmail.com';
    const emailPass = process.env.EMAIL_PASS;
    const notifyEmail = process.env.NOTIFY_EMAIL || 'jairajjuly@gmail.com';

    if (!emailPass) {
      console.warn('EMAIL_PASS environment variable is not set. Skipping email dispatch.');
      return res.status(200).json({
        success: true,
        notified: false,
        message: 'Visit tracked. Set EMAIL_PASS in Vercel environment variables to enable email notifications.',
        visitor: { city, country, region, ip, referrer }
      });
    }

    // Configure Nodemailer Gmail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass.replace(/\s+/g, '') // strip any spaces from 16-char app password
      }
    });

    const locationString = city !== 'Unknown City' ? `${city}${region ? `, ${region}` : ''}, ${country}` : country;

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0f172a; color: #e2e8f0; margin: 0; padding: 24px; }
          .container { max-width: 580px; margin: 0 auto; background: #1e293b; border-radius: 16px; border: 1px solid #334155; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5); }
          .header { background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #6366f1 100%); padding: 28px 24px; text-align: center; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.025em; }
          .header p { margin: 6px 0 0; color: rgba(255, 255, 255, 0.9); font-size: 13px; }
          .content { padding: 24px; }
          .card { background: #0f172a; border: 1px solid #334155; border-radius: 10px; padding: 16px; margin-bottom: 16px; }
          .row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 13px; }
          .row:last-child { border-bottom: none; }
          .label { color: #94a3b8; font-weight: 500; }
          .value { color: #f8fafc; font-weight: 600; text-align: right; max-width: 60%; word-break: break-word; }
          .footer { text-align: center; padding: 16px 24px 24px; font-size: 12px; color: #64748b; border-top: 1px solid #334155; }
          .footer a { color: #38bdf8; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Portfolio Visitor!</h1>
            <p>Someone just opened your portfolio through your deployed link</p>
          </div>
          <div class="content">
            <div class="card">
              <div class="row">
                <span class="label">Location</span>
                <span class="value" style="color: #38bdf8;">${locationString}</span>
              </div>
              <div class="row">
                <span class="label">Visit Time (IST)</span>
                <span class="value">${formattedTime}</span>
              </div>
              <div class="row">
                <span class="label">Referral Source</span>
                <span class="value">${referrer}</span>
              </div>
              <div class="row">
                <span class="label">IP Address</span>
                <span class="value" style="font-family: monospace; font-size: 12px;">${ip}</span>
              </div>
            </div>

            <div class="card">
              <div class="row">
                <span class="label">Device / Browser</span>
                <span class="value" style="font-size: 11px; font-family: monospace;">${userAgent}</span>
              </div>
              <div class="row">
                <span class="label">Page URL</span>
                <span class="value"><a href="${pageUrl}" style="color: #38bdf8; text-decoration: none;">${pageUrl}</a></span>
              </div>
            </div>
          </div>
          <div class="footer">
            Portfolio Live Visitor Telemetry &bull; <a href="${pageUrl}">View Portfolio</a>
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Portfolio Live Tracker" <${emailUser}>`,
      to: notifyEmail,
      subject: `🔔 New Visitor on Portfolio! [${locationString}]`,
      html: emailHtml,
      text: `New Portfolio Visitor!\n\nLocation: ${locationString}\nTime: ${formattedTime}\nReferrer: ${referrer}\nIP: ${ip}\nDevice: ${userAgent}\nPage: ${pageUrl}`
    });

    return res.status(200).json({
      success: true,
      notified: true,
      message: 'Visitor notification sent successfully!'
    });
  } catch (err) {
    console.error('Visitor notification error:', err);
    return res.status(200).json({
      success: false,
      error: err.message,
      message: 'Logged with error, client unharmed.'
    });
  }
}

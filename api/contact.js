import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  },
  message: {
    type: String,
    required: [true, 'Message content is required']
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);

let cachedConnection = null;

async function connectToDatabase() {
  if (cachedConnection && mongoose.connection.readyState === 1) {
    return cachedConnection;
  }
  if (!MONGO_URI) {
    throw new Error('MONGO_URI is not configured in environment variables');
  }
  cachedConnection = await mongoose.connect(MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
  });
  return cachedConnection;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email, and message.'
      });
    }

    await connectToDatabase();
    const newMessage = await Message.create({ name, email, message });

    return res.status(201).json({
      success: true,
      message: 'Message saved to database successfully!',
      data: newMessage
    });
  } catch (err) {
    console.error('API /contact error:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to save to database: ' + err.message
    });
  }
}

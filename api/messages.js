import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  submittedAt: { type: Date, default: Date.now }
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
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    await connectToDatabase();
    const messages = await Message.find().sort({ submittedAt: -1 });
    return res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}

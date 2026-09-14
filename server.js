import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio_db';

// ================= MIDDLEWARES =================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files from current directory
app.use(express.static(path.join(__dirname)));

// ================= MONGOOSE SCHEMAS & MODELS =================

// 1. Contact Messages Schema (Stored in MongoDB Compass)
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

const Message = mongoose.model('Message', messageSchema);

// 2. Projects Schema
// 2. Projects Schema (Stored in MongoDB Compass)
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  badge: { type: String },
  description: { type: String, required: true },
  technologies: [{ type: String }],
  features: [{ type: String }],
  githubUrl: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Project = mongoose.model('Project', projectSchema);

// ================= DATABASE INITIALIZATION & SEEDING =================
async function initDB() {
  try {
    // Upsert / Refresh project catalog in MongoDB
    const initialProjects = [
      {
        title: "FlexFit Studio – Fitness Management & Booking Platform",
        category: "fullstack",
        badge: "Full-Stack TypeScript",
        description: "A full-stack gym management and class booking platform designed for fitness studios. Enables members to manage memberships, book fitness classes, use class credits, and join waitlists, while staff can operate the front desk.",
        technologies: ["TypeScript", "React.js", "Node.js", "Express.js", "Tailwind CSS", "MongoDB"],
        githubUrl: "https://github.com/jai2004raj/flexfit-studio",
        features: [
          "Dynamic class scheduling & booking system",
          "Credit balance management & waitlist queue",
          "Staff front-desk dashboard & trainer management",
          "Full-stack MERN with responsive Tailwind UI"
        ]
      },
      {
        title: "AI Detector for Admissions Essays",
        category: "ai",
        badge: "AI / NLP MERN",
        description: "Full-stack MERN application designed for transparent, evidence-based detection of machine-generated and AI-polished text in college admissions essays and academic prose.",
        technologies: ["React.js", "Node.js", "Express.js", "Mongoose", "NLP Forensics", "Vite"],
        githubUrl: "https://github.com/jai2004raj/AI-detector-for-admissions-essays",
        features: [
          "Sentence-level probability heatmaps & perplexity scoring",
          "Multi-layer linguistic text analysis (syntax, entropy)",
          "Admissions originality reports with confidence metrics",
          "Real-time text evaluation engine"
        ]
      },
      {
        title: "HealthSync – Health Tracking & Wellness Platform",
        category: "fullstack",
        badge: "Full-Stack (MERN)",
        description: "Designed and developed a responsive full-stack health tracking website for monitoring users' daily health and fitness activities.",
        technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose"],
        githubUrl: "",
        features: [
          "Secure user authentication",
          "BMI tracking & water intake logs",
          "Sleep, workout, and nutrition tracking",
          "Medicine reminders, goal setting & health reports"
        ]
      },
      {
        title: "EduPortal AI Chatbot – Educational AI Assistant",
        category: "ai",
        badge: "Front-End & AI",
        description: "Responsive front-end AI chatbot for an educational portal to provide instant learning support, subject explanations, and answer student queries.",
        technologies: ["HTML5", "CSS3", "JavaScript", "AI Chat UX"],
        githubUrl: "https://github.com/jai2004raj/Eduportal-AI-Chatbot",
        features: [
          "Interactive chat interface with real-time response",
          "Preloaded computer science & coding knowledge",
          "Clean, mobile-first responsive chat experience"
        ]
      },
      {
        title: "Bank Management System Using Queue",
        category: "embedded-java",
        badge: "Java & Data Structures",
        description: "A console-based Java application simulating real-world banking operations. It efficiently manages customer flow using FIFO Queues implemented through Singly Linked Lists.",
        technologies: ["Java", "Data Structures", "FIFO Queue", "Linked List", "OOP", "Eclipse"],
        githubUrl: "https://github.com/jai2004raj/Bank-management-system-using-queue",
        features: [
          "FIFO customer queue handling using custom Linked List",
          "Automated teller routing and transaction processing",
          "Account balance management, deposits, and withdrawals"
        ]
      },
      {
        title: "JumpMan LCD Game",
        category: "embedded-java",
        badge: "Arduino Embedded Project",
        description: "Designed and developed an interactive JumpMan game using Arduino Uno R3, featuring real-time obstacle avoidance gameplay on a 16x2 LCD display.",
        technologies: ["Arduino Uno R3", "16×2 LCD Display", "I2C LCD Module", "Push Button Switch", "Embedded C", "Arduino IDE"],
        githubUrl: "",
        features: [
          "Responsive push-button controls with hardware debounce",
          "Dynamic obstacle generation algorithms",
          "Real-time score tracking & smooth LCD gameplay"
        ]
      },
      {
        title: "Simple Scientific Calculator",
        category: "frontend",
        badge: "Front-End Project",
        description: "Designed and developed a responsive web-based scientific calculator for performing arithmetic and scientific computations.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        githubUrl: "https://github.com/jai2004raj/Calculator",
        features: [
          "Standard arithmetic operations (+, -, *, /)",
          "Trigonometric functions (sin, cos, tan, sqrt)",
          "Clear/reset functionality with instant calculation"
        ]
      },
      {
        title: "Jairaj DSCASC College Portal",
        category: "frontend",
        badge: "Institutional Web Portal",
        description: "Responsive institutional educational website built for Dayananda Sagar College of Arts, Science and Commerce coursework and student navigation.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        githubUrl: "https://github.com/jai2004raj/Jairaj-DSCASC-website",
        features: [
          "Academic resources and course structure catalog",
          "Clean modern layout & fast cross-device navigation",
          "Accessible typography & mobile responsive layout"
        ]
      }
    ];

    // Seed or update projects
    for (const proj of initialProjects) {
      await Project.findOneAndUpdate(
        { title: proj.title },
        proj,
        { upsert: true, new: true }
      );
    }
    console.log(`✅ ${initialProjects.length} Projects synced to MongoDB Compass!`);

    // Check if Message collection is empty, then insert 2 seed documents
    const messageCount = await Message.countDocuments();
    if (messageCount === 0) {
      console.log('🌱 Seeding initial sample inquiries into MongoDB...');
      await Message.insertMany([
        {
          name: "Recruiter Sarah",
          email: "sarah.tech@innovate.io",
          message: "Hi Jairaj, we reviewed your portfolio and were very impressed with FlexFit Studio, AI Detector, and HealthSync. Let's schedule an interview!",
          submittedAt: new Date(Date.now() - 3600000)
        },
        {
          name: "Academic Coordinator",
          email: "coordinator@dsu.edu",
          message: "Welcome to your MongoDB portfolio database! All new messages submitted through your website will be saved here automatically.",
          submittedAt: new Date()
        }
      ]);
      console.log('✅ Sample messages seeded successfully into MongoDB!');
    }
  } catch (err) {
    console.error('⚠️ Seeding error:', err.message);
  }
}

// ================= REST API ROUTES =================

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    mongodbUri: MONGO_URI,
    timestamp: new Date()
  });
});

// GET all projects from MongoDB
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: 1 });
    res.json({ success: true, count: projects.length, data: projects });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST a new contact message (Saves to MongoDB Compass)
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email, and message.'
      });
    }

    const newMessage = new Message({
      name,
      email,
      message
    });

    const savedMessage = await newMessage.save();

    console.log(`📩 [MongoDB] New contact inquiry received from: ${name} (${email})`);

    res.status(201).json({
      success: true,
      message: 'Your message has been saved to MongoDB successfully!',
      data: savedMessage
    });
  } catch (err) {
    console.error('Error saving contact message:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to save message to database: ' + err.message
    });
  }
});

// GET all messages (viewable in API or Compass)
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ submittedAt: -1 });
    res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/visit - Visitor tracking & email notification
app.post('/api/visit', async (req, res) => {
  try {
    const visitHandler = (await import('./api/visit.js')).default;
    return visitHandler(req, res);
  } catch (err) {
    console.error('Error invoking visit handler:', err);
    res.status(200).json({ success: true, localMock: true });
  }
});

// Fallback to index.html for single-page routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ================= CONNECT TO MONGODB & START SERVER =================
mongoose.connect(MONGO_URI, {
  serverSelectionTimeoutMS: 4000
})
  .then(async () => {
    console.log('====================================================');
    console.log('🍃 MongoDB connected successfully!');
    console.log(`📍 Connection URI: ${MONGO_URI}`);
    console.log('🧭 Ready for MongoDB Compass connection!');
    console.log('====================================================');
    
    // Run initial seeding
    await initDB();

    app.listen(PORT, () => {
      console.log(`🚀 Portfolio backend server running at http://localhost:${PORT}`);
      console.log(`📊 API endpoints ready:`);
      console.log(`   - POST http://localhost:${PORT}/api/contact (Saves messages to Compass)`);
      console.log(`   - GET  http://localhost:${PORT}/api/messages (View all messages)`);
      console.log(`   - GET  http://localhost:${PORT}/api/projects (View all projects)`);
      console.log(`   - GET  http://localhost:${PORT}/api/health   (Database status)`);
      console.log('====================================================');
    });
  })
  .catch((err) => {
    console.log('⚠️ MongoDB not connected yet:', err.message);
    console.log('💡 Note: Start MongoDB Compass or your local MongoDB service to view database.');
    
    app.listen(PORT, () => {
      console.log(`🚀 Portfolio server running at http://localhost:${PORT}`);
      console.log(`🍃 Once MongoDB is active, connect via Compass to: ${MONGO_URI}`);
    });
  });

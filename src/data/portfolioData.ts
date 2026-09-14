import { ProjectItem, SkillCategory, EducationItem, ActivityItem } from '../types';

export const PERSONAL_INFO = {
  name: "JAIRAJ A",
  role: "Full-Stack Developer & MCA Student",
  location: "Bengaluru, India",
  email: "jairajjuly@gmail.com",
  phone: "+91 9901864984",
  whatsapp: "https://wa.me/919901864984",
  github: "https://github.com/jai2004raj",
  linkedin: "https://www.linkedin.com/in/jairaj-a-29554a343/",
  instagram: "https://www.instagram.com/jairaj_4507/",
  summary: "A passionate MCA student and software developer with hands-on experience in full-stack web development, database architecture, AI-oriented solutions, and embedded systems. Dedicated to building clean, scalable, and impactful applications that solve real-world problems.",
  status: "Open for Internships & Full-Stack Developer Roles",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", iconName: "Code2", levelDescription: "Core systems & structured programming" },
      { name: "Java", iconName: "Coffee", levelDescription: "Object-oriented architecture & data structures" },
      { name: "Python", iconName: "Terminal", levelDescription: "Scripting, logic & AI integrations" },
      { name: "JavaScript", iconName: "FileCode", levelDescription: "ES6+, asynchronous programming & full-stack logic" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML", iconName: "Globe", levelDescription: "Semantic structuring & SEO standards" },
      { name: "CSS", iconName: "Palette", levelDescription: "Modern styling, flexbox & grid systems" },
      { name: "Bootstrap CSS", iconName: "Layout", levelDescription: "Rapid responsive UI component styling" },
      { name: "React.js", iconName: "Atom", levelDescription: "Component-driven interfaces & hooks" },
      { name: "Node.js", iconName: "Server", levelDescription: "Scalable backend services & event-driven APIs" },
      { name: "Express.js", iconName: "Cpu", levelDescription: "RESTful routing & server-side middleware" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", iconName: "Database", levelDescription: "Relational modeling, indexing & SQL queries" },
      { name: "MongoDB", iconName: "HardDrive", levelDescription: "NoSQL document storage, schemas & aggregation" },
    ],
  },
  {
    title: "Developer Tools & Platforms",
    skills: [
      { name: "Eclipse", iconName: "Binary", levelDescription: "Java IDE & enterprise development" },
      { name: "Azure", iconName: "Cloud", levelDescription: "Cloud fundamentals & deployment" },
      { name: "GitHub", iconName: "GitBranch", levelDescription: "Version control, collaboration & repositories" },
      { name: "Arduino IDE", iconName: "Cpu", levelDescription: "Microcontroller programming & sensor hardware" },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "aegis-shield",
    title: "Aegis Shield",
    subtitle: "Security Agency Management & Workforce Allocation Platform",
    category: "Full-Stack Project",
    categoryBadge: "Full-Stack (MERN / TypeScript)",
    description: "A full-stack, enterprise-grade security agency operations and workforce allocation platform featuring multi-role authentication (Admin, Worker, Company, Customer), real-time attendance tracking, shift conflict detection, payroll calculation, and operational analytics.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Recharts"],
    features: [
      "Multi-role JWT authentication & RBAC (Admin, Worker, Company, Customer)",
      "Automated workforce allocation engine with shift conflict detection",
      "Attendance monitoring with real-time duty check-in/out tracking",
      "Monthly payroll calculator with allowances, overtime, and deductions",
      "Admin analytics command center with Recharts visual telemetry and CSV exports"
    ],
    githubUrl: "https://github.com/jai2004raj/Aegis-sheild",
    abstractVisualType: "aegis",
  },
  {
    id: "ai-detector",
    title: "AI Detector for Admissions Essays",
    subtitle: "Academic Admissions & Stylometric Prose Analysis Platform",
    category: "Full-Stack Project",
    categoryBadge: "AI & Full-Stack (MERN)",
    description: "A full-stack MERN application for transparent, evidence-based detection of machine-generated text in college admissions essays using statistical language modeling, token surprisal, burstiness, and stylometric telemetry.",
    technologies: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "Statistical NLP"],
    features: [
      "Interactive proof heatmap with token surprisal, burstiness, and cross-entropy scoring",
      "Explainable evidence inspector detailing sentence-level perplexity and AI clichés",
      "Hybrid essay sensitivity detecting mixed human-written and machine-polished sections",
      "Corpus stylometric telemetry: sentence length variance and type-token ratios",
      "MongoDB persistence for analyzed manuscripts and reference benchmarks"
    ],
    githubUrl: "https://github.com/jai2004raj/AI-detector-for-admissions-essays",
    abstractVisualType: "aidetector",
  },
  {
    id: "flexfit-studio",
    title: "FlexFit Studio",
    subtitle: "Gym Management & Class Booking Platform",
    category: "Full-Stack Project",
    categoryBadge: "Full-Stack (Next.js / tRPC)",
    description: "A full-stack gym management and fitness studio booking platform enabling members to manage memberships, book classes, use class credits, and join waitlists, while staff operate front-desk operations, manage trainers, and monitor studio revenue.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "tRPC", "Prisma", "SQLite"],
    features: [
      "Member profile and active membership lifecycle management",
      "Dynamic fitness class scheduling with capacity limits & waitlists",
      "Credit-based booking system supporting corporate employee pools",
      "Multi-role access control for Studio Admins, Trainers, and Members",
      "Operational analytics tracking revenue, bookings, and gym attendance"
    ],
    githubUrl: "https://github.com/jai2004raj/flexfit-studio",
    abstractVisualType: "flexfit",
  },
  {
    id: "jumpman",
    title: "JumpMan LCD Game",
    subtitle: "Real-Time Embedded Obstacle Avoidance Game",
    category: "Arduino Project",
    categoryBadge: "Arduino Embedded",
    description: "An interactive retro JumpMan game engineered on the Arduino Uno R3 platform, featuring smooth real-time obstacle avoidance gameplay rendered on a 16x2 character LCD via I2C protocol.",
    technologies: ["Arduino Uno R3", "16×2 LCD Display", "I2C LCD Module", "Push Button Switch", "Embedded C", "Arduino IDE"],
    features: [
      "Responsive push-button jump controls with hardware debouncing",
      "Dynamic procedural obstacle generation algorithms",
      "Real-time scoring system and high score tracking",
      "Optimized character bitmap rendering on 16x2 LCD via I2C protocol"
    ],
    githubUrl: "https://github.com/jai2004raj",
    abstractVisualType: "jumpman",
  },
  {
    id: "eduportal-ai",
    title: "EduPortal AI Chatbot",
    subtitle: "Educational AI Assistant",
    category: "Front-End Project",
    categoryBadge: "Front-End & AI",
    description: "An interactive AI learning assistant designed for academic portals to deliver real-time learning support, subject clarification, algorithmic explanations, and student query resolution.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "REST API"],
    features: [
      "Interactive conversational chat interface with streaming response animations",
      "Real-time educational query answering and algorithmic problem assistance",
      "Subject-tailored knowledge responses for students and academic curricula",
      "Adaptive responsive design optimized for mobile and desktop screens"
    ],
    githubUrl: "https://github.com/jai2004raj/Eduportal-AI-Chatbot",
    abstractVisualType: "eduportal",
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Dayananda Sagar College of Arts, Science and Commerce",
    period: "2025 – 2027",
    status: "Currently Pursuing",
    description: "Postgraduate focus on Advanced Web Technologies, Software Engineering, Database Systems, Cloud Computing, and Applied AI.",
  },
  {
    degree: "Bachelor of Science (B.Sc) – Computer Science & Electronics",
    institution: "The Oxford College of Science",
    period: "2022 – 2025",
    status: "Completed",
    description: "Graduated with strong foundations in Object-Oriented Programming (Java, C), Data Structures, Embedded Electronics, Microcontrollers, and Digital Logic.",
  }
];

export const ACTIVITIES_DATA: ActivityItem[] = [
  {
    title: "IIMST Hackathon",
    event: "Inter-Collegiate Hackathon 2026",
    date: "August 3, 2026",
    location: "Dayananda Sagar University, Harohalli",
    description: "Actively participated in the intensive collaborative hackathon, collaborating on rapid prototyping, software problem solving, and technological innovation.",
    category: "Hackathon",
    tags: ["Hackathon", "Rapid Prototyping", "Team Collaboration", "Problem Solving"]
  }
];

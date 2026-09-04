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
    id: "healthsync",
    title: "HealthSync",
    subtitle: "Health Tracking & Wellness Platform",
    category: "Full-Stack Project",
    categoryBadge: "Full-Stack (MERN)",
    description: "A comprehensive, responsive full-stack health tracking web platform designed for monitoring daily physical health, vital fitness metrics, and personalized wellness routines.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose"],
    features: [
      "Secure user authentication and protected session state",
      "Dynamic BMI calculator & hydration/water intake logs",
      "Comprehensive sleep, workout, and nutrition tracking modules",
      "Automated medicine reminders and personalized health goal setting",
      "Integrated health reports and analytics visualization"
    ],
    githubUrl: "https://github.com/jai2004raj",
    abstractVisualType: "healthsync",
  },
  {
    id: "jumpman",
    title: "JumpMan LCD Game",
    subtitle: "Real-Time Embedded Obstacle Avoidance Game",
    category: "Arduino Project",
    categoryBadge: "Arduino Embedded",
    description: "An interactive retro JumpMan game engineered on the Arduino Uno R3 platform, featuring smooth real-time obstacle avoidance gameplay rendered on a 16x2 character LCD.",
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
    id: "food-management",
    title: "Food Management System",
    subtitle: "Inventory & Order Control System",
    category: "Full-Stack Project",
    categoryBadge: "Full-Stack (MERN)",
    description: "A responsive full-stack food management platform designed for streamlining food item inventory, tracking incoming/outgoing orders, stock monitoring, and operational availability.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose"],
    features: [
      "Role-based secure authentication & user management",
      "Live food item tracking with stock level threshold monitoring",
      "Real-time order processing and status pipeline",
      "Food availability reporting and consumption logs",
      "Structured REST API backend with MongoDB aggregation queries"
    ],
    githubUrl: "https://github.com/jai2004raj",
    abstractVisualType: "foodmgmt",
  },
  {
    id: "eduportal-ai",
    title: "EduPortal AI Chatbot",
    subtitle: "Educational AI Assistant",
    category: "Front-End Project",
    categoryBadge: "Front-End & AI",
    description: "A responsive front-end AI assistant designed for an academic portal to provide instant, real-time learning support, subject clarification, and interactive query resolution.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Interactive conversational chat interface with smooth typing stream",
      "Real-time educational query answering and problem assistance",
      "Subject-tailored knowledge responses for students",
      "Adaptive responsive design optimized for mobile and desktop screens"
    ],
    githubUrl: "https://github.com/jai2004raj/Eduportal-AI-Chatbot",
    abstractVisualType: "eduportal",
  },
  {
    id: "calculator",
    title: "Simple Scientific Calculator",
    subtitle: "Web Computation Utility",
    category: "Front-End Project",
    categoryBadge: "Front-End",
    description: "A responsive web-based scientific calculator for performing standard arithmetic operations and complex mathematical/trigonometric computations with precise state management.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Standard arithmetic and scientific operation support",
      "Instant computation memory with clear/reset functions",
      "Clean tactile keyboard layout and responsive visual display",
      "Error handling for division by zero and invalid expressions"
    ],
    githubUrl: "https://github.com/jai2004raj",
    abstractVisualType: "calculator",
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

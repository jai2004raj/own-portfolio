/* ==========================================================================
   JAIRAJ A - PORTFOLIO INTERACTION & LOGIC JAVASCRIPT
   Features: Typing Effect, Theme Toggle, Project Filter & Modals,
             Calculator & Chatbot Demos, Scrollspy, Form Handler, Toast
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  initTypingEffect();
  initThemeToggle();
  initNavbar();
  initScrollReveal();
  initProjectFiltering();
  initBackToTop();
});

/* ================= TYPING EFFECT ================= */
const roles = [
  "MCA Student",
  "Aspiring Software Developer",
  "Full-Stack Development Enthusiast",
  "AI & Technology Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 50;
let newTextDelay = 1800;

function initTypingEffect() {
  const typedRoleElement = document.getElementById('typedRole');
  if (!typedRoleElement) return;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typedRoleElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = erasingDelay;
    } else {
      typedRoleElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingDelay = newTextDelay;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingDelay = 400;
    }

    setTimeout(type, typingDelay);
  }

  setTimeout(type, 500);
}

/* ================= THEME TOGGLE (DARK / LIGHT) ================= */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  if (!themeToggleBtn) return;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('ja_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('ja_theme', nextTheme);
    updateThemeIcon(nextTheme);
  });
}

function updateThemeIcon(theme) {
  const themeToggleBtn = document.getElementById('themeToggle');
  if (!themeToggleBtn) return;

  if (theme === 'light') {
    themeToggleBtn.innerHTML = '<i data-lucide="sun"></i>';
  } else {
    themeToggleBtn.innerHTML = '<i data-lucide="moon"></i>';
  }
  if (window.lucide) {
    lucide.createIcons();
  }
}

/* ================= NAVBAR & SCROLLSPY ================= */
function initNavbar() {
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Sticky header blur effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // ScrollSpy active link update
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
      if (window.lucide) lucide.createIcons();
    });

    // Auto-close mobile menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.innerHTML = '<i data-lucide="menu"></i>';
        if (window.lucide) lucide.createIcons();
      });
    });
  }
}

/* ================= SCROLL REVEAL ANIMATION ================= */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));
}

/* ================= PROJECT FILTERING ================= */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ================= INTERACTIVE PROJECT MODALS ================= */
const projectData = {
  flexfit: {
    title: "FlexFit Studio – Fitness Management & Booking",
    badge: "Full-Stack TypeScript & React",
    description: "A full-stack gym management and class booking platform designed for fitness studios. Enables members to manage memberships, book fitness classes, use class credits, and join waitlists, while staff can operate the front desk, manage trainers, and monitor members.",
    tech: ["TypeScript", "React.js", "Node.js", "Express.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/jai2004raj/flexfit-studio",
    features: [
      "Dynamic Class Scheduling & Online Booking System",
      "Member credit balance management & automated waitlist queue",
      "Staff front-desk dashboard for check-ins & trainer assignments",
      "Role-based authentication & responsive mobile-first UI"
    ],
    demoType: "info"
  },
  aidetector: {
    title: "AI Detector for Admissions Essays",
    badge: "AI / NLP Forensics (MERN)",
    description: "A full-stack MERN application (Node.js/Express/Mongoose + React/Vite) designed for transparent, evidence-based detection of machine-generated and machine-polished text in college admissions essays and academic prose.",
    tech: ["React.js", "Node.js", "Express.js", "Mongoose", "NLP Forensics", "Vite"],
    github: "https://github.com/jai2004raj/AI-detector-for-admissions-essays",
    features: [
      "Sentence-level probability heatmaps & perplexity scores",
      "Multi-layer linguistic text analysis (syntax, entropy, rhythm)",
      "Detailed admissions originality reports with confidence metrics",
      "Evidence-based AI pattern detection for academic integrity"
    ],
    demoType: "info"
  },
  healthsync: {
    title: "HealthSync – Health Tracking & Wellness Platform",
    badge: "Full-Stack Project (MERN)",
    description: "Designed and developed a responsive full-stack health tracking website for monitoring users' daily health and fitness activities.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose"],
    features: [
      "Secure User Authentication & Session Management",
      "Real-time BMI calculation and healthy category feedback",
      "Daily water intake tracking with visual progress indicators",
      "Sleep duration and sleep quality logging",
      "Workout tracking (cardio, strength, duration, calories burned)",
      "Nutrition & meal intake breakdown",
      "Timely medicine reminders to prevent missed doses",
      "Custom fitness goal setting with automated status reporting"
    ],
    demoType: "info"
  },
  chatbot: {
    title: "EduPortal AI Chatbot – Educational AI Assistant",
    badge: "Front-End AI Chat Assistant",
    description: "Designed and developed a responsive front-end AI chatbot for an educational portal to provide instant learning support and answer user queries.",
    tech: ["HTML5", "CSS3", "JavaScript", "NLP Keyword Matching Engine"],
    github: "https://github.com/jai2004raj/Eduportal-AI-Chatbot",
    features: [
      "Instant query answering for Computer Applications & Coding topics",
      "Interactive conversational UI with typing indicator",
      "Preloaded knowledge for MCA subjects, Web Development, and Programming",
      "Mobile-friendly sleek dark theme chat interface"
    ],
    demoType: "chat"
  },
  bank: {
    title: "Bank Management System Using Queue",
    badge: "Java & Data Structures",
    description: "A console-based Java application simulating real-world banking operations. It efficiently manages customer flow using the First-In-First-Out (FIFO) principle implemented through a custom queue built with a singly linked list.",
    tech: ["Java", "Data Structures", "FIFO Queue", "Linked List", "OOP", "Eclipse"],
    github: "https://github.com/jai2004raj/Bank-management-system-using-queue",
    features: [
      "FIFO customer queue handling using Singly Linked List",
      "Automated teller routing and transaction processing",
      "Account balance management, deposits, and withdrawal records",
      "Demonstrates core Computer Science data structure concepts"
    ],
    demoType: "info"
  },
  jumpman: {
    title: "JumpMan LCD Game",
    badge: "Arduino Embedded Project",
    description: "Designed and developed an interactive JumpMan game using Arduino Uno R3, featuring real-time obstacle avoidance gameplay on a 16x2 LCD display.",
    tech: ["Arduino Uno R3", "16×2 LCD Display", "I2C Module", "Push Button Switch", "Embedded C", "Arduino IDE"],
    features: [
      "Hardware-level interrupt and debounce logic for responsive jumping switch",
      "Real-time procedural obstacle generation algorithm",
      "High score persistence during gameplay",
      "Custom LCD character sprites generated via bitmask bitmaps in Embedded C",
      "Power-efficient design using I2C 2-wire serial communication"
    ],
    demoType: "info"
  },
  calculator: {
    title: "Simple Scientific Calculator",
    badge: "Interactive Front-End Project",
    description: "Designed and developed a responsive web-based scientific calculator for performing arithmetic and scientific computations.",
    tech: ["HTML5", "CSS3", "JavaScript ES6+"],
    github: "https://github.com/jai2004raj/Calculator",
    features: [
      "Standard arithmetic operations (+, -, *, /)",
      "Scientific & Trigonometric functions (sin, cos, tan, square root, power)",
      "Clear, backspace, and real-time computation engine",
      "Responsive layout for mobile and desktop screens"
    ],
    demoType: "calc"
  },
  dscasc: {
    title: "Jairaj DSCASC College Portal",
    badge: "Institutional Web Portal",
    description: "A responsive educational website designed for Dayananda Sagar College of Arts, Science and Commerce coursework, syllabus exploration, and academic resource navigation.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: "https://github.com/jai2004raj/Jairaj-DSCASC-website",
    features: [
      "Academic resources and course structure catalog",
      "Clean modern design with accessible typography",
      "Responsive layout optimized for smartphones and tablets",
      "Institutional announcement and coursework showcase"
    ],
    demoType: "info"
  }
};

window.openProjectModal = function(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  const modal = document.getElementById('projectModal');
  const titleEl = document.getElementById('modalProjectTitle');
  const bodyEl = document.getElementById('modalProjectBody');

  titleEl.innerHTML = `<span>${data.title}</span>`;

  let contentHtml = `
    <div style="margin-bottom: 1.2rem;">
      <span class="project-badge" style="position:static;display:inline-block;margin-bottom:0.8rem;">${data.badge}</span>
      <p style="color:var(--text-muted);font-size:0.95rem;line-height:1.6;">${data.description}</p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size:1.05rem;margin-bottom:0.6rem;color:var(--text-main);">Key Features</h4>
      <ul style="list-style:none;display:flex;flex-direction:column;gap:0.4rem;">
        ${data.features.map(f => `
          <li style="display:flex;align-items:center;gap:0.5rem;font-size:0.88rem;color:var(--text-muted);">
            <i data-lucide="check-circle-2" style="width:16px;height:16px;color:var(--accent);flex-shrink:0;"></i>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size:1.05rem;margin-bottom:0.6rem;color:var(--text-main);">Technologies Used</h4>
      <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
        ${data.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
      </div>
    </div>

    ${data.github ? `
      <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle); display:flex; gap: 0.8rem;">
        <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" style="display:inline-flex; align-items:center; gap:0.5rem;">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
          <span>View on GitHub (${data.github.replace('https://github.com/', '')})</span>
        </a>
      </div>
    ` : ''}
  `;

  // Append Interactive Demos if applicable
  if (data.demoType === 'calc') {
    contentHtml += `
      <hr style="border-color:var(--border-subtle);margin:1.5rem 0;">
      <h4 style="font-size:1.05rem;margin-bottom:1rem;color:var(--secondary);text-align:center;">Interactive Calculator Widget</h4>
      <div class="calc-widget">
        <div class="calc-screen" id="calcScreen">0</div>
        <div class="calc-grid">
          <button class="calc-btn calc-btn-op" onclick="calcInput('sin(')">sin</button>
          <button class="calc-btn calc-btn-op" onclick="calcInput('cos(')">cos</button>
          <button class="calc-btn calc-btn-op" onclick="calcInput('tan(')">tan</button>
          <button class="calc-btn calc-btn-op" onclick="calcClear()">C</button>
          
          <button class="calc-btn" onclick="calcInput('7')">7</button>
          <button class="calc-btn" onclick="calcInput('8')">8</button>
          <button class="calc-btn" onclick="calcInput('9')">9</button>
          <button class="calc-btn calc-btn-op" onclick="calcInput('/')">/</button>

          <button class="calc-btn" onclick="calcInput('4')">4</button>
          <button class="calc-btn" onclick="calcInput('5')">5</button>
          <button class="calc-btn" onclick="calcInput('6')">6</button>
          <button class="calc-btn calc-btn-op" onclick="calcInput('*')">*</button>

          <button class="calc-btn" onclick="calcInput('1')">1</button>
          <button class="calc-btn" onclick="calcInput('2')">2</button>
          <button class="calc-btn" onclick="calcInput('3')">3</button>
          <button class="calc-btn calc-btn-op" onclick="calcInput('-')">-</button>

          <button class="calc-btn" onclick="calcInput('0')">0</button>
          <button class="calc-btn" onclick="calcInput('.')">.</button>
          <button class="calc-btn calc-btn-action" onclick="calcEqual()">=</button>
          <button class="calc-btn calc-btn-op" onclick="calcInput('+')">+</button>
        </div>
      </div>
    `;
  } else if (data.demoType === 'chat') {
    contentHtml += `
      <hr style="border-color:var(--border-subtle);margin:1.5rem 0;">
      <h4 style="font-size:1.05rem;margin-bottom:1rem;color:var(--secondary);text-align:center;">Interactive AI Chatbot Demo</h4>
      <div class="chat-preview-widget">
        <div class="chat-preview-messages" id="chatMessages">
          <div class="chat-bubble chat-bubble-bot">
            👋 Hello! I am the EduPortal AI Assistant. Ask me anything about computer science, MCA courses, web development, or Jairaj's projects!
          </div>
        </div>
        <form class="chat-preview-input-bar" onsubmit="handleChatSubmit(event)">
          <input type="text" id="chatInput" class="form-control" placeholder="Ask a question (e.g. 'What is React?' or 'Tell me about HealthSync')..." style="font-size:0.85rem;" required autocomplete="off">
          <button type="submit" class="btn btn-primary btn-sm">
            <i data-lucide="send" style="width:14px;height:14px;"></i>
          </button>
        </form>
      </div>
    `;
  }

  bodyEl.innerHTML = contentHtml;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (window.lucide) lucide.createIcons();
};

window.closeProjectModal = function() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
};

window.handleModalBackdropClick = function(event) {
  if (event.target.id === 'projectModal') {
    closeProjectModal();
  }
};

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

/* ================= CALCULATOR ENGINE ================= */
let calcExpression = '';

window.calcInput = function(val) {
  const screen = document.getElementById('calcScreen');
  if (!screen) return;

  if (calcExpression === '' && val !== '.' && isNaN(val) && !val.includes('(')) {
    return;
  }
  
  calcExpression += val;
  screen.textContent = calcExpression;
};

window.calcClear = function() {
  const screen = document.getElementById('calcScreen');
  calcExpression = '';
  if (screen) screen.textContent = '0';
};

window.calcEqual = function() {
  const screen = document.getElementById('calcScreen');
  if (!screen || !calcExpression) return;

  try {
    let sanitized = calcExpression
      .replace(/sin\(/g, 'Math.sin(')
      .replace(/cos\(/g, 'Math.cos(')
      .replace(/tan\(/g, 'Math.tan(');
    
    // Evaluate safely
    const result = Function(`'use strict'; return (${sanitized})`)();
    calcExpression = String(Math.round(result * 10000) / 10000);
    screen.textContent = calcExpression;
  } catch (err) {
    screen.textContent = 'Error';
    calcExpression = '';
  }
};

/* ================= CHATBOT ENGINE ================= */
window.handleChatSubmit = function(event) {
  event.preventDefault();
  const input = document.getElementById('chatInput');
  const messagesContainer = document.getElementById('chatMessages');
  if (!input || !messagesContainer) return;

  const query = input.value.trim();
  if (!query) return;

  // Append user message
  const userBubble = document.createElement('div');
  userBubble.className = 'chat-bubble chat-bubble-user';
  userBubble.textContent = query;
  messagesContainer.appendChild(userBubble);
  input.value = '';
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  // Bot response generator
  setTimeout(() => {
    const botBubble = document.createElement('div');
    botBubble.className = 'chat-bubble chat-bubble-bot';
    botBubble.innerHTML = getChatbotResponse(query);
    messagesContainer.appendChild(botBubble);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 400);
};

function getChatbotResponse(query) {
  const q = query.toLowerCase();

  if (q.includes('healthsync') || q.includes('health')) {
    return "<strong>HealthSync</strong> is a full-stack MERN application built by Jairaj A. It provides daily tracking for BMI, water intake, sleep, nutrition, medicine reminders, and fitness reports!";
  } else if (q.includes('jumpman') || q.includes('arduino') || q.includes('game')) {
    return "<strong>JumpMan</strong> is an interactive Arduino Uno R3 game running on a 16×2 LCD screen with button controls and obstacle avoidance!";
  } else if (q.includes('mca') || q.includes('education') || q.includes('college')) {
    return "Jairaj is pursuing his <strong>Master of Computer Applications (MCA)</strong> at Dayananda Sagar College of Arts, Science and Commerce (2025–2027) with a prior B.Sc. in CS & Electronics.";
  } else if (q.includes('skills') || q.includes('tech') || q.includes('language')) {
    return "Jairaj's core skills include <strong>C, Java, Python, JavaScript, React.js, Node.js, Express, MongoDB, MySQL</strong>, and Arduino Embedded systems.";
  } else if (q.includes('react') || q.includes('frontend')) {
    return "React is a component-based JavaScript library for building interactive user interfaces. Jairaj uses React alongside Node.js and Express to build full-stack web applications.";
  } else if (q.includes('contact') || q.includes('email') || q.includes('hire')) {
    return "You can reach Jairaj via email at <a href='mailto:jairajjuly@gmail.com' style='color:#38bdf8;'>jairajjuly@gmail.com</a> or call <a href='tel:+919901864984' style='color:#38bdf8;'>+91 9901864984</a>.";
  } else {
    return "Great question! Jairaj is enthusiastic about solving complex problems in software engineering, full-stack development, and AI tools. Feel free to connect via the Contact section!";
  }
}

/* ================= CONTACT FORM SUBMISSION ================= */
window.handleContactSubmit = async function(event) {
  event.preventDefault();
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('contactSubmitBtn');
  const btnText = document.getElementById('contactBtnText');
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const message = document.getElementById('contactMessage').value.trim();

  if (!name || !email || !message) {
    showToast("Please fill in all required fields.", "warning");
    return;
  }

  // Set loading state
  if (submitBtn) {
    submitBtn.disabled = true;
    if (btnText) btnText.textContent = "Sending...";
  }

  let mongoSaved = false;

  // 1. Try to save message directly into MongoDB backend (viewable in MongoDB Compass)
  try {
    const mongoEndpoint = window.location.port === '5000' 
      ? '/api/contact' 
      : 'http://localhost:5000/api/contact';

    const mongoRes = await fetch(mongoEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });
    
    if (mongoRes.ok) {
      mongoSaved = true;
      console.log('✅ Message stored in MongoDB Compass successfully!');
    }
  } catch (err) {
    console.info('MongoDB backend server is not running on port 5000, continuing with email delivery.', err.message);
  }

  // 2. Send email notification to Jairaj's inbox
  try {
    const response = await fetch("https://formsubmit.co/ajax/jairajjuly@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        _subject: `New Portfolio Inquiry from ${name} (${email})`,
        _template: "table",
        _autorespond: `Hi ${name},\n\nThank you for reaching out through my portfolio website! Jairaj has received your message and will reply to you shortly.\n\nBest regards,\nJairaj A`
      })
    });

    const result = await response.json();

    if (response.ok || result.success === "true" || result.success === true) {
      const toastMsg = mongoSaved 
        ? `Thank you ${name}! Message saved to MongoDB & sent to jairajjuly@gmail.com.`
        : `Thank you ${name}! Your message has been sent to Jairaj. An auto-confirmation was sent to ${email}.`;
      showToast(toastMsg, "success");
      form.reset();
    } else if (mongoSaved) {
      showToast(`Thank you ${name}! Message saved to MongoDB. Note: Check if FormSubmit activation is completed for email delivery.`, "info");
      form.reset();
    } else {
      throw new Error(result.message || "Failed to deliver email");
    }
  } catch (err) {
    console.warn("Direct submission error, using mailto fallback:", err);
    if (mongoSaved) {
      showToast(`Message saved to database! Opening mail app for direct delivery...`, "info");
    } else {
      showToast(`Opening email client to reach Jairaj...`, "info");
    }
    
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Jairaj,\n\nMy name is ${name} (${email}).\n\nMessage:\n${message}\n\nBest regards,\n${name}`);
    
    setTimeout(() => {
      window.location.href = `mailto:jairajjuly@gmail.com?subject=${subject}&body=${body}`;
    }, 500);

    form.reset();
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      if (btnText) btnText.textContent = "Send Message";
    }
  }
};

/* ================= TOAST NOTIFICATION ================= */
function showToast(message, type = "info") {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';

  const iconName = type === 'success' ? 'check-circle' : type === 'warning' ? 'alert-circle' : 'info';
  const iconColor = type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : '#6366f1';

  toast.innerHTML = `
    <i data-lucide="${iconName}" style="width:20px;height:20px;color:${iconColor};flex-shrink:0;"></i>
    <span style="font-size:0.9rem;font-weight:500;color:var(--text-main);">${message}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();

  setTimeout(() => toast.classList.add('show'), 50);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}

/* ================= BACK TO TOP BUTTON ================= */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

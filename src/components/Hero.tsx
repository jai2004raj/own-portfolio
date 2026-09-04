import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin, Instagram, MessageCircle, Terminal, Sparkles, Database, Layers, Cpu, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const CODE_SNIPPETS = {
  healthsync: `// HealthSync Platform Controller
const healthTracker = {
  user: "Jairaj A",
  stack: ["React.js", "Node.js", "MongoDB", "Express"],
  metrics: {
    bmi: 22.4,
    hydrationLogs: "2500ml / 3000ml",
    sleepTracker: "7.8 hrs",
    workoutStatus: "Completed"
  },
  trackDailyWellness() {
    return this.calculateInsights(this.metrics);
  }
};`,
  jumpman: `// JumpMan LCD Game (Arduino Uno R3)
#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27, 16, 2);

void loop() {
  readJumpButtonState();
  generateProceduralObstacles();
  if (detectCollision()) {
    triggerGameOver(currentScore);
  } else {
    renderFrameOnLCD();
    currentScore++;
  }
}`,
  fullstack: `// MERN REST API Architecture
import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

// Verified Engineering Foundations
const developer = {
  name: "${PERSONAL_INFO.name}",
  education: "MCA @ Dayananda Sagar",
  interests: ["Full-Stack", "Applied AI", "Embedded Systems"],
  readyForRoles: true
};`
};

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'healthsync' | 'jumpman' | 'fullstack'>('healthsync');
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-800/90 border border-emerald-500/20 text-emerald-400 text-xs font-medium backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight text-white leading-tight">
                Hi, I'm <span className="gradient-text-accent">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-gray-300 font-heading">
                {PERSONAL_INFO.role}
              </p>
            </div>

            {/* Introduction */}
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed font-sans">
              Passionate about engineering reliable full-stack web applications, database architectures, and AI-oriented systems. With hands-on experience in the MERN stack and embedded prototyping, I transform real-world problems into clean, high-performance software.
            </p>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent text-white font-semibold text-sm shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-dark-800/80 hover:bg-dark-700 border border-white/10 hover:border-white/20 text-gray-200 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-brand-accent" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Key Highlights Bar */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/[0.06] w-full text-xs text-gray-400">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-dark-800 border border-white/[0.08] text-gray-300 hover:text-white hover:border-brand-accent/40 hover:bg-dark-700 transition-all flex items-center gap-2"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                  <span className="font-mono">GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-dark-800 border border-white/[0.08] text-gray-300 hover:text-white hover:border-brand-primary/40 hover:bg-dark-700 transition-all flex items-center gap-2"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="font-mono">LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-dark-800 border border-white/[0.08] text-gray-300 hover:text-white hover:border-pink-500/40 hover:bg-dark-700 transition-all flex items-center gap-2"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                  <span className="font-mono">Instagram</span>
                </a>
                <a
                  href={PERSONAL_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-dark-800 border border-white/[0.08] text-gray-300 hover:text-white hover:border-emerald-500/40 hover:bg-dark-700 transition-all flex items-center gap-2"
                  aria-label="WhatsApp Chat"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono">WhatsApp</span>
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-4 text-gray-500 font-mono text-[11px]">
                <span className="flex items-center gap-1.5"><Layers className="w-3.5 h-3.5 text-brand-accent" /> MERN Stack</span>
                <span className="flex items-center gap-1.5"><Database className="w-3.5 h-3.5 text-brand-primary" /> MySQL / MongoDB</span>
                <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-emerald-400" /> Embedded Systems</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Code Workspace Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative rounded-2xl glass-panel shadow-2xl shadow-brand-primary/10 overflow-hidden border border-white/10 group">
              {/* Terminal Window Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-dark-800/90 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-gray-400 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-brand-accent" /> workspace:~/portfolio
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="p-1.5 rounded-md hover:bg-white/[0.08] text-gray-400 hover:text-white transition-colors"
                  title="Copy Code"
                  aria-label="Copy code snippet"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Code Tabs */}
              <div className="flex items-center border-b border-white/[0.06] bg-dark-900/60 px-2 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('healthsync')}
                  className={`px-3 py-2 text-xs font-mono flex items-center gap-1.5 border-b-2 transition-all whitespace-nowrap ${
                    activeTab === 'healthsync'
                      ? 'border-brand-accent text-brand-accent bg-white/[0.02]'
                      : 'border-transparent text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-brand-accent" /> HealthSync.ts
                </button>
                <button
                  onClick={() => setActiveTab('jumpman')}
                  className={`px-3 py-2 text-xs font-mono flex items-center gap-1.5 border-b-2 transition-all whitespace-nowrap ${
                    activeTab === 'jumpman'
                      ? 'border-emerald-400 text-emerald-400 bg-white/[0.02]'
                      : 'border-transparent text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <Cpu className="w-3 h-3 text-emerald-400" /> JumpMan.ino
                </button>
                <button
                  onClick={() => setActiveTab('fullstack')}
                  className={`px-3 py-2 text-xs font-mono flex items-center gap-1.5 border-b-2 transition-all whitespace-nowrap ${
                    activeTab === 'fullstack'
                      ? 'border-brand-primary text-brand-primary bg-white/[0.02]'
                      : 'border-transparent text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <Layers className="w-3 h-3 text-brand-primary" /> Architecture.ts
                </button>
              </div>

              {/* Code Content Area */}
              <div className="p-4 sm:p-5 bg-dark-900/90 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-gray-300 min-h-[260px]">
                <pre className="text-left">
                  <code>{CODE_SNIPPETS[activeTab]}</code>
                </pre>
              </div>

              {/* Terminal Footer Status */}
              <div className="px-4 py-2 bg-dark-800/80 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Compiled with 0 errors
                </span>
                <span>UTF-8 | Node.js v20</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

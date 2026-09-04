import React from 'react';
import { Github, Linkedin, Instagram, MessageCircle, Mail, ArrowUp, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-dark-900/90 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Role */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-dark-800 rounded-[7px] flex items-center justify-center">
                  <Code className="w-3.5 h-3.5 text-brand-accent" />
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-gray-400 font-mono">
              {PERSONAL_INFO.role}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-800 border border-white/[0.08] text-gray-400 hover:text-white hover:border-brand-accent/40 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-800 border border-white/[0.08] text-gray-400 hover:text-white hover:border-brand-primary/40 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-800 border border-white/[0.08] text-gray-400 hover:text-white hover:border-pink-500/40 transition-all"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-800 border border-white/[0.08] text-gray-400 hover:text-white hover:border-emerald-500/40 transition-all"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-dark-800 border border-white/[0.08] text-gray-400 hover:text-white hover:border-emerald-500/40 transition-all"
              aria-label="Email Jairaj"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-dark-800 border border-white/[0.08] text-gray-400 hover:text-white hover:border-white/20 transition-all ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-mono gap-2 text-center">
          <span>&copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.</span>
          <span>Designed with modern React, TypeScript & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};

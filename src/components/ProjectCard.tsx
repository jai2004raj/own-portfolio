import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity, Sparkles, Layers, Cpu, Utensils, MessageSquare, Calculator } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
  isFeatured?: boolean;
}

// Abstract UI Preview Visuals
const renderAbstractVisual = (type: ProjectItem['abstractVisualType']) => {
  switch (type) {
    case 'healthsync':
      return (
        <div className="h-44 sm:h-52 w-full bg-gradient-to-br from-dark-800 via-dark-900 to-[#0d1527] p-4 flex flex-col justify-between relative overflow-hidden border-b border-white/[0.08] select-none">
          {/* Subtle Ambient Health Glow */}
          <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-brand-accent/20 blur-2xl" />
          <div className="absolute -left-8 -bottom-8 w-36 h-36 rounded-full bg-emerald-500/15 blur-2xl" />

          {/* Top Bar with Status */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-brand-primary/20 border border-brand-primary/30">
                <Activity className="w-4 h-4 text-brand-accent" />
              </div>
              <span className="text-xs font-mono font-bold text-white tracking-wide">HealthSync Dashboard</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Telemetry
            </span>
          </div>

          {/* Mini Widgets Grid */}
          <div className="grid grid-cols-3 gap-2.5 z-10">
            <div className="p-2.5 rounded-xl bg-dark-800/80 border border-white/[0.06] flex flex-col">
              <span className="text-[10px] text-gray-400 font-mono">BMI Index</span>
              <span className="text-sm font-bold text-emerald-400 font-heading">22.4</span>
              <div className="w-full bg-dark-700 h-1 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-emerald-400 h-full w-[65%]" />
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-dark-800/80 border border-white/[0.06] flex flex-col">
              <span className="text-[10px] text-gray-400 font-mono">Hydration</span>
              <span className="text-sm font-bold text-brand-accent font-heading">2.5 L</span>
              <div className="w-full bg-dark-700 h-1 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-brand-accent h-full w-[80%]" />
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-dark-800/80 border border-white/[0.06] flex flex-col">
              <span className="text-[10px] text-gray-400 font-mono">Sleep Cycle</span>
              <span className="text-sm font-bold text-purple-400 font-heading">7.8 hrs</span>
              <div className="w-full bg-dark-700 h-1 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-purple-400 h-full w-[90%]" />
              </div>
            </div>
          </div>

          {/* Bottom Reminder Pill */}
          <div className="z-10 bg-dark-800/60 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/[0.04] flex items-center justify-between text-[11px] text-gray-300">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> Medicine Reminder: Daily Vitamins
            </span>
            <span className="font-mono text-gray-500 text-[10px]">09:00 PM</span>
          </div>
        </div>
      );

    case 'jumpman':
      return (
        <div className="h-44 sm:h-52 w-full bg-[#0a1a0f] p-4 flex flex-col justify-between relative overflow-hidden border-b border-emerald-500/20 select-none">
          {/* LCD Bezel & Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(#10b98115_1px,transparent_1px)] [background-size:12px_12px] opacity-40" />

          {/* Top LCD Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider">16×2 LCD MODULE (I2C)</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/40">
              ARDUINO UNO R3
            </span>
          </div>

          {/* 16x2 Character Matrix Visual */}
          <div className="z-10 bg-[#0d2818] p-3 rounded-lg border-2 border-emerald-600/40 shadow-inner font-mono text-emerald-300 text-xs sm:text-sm space-y-1">
            <div className="flex justify-between items-center tracking-widest text-[11px] sm:text-xs">
              <span>SCORE: 0482</span>
              <span>HI: 1250</span>
            </div>
            <div className="pt-1 flex items-center justify-between tracking-widest border-t border-emerald-700/30 text-xs sm:text-sm">
              <span className="text-emerald-200 font-bold">🏃___▲____▲____</span>
              <span className="text-[10px] text-emerald-400">FPS: 60</span>
            </div>
          </div>

          {/* Controller Input Status */}
          <div className="z-10 flex items-center justify-between text-[10px] font-mono text-emerald-400/80 bg-emerald-950/40 px-2.5 py-1 rounded">
            <span>BUTTON PIN: D2 [DEBOUNCED]</span>
            <span className="animate-pulse">● HARDWARE READY</span>
          </div>
        </div>
      );

    case 'foodmgmt':
      return (
        <div className="h-44 sm:h-52 w-full bg-gradient-to-br from-dark-800 via-dark-900 to-[#181124] p-4 flex flex-col justify-between relative overflow-hidden border-b border-white/[0.08] select-none">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-amber-500/20 border border-amber-500/30">
                <Utensils className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-xs font-mono font-bold text-white tracking-wide">Food Inventory Engine</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
              MERN Stack
            </span>
          </div>

          <div className="space-y-2 z-10">
            <div className="p-2 rounded-lg bg-dark-800/80 border border-white/[0.06] flex items-center justify-between text-xs">
              <span className="text-gray-300 font-medium">Inventory Stock Buffer</span>
              <span className="text-emerald-400 font-mono text-[11px] font-bold">94% Optimal</span>
            </div>
            <div className="p-2 rounded-lg bg-dark-800/80 border border-white/[0.06] flex items-center justify-between text-xs">
              <span className="text-gray-300 font-medium">Orders Queue Active</span>
              <span className="text-brand-accent font-mono text-[11px] font-bold">18 Processing</span>
            </div>
          </div>

          <div className="z-10 flex items-center justify-between text-[11px] text-gray-400 font-mono bg-dark-800/60 px-2.5 py-1 rounded">
            <span>REST API / MongoDB Aggregation</span>
            <span className="text-emerald-400">HTTP 200 OK</span>
          </div>
        </div>
      );

    case 'eduportal':
      return (
        <div className="h-44 sm:h-52 w-full bg-gradient-to-br from-dark-800 via-dark-900 to-[#10192e] p-4 flex flex-col justify-between relative overflow-hidden border-b border-white/[0.08] select-none">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/30">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-xs font-mono font-bold text-white tracking-wide">EduPortal AI Assistant</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              Real-Time AI UX
            </span>
          </div>

          {/* Interactive Chat Bubble Mockup */}
          <div className="space-y-2 z-10 text-xs">
            <div className="bg-dark-700/80 text-gray-300 p-2 rounded-lg rounded-tl-none border border-white/[0.04] max-w-[85%] self-start">
              <p className="text-[11px]">Can you explain QuickSort recursion with complexity?</p>
            </div>
            <div className="bg-brand-primary/20 text-brand-accent p-2 rounded-lg rounded-tr-none border border-brand-primary/30 max-w-[90%] ml-auto">
              <p className="text-[11px] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-brand-accent" /> Time complexity is O(n log n) average case...
              </p>
            </div>
          </div>

          <div className="z-10 flex items-center justify-between text-[10px] font-mono text-gray-400 bg-dark-800/60 px-2.5 py-1 rounded">
            <span>Instant Learning Support</span>
            <span className="text-brand-accent">● AI Ready</span>
          </div>
        </div>
      );

    case 'calculator':
    default:
      return (
        <div className="h-44 sm:h-52 w-full bg-gradient-to-br from-dark-800 via-dark-900 to-[#1e1b2e] p-4 flex flex-col justify-between relative overflow-hidden border-b border-white/[0.08] select-none">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-purple-500/20 border border-purple-500/30">
                <Calculator className="w-4 h-4 text-purple-400" />
              </div>
              <span className="text-xs font-mono font-bold text-white tracking-wide">Scientific Calculator</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
              Web Utility
            </span>
          </div>

          <div className="bg-dark-900/90 p-3 rounded-lg border border-white/10 font-mono text-right z-10">
            <div className="text-[10px] text-gray-400">sin(45°) + √(144) × 2</div>
            <div className="text-lg font-bold text-white font-heading">24.7071</div>
          </div>

          <div className="grid grid-cols-4 gap-1.5 z-10 text-[10px] font-mono text-gray-300">
            <span className="p-1 text-center bg-dark-800 rounded border border-white/[0.04]">sin</span>
            <span className="p-1 text-center bg-dark-800 rounded border border-white/[0.04]">cos</span>
            <span className="p-1 text-center bg-dark-800 rounded border border-white/[0.04]">tan</span>
            <span className="p-1 text-center bg-brand-primary/30 rounded border border-brand-primary/40 text-brand-accent">AC</span>
          </div>
        </div>
      );
  }
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, isFeatured = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`glass-panel rounded-2xl overflow-hidden border border-white/[0.08] hover:border-brand-primary/50 transition-all flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-brand-primary/10 ${
        isFeatured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Abstract Project Visual Mockup */}
      <div className="cursor-pointer" onClick={() => onSelect(project)}>
        {renderAbstractVisual(project.abstractVisualType)}
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Category & Badge */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-mono text-brand-accent tracking-wider uppercase flex items-center gap-1">
              <Layers className="w-3 h-3" /> {project.category}
            </span>
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-gray-300 border border-white/[0.08]">
              {project.categoryBadge}
            </span>
          </div>

          {/* Project Title */}
          <h3 
            onClick={() => onSelect(project)}
            className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-brand-accent transition-colors cursor-pointer"
          >
            {project.title}
          </h3>

          {project.subtitle && (
            <p className="text-xs font-medium text-gray-400 mt-0.5 mb-2">
              {project.subtitle}
            </p>
          )}

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-300 line-clamp-3 leading-relaxed mt-2">
            {project.description}
          </p>
        </div>

        {/* Tech Badges */}
        <div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-dark-800 text-gray-300 border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-dark-800 text-gray-400 border border-white/[0.06]">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/[0.06]">
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-accent hover:text-white transition-colors"
            >
              <span>Explore Project</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-400 hover:text-white border border-white/[0.08] transition-all"
                title="View Code on GitHub"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

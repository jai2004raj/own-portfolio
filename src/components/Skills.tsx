import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Coffee, 
  Terminal, 
  FileCode, 
  Globe, 
  Palette, 
  Layout, 
  Atom, 
  Server, 
  Cpu, 
  Database, 
  HardDrive, 
  Binary, 
  Cloud, 
  GitBranch, 
  Wrench,
  Sparkles
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// Icon mapper helper
const getSkillIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code2': return <Code2 className="w-5 h-5 text-brand-accent" />;
    case 'Coffee': return <Coffee className="w-5 h-5 text-amber-400" />;
    case 'Terminal': return <Terminal className="w-5 h-5 text-emerald-400" />;
    case 'FileCode': return <FileCode className="w-5 h-5 text-yellow-400" />;
    case 'Globe': return <Globe className="w-5 h-5 text-orange-400" />;
    case 'Palette': return <Palette className="w-5 h-5 text-blue-400" />;
    case 'Layout': return <Layout className="w-5 h-5 text-purple-400" />;
    case 'Atom': return <Atom className="w-5 h-5 text-cyan-400" />;
    case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
    case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-400" />;
    case 'Database': return <Database className="w-5 h-5 text-blue-500" />;
    case 'HardDrive': return <HardDrive className="w-5 h-5 text-green-500" />;
    case 'Binary': return <Binary className="w-5 h-5 text-rose-400" />;
    case 'Cloud': return <Cloud className="w-5 h-5 text-sky-400" />;
    case 'GitBranch': return <GitBranch className="w-5 h-5 text-orange-500" />;
    default: return <Wrench className="w-5 h-5 text-brand-accent" />;
  }
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.title)];

  const displayedCategories = selectedCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-accent text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02. TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Tools & Technical Foundations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl">
            Core programming languages, frameworks, database systems, and development tools documented in my resume.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30 border border-brand-primary'
                  : 'bg-dark-800/80 text-gray-400 hover:text-white hover:bg-dark-700 border border-white/[0.06]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Categorized Skills Display */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {displayedCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, delay: catIdx * 0.05 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold font-heading text-white tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-accent" />
                    {cat.title}
                  </h3>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cat.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: skillIdx * 0.04 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="glass-panel p-4 rounded-xl border border-white/[0.08] hover:border-brand-primary/40 transition-all hover:bg-dark-800/90 group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            {getSkillIcon(skill.iconName)}
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-white font-heading group-hover:text-brand-accent transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-[11px] text-gray-500 font-mono">
                              Verified
                            </span>
                          </div>
                        </div>
                      </div>
                      {skill.levelDescription && (
                        <p className="mt-2.5 text-xs text-gray-400 font-sans leading-relaxed border-t border-white/[0.04] pt-2">
                          {skill.levelDescription}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

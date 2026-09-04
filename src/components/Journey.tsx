import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-accent text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04. EDUCATION & JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Academic Milestones & Path
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl">
            A chronological timeline of my academic development in Computer Science and Electronics.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical Glowing Connector Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-accent via-brand-primary to-brand-emerald -translate-x-1/2" />

          <div className="space-y-12">
            {EDUCATION_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-dark-900 border-2 border-brand-accent flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                    <GraduationCap className="w-4 h-4 text-brand-accent" />
                  </div>

                  {/* Card Content */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="glass-panel p-6 rounded-2xl border border-white/[0.08] hover:border-brand-primary/40 transition-all hover:bg-dark-800/80 group">
                      
                      {/* Period Badge */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-accent bg-brand-primary/10 px-2.5 py-1 rounded-md border border-brand-primary/20">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        {item.status && (
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                            item.status === 'Currently Pursuing'
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : 'bg-white/[0.04] text-gray-400 border border-white/[0.06]'
                          }`}>
                            {item.status}
                          </span>
                        )}
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-lg font-bold text-white font-heading mt-2 group-hover:text-brand-accent transition-colors">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <p className="text-xs sm:text-sm font-medium text-gray-300 mt-1 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
                        <span>{item.institution}</span>
                      </p>

                      {/* Description */}
                      {item.description && (
                        <p className="text-xs text-gray-400 leading-relaxed mt-3 pt-3 border-t border-white/[0.04]">
                          {item.description}
                        </p>
                      )}

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

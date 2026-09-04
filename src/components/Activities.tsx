import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, Users, Calendar, MapPin, Tag } from 'lucide-react';
import { ACTIVITIES_DATA } from '../data/portfolioData';

export const Activities: React.FC = () => {
  return (
    <section id="activities" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-accent text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05. ACTIVITIES & INITIATIVES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Hackathons & Extracurriculars
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl">
            Collaborative tech hackathons and community leadership activities.
          </p>
        </div>

        {/* Activities Grid */}
        <div className={ACTIVITIES_DATA.length === 1 ? "max-w-3xl mx-auto" : "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"}>
          {ACTIVITIES_DATA.map((activity, idx) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] hover:border-brand-accent/40 transition-all flex flex-col justify-between group shadow-xl w-full"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {idx === 0 ? (
                      <Trophy className="w-6 h-6 text-brand-accent" />
                    ) : (
                      <Users className="w-6 h-6 text-brand-emerald" />
                    )}
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] text-gray-300 border border-white/[0.08]">
                    {activity.category}
                  </span>
                </div>

                {/* Title & Event */}
                <h3 className="text-xl font-bold text-white font-heading group-hover:text-brand-accent transition-colors">
                  {activity.title}
                </h3>
                <p className="text-xs font-semibold text-brand-accent mt-0.5 mb-3">
                  {activity.event}
                </p>

                {/* Date & Location */}
                {(activity.date || activity.location) && (
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-4 pb-3 border-b border-white/[0.06]">
                    {activity.date && (
                      <span className="flex items-center gap-1 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-brand-primary" /> {activity.date}
                      </span>
                    )}
                    {activity.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {activity.location}
                      </span>
                    )}
                  </div>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {activity.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-6 mt-4 border-t border-white/[0.04]">
                {activity.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-dark-800 text-gray-400 border border-white/[0.04] flex items-center gap-1"
                  >
                    <Tag className="w-2.5 h-2.5" />
                    {tag}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Database, Brain, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-brand-accent" />,
      title: "Academic Background",
      description: "Master of Computer Applications (MCA) student at Dayananda Sagar College of Arts, Science and Commerce."
    },
    {
      icon: <Code2 className="w-5 h-5 text-brand-primary" />,
      title: "Full-Stack Development",
      description: "Hands-on experience developing responsive web applications utilizing React.js, Node.js, Express, and modern JavaScript."
    },
    {
      icon: <Database className="w-5 h-5 text-brand-emerald" />,
      title: "Databases & Schemas",
      description: "Skilled in schema design and query optimization using both relational (MySQL) and NoSQL (MongoDB/Mongoose) databases."
    },
    {
      icon: <Brain className="w-5 h-5 text-brand-purple" />,
      title: "Problem Solving & Tech",
      description: "Passionate about exploring AI applications, software logic, and embedded microcontrollers (Arduino Uno)."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-accent text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Driven by Code, Precision & Impact
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl">
            A look into my background, academic path, and engineering philosophy.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Biography Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 glass-panel rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden border border-white/10"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-primary/20 to-brand-accent/20 border border-brand-accent/30 flex items-center justify-center font-heading font-bold text-xl text-white">
                JA
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-heading">{PERSONAL_INFO.name}</h3>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-brand-accent" /> {PERSONAL_INFO.location}
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base text-justify sm:text-left">
              {PERSONAL_INFO.summary}
            </p>

            <div className="pt-2 space-y-3">
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider">Key Pillars:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-300">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-dark-800/60 border border-white/[0.04]">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  <span>Full-Stack MERN Architecture</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-dark-800/60 border border-white/[0.04]">
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                  <span>Relational & NoSQL Data</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-dark-800/60 border border-white/[0.04]">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  <span>Applied AI Integrations</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-dark-800/60 border border-white/[0.04]">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Microcontroller Prototyping</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Highlight Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-panel p-5 rounded-xl border border-white/[0.08] hover:border-brand-primary/40 transition-all hover:bg-dark-800/80 group"
              >
                <div className="w-10 h-10 rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-white font-heading mb-1.5">{item.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

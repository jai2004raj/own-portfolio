import React, { useState } from 'react';
import { Sparkles, FolderGit2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-accent text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03. FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Engineered Projects & Systems
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl">
            Real-world full-stack platforms, hardware embedded systems, and front-end solutions built with modern technology stacks.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30 border border-brand-primary'
                  : 'bg-dark-800/80 text-gray-400 hover:text-white hover:bg-dark-700 border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
              isFeatured={idx === 0 && activeFilter === 'All'}
            />
          ))}
        </div>

        {/* GitHub Repository Callout */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/jai2004raj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-gray-400 hover:text-brand-accent transition-colors py-2 px-4 rounded-xl bg-dark-800/50 border border-white/[0.06] hover:border-brand-accent/30"
          >
            <FolderGit2 className="w-4 h-4 text-brand-accent" />
            <span>Explore all repositories on GitHub @jai2004raj</span>
          </a>
        </div>

        {/* Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

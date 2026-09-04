import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Activities } from './components/Activities';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackgroundEffects } from './components/UI/BackgroundEffects';
import { ScrollProgress } from './components/UI/ScrollProgress';
import { BackToTop } from './components/UI/BackToTop';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-dark-900 text-gray-100 font-sans selection:bg-brand-primary selection:text-white">
      {/* Top Reading Scroll Progress Bar */}
      <ScrollProgress />

      {/* Ambient Moving Gradient Lights & Grid */}
      <BackgroundEffects />

      {/* Sticky Glassmorphic Header / Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Activities />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Instagram, MessageCircle, Copy, Check, Sparkles, MessageSquare, MapPin, Loader2, AlertCircle, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      // 1. Send directly to Jairaj's inbox at jairajjuly@gmail.com via FormSubmit AJAX service
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setStatus('submitted');
        
        // Also silently store in local database if local server is active
        try {
          fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          }).catch(() => {});
        } catch (_) {}

      } else {
        throw new Error(data.message || 'Failed to dispatch email. Please try again.');
      }
    } catch (err: unknown) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Network error sending email');
    }
  };

  const getGmailComposeUrl = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${subject}&body=${body}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-accent text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Let's Build Something Meaningful
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl">
            Have an internship opportunity, full-stack developer role, collaboration, or technical project in mind? Send a message directly to my inbox.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white font-heading">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Reach out directly via email or connect with me across professional developer platforms. Messages submitted here are routed straight to my primary inbox.
              </p>

              {/* Email Box with One-Click Copy */}
              <div className="p-4 rounded-xl bg-dark-800/80 border border-white/[0.08] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-brand-primary/20 text-brand-accent flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-gray-400 block">Email Address</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-brand-accent transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-dark-700 hover:bg-dark-600 text-gray-300 hover:text-white border border-white/10 transition-all flex-shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* WhatsApp Box with Direct Chat Link */}
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-dark-800/80 border border-white/[0.08] hover:border-emerald-500/40 hover:bg-dark-800 transition-all flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-gray-400 block">WhatsApp Direct Chat</span>
                    <span className="text-xs sm:text-sm font-mono text-white group-hover:text-emerald-400 transition-colors truncate block">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono flex items-center gap-1 group-hover:bg-emerald-500/20 transition-all flex-shrink-0">
                  Message ↗
                </span>
              </a>

              {/* Location */}
              <div className="p-4 rounded-xl bg-dark-800/80 border border-white/[0.08] flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 block">Location</span>
                  <span className="text-xs sm:text-sm text-gray-200">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Professional Links */}
              <div className="pt-2 space-y-3">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Profiles:</span>
                <div className="flex flex-col gap-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-dark-800/60 border border-white/[0.06] hover:border-brand-accent/40 text-xs sm:text-sm text-gray-300 hover:text-white transition-all group"
                  >
                    <span className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-brand-accent" />
                      <span>github.com/jai2004raj</span>
                    </span>
                    <span className="text-xs text-gray-500 group-hover:text-white transition-colors">↗</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-dark-800/60 border border-white/[0.06] hover:border-brand-primary/40 text-xs sm:text-sm text-gray-300 hover:text-white transition-all group"
                  >
                    <span className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-brand-primary" />
                      <span>linkedin.com/in/jairaj-a-29554a343</span>
                    </span>
                    <span className="text-xs text-gray-500 group-hover:text-white transition-colors">↗</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-dark-800/60 border border-white/[0.06] hover:border-pink-500/40 text-xs sm:text-sm text-gray-300 hover:text-white transition-all group"
                  >
                    <span className="flex items-center gap-2.5">
                      <Instagram className="w-4 h-4 text-pink-400" />
                      <span>instagram.com/jairaj_4507</span>
                    </span>
                    <span className="text-xs text-gray-500 group-hover:text-white transition-colors">↗</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-dark-800/60 border border-white/[0.06] hover:border-emerald-500/40 text-xs sm:text-sm text-gray-300 hover:text-white transition-all group"
                  >
                    <span className="flex items-center gap-2.5">
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>WhatsApp (+91 9901864984)</span>
                    </span>
                    <span className="text-xs text-gray-500 group-hover:text-white transition-colors">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-2 pb-4 mb-6 border-b border-white/[0.06]">
                <MessageSquare className="w-5 h-5 text-brand-accent" />
                <h3 className="text-lg font-bold text-white font-heading">
                  Send a Direct Message
                </h3>
              </div>

              {status === 'submitted' ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-heading">Message Sent to Jairaj!</h4>
                  <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>! Your message has been sent directly to{' '}
                    <strong className="text-brand-accent">{PERSONAL_INFO.email}</strong>. I will review it and reply to{' '}
                    <strong>{formData.email}</strong> as soon as possible.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-dark-800 text-xs font-mono text-gray-300 hover:text-white border border-white/10 hover:border-brand-primary/40 transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 space-y-2">
                      <div className="flex items-center gap-2 font-semibold">
                        <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                        <span>Could not deliver automatically via network: {errorMessage}</span>
                      </div>
                      <p className="text-gray-300">
                        Don't worry, you can dispatch your message instantly using one of the buttons below:
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        <a
                          href={getGmailComposeUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 border border-rose-500/40 text-xs font-medium transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Open in Gmail Web</span>
                        </a>
                        <a
                          href={getMailtoUrl()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-gray-200 border border-white/10 text-xs font-medium transition-all"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Send via Email App</span>
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-gray-300 block">
                        Your Name <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-dark-800/90 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-gray-300 block">
                        Your Email <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-dark-800/90 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-gray-300 block">
                      Your Message <span className="text-brand-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discuss a role, project, or technical opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-800/90 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent text-white font-semibold text-sm shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Delivering to Jairaj...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="text-[11px] font-mono text-gray-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Routes directly to {PERSONAL_INFO.email}</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

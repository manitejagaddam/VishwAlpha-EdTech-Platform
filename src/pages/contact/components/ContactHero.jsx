import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-violet-900/20 to-pink-900/20">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 particles">
        {[...Array(20)]?.map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-pink-600/10 to-amber-600/10 animate-gradient" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-sm font-medium mb-4">
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Let's Connect & Transform Education Together
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient-primary mb-6">
            Ready to Experience
            <br />
            <span className="text-gradient-secondary">AI-Powered Education?</span>
          </h1>

          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Whether you're an educator seeking NEP 2020 solutions, a parent exploring skill development, 
            or an administrator planning transformation - we're here to guide your journey into intelligent education.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <div className="flex items-center text-text-muted">
              <Icon name="Clock" size={16} className="mr-2 text-violet-400" />
              <span className="text-sm">Response within 2 hours</span>
            </div>
            <div className="flex items-center text-text-muted">
              <Icon name="Shield" size={16} className="mr-2 text-emerald-400" />
              <span className="text-sm">100% Privacy Protected</span>
            </div>
            <div className="flex items-center text-text-muted">
              <Icon name="Users" size={16} className="mr-2 text-pink-400" />
              <span className="text-sm">10+ Educators Connected</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
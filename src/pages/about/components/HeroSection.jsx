import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-violet-900/20 to-slate-900">
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
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full mb-6">
            <Icon name="Sparkles" size={16} className="text-violet-400 mr-2" />
            <span className="text-sm font-medium text-violet-300">Where Education Meets Intelligence</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6">
            <span className="text-gradient-primary">VishwAlpha</span>
            <br />
            <span className="text-white">Transforming Education</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Bridging ancient Indian wisdom with cutting-edge AI innovation to create 
            the future of intelligent education. We're not just a service provider—we're 
            your catalyst for educational evolution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <div className="flex items-center text-slate-400">
            <Icon name="Globe" size={20} className="mr-2 text-violet-400" />
            <span>Serving 10+ Educational Institutions</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-slate-600"></div>
          <div className="flex items-center text-slate-400">
            <Icon name="Users" size={20} className="mr-2 text-pink-400" />
            <span>Empowering 100+ Students</span>
          </div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-slate-400">
          <span className="text-sm mb-2">Discover Our Story</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Icon name="ChevronDown" size={24} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-violet-900/20 to-slate-900">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles">
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
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary"
          >
            <Icon name="Sparkles" size={16} className="mr-2" />
            Real Impact, Real Stories
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl lg:text-7xl font-display font-bold text-gradient-primary leading-tight"
          >
            Transforming Education
            <span className="block text-text-primary">Through Innovation</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed"
          >
            Discover how VishwAlpha is revolutionizing learning experiences across India and beyond. 
            From classroom innovations to community impact, explore our journey of educational transformation.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          >
            {[
              { number: "10+", label: "Schools Transformed", icon: "School" },
              { number: "100+", label: "Students Impacted", icon: "Users" },
              { number: "10+", label: "Educators Trained", icon: "GraduationCap" },
              { number: "2+", label: "States Reached", icon: "MapPin" }
            ]?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Icon name={stat?.icon} size={24} className="text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-2">
                  {stat?.number}
                </div>
                <div className="text-sm text-text-secondary font-medium">
                  {stat?.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-text-muted">
          <span className="text-sm font-medium">Explore Our Impact</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon name="ChevronDown" size={20} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
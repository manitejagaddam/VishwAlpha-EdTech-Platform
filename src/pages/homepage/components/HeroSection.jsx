import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = ({ onNavigate }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-pink-500/20 to-amber-500/20 animate-gradient" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold">
              <span className="text-gradient-primary">Where Education</span>
              <br />
              <span className="text-white">Meets Intelligence</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Transforming Indian education through AI-powered solutions that align with NEP 2020, 
              empowering educators and unlocking every student's potential.
            </p>
          </motion.div>

          {/* Key Value Propositions */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="glass rounded-xl p-6 text-center">
              <Icon name="Brain" size={32} className="text-violet-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Analytics</h3>
              <p className="text-slate-300 text-sm">Intelligent insights for personalized learning paths</p>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <Icon name="Users" size={32} className="text-pink-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">NEP 2020 Aligned</h3>
              <p className="text-slate-300 text-sm">Seamlessly integrated with India's education policy</p>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <Icon name="TrendingUp" size={32} className="text-amber-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Future-Ready Skills</h3>
              <p className="text-slate-300 text-sm">Preparing students for tomorrow's opportunities</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white shadow-brand px-8 py-4 text-lg"
              onClick={() => onNavigate('/services')}
              iconName="Sparkles"
              iconPosition="left"
            >
              Experience AI Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-violet-400/30 text-violet-300 hover:text-white hover:border-violet-400/60 px-8 py-4 text-lg"
              onClick={() => onNavigate('/about')}
              iconName="Play"
              iconPosition="left"
            >
              Watch Our Story
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={fadeInUp} className="pt-8">
            <p className="text-slate-400 text-sm mb-4">Trusted by 10+ Educational Institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-slate-400 font-medium">CBSE Approved</div>
              {/* <div className="text-slate-400 font-medium">ISO 27001 Certified</div> */}
              {/* <div className="text-slate-400 font-medium">GDPR Compliant</div> */}
              <div className="text-slate-400 font-medium">NEP 2020 Aligned</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-slate-400">
          <span className="text-sm mb-2">Discover More</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
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
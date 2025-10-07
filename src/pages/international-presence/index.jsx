import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import GlobalMap from './components/GlobalMap';
import PartnershipPortal from './components/PartnershipPortal';
import CulturalAdaptation from './components/CulturalAdaptation';
import GlobalTestimonials from './components/GlobalTestimonials';

const InternationalPresence = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const globalStats = [
    {
      icon: 'Globe',
      value: '2+',
      label: 'Countries Served',
      description: 'Active presence across six continents'
    },
    {
      icon: 'Users',
      value: '100+',
      label: 'Students Impacted',
      description: 'Transforming lives through AI education'
    },
    {
      icon: 'Building2',
      value: '10+',
      label: 'Partner Institutions',
      description: 'Schools, universities, and organizations'
    },
    {
      icon: 'Award',
      value: '96%',
      label: 'Satisfaction Rate',
      description: 'Consistently high user satisfaction'
    }
  ];

  const keyFeatures = [
    {
      icon: 'Languages',
      title: 'Multilingual AI Solutions',
      description: 'Advanced natural language processing supporting 25+ languages with cultural context understanding',
      gradient: 'from-primary to-secondary'
    },
    {
      icon: 'Shield',
      title: 'Global Compliance Standards',
      description: 'GDPR, COPPA, and local data protection compliance ensuring security across all regions',
      gradient: 'from-secondary to-accent'
    },
    {
      icon: 'Zap',
      title: 'Scalable Infrastructure',
      description: 'Cloud-native architecture supporting millions of concurrent users worldwide',
      gradient: 'from-accent to-primary'
    },
    {
      icon: 'Heart',
      title: 'Cultural Sensitivity',
      description: 'AI models trained to respect and incorporate diverse cultural values and educational approaches',
      gradient: 'from-primary to-accent'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>International Presence - VishwAlpha | Global AI Education Solutions</title>
        <meta name="description" content="Discover VishwAlpha's global presence across 50+ countries, transforming education through culturally-aware AI solutions. Partner with us for international educational excellence." />
        <meta name="keywords" content="international education, global AI solutions, multilingual learning, cultural adaptation, educational partnerships" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-900 to-background"></div>
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at ${50 + scrollY * 0.01}% ${50 + scrollY * 0.005}%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at ${30 - scrollY * 0.008}% ${70 + scrollY * 0.003}%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`
            }}
          />
          
          {/* Floating Particles */}
          <div className="particles">
            {[...Array(20)]?.map((_, i) => (
              <motion.div
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

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                <Icon name="Globe" size={16} />
                <span>Global Education Transformation</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-gradient-primary">Bridging Cultures</span>
                <br />
                <span className="text-text-primary">Through AI Education</span>
              </h1>
              
              <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                From ancient Indian wisdom to global innovation, VishwAlpha connects diverse educational traditions 
                with cutting-edge AI technology, creating culturally-aware learning solutions that respect local values 
                while promoting international excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-white shadow-glow hover:shadow-glow-lg"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Explore Global Partnerships
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 text-text-primary hover:bg-primary/5"
                iconName="Play"
                iconPosition="left"
              >
                Watch Global Impact Story
              </Button>
            </motion.div>

            {/* Global Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
              {globalStats?.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                  whileHover={{ y: -4, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon name={stat?.icon} size={24} className="text-primary" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-text-primary mb-2">
                      {stat?.value}
                    </div>
                    <div className="font-semibold text-text-primary mb-1">
                      {stat?.label}
                    </div>
                    <div className="text-sm text-text-muted">
                      {stat?.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* Global Map Section */}
      {/* <section className="py-16 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              Our <span className="text-gradient-primary">Global Footprint</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Explore our international presence and discover how VishwAlpha is transforming education 
              across continents with culturally-adapted AI solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlobalMap />
          </motion.div>
        </div>
      </section> */}
      {/* Key Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              <span className="text-gradient-primary">Global Excellence</span> Through Local Understanding
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our international success stems from combining world-class AI technology with deep cultural understanding 
              and local educational expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyFeatures?.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature?.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon name={feature?.icon} size={32} className="text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-text-primary mb-4">
                    {feature?.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed">
                    {feature?.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Partnership Portal Section */}
      <section className="py-16 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              <span className="text-gradient-primary">Partnership Portal</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Discover partnership opportunities across educational institutions, government bodies, 
              technology platforms, and research organizations worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <PartnershipPortal />
          </motion.div>
        </div>
      </section>
      {/* Cultural Adaptation Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              <span className="text-gradient-primary">Cultural Adaptation</span> & Localization
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Experience how VishwAlpha adapts to diverse cultural contexts while maintaining educational excellence. 
              Our AI solutions respect local traditions and values across different regions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CulturalAdaptation />
          </motion.div>
        </div>
      </section>
      {/* Global Testimonials Section */}
      <section className="py-16 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlobalTestimonials />
          </motion.div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 lg:p-12 text-center border border-primary/20"
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
                Ready to Join Our <span className="text-gradient-primary">Global Network</span>?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Partner with VishwAlpha to bring culturally-aware AI education solutions to your region. 
                Let's transform learning experiences together while respecting local values and traditions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 text-white shadow-glow hover:shadow-glow-lg"
                  iconName="Globe"
                  iconPosition="left"
                >
                  Explore Partnership Opportunities
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/30 text-text-primary hover:bg-primary/5"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Schedule Global Consultation
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-text-muted">
                  Trusted by 100+ institutions across 2+ countries • 96% satisfaction rate • 100+ students impacted
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-slate-900 border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gradient-primary">VishwAlpha</h3>
                <p className="text-xs text-text-secondary">Global AI Education Excellence</p>
              </div>
            </div>
            
            <p className="text-text-muted mb-6">
              Bridging cultures through intelligent education solutions worldwide
            </p>
            
            <div className="flex justify-center gap-6 mb-8">
              {['Twitter', 'Linkedin', 'Facebook', 'Instagram', 'Youtube']?.map((social) => (
                <button
                  key={social}
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                >
                  <Icon name={social} size={20} />
                </button>
              ))}
            </div>
            
            <div className="text-sm text-text-muted">
              <p>&copy; {new Date()?.getFullYear()} VishwAlpha. All rights reserved.</p>
              <p className="mt-2">Transforming education across 2+ countries with culturally-aware AI solutions.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InternationalPresence;
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CTASection = ({ onNavigate }) => {
  const ctaOptions = [
    {
      title: "Schedule a Demo",
      description: "See VishwAlpha in action with a personalized demonstration",
      icon: "Calendar",
      action: "Book Demo",
      gradient: "from-violet-500 to-purple-600",
      onClick: () => onNavigate('/contact')
    },
    {
      title: "Download Resources",
      description: "Get implementation guides, case studies, and NEP 2020 alignment documents",
      icon: "Download",
      action: "Get Resources",
      gradient: "from-pink-500 to-rose-600",
      onClick: () => onNavigate('/contact')
    },
    {
      title: "Start Pilot Program",
      description: "Begin with a risk-free pilot to experience the transformation",
      icon: "Rocket",
      action: "Launch Pilot",
      gradient: "from-amber-500 to-orange-600",
      onClick: () => onNavigate('/contact')
    },
    {
      title: "Join Community",
      description: "Connect with educators, parents, and students using VishwAlpha",
      icon: "Users",
      action: "Join Now",
      gradient: "from-emerald-500 to-teal-600",
      onClick: () => onNavigate('/contact')
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-pink-500/10 to-amber-500/10 animate-gradient" />
        <div className="particles">
          {[...Array(15)]?.map((_, i) => (
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Ready to Transform <br />
            <span className="text-gradient-primary">Your Educational Journey?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Join thousands of educators, parents, and students who are already experiencing 
            the power of AI-driven education with VishwAlpha.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="default"
              size="xl"
              className="bg-gradient-primary hover:opacity-90 text-white shadow-brand px-12 py-6 text-xl"
              onClick={() => onNavigate('/services')}
              iconName="Sparkles"
              iconPosition="left"
            >
              Experience AI Demo
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-violet-400/30 text-violet-300 hover:text-white hover:border-violet-400/60 px-12 py-6 text-xl"
              onClick={() => onNavigate('/contact')}
              iconName="MessageCircle"
              iconPosition="left"
            >
              Talk to Expert
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400 text-sm">
            <div className="flex items-center">
              <Icon name="Shield" size={16} className="mr-2 text-emerald-400" />
              GDPR Compliant
            </div>
            <div className="flex items-center">
              <Icon name="Award" size={16} className="mr-2 text-amber-400" />
              ISO 27001 Certified
            </div>
            <div className="flex items-center">
              <Icon name="Users" size={16} className="mr-2 text-violet-400" />
              500+ Institutions Trust Us
            </div>
            <div className="flex items-center">
              <Icon name="Globe" size={16} className="mr-2 text-pink-400" />
              Global Presence
            </div>
          </div>
        </motion.div>

        {/* CTA Options Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {ctaOptions?.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={option?.onClick}
            >
              <div className="bg-slate-800 rounded-2xl p-6 h-full border border-slate-700 hover:border-violet-500/50 transition-all duration-300 group-hover:bg-slate-700">
                <div className={`w-16 h-16 bg-gradient-to-r ${option?.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={option?.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient-primary transition-colors duration-300">
                  {option?.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {option?.description}
                </p>
                <div className="flex items-center text-violet-400 group-hover:text-violet-300 font-medium">
                  {option?.action}
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Our education specialists are here to help you understand how VishwAlpha 
              can transform your specific educational context.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:text-white hover:border-slate-500"
                onClick={() => onNavigate('/contact')}
                iconName="Mail"
                iconPosition="left"
              >
                Send Message
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:text-white hover:border-slate-500"
                onClick={() => onNavigate('/about')}
                iconName="Info"
                iconPosition="left"
              >
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
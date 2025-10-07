import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const [activeMethod, setActiveMethod] = useState('consultation');

  const contactMethods = [
    {
      id: 'consultation',
      title: 'Schedule Consultation',
      description: 'Perfect for educators and administrators ready to explore AI solutions',
      icon: 'Calendar',
      color: 'violet',
      features: ['30-minute expert session', 'Personalized recommendations', 'Implementation roadmap', 'Free NEP 2020 alignment guide'],
      cta: 'Book Free Consultation',
      audience: 'Educators & Administrators'
    },
    {
      id: 'demo',
      title: 'Request Live Demo',
      description: 'See our AI tools in action with real educational scenarios',
      icon: 'Play',
      color: 'pink',
      features: ['Interactive AI showcase', 'Student analytics preview', 'Career guidance demo', 'Q&A with experts'],
      cta: 'Schedule Demo',
      audience: 'Decision Makers'
    },
    {
      id: 'partnership',
      title: 'Partnership Inquiry',
      description: 'For schools and institutions ready to transform education',
      icon: 'Handshake',
      color: 'emerald',
      features: ['Custom implementation plan', 'Pilot program options', 'Training & support', 'ROI analysis'],
      cta: 'Start Partnership',
      audience: 'Institutions'
    },
    {
      id: 'support',
      title: 'General Support',
      description: 'Questions, feedback, or need help with existing services',
      icon: 'HelpCircle',
      color: 'amber',
      features: ['Technical assistance', 'Feature requests', 'Billing inquiries', 'Community access'],
      cta: 'Get Support',
      audience: 'All Users'
    }
  ];

  const getColorClasses = (color, isActive) => {
    const colors = {
      violet: {
        bg: isActive ? 'bg-violet-500/20' : 'bg-violet-500/10',
        border: isActive ? 'border-violet-500/40' : 'border-violet-500/20',
        text: 'text-violet-400',
        button: 'bg-violet-500 hover:bg-violet-600'
      },
      pink: {
        bg: isActive ? 'bg-pink-500/20' : 'bg-pink-500/10',
        border: isActive ? 'border-pink-500/40' : 'border-pink-500/20',
        text: 'text-pink-400',
        button: 'bg-pink-500 hover:bg-pink-600'
      },
      emerald: {
        bg: isActive ? 'bg-emerald-500/20' : 'bg-emerald-500/10',
        border: isActive ? 'border-emerald-500/40' : 'border-emerald-500/20',
        text: 'text-emerald-400',
        button: 'bg-emerald-500 hover:bg-emerald-600'
      },
      amber: {
        bg: isActive ? 'bg-amber-500/20' : 'bg-amber-500/10',
        border: isActive ? 'border-amber-500/40' : 'border-amber-500/20',
        text: 'text-amber-400',
        button: 'bg-amber-500 hover:bg-amber-600'
      }
    };
    return colors?.[color];
  };

  return (
    <section className="py-16 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-primary mb-4">
            Choose Your Path to Transformation
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Every educational journey is unique. Select the engagement option that best fits your current needs and goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods?.map((method, index) => {
            const isActive = activeMethod === method?.id;
            const colorClasses = getColorClasses(method?.color, isActive);
            
            return (
              <motion.div
                key={method?.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 cursor-pointer hover:scale-105 ${colorClasses?.bg} ${colorClasses?.border}`}
                onClick={() => setActiveMethod(method?.id)}
                onMouseEnter={() => setActiveMethod(method?.id)}
              >
                <div className="text-center space-y-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${colorClasses?.bg} ${colorClasses?.border} mb-4`}>
                    <Icon name={method?.icon} size={24} className={colorClasses?.text} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {method?.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-4">
                      {method?.description}
                    </p>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${colorClasses?.bg} ${colorClasses?.text}`}>
                      {method?.audience}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {method?.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-text-muted">
                        <Icon name="Check" size={14} className={`mr-2 ${colorClasses?.text}`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="default"
                    fullWidth
                    className={`${colorClasses?.button} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    {method?.cta}
                  </Button>
                </div>
                {isActive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${colorClasses?.button} flex items-center justify-center`}
                  >
                    <Icon name="Star" size={12} className="text-white" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-8 text-sm text-text-muted">
            <div className="flex items-center">
              <Icon name="Clock" size={16} className="mr-2 text-violet-400" />
              Available Mon-Sat, 9 AM - 7 PM IST
            </div>
            <div className="flex items-center">
              <Icon name="Globe" size={16} className="mr-2 text-pink-400" />
              Serving 15+ Countries
            </div>
            <div className="flex items-center">
              <Icon name="Award" size={16} className="mr-2 text-emerald-400" />
              ISO 27001 Certified
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMethods;
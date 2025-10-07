import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      category: 'Getting Started',
      icon: 'Rocket',
      color: 'violet',
      questions: [
        {
          question: 'How quickly can we implement VishwAlpha in our school?',
          answer: `Implementation timeline varies based on your requirements:\n\n• Basic setup: 2-4 weeks\n• Full integration: 6-8 weeks\n• Custom solutions: 8-12 weeks\n\nWe provide dedicated support throughout the process, including teacher training, system setup, and ongoing assistance to ensure smooth adoption.`
        },
        {
          question: 'What training and support do you provide?',
          answer: `Comprehensive training and support package includes:\n\n• Initial teacher training sessions (online & offline)\n• Administrator dashboard training\n• Student orientation programs\n• 24/7 technical support\n• Regular webinars and updates\n• Dedicated account manager\n\nWe ensure your team is confident and capable before full deployment.`
        }
      ]
    },
    {
      category: 'Pricing & Plans',
      icon: 'CreditCard',
      color: 'emerald',
      questions: [
        {
          question: 'What are your pricing models?',
          answer: `Flexible pricing options to suit different needs:\n\n• Per-student pricing: ₹200-500/student/month\n• School-wide packages: ₹50,000-2,00,000/year\n• District-level solutions: Custom pricing\n• Pilot programs: 50% discount for first 3 months\n\nAll plans include setup, training, and basic support. Contact us for detailed pricing based on your requirements.`
        },
        {
          question: 'Do you offer free trials or pilot programs?',
          answer: `Yes! We offer multiple trial options:\n\n• 30-day free trial for up to 50 students\n• 3-month pilot program at 50% discount\n• Demo sessions for decision makers\n• Proof-of-concept implementations\n\nPilot programs include full features, training, and support to help you evaluate our impact before full commitment.`
        }
      ]
    },
    {
      category: 'Technical & Security',
      icon: 'Shield',
      color: 'pink',
      questions: [
        {
          question: 'How secure is student data on your platform?',
          answer: `Data security is our top priority:\n\n• ISO 27001 certified infrastructure\n• GDPR and Indian data protection compliance\n• End-to-end encryption for all data\n• Regular security audits and penetration testing\n• Role-based access controls\n• Data residency in Indian servers\n\nWe never share student data with third parties and provide complete transparency in our data handling practices.`
        },
        {
          question: 'What technical requirements do schools need?',
          answer: `Minimal technical requirements:\n\n• Stable internet connection (minimum 10 Mbps)\n• Modern web browsers (Chrome, Firefox, Safari)\n• Basic computer/tablet access for students\n• No special software installation required\n• Works on Windows, Mac, iOS, and Android\n\nOur cloud-based platform requires no server setup or maintenance from your end.`
        }
      ]
    },
    {
      category: 'Features & Integration',
      icon: 'Settings',
      color: 'amber',
      questions: [
        {
          question: 'How does VishwAlpha align with NEP 2020?',
          answer: `Complete NEP 2020 alignment:\n\n• Competency-based assessment tools\n• Multidisciplinary learning support\n• Critical thinking and creativity metrics\n• Holistic progress tracking\n• Skill-based career guidance\n• Mother tongue learning support\n• Arts and sports integration\n\nOur platform is designed specifically to support NEP 2020 implementation with measurable outcomes.`
        },
        {
          question: 'Can you integrate with our existing school management system?',
          answer: `Yes, we support integration with popular systems:\n\n• API-based integration with most SMS platforms\n• Data import/export capabilities\n• Single sign-on (SSO) support\n• Gradebook synchronization\n• Attendance system integration\n• Parent communication tools\n\nOur technical team handles all integration work to ensure seamless data flow between systems.`
        }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      violet: {
        bg: 'bg-violet-500/10',
        border: 'border-violet-500/20',
        text: 'text-violet-400',
        icon: 'text-violet-400'
      },
      emerald: {
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
        text: 'text-emerald-400',
        icon: 'text-emerald-400'
      },
      pink: {
        bg: 'bg-pink-500/10',
        border: 'border-pink-500/20',
        text: 'text-pink-400',
        icon: 'text-pink-400'
      },
      amber: {
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/20',
        text: 'text-amber-400',
        icon: 'text-amber-400'
      }
    };
    return colors?.[color];
  };

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const faqIndex = categoryIndex * 100 + questionIndex;
    setOpenFAQ(openFAQ === faqIndex ? -1 : faqIndex);
  };

  return (
    <section className="py-16 bg-slate-800/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Get quick answers to common questions about VishwAlpha's AI education solutions, 
            implementation process, and support services.
          </p>
        </motion.div>

        <div className="space-y-8">
          {faqs?.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category?.color);
            
            return (
              <motion.div
                key={category?.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="space-y-4"
              >
                {/* Category Header */}
                <div className={`flex items-center p-4 rounded-lg ${colorClasses?.bg} ${colorClasses?.border} border`}>
                  <div className={`w-8 h-8 rounded-lg ${colorClasses?.bg} ${colorClasses?.border} border flex items-center justify-center mr-4`}>
                    <Icon name={category?.icon} size={16} className={colorClasses?.icon} />
                  </div>
                  <h3 className={`text-lg font-semibold ${colorClasses?.text}`}>
                    {category?.category}
                  </h3>
                </div>
                {/* Questions */}
                <div className="space-y-2">
                  {category?.questions?.map((faq, questionIndex) => {
                    const faqIndex = categoryIndex * 100 + questionIndex;
                    const isOpen = openFAQ === faqIndex;
                    
                    return (
                      <div
                        key={questionIndex}
                        className="glass rounded-lg backdrop-blur-sm overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200"
                        >
                          <span className="text-text-primary font-medium pr-4">
                            {faq?.question}
                          </span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex-shrink-0"
                          >
                            <Icon 
                              name="ChevronDown" 
                              size={20} 
                              className={`${colorClasses?.text} transition-colors duration-200`} 
                            />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 border-t border-slate-700/50">
                                <div className="pt-4 text-text-secondary leading-relaxed whitespace-pre-line">
                                  {faq?.answer}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
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
          <div className="glass rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Still Have Questions?
            </h3>
            <p className="text-text-secondary mb-6">
              Our education experts are here to help you understand how VishwAlpha 
              can transform your institution's learning outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('mailto:hello@vishwalpha.com', '_self')}
                className="inline-flex items-center px-6 py-3 bg-gradient-primary hover:opacity-90 text-white rounded-lg font-medium transition-all duration-200 shadow-glow hover:shadow-glow-lg"
              >
                <Icon name="Mail" size={16} className="mr-2" />
                Email Our Experts
              </button>
              <button
                onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                className="inline-flex items-center px-6 py-3 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 rounded-lg font-medium transition-all duration-200"
              >
                <Icon name="MessageCircle" size={16} className="mr-2" />
                WhatsApp Chat
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UserPathways = ({ onNavigate }) => {
  const [activePathway, setActivePathway] = useState('educator');

  const pathways = {
    educator: {
      title: "For Educators",
      subtitle: "The Curious Educator Journey",
      icon: "GraduationCap",
      gradient: "from-violet-500 to-purple-600",
      description: "Discover how AI can transform your teaching methodology and student outcomes",
      journey: [
        {
          step: 1,
          title: "Explore NEP 2020 Solutions",
          description: "Understand how VishwAlpha aligns with India\'s New Education Policy",
          action: "Browse Implementation Guides",
          icon: "BookOpen"
        },
        {
          step: 2,
          title: "Experience AI Analytics Demo",
          description: "See real-time student performance insights and predictive analytics",
          action: "Try Interactive Demo",
          icon: "BarChart3"
        },
        {
          step: 3,
          title: "Review Success Stories",
          description: "Learn from peer educators who\'ve transformed their classrooms",
          action: "Read Case Studies",
          icon: "Star"
        },
        {
          step: 4,
          title: "Download Resources",
          description: "Access implementation guides, training materials, and best practices",
          action: "Get Free Resources",
          icon: "Download"
        },
        {
          step: 5,
          title: "Schedule Consultation",
          description: "Connect with our education specialists for personalized guidance",
          action: "Book Free Consultation",
          icon: "Calendar"
        }
      ],
      cta: {
        primary: "Start Your AI Journey",
        secondary: "Download NEP Guide",
        primaryAction: () => onNavigate('/services'),
        secondaryAction: () => onNavigate('/contact')
      }
    },
    parent: {
      title: "For Parents",
      subtitle: "The Concerned Parent Journey",
      icon: "Heart",
      gradient: "from-pink-500 to-rose-600",
      description: "Ensure your child gets the best AI-powered education and skill development",
      journey: [
        {
          step: 1,
          title: "Discover Skill Development",
          description: "Learn how AI identifies and nurtures your child's unique talents",
          action: "Explore Skill Programs",
          icon: "Target"
        },
        {
          step: 2,
          title: "Watch Success Stories",
          description: "See how other students have benefited from personalized learning",
          action: "View Student Journeys",
          icon: "Play"
        },
        {
          step: 3,
          title: "Try Chatbot Features",
          description: "Experience 24/7 educational support for your child",
          action: "Chat with AI Assistant",
          icon: "MessageCircle"
        },
        {
          step: 4,
          title: "Join Parent Community",
          description: "Connect with other parents and share experiences",
          action: "Join Forum",
          icon: "Users"
        },
        {
          step: 5,
          title: "Request School Partnership",
          description: "Help bring VishwAlpha to your child\'s school",
          action: "Contact School Team",
          icon: "School"
        }
      ],
      cta: {
        primary: "Empower Your Child",
        secondary: "Join Parent Network",
        primaryAction: () => onNavigate('/services'),
        secondaryAction: () => onNavigate('/contact')
      }
    },
    administrator: {
      title: "For Administrators",
      subtitle: "The Progressive Administrator Journey",
      icon: "Building",
      gradient: "from-amber-500 to-orange-600",
      description: "Transform your institution with comprehensive AI-powered educational solutions",
      journey: [
        {
          step: 1,
          title: "Investigate Solutions",
          description: "Explore comprehensive AI tools for institutional transformation",
          action: "View Solution Suite",
          icon: "Search"
        },
        {
          step: 2,
          title: "Review Global Presence",
          description: "See our international implementations and success metrics",
          action: "Explore Global Impact",
          icon: "Globe"
        },
        {
          step: 3,
          title: "Examine Team Credentials",
          description: "Meet our experts and understand our educational expertise",
          action: "Meet Our Team",
          icon: "Users"
        },
        {
          step: 4,
          title: "Download Implementation Guide",
          description: "Get detailed roadmap for institutional AI integration",
          action: "Get Implementation Plan",
          icon: "FileText"
        },
        {
          step: 5,
          title: "Initiate Pilot Program",
          description: "Start with a risk-free pilot to demonstrate value",
          action: "Launch Pilot",
          icon: "Rocket"
        }
      ],
      cta: {
        primary: "Transform Your Institution",
        secondary: "Schedule Demo",
        primaryAction: () => onNavigate('/contact'),
        secondaryAction: () => onNavigate('/services')
      }
    },
    student: {
      title: "For Students",
      subtitle: "The Career-Focused Student Journey",
      icon: "User",
      gradient: "from-emerald-500 to-teal-600",
      description: "Discover your potential and build skills for tomorrow\'s opportunities",
      journey: [
        {
          step: 1,
          title: "Discover Through Social Media",
          description: "Learn about AI-powered career guidance and skill development",
          action: "Follow Our Journey",
          icon: "Share2"
        },
        {
          step: 2,
          title: "Explore Career Recommendations",
          description: "Get personalized career suggestions based on your interests and aptitude",
          action: "Take Career Assessment",
          icon: "Compass"
        },
        {
          step: 3,
          title: "Engage with Interactive Tools",
          description: "Use AI-powered learning tools and skill development platforms",
          action: "Try Learning Tools",
          icon: "Gamepad2"
        },
        {
          step: 4,
          title: "Share with Peers",
          description: "Connect with friends and build a learning community",
          action: "Invite Friends",
          icon: "UserPlus"
        },
        {
          step: 5,
          title: "Advocate for School Adoption",
          description: "Help bring VishwAlpha\'s benefits to your entire school",
          action: "Request at School",
          icon: "Megaphone"
        }
      ],
      cta: {
        primary: "Start Your Journey",
        secondary: "Take Assessment",
        primaryAction: () => onNavigate('/services'),
        secondaryAction: () => onNavigate('/contact')
      }
    }
  };

  const currentPathway = pathways?.[activePathway];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Your Personalized <span className="text-gradient-primary">Learning Journey</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose your role to discover how VishwAlpha can transform your educational experience
          </p>
        </motion.div>

        {/* Pathway Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(pathways)?.map(([key, pathway]) => (
            <button
              key={key}
              onClick={() => setActivePathway(key)}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activePathway === key
                  ? `bg-gradient-to-r ${pathway?.gradient} text-white shadow-lg`
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              <Icon name={pathway?.icon} size={20} className="mr-2" />
              {pathway?.title}
            </button>
          ))}
        </div>

        {/* Pathway Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePathway}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800 rounded-3xl p-8 lg:p-12"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <div className={`w-20 h-20 bg-gradient-to-r ${currentPathway?.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <Icon name={currentPathway?.icon} size={36} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{currentPathway?.subtitle}</h3>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">{currentPathway?.description}</p>
            </div>

            {/* Journey Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {currentPathway?.journey?.map((step, index) => (
                <motion.div
                  key={step?.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-slate-700 rounded-xl p-6 hover:bg-slate-600 transition-colors duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${currentPathway?.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon name={step?.icon} size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-xs font-bold text-slate-400 bg-slate-600 px-2 py-1 rounded">
                          STEP {step?.step}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">{step?.title}</h4>
                      <p className="text-slate-300 text-sm mb-3">{step?.description}</p>
                      <button className="text-violet-400 hover:text-violet-300 text-sm font-medium flex items-center">
                        {step?.action}
                        <Icon name="ArrowRight" size={14} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  className={`bg-gradient-to-r ${currentPathway?.gradient} hover:opacity-90 text-white shadow-lg px-8`}
                  onClick={currentPathway?.cta?.primaryAction}
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  {currentPathway?.cta?.primary}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 px-8"
                  onClick={currentPathway?.cta?.secondaryAction}
                >
                  {currentPathway?.cta?.secondary}
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UserPathways;
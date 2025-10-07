import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesGrid = ({ onNavigate }) => {
  const services = [
    {
      id: 1,
      title: "AI-Powered Analytics",
      description: "Advanced learning analytics that provide deep insights into student performance, learning patterns, and personalized recommendations for optimal educational outcomes.",
      icon: "BarChart3",
      gradient: "from-violet-500 to-purple-600",
      features: ["Real-time Performance Tracking", "Predictive Learning Analytics", "Personalized Recommendations"],
      testimonial: "Our student performance improved by 40% within 6 months of implementation.",
      author: "Dr. Priya Sharma, Principal, Delhi Public School"
    },
    {
      id: 2,
      title: "Intelligent Chatbot",
      description: "24/7 AI-powered educational assistant that provides instant support to students, parents, and educators with contextual and curriculum-aligned responses.",
      icon: "MessageCircle",
      gradient: "from-pink-500 to-rose-600",
      features: ["24/7 Student Support", "Curriculum-Aligned Responses", "Multi-language Support"],
      testimonial: "The chatbot reduced our administrative queries by 60% while improving student satisfaction.",
      author: "Rajesh Kumar, IT Director, Kendriya Vidyalaya"
    },
    {
      id: 3,
      title: "Career Recommendation",
      description: "Sophisticated AI system that analyzes student aptitudes, interests, and market trends to provide personalized career guidance and skill development pathways.",
      icon: "Compass",
      gradient: "from-amber-500 to-orange-600",
      features: ["Aptitude Assessment", "Market Trend Analysis", "Skill Gap Identification"],
      testimonial: "95% of our students found relevant career paths through VishwAlpha\'s recommendations.",
      author: "Meera Patel, Career Counselor, Ryan International"
    },
    {
      id: 4,
      title: "Skill Development",
      description: "Comprehensive skill assessment and development platform that identifies learning gaps and creates personalized learning paths aligned with NEP 2020 objectives.",
      icon: "Target",
      gradient: "from-emerald-500 to-teal-600",
      features: ["Skill Gap Analysis", "Personalized Learning Paths", "Progress Tracking"],
      testimonial: "Our students\' 21st-century skills improved dramatically with targeted development programs.",
      author: "Anita Desai, Academic Director, DPS International"
    },
    {
      id: 5,
      title: "Student Counseling",
      description: "AI-enhanced counseling platform that provides emotional support, academic guidance, and mental health resources tailored to individual student needs.",
      icon: "Heart",
      gradient: "from-blue-500 to-indigo-600",
      features: ["Emotional Support", "Academic Guidance", "Mental Health Resources"],
      testimonial: "Student well-being scores increased by 35% with our AI counseling integration.",
      author: "Dr. Vikram Singh, School Psychologist, Modern School"
    },
    {
      id: 6,
      title: "Parent Engagement",
      description: "Intelligent parent portal that provides real-time updates, personalized insights, and collaborative tools to enhance parent-school communication and student support.",
      icon: "Users",
      gradient: "from-cyan-500 to-blue-600",
      features: ["Real-time Updates", "Progress Insights", "Communication Tools"],
      testimonial: "Parent engagement increased by 70% with transparent, real-time communication tools.",
      author: "Sunita Agarwal, Parent Coordinator, Bal Bharati"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-6">
            AI-Powered Solutions for Modern Education
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive suite of intelligent tools designed to transform teaching, learning, 
            and educational administration in alignment with NEP 2020 guidelines.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services?.map((service) => (
            <motion.div
              key={service?.id}
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative bg-slate-800 rounded-2xl p-8 h-full border border-slate-700 hover:border-violet-500/50 transition-all duration-500 overflow-hidden">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service?.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Glowing Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service?.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service?.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={service?.icon} size={28} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient-primary transition-colors duration-300">
                    {service?.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {service?.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service?.features?.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-slate-400">
                        <Icon name="Check" size={16} className="text-emerald-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Testimonial */}
                  <div className="bg-slate-700/50 rounded-lg p-4 mb-6">
                    <p className="text-sm text-slate-300 italic mb-2">"{service?.testimonial}"</p>
                    <p className="text-xs text-slate-400 font-medium">— {service?.author}</p>
                  </div>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-violet-400/30 text-violet-300 hover:text-white hover:border-violet-400/60 group-hover:bg-gradient-primary group-hover:border-transparent group-hover:text-white"
                    onClick={() => onNavigate('/services')}
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button
            variant="default"
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-white shadow-brand px-8 py-4"
            onClick={() => onNavigate('/services')}
            iconName="Sparkles"
            iconPosition="left"
          >
            Explore All Solutions
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
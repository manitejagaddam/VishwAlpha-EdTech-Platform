import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const VisionMissionSection = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const tabs = [
    {
      id: 'vision',
      label: 'Our Vision',
      icon: 'Eye',
      content: {
        title: 'Empowering Every Learner',
        description: `To create a world where every student discovers their unique potential through intelligent, personalized education that honors cultural wisdom while embracing global innovation.`,
        points: [
          'Democratize access to world-class AI-powered education',
          'Bridge the gap between traditional wisdom and modern technology',
          'Foster critical thinking and creativity in every learner',
          'Build inclusive educational ecosystems that celebrate diversity'
        ]
      }
    },
    {
      id: 'mission',
      label: 'Our Mission',
      icon: 'Target',
      content: {
        title: 'Transforming Education Today',
        description: `We develop and deploy cutting-edge AI solutions that enhance learning outcomes, support educators, and prepare students for the challenges of tomorrow while staying rooted in Indian educational values.`,
        points: [
          'Implement NEP 2020 through innovative AI-driven solutions',
          'Provide comprehensive support to educators and institutions',
          'Create personalized learning pathways for every student',
          'Establish global partnerships while maintaining local relevance'
        ]
      }
    },
    {
      id: 'values',
      label: 'Our Values',
      icon: 'Heart',
      content: {
        title: 'Principles That Guide Us',
        description: `Our core values reflect the perfect balance between innovation and tradition, ensuring that technology serves humanity and education remains fundamentally human.`,
        points: [
          'Excellence: Pursuing the highest standards in everything we do',
          'Integrity: Building trust through transparency and ethical practices',
          'Innovation: Embracing change while respecting educational traditions',
          'Inclusivity: Ensuring equal opportunities for all learners'
        ]
      }
    }
  ];

  const currentTab = tabs?.find(tab => tab?.id === activeTab);

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Our <span className="text-gradient-primary">Foundation</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Built on the pillars of wisdom, innovation, and unwavering commitment to educational excellence
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center mb-12"
        >
          <div className="flex bg-slate-700/50 rounded-xl p-2 backdrop-blur-sm border border-slate-600/30">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab?.id
                    ? 'bg-gradient-primary text-white shadow-glow'
                    : 'text-slate-300 hover:text-white hover:bg-slate-600/50'
                }`}
              >
                <Icon name={tab?.icon} size={18} className="mr-2" />
                <span className="font-medium">{tab?.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-slate-700/30 rounded-2xl p-8 lg:p-12 border border-slate-600/30 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                {currentTab?.content?.title}
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                {currentTab?.content?.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {currentTab?.content?.points?.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <Icon name="Check" size={14} className="text-white" />
                  </div>
                  <p className="text-slate-300 leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
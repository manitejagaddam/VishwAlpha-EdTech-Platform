import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CompanyTimeline = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const milestones = [
    {
      id: 1,
      year: '2022',
      title: 'Foundation & Vision',
      description: 'VishwAlpha was founded with the vision to revolutionize Indian education through AI',
      details: `Our journey began when a group of passionate educators and technologists came together with a shared vision: to transform Indian education by seamlessly blending ancient wisdom with cutting-edge AI technology.\n\nInspired by the launch of NEP 2020, we recognized the urgent need for intelligent solutions that could help educational institutions adapt to the new paradigm while maintaining their cultural roots.`,
      icon: 'Lightbulb',
      color: 'violet'
    },
    {
      id: 2,
      year: '2023',
      title: 'First AI Solutions',
      description: 'Launched our first suite of AI-powered educational analytics tools',
      details: `After months of research and development, we introduced our flagship AI analytics platform that could analyze student performance patterns and provide personalized learning recommendations.\n\nOur pilot program with 10 schools in Maharashtra showed remarkable results: 40% improvement in student engagement and 25% increase in learning outcomes.`,
      icon: 'Brain',
      color: 'pink'
    },
    {
      id: 3,
      year: '2024',
      title: 'NEP 2020 Integration',
      description: 'Became the first platform to fully integrate NEP 2020 guidelines with AI technology',
      details: `We achieved a major milestone by becoming the first EdTech platform to fully align our solutions with NEP 2020 guidelines, ensuring that schools could seamlessly transition to the new educational framework.\n\nOur comprehensive NEP implementation toolkit helped over 100 schools successfully adopt the new policy requirements.`,
      icon: 'BookOpen',
      color: 'amber'
    },
    {
      id: 4,
      year: '2025',
      title: 'National Recognition',
      description: 'Received recognition from Ministry of Education for innovation in EdTech',
      details: `Our innovative approach to AI-powered education caught the attention of the Ministry of Education, leading to official recognition and inclusion in the national EdTech framework.\n\nWe expanded our reach to serve over 500 educational institutions across 15 states, impacting more than 50,000 students directly.`,
      icon: 'Award',
      color: 'emerald'
    },
    {
      id: 5,
      year: '2025',
      title: 'International Expansion',
      description: 'Expanded operations to Southeast Asia and established global partnerships',
      details: `Building on our success in India, we expanded our operations to Southeast Asian markets, adapting our solutions to local educational contexts while maintaining our core AI capabilities.\n\nEstablished strategic partnerships with educational institutions in Singapore, Malaysia, and Thailand.`,
      icon: 'Globe',
      color: 'blue'
    },
    {
      id: 6,
      year: '2025',
      title: 'Future of Learning',
      description: 'Launching next-generation AI tutoring and career guidance systems',
      details: `As we enter 2025, we're launching our most advanced AI systems yet: personalized AI tutors that adapt to individual learning styles and comprehensive career guidance platforms that help students discover their true potential.\n\nOur goal is to reach 1 million students by the end of 2025 and establish VishwAlpha as the global leader in AI-powered education.`,
      icon: 'Rocket',color: 'violet'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      violet: 'bg-violet-500 border-violet-400 text-violet-100',
      pink: 'bg-pink-500 border-pink-400 text-pink-100',
      amber: 'bg-amber-500 border-amber-400 text-amber-100',
      emerald: 'bg-emerald-500 border-emerald-400 text-emerald-100',
      blue: 'bg-blue-500 border-blue-400 text-blue-100'
    };
    return colors?.[color] || colors?.violet;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
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
            Our <span className="text-gradient-primary">Journey</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From a bold vision to transforming education across nations—discover the milestones that shaped VishwAlpha
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-pink-500 to-amber-500 transform lg:-translate-x-0.5"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones?.map((milestone, index) => (
              <motion.div
                key={milestone?.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:flex-row`}
              >
                {/* Timeline Node */}
                <div className={`absolute left-8 lg:left-1/2 w-4 h-4 rounded-full border-4 ${getColorClasses(milestone?.color)} transform lg:-translate-x-2 z-10`}></div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ml-20 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/30 backdrop-blur-sm cursor-pointer"
                    onClick={() => setSelectedMilestone(selectedMilestone === milestone?.id ? null : milestone?.id)}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-lg ${getColorClasses(milestone?.color)} flex items-center justify-center mr-4`}>
                        <Icon name={milestone?.icon} size={24} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gradient-primary">{milestone?.year}</div>
                        <h3 className="text-xl font-display font-semibold text-white">{milestone?.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-4">{milestone?.description}</p>
                    
                    {selectedMilestone === milestone?.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-slate-600/30 pt-4"
                      >
                        <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                          {milestone?.details}
                        </p>
                      </motion.div>
                    )}
                    
                    <div className="flex items-center text-sm text-slate-400 mt-4">
                      <Icon name={selectedMilestone === milestone?.id ? "ChevronUp" : "ChevronDown"} size={16} className="mr-2" />
                      <span>{selectedMilestone === milestone?.id ? "Show less" : "Learn more"}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
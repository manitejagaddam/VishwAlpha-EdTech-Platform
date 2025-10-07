import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const InnovationLab = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const betaFeatures = [
    {
      id: 1,
      title: "AI-Powered Emotion Recognition",
      subtitle: "Understanding Student Engagement in Real-Time",
      description: `Revolutionary technology that analyzes student facial expressions and body language to gauge engagement levels during online and offline classes.\n\nThis beta feature helps teachers identify when students are confused, bored, or excited, enabling immediate intervention and personalized attention.\n\nEarly testing shows 85% accuracy in emotion detection and 40% improvement in student-teacher interaction quality.`,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      status: "Beta Testing",
      participants: 25,
      accuracy: "85%",
      improvement: "40%",
      category: "AI Analytics",
      icon: "Brain",
      color: "from-blue-500 to-purple-600",
      features: [
        "Real-time emotion analysis",
        "Engagement level tracking",
        "Automated intervention alerts",
        "Privacy-first design"
      ]
    },
    {
      id: 2,
      title: "Adaptive Learning Pathways",
      subtitle: "Personalized Education Routes for Every Student",
      description: `Advanced AI system that creates unique learning pathways for each student based on their learning style, pace, and interests.\n\nThe system continuously adapts based on performance data, ensuring optimal challenge levels and preventing both boredom and frustration.\n\nPilot programs show 60% faster concept mastery and 90% student satisfaction with personalized content.`,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      status: "Alpha Testing",
      participants: 15,
      mastery: "60% faster",
      satisfaction: "90%",
      category: "Personalization",
      icon: "Route",
      color: "from-green-500 to-teal-600",
      features: [
        "Dynamic content adjustment",
        "Learning style recognition",
        "Progress prediction",
        "Multi-modal content delivery"
      ]
    },
    {
      id: 3,
      title: "Virtual Reality Classroom",
      subtitle: "Immersive Learning Experiences",
      description: `Cutting-edge VR technology that transports students to historical events, scientific phenomena, and mathematical concepts.\n\nStudents can walk through ancient Rome, observe molecular structures in 3D, or explore the solar system, making abstract concepts tangible and memorable.\n\nEarly adopters report 75% better retention rates and unprecedented levels of student excitement about learning.`,
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=600&fit=crop",
      status: "Prototype",
      participants: 8,
      retention: "75% better",
      excitement: "95%",
      category: "Immersive Tech",
      icon: "Glasses",
      color: "from-purple-500 to-pink-600",
      features: [
        "360° immersive environments",
        "Interactive 3D objects",
        "Collaborative virtual spaces",
        "Multi-sensory experiences"
      ]
    },
    {
      id: 4,
      title: "Blockchain Academic Credentials",
      subtitle: "Secure, Verifiable Digital Certificates",
      description: `Blockchain-based system for issuing, storing, and verifying academic credentials that cannot be forged or lost.\n\nStudents own their complete academic record, which can be instantly verified by employers or institutions worldwide.\n\nThis revolutionary approach eliminates credential fraud and streamlines the verification process for all stakeholders.`,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      status: "Research Phase",
      participants: 5,
      security: "100%",
      verification: "Instant",
      category: "Blockchain",
      icon: "Shield",
      color: "from-orange-500 to-red-600",
      features: [
        "Tamper-proof certificates",
        "Global verification network",
        "Student-owned credentials",
        "Automated verification"
      ]
    }
  ];

  const researchInsights = [
    {
      id: 1,
      title: "The Impact of AI on Learning Outcomes",
      author: "Dr. Priya Sharma, Chief Research Officer",
      date: "September 2024",
      readTime: "8 min read",
      summary: "Comprehensive analysis of AI implementation across 200+ schools shows significant improvements in student engagement and learning outcomes.",
      keyFindings: [
        "45% improvement in student engagement",
        "38% faster concept mastery",
        "92% teacher satisfaction rate",
        "67% reduction in learning gaps"
      ],
      category: "Research Study",
      icon: "BarChart3"
    },
    {
      id: 2,
      title: "Future of Education: Trends and Predictions",
      author: "VishwAlpha Research Team",
      date: "August 2024",
      readTime: "12 min read",
      summary: "Exploring emerging trends in educational technology and their potential impact on the next decade of learning.",
      keyFindings: [
        "VR/AR adoption will grow 300% by 2030",
        "Personalized learning becomes standard",
        "AI tutors complement human teachers",
        "Blockchain credentials gain mainstream adoption"
      ],
      category: "Trend Analysis",
      icon: "TrendingUp"
    },
    {
      id: 3,
      title: "NEP 2020 Implementation Success Stories",
      author: "Policy Implementation Team",
      date: "July 2024",
      readTime: "10 min read",
      summary: "Case studies from schools successfully implementing NEP 2020 guidelines with AI-powered support systems.",
      keyFindings: [
        "80% of schools report smoother transitions",
        "Holistic assessment adoption up 65%",
        "Multilingual education support improved",
        "Skill-based learning outcomes enhanced"
      ],
      category: "Policy Study",
      icon: "FileText"
    }
  ];

  const futureTechnologies = [
    {
      id: 1,
      title: "Quantum Computing in Education",
      description: "Exploring quantum algorithms for complex educational simulations and personalized learning optimization.",
      timeline: "2026-2028",
      impact: "Revolutionary",
      icon: "Atom"
    },
    {
      id: 2,
      title: "Neural Interface Learning",
      description: "Direct brain-computer interfaces for accelerated knowledge transfer and skill acquisition.",
      timeline: "2028-2030",
      impact: "Transformative",
      icon: "Brain"
    },
    {
      id: 3,
      title: "Holographic Teachers",
      description: "3D holographic projections of expert educators available in any classroom worldwide.",
      timeline: "2025-2027",
      impact: "Significant",
      icon: "Users"
    },
    {
      id: 4,
      title: "AI-Generated Curricula",
      description: "Fully automated curriculum generation based on real-time global knowledge and skill demands.",
      timeline: "2024-2026",
      impact: "High",
      icon: "BookOpen"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gradient-primary mb-6">
            Innovation Lab
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Pioneering the future of education through cutting-edge research, beta features, and revolutionary technologies
          </p>
        </motion.div>

        {/* Beta Features */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-text-primary mb-8 flex items-center"
          >
            <Icon name="Flask" size={32} className="mr-3 text-primary" />
            Beta Features
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {betaFeatures?.map((feature, index) => (
              <motion.div
                key={feature?.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setActiveFeature(feature)}
              >
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-brand transition-all duration-300 group-hover:scale-105">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={feature?.image}
                      alt={feature?.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${feature?.color} opacity-60`} />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                        {feature?.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${feature?.color} rounded-lg flex items-center justify-center`}>
                        <Icon name={feature?.icon} size={24} className="text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {feature?.category}
                      </span>
                      <span className="text-sm text-text-muted">
                        {feature?.participants} testers
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-text-primary mb-2 group-hover:text-gradient-primary transition-colors duration-300">
                      {feature?.title}
                    </h4>
                    
                    <p className="text-text-secondary text-sm mb-4">
                      {feature?.subtitle}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {Object.entries(feature)?.filter(([key]) => 
                        ['accuracy', 'mastery', 'retention', 'security']?.includes(key)
                      )?.map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-primary">
                            {value}
                          </div>
                          <div className="text-xs text-text-muted capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">
                        Learn More
                      </span>
                      <Icon 
                        name="ArrowRight" 
                        size={16} 
                        className="text-primary group-hover:translate-x-1 transition-transform duration-300" 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Research Insights */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-text-primary mb-8 flex items-center"
          >
            <Icon name="Search" size={32} className="mr-3 text-primary" />
            Research Insights
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchInsights?.map((insight, index) => (
              <motion.div
                key={insight?.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={insight?.icon} size={24} className="text-primary" />
                  </div>
                  <span className="px-2 py-1 bg-muted/50 text-text-secondary text-xs rounded-full">
                    {insight?.category}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-text-primary mb-2">
                  {insight?.title}
                </h4>
                
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {insight?.summary}
                </p>
                
                <div className="space-y-2 mb-4">
                  <h5 className="text-sm font-semibold text-text-primary">Key Findings:</h5>
                  {insight?.keyFindings?.slice(0, 2)?.map((finding, idx) => (
                    <div key={idx} className="flex items-center text-sm text-text-secondary">
                      <Icon name="CheckCircle" size={14} className="text-green-500 mr-2" />
                      {finding}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-text-muted">
                  <span>{insight?.author}</span>
                  <span>{insight?.readTime}</span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" fullWidth>
                    Read Full Report
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Technologies */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-text-primary mb-8 flex items-center"
          >
            <Icon name="Rocket" size={32} className="mr-3 text-primary" />
            Future Technologies
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureTechnologies?.map((tech, index) => (
              <motion.div
                key={tech?.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Icon name={tech?.icon} size={24} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-text-primary">
                        {tech?.title}
                      </h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        tech?.impact === 'Revolutionary' ? 'bg-red-500/10 text-red-400' :
                        tech?.impact === 'Transformative' ? 'bg-purple-500/10 text-purple-400' :
                        tech?.impact === 'Significant'? 'bg-blue-500/10 text-blue-400' : 'bg-green-500/10 text-green-400'
                      }`}>
                        {tech?.impact}
                      </span>
                    </div>
                    
                    <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                      {tech?.description}
                    </p>
                    
                    <div className="flex items-center text-sm text-text-muted">
                      <Icon name="Calendar" size={14} className="mr-2" />
                      <span>Expected: {tech?.timeline}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feature Detail Modal */}
        {activeFeature && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveFeature(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e?.stopPropagation()}
            >
              <div className="relative h-64 lg:h-80">
                <Image
                  src={activeFeature?.image}
                  alt={activeFeature?.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${activeFeature?.color} opacity-60`} />
                <button
                  onClick={() => setActiveFeature(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                >
                  <Icon name="X" size={20} />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                      {activeFeature?.status}
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                      {activeFeature?.category}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-2">
                    {activeFeature?.title}
                  </h2>
                  <p className="text-lg text-gray-200">
                    {activeFeature?.subtitle}
                  </p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="prose prose-invert max-w-none">
                      {activeFeature?.description?.split('\n\n')?.map((paragraph, idx) => (
                        <p key={idx} className="text-text-secondary leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="text-lg font-semibold text-text-primary mb-4">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {activeFeature?.features?.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-text-secondary">
                            <Icon name="CheckCircle" size={16} className="text-green-500 mr-3" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-6 bg-muted/20 rounded-xl border border-border">
                      <h4 className="text-lg font-semibold text-text-primary mb-4">
                        Testing Metrics
                      </h4>
                      <div className="space-y-4">
                        {Object.entries(activeFeature)?.filter(([key]) => 
                          ['accuracy', 'mastery', 'retention', 'security', 'improvement', 'satisfaction', 'excitement', 'verification']?.includes(key)
                        )?.map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <span className="text-text-secondary capitalize">{key}</span>
                            <span className="text-primary font-semibold">{value}</span>
                          </div>
                        ))}
                        <div className="flex items-center justify-between">
                          <span className="text-text-secondary">Participants</span>
                          <span className="text-primary font-semibold">{activeFeature?.participants}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button variant="default" fullWidth>
                        Join Beta Program
                      </Button>
                      <Button variant="outline" fullWidth>
                        Request Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default InnovationLab;
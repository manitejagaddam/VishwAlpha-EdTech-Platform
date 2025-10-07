import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import InteractiveDemo from './components/InteractiveDemo';
import ServiceComparison from './components/ServiceComparison';
import ROICalculator from './components/ROICalculator';
import DemoScheduler from './components/DemoScheduler';

const Services = () => {
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'ai-analytics',
      title: 'AI-Powered Learning Analytics',
      icon: 'BarChart3',
      description: `Transform educational data into actionable insights with our advanced AI analytics platform. Track student progress, identify learning gaps, and optimize teaching strategies with real-time dashboards and predictive analytics.`,
      features: [
        'Real-time performance tracking',
        'Predictive learning analytics',
        'Customizable dashboards',
        'Automated progress reports',
        'Learning pattern analysis'
      ],
      pricing: {
        amount: '7,999',
        period: 'month',
        note: 'For up to 500 students'
      },
      metrics: [
        { value: '30%', label: 'Performance Boost' },
        { value: '50%', label: 'Time Saved' }
      ]
    },
    {
      id: 'personalized-learning',
      title: 'Personalized Learning Paths',
      icon: 'Route',
      description: `Create individualized learning journeys for each student using AI-driven content recommendations. Adapt to different learning styles, pace, and preferences to maximize educational outcomes.`,
      features: [
        'Adaptive learning algorithms',
        'Multi-modal content delivery',
        'Learning style assessment',
        'Progress-based adjustments',
        'Skill gap identification'
      ],
      pricing: {
        amount: '9,999',
        period: 'month',
        note: 'For up to 500 students'
      },
      metrics: [
        { value: '40%', label: 'Engagement Up' },
        { value: '25%', label: 'Better Retention' }
      ]
    },
    {
      id: 'career-guidance',
      title: 'AI Career Recommendation System',
      icon: 'Target',
      description: `Guide students toward fulfilling careers with AI-powered career recommendations based on skills, interests, aptitude, and market trends. Align education with future opportunities.`,
      features: [
        'Skill-based career matching',
        'Industry trend analysis',
        'Aptitude assessments',
        'Career pathway mapping',
        'Market demand insights'
      ],
      pricing: {
        amount: '5,999',
        period: 'month',
        note: 'For up to 500 students'
      },
      metrics: [
        { value: '85%', label: 'Career Clarity' },
        { value: '60%', label: 'Goal Achievement' }
      ]
    },
    {
      id: 'skill-development',
      title: 'Skill Development & Assessment',
      icon: 'Award',
      description: `Comprehensive skill assessment and development platform aligned with NEP 2020 guidelines. Track 21st-century skills and provide targeted improvement recommendations.`,
      features: [
        'NEP 2020 skill framework',
        'Competency-based assessments',
        'Skill development roadmaps',
        'Industry-relevant skills',
        'Certification tracking'
      ],
      pricing: {
        amount: '6,999',
        period: 'month',
        note: 'For up to 500 students'
      },
      metrics: [
        { value: '70%', label: 'Skill Improvement' },
        { value: '90%', label: 'NEP Compliance' }
      ]
    },
    {
      id: 'parent-portal',
      title: 'Parent Communication Portal',
      icon: 'Users',
      description: `Strengthen parent-school collaboration with AI-enhanced communication tools. Provide parents with insights into their child's progress, achievements, and areas for improvement.`,
      features: [
        'Real-time progress updates','Automated notifications','Parent-teacher scheduling','Achievement celebrations','Home learning suggestions'
      ],
      pricing: {
        amount: '3,999',period: 'month',note: 'For up to 500 students'
      },
      metrics: [
        { value: '80%', label: 'Parent Satisfaction' },
        { value: '45%', label: 'Engagement Up' }
      ]
    },
    {
      id: 'nep-compliance',title: 'NEP 2020 Compliance Tools',icon: 'Shield',description: `Ensure seamless alignment with India's New Education Policy 2020. Automated compliance tracking, reporting, and implementation guidance for educational institutions.`,
      features: [
        'Policy compliance tracking',
        'Automated reporting',
        'Implementation guidelines',
        'Progress monitoring',
        'Regulatory updates'
      ],
      pricing: {
        amount: '8,999',
        period: 'month',
        note: 'For up to 500 students'
      },
      metrics: [
        { value: '100%', label: 'NEP Compliance' },
        { value: '35%', label: 'Admin Efficiency' }
      ]
    }
  ];

  const handleDemoRequest = (service) => {
    setSelectedDemo(service);
    setIsDemoOpen(true);
  };

  const handleScheduleDemo = (service = null) => {
    setSelectedService(service);
    setIsSchedulerOpen(true);
  };

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Principal, Delhi Public School",
      content: `VishwAlpha's AI analytics have revolutionized how we understand our students' learning patterns. The insights help us make data-driven decisions that directly impact student success.`,
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "IT Director, Ryan International",
      content: `The implementation was seamless, and the ROI was evident within the first quarter. Our teachers now spend 40% less time on administrative tasks and more time teaching.`,
      rating: 5
    },
    {
      name: "Prof. Anita Desai",
      role: "Academic Head, Birla Institute",
      content: `The career guidance system has helped our students make informed decisions about their future. The accuracy of recommendations is impressive and truly beneficial.`,
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
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

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gradient-primary mb-6">
              AI-Powered Education
              <span className="block text-text-primary">Solutions</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Transform your educational institution with cutting-edge AI technology. 
              Bridge the gap between NEP 2020 policy and practical implementation with 
              our comprehensive suite of intelligent learning solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-primary text-white shadow-glow hover:shadow-glow-lg"
                onClick={() => handleScheduleDemo()}
              >
                Schedule Live Demo
                <Icon name="Play" size={20} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/20 text-text-secondary hover:text-text-primary hover:border-primary/40"
              >
                Explore Solutions
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          >
            {[
              { value: '10+', label: 'Schools Transformed' },
              { value: '100+', label: 'Students Impacted' },
              { value: '95%', label: 'Satisfaction Rate' },
              { value: '40%', label: 'Efficiency Gain' }
            ]?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-2">
                  {stat?.value}
                </div>
                <div className="text-text-secondary">{stat?.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              Discover our complete suite of AI-powered educational tools designed to enhance 
              learning outcomes, streamline operations, and prepare students for the future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services?.map((service, index) => (
              <ServiceCard
                key={service?.id}
                service={service}
                index={index}
                onDemoRequest={handleDemoRequest}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Service Comparison */}
      <ServiceComparison />
      {/* ROI Calculator */}
      <ROICalculator />
      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-4">
              Trusted by Educators
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              See what educational leaders are saying about VishwAlpha's impact on their institutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                  ))}
                </div>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  "{testimonial?.content}"
                </p>
                <div>
                  <div className="font-semibold text-text-primary">{testimonial?.name}</div>
                  <div className="text-sm text-text-muted">{testimonial?.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Join hundreds of educational institutions already using VishwAlpha to enhance 
              learning outcomes and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-primary text-white shadow-glow hover:shadow-glow-lg"
                onClick={() => handleScheduleDemo()}
              >
                Start Free Trial
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/20 text-text-secondary hover:text-text-primary hover:border-primary/40"
              >
                Contact Sales Team
                <Icon name="Phone" size={20} className="ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-gradient-primary">VishwAlpha</div>
                <div className="text-xs text-text-muted">Intelligent Education</div>
              </div>
            </div>
            <div className="text-text-muted text-sm">
              © {new Date()?.getFullYear()} VishwAlpha. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      {/* Modals */}
      <InteractiveDemo
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        service={selectedDemo}
      />
      <DemoScheduler
        isOpen={isSchedulerOpen}
        onClose={() => setIsSchedulerOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
};

export default Services;
import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  const actionCards = [
    {
      id: 1,
      icon: 'Rocket',
      title: 'Experience Our Solutions',
      description: 'See how VishwAlpha can transform your educational institution',
      action: 'Explore Services',
      path: '/services',
      color: 'violet'
    },
    {
      id: 2,
      icon: 'Users',
      title: 'Join Our Community',
      description: 'Connect with educators and innovators shaping the future',
      action: 'View Activities',
      path: '/activities',
      color: 'pink'
    },
    {
      id: 3,
      icon: 'MessageCircle',
      title: 'Start a Conversation',
      description: 'Let\'s discuss how we can help achieve your educational goals',
      action: 'Contact Us',
      path: '/contact',
      color: 'amber'
    }
  ];

  const stats = [
    { number: '10+', label: 'Schools Transformed', icon: 'School' },
    { number: '100+', label: 'Students Empowered', icon: 'GraduationCap' },
    { number: '10+', label: 'Teachers Trained', icon: 'Users' },
    { number: '2+', label: 'States Covered', icon: 'MapPin' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      violet: 'from-violet-500 to-purple-600',
      pink: 'from-pink-500 to-rose-600',
      amber: 'from-amber-500 to-orange-600'
    };
    return colors?.[color] || colors?.violet;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-violet-900/20 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
            Ready to Transform
            <br />
            <span className="text-gradient-primary">Your Educational Journey?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Join thousands of educators, students, and institutions who are already experiencing 
            the power of AI-driven education with VishwAlpha.
          </p>
        </motion.div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {actionCards?.map((card, index) => (
            <motion.div
              key={card?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => handleNavigation(card?.path)}
            >
              <div className="bg-slate-700/30 rounded-2xl p-8 border border-slate-600/30 backdrop-blur-sm hover:border-violet-400/50 transition-all duration-300 group-hover:transform group-hover:scale-105 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(card?.color)} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300`}>
                  <Icon name={card?.icon} size={28} className="text-white" />
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  {card?.title}
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {card?.description}
                </p>
                
                <div className="flex items-center text-violet-300 group-hover:text-violet-200 transition-colors">
                  <span className="font-medium mr-2">{card?.action}</span>
                  <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-slate-700/30 rounded-3xl p-8 lg:p-12 border border-slate-600/30 backdrop-blur-sm mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4">
              Our Impact in Numbers
            </h3>
            <p className="text-slate-300">
              Real results from real partnerships across India and beyond
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats?.map((stat, index) => (
              <motion.div
                key={stat?.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat?.icon} size={24} className="text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-2">
                  {stat?.number}
                </div>
                <div className="text-slate-300 font-medium">
                  {stat?.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              size="lg"
              onClick={() => handleNavigation('/services')}
              className="bg-gradient-primary hover:opacity-90 text-white shadow-glow hover:shadow-glow-lg px-8 py-4"
              iconName="Rocket"
              iconPosition="left"
            >
              Start Your Transformation
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleNavigation('/contact')}
              className="border-violet-400/30 text-violet-300 hover:text-white hover:border-violet-400/50 px-8 py-4"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Schedule a Demo
            </Button>
          </div>
          
          <p className="text-sm text-slate-400 mt-6">
            Join the educational revolution. No commitment required to get started.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
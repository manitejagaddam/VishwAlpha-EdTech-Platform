import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TeamPhilosophy = () => {
  const philosophyPrinciples = [
    {
      id: 1,
      icon: 'Heart',
      title: 'Human-Centered AI',
      description: 'We believe technology should amplify human potential, not replace human connection. Every AI solution we create is designed to enhance the teacher-student relationship.',
      color: 'pink'
    },
    {
      id: 2,
      icon: 'Lightbulb',
      title: 'Innovation with Purpose',
      description: 'We innovate not for the sake of technology, but to solve real educational challenges. Every feature we build addresses a genuine need in the learning ecosystem.',
      color: 'amber'
    },
    {
      id: 3,
      icon: 'Users',
      title: 'Inclusive Excellence',
      description: 'We are committed to making quality education accessible to all, regardless of background, location, or economic status. Excellence should not be a privilege.',
      color: 'emerald'
    },
    {
      id: 4,
      icon: 'Globe',
      title: 'Cultural Wisdom',
      description: 'We honor the rich educational traditions of India while embracing global best practices. Our solutions bridge ancient wisdom with modern innovation.',
      color: 'blue'
    },
    {
      id: 5,
      icon: 'Shield',
      title: 'Ethical Responsibility',
      description: 'We handle student data with the highest level of security and privacy. Trust is the foundation of everything we do, and we never compromise on it.',
      color: 'violet'
    },
    {
      id: 6,
      icon: 'Zap',
      title: 'Continuous Learning',
      description: 'Just as we help students learn, we are committed to continuous learning and improvement. We listen, adapt, and evolve with the needs of our community.',
      color: 'orange'
    }
  ];

  const coreValues = [
    {
      title: 'Transparency',
      description: 'Open communication and clear processes in everything we do',
      icon: 'Eye'
    },
    {
      title: 'Collaboration',
      description: 'Working together with educators, students, and parents as partners',
      icon: 'Handshake'
    },
    {
      title: 'Excellence',
      description: 'Pursuing the highest standards in technology and education',
      icon: 'Award'
    },
    {
      title: 'Empathy',
      description: 'Understanding and addressing the real needs of our users',
      icon: 'Heart'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      pink: 'bg-pink-500/20 border-pink-400/30 text-pink-300',
      amber: 'bg-amber-500/20 border-amber-400/30 text-amber-300',
      emerald: 'bg-emerald-500/20 border-emerald-400/30 text-emerald-300',
      blue: 'bg-blue-500/20 border-blue-400/30 text-blue-300',
      violet: 'bg-violet-500/20 border-violet-400/30 text-violet-300',
      orange: 'bg-orange-500/20 border-orange-400/30 text-orange-300'
    };
    return colors?.[color] || colors?.violet;
  };

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
            Our <span className="text-gradient-primary">Philosophy</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            The principles and values that guide every decision we make and every solution we create
          </p>
        </motion.div>

        {/* Philosophy Principles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {philosophyPrinciples?.map((principle, index) => (
            <motion.div
              key={principle?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/30 backdrop-blur-sm h-full hover:border-violet-400/30 transition-all duration-300">
                <div className={`w-16 h-16 rounded-xl ${getColorClasses(principle?.color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={principle?.icon} size={28} />
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  {principle?.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed">
                  {principle?.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-3xl p-8 lg:p-12 border border-slate-600/30 backdrop-blur-sm"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              These values are not just words on a wall—they are the foundation of our culture and the lens through which we make every decision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues?.map((value, index) => (
              <motion.div
                key={value?.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-lg transition-all duration-300">
                  <Icon name={value?.icon} size={32} className="text-white" />
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-2">
                  {value?.title}
                </h4>
                
                <p className="text-sm text-slate-400 leading-relaxed">
                  {value?.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Culture Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-700/30 rounded-2xl p-8 lg:p-12 border border-slate-600/30 backdrop-blur-sm">
            <Icon name="Quote" size={48} className="text-violet-400 mx-auto mb-6" />
            
            <blockquote className="text-2xl lg:text-3xl font-display text-white leading-relaxed mb-6">
              "We don't just build AI for education—we craft intelligent solutions that honor the sacred relationship between teacher and student, while opening new pathways to knowledge and growth."
            </blockquote>
            
            <div className="text-slate-400">
              <p className="font-medium">The VishwAlpha Team</p>
              <p className="text-sm">Committed to transforming education with wisdom and innovation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPhilosophy;
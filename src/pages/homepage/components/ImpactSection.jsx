import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ImpactSection = () => {
  const stats = [
    {
      number: "100+",
      label: "Students Empowered",
      description: "Across India and internationally",
      icon: "Users",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      number: "10+",
      label: "Educational Institutions",
      description: "Trust VishwAlpha for AI solutions",
      icon: "Building",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      number: "95%",
      label: "Student Satisfaction",
      description: "Report improved learning outcomes",
      icon: "Heart",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      number: "40%",
      label: "Performance Improvement",
      description: "Average increase in academic results",
      icon: "TrendingUp",
      gradient: "from-emerald-500 to-teal-600"
    }
  ];

  const achievements = [
    {
      title: "CBSE Recognition",
      description: "Official recognition for innovative AI integration in education",
      icon: "Award",
      year: "2025"
    },
    // {
    //   title: "ISO 27001 Certified",
    //   description: "International standard for information security management",
    //   icon: "Shield",
    //   year: "2023"
    // },
    {
      title: "EdTech Innovation Award",
      description: "Recognized for transformative impact on Indian education",
      icon: "Trophy",
      year: "2025"
    },
    // {
    //   title: "Global Education Summit",
    //   description: "Keynote speaker on AI in education at international forums",
    //   icon: "Globe",
    //   year: "2024"
    // }
  ];

  const testimonials = [
    {
      quote: "VishwAlpha has revolutionized how we approach personalized learning. Our students are more engaged and achieving better outcomes than ever before.",
      author: "Dr. Rajesh Gupta",
      position: "Principal, Modern International School",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The AI-powered analytics have given us unprecedented insights into student learning patterns. It\'s like having a crystal ball for education.",
      author: "Priya Sharma",
      position: "Academic Director, Delhi Public School",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "As a parent, I love how VishwAlpha keeps me informed about my child's progress and provides personalized recommendations for skill development.",
      author: "Amit Patel",
      position: "Parent & Technology Executive",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Transforming Education <span className="text-gradient-primary">Across India</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real impact, measurable results, and trusted partnerships that are shaping the future of education
          </p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats?.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${stat?.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={stat?.icon} size={32} className="text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-gradient-primary transition-colors duration-300">
                {stat?.number}
              </div>
              <div className="text-lg font-semibold text-slate-300 mb-2">{stat?.label}</div>
              <div className="text-sm text-slate-400">{stat?.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Recognition & Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements?.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors duration-300 border border-slate-700 hover:border-violet-500/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon name={achievement?.icon} size={24} className="text-violet-400" />
                  <span className="text-xs font-bold text-slate-400 bg-slate-700 px-2 py-1 rounded">
                    {achievement?.year}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{achievement?.title}</h4>
                <p className="text-sm text-slate-300">{achievement?.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">What Our Community Says</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-violet-500/30 transition-colors duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial?.avatar}
                    alt={testimonial?.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial?.author}</div>
                    <div className="text-sm text-slate-400">{testimonial?.position}</div>
                  </div>
                </div>
                <blockquote className="text-slate-300 italic leading-relaxed">
                  "{testimonial?.quote}"
                </blockquote>
                <div className="flex text-amber-400 mt-4">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
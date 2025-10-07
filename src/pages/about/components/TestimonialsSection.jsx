import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Dr. Meera Gupta',
      role: 'Principal, Delhi Public School',
      location: 'New Delhi',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      type: 'written',
      rating: 5,
      content: `VishwAlpha has completely transformed how we approach personalized learning. Their AI analytics helped us identify learning gaps we never knew existed, and the results speak for themselves—our students' performance improved by 35% in just one academic year.\n\nWhat impressed me most is how seamlessly their solutions integrated with our existing curriculum while respecting our school's values and traditions.`,
      metrics: {
        improvement: '35%',
        students: '1,200',
        satisfaction: '98%'
      },
      category: 'School Leadership'
    },
    {
      id: 2,
      name: 'Rajesh Sharma',
      role: 'Parent & IT Professional',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      type: 'video',
      rating: 5,
      content: `As a parent, I was initially skeptical about AI in education. But VishwAlpha's approach is different—it enhances the teacher-student relationship rather than replacing it. My daughter's confidence in mathematics has soared, and she actually looks forward to learning now.\n\nThe personalized career guidance feature helped her discover her passion for environmental science, something we might have missed otherwise.`,
      metrics: {
        improvement: '40%',
        engagement: '85%',
        confidence: '90%'
      },
      category: 'Parent Experience'
    },
    {
      id: 3,
      name: 'Prof. Anjali Reddy',
      role: 'Mathematics Teacher',
      location: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
      type: 'written',
      rating: 5,
      content: `After 15 years of teaching, VishwAlpha has given me superpowers! The AI insights help me understand each student's learning style, and the automated assessment tools save me hours of grading time that I can now spend on actual teaching.\n\nMy students are more engaged, and I feel more effective as an educator. It's like having a teaching assistant that never sleeps.`,
      metrics: {
        timeSaved: '60%',
        engagement: '75%',
        satisfaction: '95%'
      },
      category: 'Educator Impact'
    },
    {
      id: 4,
      name: 'Arjun Patel',
      role: 'Class 12 Student',
      location: 'Ahmedabad',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=face',
      type: 'video',
      rating: 5,
      content: `VishwAlpha's career recommendation system opened my eyes to possibilities I never considered. The AI chatbot helped me understand complex physics concepts in ways that clicked for me personally.\n\nNow I'm confident about pursuing aerospace engineering, and I have a clear roadmap for my future. It's like having a personal mentor available 24/7.`,
      metrics: {
        clarity: '90%',confidence: '85%',preparation: '95%'
      },
      category: 'Student Success'
    },
    {
      id: 5,
      name: 'Dr. Vikram Singh',role: 'Education Director, State Government',location: 'Jaipur, Rajasthan',image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',type: 'written',
      rating: 5,
      content: `Implementing NEP 2020 across our state seemed daunting until we partnered with VishwAlpha. Their comprehensive platform made the transition smooth for over 500 schools in our district.\n\nThe data-driven insights have helped us make informed policy decisions, and the teacher training modules ensured that our educators were ready for the change. Truly a game-changer for public education.`,
      metrics: {
        schools: '500+',teachers: '5,000+',implementation: '95%'
      },
      category: 'Government Partnership'
    }
  ];

  const currentTestimonial = testimonials?.[activeTestimonial];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlaying) {
        setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials?.length]);

  const handleTestimonialChange = (index) => {
    setActiveTestimonial(index);
    setIsPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-violet-900/10 to-slate-900">
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
            Voices of <span className="text-gradient-primary">Transformation</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real stories from educators, parents, and students whose lives have been transformed by VishwAlpha
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Testimonial Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {testimonials?.map((testimonial, index) => (
                <motion.div
                  key={testimonial?.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeTestimonial === index
                      ? 'bg-gradient-primary shadow-glow'
                      : 'bg-slate-700/50 hover:bg-slate-700/70 border border-slate-600/30'
                  }`}
                  onClick={() => handleTestimonialChange(index)}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-white/20">
                      <Image
                        src={testimonial?.image}
                        alt={testimonial?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-sm">{testimonial?.name}</h4>
                      <p className="text-xs text-slate-300">{testimonial?.role}</p>
                    </div>
                    {testimonial?.type === 'video' && (
                      <Icon name="Play" size={16} className="text-white/70" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-white">
                      {testimonial?.category}
                    </span>
                    <div className="flex">
                      {[...Array(testimonial?.rating)]?.map((_, i) => (
                        <Icon key={i} name="Star" size={12} className="text-amber-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Main Testimonial Display */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-700/30 rounded-2xl p-8 border border-slate-600/30 backdrop-blur-sm h-full"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-xl overflow-hidden mr-4 border-2 border-violet-400/30">
                    <Image
                      src={currentTestimonial?.image}
                      alt={currentTestimonial?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">
                      {currentTestimonial?.name}
                    </h3>
                    <p className="text-violet-300">{currentTestimonial?.role}</p>
                    <p className="text-sm text-slate-400 flex items-center mt-1">
                      <Icon name="MapPin" size={14} className="mr-1" />
                      {currentTestimonial?.location}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col items-end">
                  <div className="flex mb-2">
                    {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-amber-400 fill-current" />
                    ))}
                  </div>
                  {currentTestimonial?.type === 'video' && (
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="flex items-center px-3 py-1 bg-violet-500/20 rounded-full text-violet-300 hover:bg-violet-500/30 transition-colors"
                    >
                      <Icon name={isPlaying ? "Pause" : "Play"} size={14} className="mr-1" />
                      <span className="text-sm">{isPlaying ? "Pause" : "Play"} Video</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="mb-6">
                <div className="flex items-start mb-4">
                  <Icon name="Quote" size={24} className="text-violet-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-line">
                    {currentTestimonial?.content}
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-600/30">
                {Object.entries(currentTestimonial?.metrics)?.map(([key, value], index) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-gradient-primary mb-1">
                      {value}
                    </div>
                    <div className="text-sm text-slate-400 capitalize">
                      {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTestimonialChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeTestimonial === index
                  ? 'bg-gradient-primary scale-125' :'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
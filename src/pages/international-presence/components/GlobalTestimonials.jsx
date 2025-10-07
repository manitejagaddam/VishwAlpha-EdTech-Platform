import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const GlobalTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Principal, Delhi Public School",
      location: "New Delhi, India",
      flag: "🇮🇳",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      quote: `VishwAlpha's AI solutions have revolutionized our approach to personalized learning. The seamless integration with NEP 2020 guidelines and support for regional languages has made quality education accessible to all our students, regardless of their background.`,
      metrics: {
        students: "5,200+",
        improvement: "78%",
        satisfaction: "96%"
      },
      category: "Educational Leadership"
    },
    {
      id: 2,
      name: "Prof. James Mitchell",
      role: "Director of Digital Learning, Cambridge International",
      location: "Cambridge, United Kingdom",
      flag: "🇬🇧",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      quote: `The cultural sensitivity and academic rigor of VishwAlpha's platform impressed us immediately. Their ability to maintain British educational standards while incorporating innovative AI features has enhanced our global curriculum delivery significantly.`,
      metrics: {
        students: "125K+",
        improvement: "65%",
        satisfaction: "94%"
      },
      category: "International Curriculum"
    },
    {
      id: 3,
      name: "Dr. Fatima Al-Zahra",
      role: "Education Technology Advisor, UAE Ministry of Education",
      location: "Dubai, United Arab Emirates",
      flag: "🇦🇪",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      quote: `VishwAlpha's multilingual AI capabilities and respect for Islamic values have made them our preferred partner for educational transformation. Their Arabic NLP technology is remarkably sophisticated and culturally appropriate.`,
      metrics: {
        students: "85K+",
        improvement: "72%",
        satisfaction: "98%"
      },
      category: "Government Partnership"
    },
    {
      id: 4,
      name: "Dr. Li Wei",
      role: "Senior Education Specialist, Singapore Ministry of Education",
      location: "Singapore",
      flag: "🇸🇬",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      rating: 5,
      quote: `The bilingual AI capabilities and smart city integration features align perfectly with Singapore's Smart Nation initiative. VishwAlpha has helped us create a truly connected and intelligent education ecosystem.`,
      metrics: {
        students: "45K+",
        improvement: "83%",
        satisfaction: "97%"
      },
      category: "Smart Education"
    },
    {
      id: 5,
      name: "Sarah Johnson",
      role: "Parent & Education Advocate",
      location: "Melbourne, Australia",
      flag: "🇦🇺",
      avatar: "https://randomuser.me/api/portraits/women/42.jpg",
      rating: 5,
      quote: `As a parent, I've seen firsthand how VishwAlpha's AI tutoring has helped my daughter excel in STEM subjects. The personalized approach and cultural sensitivity have made learning both effective and enjoyable for her.`,
      metrics: {
        students: "Personal",
        improvement: "89%",
        satisfaction: "100%"
      },
      category: "Parent Perspective"
    },
    {
      id: 6,
      name: "Prof. Maria Rodriguez",
      role: "Research Director, Universidad Complutense Madrid",
      location: "Madrid, Spain",
      flag: "🇪🇸",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg",
      rating: 5,
      quote: `Our research collaboration with VishwAlpha has produced groundbreaking insights into AI ethics in education. Their commitment to responsible AI development and cultural adaptation sets them apart in the EdTech industry.`,
      metrics: {
        students: "Research",
        improvement: "N/A",
        satisfaction: "95%"
      },
      category: "Research Partnership"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const handleTestimonialChange = (index) => {
    setActiveTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Global Voices of Success</h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Hear from educators, administrators, and parents worldwide who have experienced the transformative power of VishwAlpha's AI-driven education solutions.
        </p>
      </div>
      {/* Main Testimonial Display */}
      <div className="relative bg-card border border-border rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
        
        <div className="relative p-8 lg:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
            >
              {/* Testimonial Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Quote */}
                <div className="relative">
                  <Icon 
                    name="Quote" 
                    size={48} 
                    className="text-primary/20 absolute -top-4 -left-2" 
                  />
                  <blockquote className="text-lg lg:text-xl text-text-primary leading-relaxed pl-8">
                    "{currentTestimonial?.quote}"
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Image
                      src={currentTestimonial?.avatar}
                      alt={currentTestimonial?.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="absolute -bottom-1 -right-1 text-lg">
                      {currentTestimonial?.flag}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary text-lg">
                      {currentTestimonial?.name}
                    </h3>
                    <p className="text-text-secondary">{currentTestimonial?.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Icon name="MapPin" size={14} className="text-text-muted" />
                      <span className="text-sm text-text-muted">{currentTestimonial?.location}</span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={20}
                        className={`${
                          i < currentTestimonial?.rating
                            ? 'text-accent fill-current' :'text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-text-muted">
                    ({currentTestimonial?.rating}/5 stars)
                  </span>
                </div>

                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  <Icon name="Tag" size={14} />
                  <span>{currentTestimonial?.category}</span>
                </div>
              </div>

              {/* Metrics Panel */}
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-semibold text-text-primary mb-4 text-center">Impact Metrics</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {currentTestimonial?.metrics?.students}
                    </div>
                    <div className="text-sm text-text-muted">Students Impacted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">
                      {currentTestimonial?.metrics?.improvement}
                    </div>
                    <div className="text-sm text-text-muted">Learning Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">
                      {currentTestimonial?.metrics?.satisfaction}
                    </div>
                    <div className="text-sm text-text-muted">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={() => handleTestimonialChange((activeTestimonial - 1 + testimonials?.length) % testimonials?.length)}
            className="p-2 bg-background/80 backdrop-blur-sm border border-border rounded-full hover:bg-primary/10 transition-colors"
          >
            <Icon name="ChevronLeft" size={20} className="text-text-primary" />
          </button>
          
          <div className="flex gap-2">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTestimonialChange(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-primary w-8' :'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => handleTestimonialChange((activeTestimonial + 1) % testimonials?.length)}
            className="p-2 bg-background/80 backdrop-blur-sm border border-border rounded-full hover:bg-primary/10 transition-colors"
          >
            <Icon name="ChevronRight" size={20} className="text-text-primary" />
          </button>
        </div>

        {/* Auto-play Indicator */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`p-2 rounded-full transition-colors ${
              isAutoPlaying
                ? 'bg-primary/10 text-primary' :'bg-muted/50 text-text-muted'
            }`}
          >
            <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} />
          </button>
        </div>
      </div>
      {/* Testimonial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials?.map((testimonial, index) => (
          <motion.div
            key={testimonial?.id}
            className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
              index === activeTestimonial
                ? 'border-primary bg-primary/5 shadow-glow'
                : 'border-border bg-card hover:border-primary/30'
            }`}
            onClick={() => handleTestimonialChange(index)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 text-sm">
                  {testimonial?.flag}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary text-sm">
                  {testimonial?.name}
                </h4>
                <p className="text-xs text-text-muted">{testimonial?.location}</p>
              </div>
            </div>
            
            <p className="text-sm text-text-secondary line-clamp-3 mb-3">
              "{testimonial?.quote}"
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={14}
                    className={`${
                      i < testimonial?.rating
                        ? 'text-accent fill-current' :'text-muted'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-primary font-medium">
                {testimonial?.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Global Impact Summary */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-text-primary mb-4">Global Impact at a Glance</h3>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Our international presence spans across continents, transforming education through culturally-aware AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <div className="text-sm text-text-muted">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">100+</div>
            <div className="text-sm text-text-muted">Students Impacted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">10+</div>
            <div className="text-sm text-text-muted">Partner Institutions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">96%</div>
            <div className="text-sm text-text-muted">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalTestimonials;
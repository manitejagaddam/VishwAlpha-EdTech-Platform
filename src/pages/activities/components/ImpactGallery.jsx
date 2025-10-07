import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ImpactGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedStory, setSelectedStory] = useState(null);

  const categories = [
    { id: 'all', label: 'All Stories', icon: 'Grid3X3' },
    { id: 'schools', label: 'School Transformations', icon: 'School' },
    { id: 'students', label: 'Student Success', icon: 'Users' },
    { id: 'educators', label: 'Educator Growth', icon: 'GraduationCap' },
    { id: 'community', label: 'Community Impact', icon: 'Heart' }
  ];

  const impactStories = [
    {
      id: 1,
      category: 'schools',
      title: "Delhi Public School\'s AI Integration Success",
      subtitle: "From Traditional to Transformational",
      description: `Delhi Public School, Gurgaon implemented VishwAlpha's AI-powered learning analytics across 15 classrooms.\n\nThe results were remarkable: 40% improvement in student engagement, 35% increase in learning outcomes, and 90% teacher satisfaction with the new tools.\n\n"The AI insights helped us identify learning gaps we never knew existed," says Principal Dr. Meera Sharma.`,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&h=600&fit=crop",
      metrics: [
        { label: "Student Engagement", value: "+40%", icon: "TrendingUp" },
        { label: "Learning Outcomes", value: "+35%", icon: "Target" },
        { label: "Teacher Satisfaction", value: "90%", icon: "Heart" }
      ],
      testimonial: {
        quote: "VishwAlpha transformed how we understand and support each student\'s learning journey.",
        author: "Dr. Meera Sharma",
        role: "Principal, DPS Gurgaon"
      },
      date: "March 2024",
      location: "Gurgaon, Haryana"
    },
    {
      id: 2,
      category: 'students',title: "Rahul\'s Journey from Struggling to Stellar",subtitle: "AI-Powered Career Guidance Changes Everything",description: `Rahul Patel, a Class 10 student from Mumbai, was struggling with career direction until VishwAlpha's AI career counselor identified his hidden potential in data science.\n\nThrough personalized learning paths and skill development recommendations, Rahul not only improved his grades but also discovered his passion for technology.\n\nToday, he's pursuing advanced courses and has already built three AI projects.`,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      metrics: [
        { label: "Grade Improvement", value: "+2.5 GPA", icon: "Award" },
        { label: "Skill Certifications", value: "8", icon: "Certificate" },
        { label: "Projects Completed", value: "3", icon: "Code" }
      ],
      testimonial: {
        quote: "The AI showed me possibilities I never imagined. Now I know exactly where I\'m headed.",
        author: "Rahul Patel",
        role: "Class 12 Student, Mumbai"
      },
      date: "January 2024",
      location: "Mumbai, Maharashtra"
    },
    {
      id: 3,
      category: 'educators',
      title: "Teacher Training Revolution in Rural Karnataka",
      subtitle: "Empowering Educators with AI Tools",
      description: `A comprehensive teacher training program in rural Karnataka reached 200+ educators across 50 schools.\n\nThe program focused on integrating AI tools into traditional teaching methods, respecting local culture while embracing global standards.\n\nTeachers reported feeling more confident, students showed increased participation, and parents noticed improved learning at home.`,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop",
      metrics: [
        { label: "Teachers Trained", value: "200+", icon: "Users" },
        { label: "Schools Reached", value: "50", icon: "School" },
        { label: "Satisfaction Rate", value: "95%", icon: "ThumbsUp" }
      ],
      testimonial: {
        quote: "I never thought technology could enhance our traditional teaching methods so beautifully.",
        author: "Sunita Devi",
        role: "Primary Teacher, Mysore"
      },
      date: "February 2024",
      location: "Mysore, Karnataka"
    },
    {
      id: 4,
      category: 'community',
      title: "Parent-Teacher Collaboration Platform Success",
      subtitle: "Building Stronger Educational Communities",
      description: `The VishwAlpha Parent-Teacher Collaboration Platform connected 1,000+ families with educators in real-time.\n\nParents gained insights into their children's learning progress, teachers received valuable home-learning feedback, and students benefited from aligned support.\n\nThe platform reduced communication gaps by 80% and increased parent engagement by 150%.`,
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=600&fit=crop",
      metrics: [
        { label: "Families Connected", value: "1,000+", icon: "Users" },
        { label: "Communication Improvement", value: "+80%", icon: "MessageCircle" },
        { label: "Parent Engagement", value: "+150%", icon: "Heart" }
      ],
      testimonial: {
        quote: "Finally, I can truly support my child's learning journey with real insights from school.",
        author: "Priya Sharma",
        role: "Parent, Pune"
      },
      date: "April 2024",
      location: "Pune, Maharashtra"
    },
    {
      id: 5,
      category: 'schools',
      title: "Kendriya Vidyalaya\'s Digital Transformation",
      subtitle: "Government School Excellence Through AI",
      description: `Kendriya Vidyalaya Sector 8, Chandigarh became the first government school to fully integrate VishwAlpha's AI ecosystem.\n\nThe transformation included smart classrooms, AI-powered assessments, and personalized learning paths for 800+ students.\n\nThe school now serves as a model for other government institutions nationwide.`,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
      metrics: [
        { label: "Students Benefited", value: "800+", icon: "Users" },
        { label: "Smart Classrooms", value: "25", icon: "Monitor" },
        { label: "Performance Boost", value: "+45%", icon: "TrendingUp" }
      ],
      testimonial: {
        quote: "We\'ve proven that government schools can lead in educational innovation with the right tools.",
        author: "Mr. Rajesh Kumar",
        role: "Principal, KV Chandigarh"
      },
      date: "May 2024",
      location: "Chandigarh"
    },
    {
      id: 6,
      category: 'students',title: "Priya\'s STEM Excellence Journey",subtitle: "From Hesitant to Confident in Science",description: `Priya Singh from Jaipur was initially hesitant about STEM subjects until VishwAlpha's AI identified her analytical strengths.\n\nThrough gamified learning modules and peer collaboration features, she not only excelled in mathematics and science but also led her school's robotics team to state-level victory.\n\nShe's now mentoring younger students and planning to pursue engineering.`,
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c9b8d4?w=800&h=600&fit=crop",
      metrics: [
        { label: "STEM Score Improvement", value: "+60%", icon: "Calculator" },
        { label: "Competitions Won", value: "3", icon: "Trophy" },
        { label: "Students Mentored", value: "15", icon: "Users" }
      ],
      testimonial: {
        quote: "AI helped me discover that I\'m actually good at science. Now I love solving complex problems!",
        author: "Priya Singh",
        role: "Class 11 Student, Jaipur"
      },
      date: "March 2024",
      location: "Jaipur, Rajasthan"
    }
  ];

  const filteredStories = activeCategory === 'all' 
    ? impactStories 
    : impactStories?.filter(story => story?.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
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
            Impact Gallery
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real stories of transformation, growth, and success from our educational community
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category?.id
                  ? 'bg-gradient-primary text-white shadow-glow'
                  : 'bg-muted/50 text-text-secondary hover:text-text-primary hover:bg-muted'
              }`}
            >
              <Icon name={category?.icon} size={18} className="mr-2" />
              {category?.label}
            </button>
          ))}
        </motion.div>

        {/* Stories Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredStories?.map((story, index) => (
              <motion.div
                key={story?.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedStory(story)}
              >
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-brand transition-all duration-300 group-hover:scale-105">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={story?.image}
                      alt={story?.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center text-white text-sm mb-2">
                        <Icon name="MapPin" size={14} className="mr-1" />
                        {story?.location}
                        <span className="mx-2">•</span>
                        {story?.date}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-gradient-primary transition-colors duration-300">
                      {story?.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4">
                      {story?.subtitle}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {story?.metrics?.slice(0, 3)?.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-primary">
                            {metric?.value}
                          </div>
                          <div className="text-xs text-text-muted">
                            {metric?.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">
                        Read Full Story
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
          </AnimatePresence>
        </motion.div>

        {/* Story Modal */}
        <AnimatePresence>
          {selectedStory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedStory(null)}
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
                    src={selectedStory?.image}
                    alt={selectedStory?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                  >
                    <Icon name="X" size={20} />
                  </button>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-2">
                      {selectedStory?.title}
                    </h2>
                    <p className="text-lg text-gray-200">
                      {selectedStory?.subtitle}
                    </p>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="prose prose-invert max-w-none">
                        {selectedStory?.description?.split('\n\n')?.map((paragraph, idx) => (
                          <p key={idx} className="text-text-secondary leading-relaxed mb-4">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-6 bg-muted/30 rounded-xl border border-border">
                        <blockquote className="text-lg text-text-primary italic mb-4">
                          "{selectedStory?.testimonial?.quote}"
                        </blockquote>
                        <div className="flex items-center">
                          <div>
                            <div className="font-semibold text-text-primary">
                              {selectedStory?.testimonial?.author}
                            </div>
                            <div className="text-sm text-text-secondary">
                              {selectedStory?.testimonial?.role}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-text-primary mb-4">
                          Key Metrics
                        </h4>
                        <div className="space-y-4">
                          {selectedStory?.metrics?.map((metric, idx) => (
                            <div key={idx} className="flex items-center p-4 bg-muted/20 rounded-lg">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                <Icon name={metric?.icon} size={20} className="text-primary" />
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-primary">
                                  {metric?.value}
                                </div>
                                <div className="text-sm text-text-secondary">
                                  {metric?.label}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                        <div className="flex items-center text-primary mb-2">
                          <Icon name="MapPin" size={16} className="mr-2" />
                          <span className="font-medium">Location</span>
                        </div>
                        <p className="text-text-secondary">{selectedStory?.location}</p>
                        
                        <div className="flex items-center text-primary mb-2 mt-4">
                          <Icon name="Calendar" size={16} className="mr-2" />
                          <span className="font-medium">Date</span>
                        </div>
                        <p className="text-text-secondary">{selectedStory?.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ImpactGallery;
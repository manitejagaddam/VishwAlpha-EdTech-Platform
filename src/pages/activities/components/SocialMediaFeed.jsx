import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SocialMediaFeed = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [sharedPosts, setSharedPosts] = useState(new Set());

  const socialPosts = [
    {
      id: 1,
      platform: 'twitter',
      author: "Dr. Meera Sharma",
      handle: "@DrMeeraEdu",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      verified: true,
      content: "Just witnessed an incredible transformation at Delhi Public School! Students using VishwAlpha\'s AI tools showed 40% improvement in problem-solving skills. The future of education is here! 🚀 #AIEducation #EdTech",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=600&h=400&fit=crop",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      likes: 245,
      shares: 67,
      comments: 23,
      hashtags: ["AIEducation", "EdTech", "Innovation"]
    },
    {
      id: 2,
      platform: 'linkedin',
      author: "Rajesh Kumar",
      handle: "Mathematics Teacher at Modern School",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      verified: false,
      content: "Sharing my experience with VishwAlpha's adaptive learning platform. My students are more engaged than ever, and I can track their progress in real-time. This is what personalized education looks like!\n\nKey benefits I've observed:\n✅ Individual learning paths\n✅ Real-time progress tracking\n✅ Automated difficulty adjustment\n✅ Improved student confidence",
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
      likes: 189,
      shares: 45,
      comments: 31,
      hashtags: ["PersonalizedLearning", "EdTech", "TeacherLife"]
    },
    {
      id: 3,
      platform: 'instagram',
      author: "VishwAlpha Official",
      handle: "@vishwalpha_official",
      avatar: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=face",
      verified: true,
      content: "🎉 Celebrating 50,000+ students impacted by our AI-powered learning platform! From rural schools in Karnataka to urban centers in Mumbai, we're making quality education accessible to all. Thank you to our amazing educator community! 💙",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop",
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
      likes: 1247,
      shares: 234,
      comments: 89,
      hashtags: ["Milestone", "Education", "Impact", "Community"]
    },
    {
      id: 4,
      platform: 'twitter',
      author: "Priya Patel",
      handle: "@PriyaParentAdvocate",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      verified: false,
      content: "As a parent, I'm amazed by how VishwAlpha's parent portal keeps me connected with my child's learning journey. Real-time updates, progress insights, and direct communication with teachers - it's a game changer! 👨‍👩‍👧‍👦 #ParentEngagement",
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
      likes: 156,
      shares: 89,
      comments: 45,
      hashtags: ["ParentEngagement", "EdTech", "FamilyLearning"]
    },
    {
      id: 5,
      platform: 'linkedin',
      author: "Prof. Amit Verma",
      handle: "Education Consultant & NEP 2020 Expert",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      verified: true,
      content: "Attended VishwAlpha\'s webinar on NEP 2020 implementation. Impressed by their practical approach to integrating AI with policy requirements. The case studies from Kendriya Vidyalayas were particularly insightful. Highly recommend for education administrators looking to modernize their institutions.",
      timestamp: new Date(Date.now() - 18 * 60 * 60 * 1000), // 18 hours ago
      likes: 298,
      shares: 156,
      comments: 67,
      hashtags: ["NEP2020", "EducationPolicy", "AIIntegration"]
    },
    {
      id: 6,
      platform: 'instagram',
      author: "Rahul Student",
      handle: "@rahul_learns",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      verified: false,
      content: "From struggling with math to loving it! 📊 VishwAlpha\'s AI tutor helped me understand concepts at my own pace. Now I\'m helping my classmates too! Thanks for making learning fun and personalized 🎯 #StudentSuccess #AILearning",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
      likes: 89,
      shares: 23,
      comments: 15,
      hashtags: ["StudentSuccess", "AILearning", "MathIsAwesome"]
    },
    {
      id: 7,
      platform: 'twitter',
      author: "Education Today",
      handle: "@EducationTodayIN",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      verified: true,
      content: "BREAKING: VishwAlpha wins \'Best AI Innovation in Education\' at the Global EdTech Awards 2024! 🏆 Their work in making AI accessible to Indian schools is truly commendable. Congratulations to the entire team! 🎉 #EdTechAwards #Innovation",
      timestamp: new Date(Date.now() - 36 * 60 * 60 * 1000), // 1.5 days ago
      likes: 567,
      shares: 234,
      comments: 78,
      hashtags: ["EdTechAwards", "Innovation", "Recognition"]
    },
    {
      id: 8,
      platform: 'linkedin',
      author: "Sunita Devi",
      handle: "Primary Teacher, Rural Karnataka",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      verified: false,
      content: "Teaching in a rural school, I never thought we'd have access to advanced AI tools. VishwAlpha's offline-capable features and multilingual support have transformed my classroom. My students are now competing with urban schools! 🌟 Grateful for this opportunity to provide quality education regardless of location.",
      timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000), // 2 days ago
      likes: 445,
      shares: 189,
      comments: 92,
      hashtags: ["RuralEducation", "DigitalEquity", "TeacherStory"]
    }
  ];

  const platforms = [
    { id: 'all', label: 'All Posts', icon: 'Globe', color: 'bg-primary' },
    { id: 'twitter', label: 'Twitter', icon: 'Twitter', color: 'bg-blue-500' },
    { id: 'linkedin', label: 'LinkedIn', icon: 'Linkedin', color: 'bg-blue-600' },
    { id: 'instagram', label: 'Instagram', icon: 'Instagram', color: 'bg-pink-500' }
  ];

  const filteredPosts = activeTab === 'all' 
    ? socialPosts 
    : socialPosts?.filter(post => post?.platform === activeTab);

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - timestamp) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  };

  const handleLike = (postId) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet?.has(postId)) {
        newSet?.delete(postId);
      } else {
        newSet?.add(postId);
      }
      return newSet;
    });
  };

  const handleShare = (postId) => {
    setSharedPosts(prev => {
      const newSet = new Set(prev);
      newSet?.add(postId);
      return newSet;
    });
    // Simulate share action
    setTimeout(() => {
      setSharedPosts(prev => {
        const newSet = new Set(prev);
        newSet?.delete(postId);
        return newSet;
      });
    }, 2000);
  };

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'twitter': return 'Twitter';
      case 'linkedin': return 'Linkedin';
      case 'instagram': return 'Instagram';
      default: return 'Globe';
    }
  };

  const getPlatformColor = (platform) => {
    switch (platform) {
      case 'twitter': return 'text-blue-400';
      case 'linkedin': return 'text-blue-600';
      case 'instagram': return 'text-pink-500';
      default: return 'text-primary';
    }
  };

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
            Community Voices
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real stories and experiences from our vibrant community of educators, students, and parents
          </p>
        </motion.div>

        {/* Platform Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {platforms?.map((platform) => (
            <button
              key={platform?.id}
              onClick={() => setActiveTab(platform?.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === platform?.id
                  ? 'bg-gradient-primary text-white shadow-glow'
                  : 'bg-muted/50 text-text-secondary hover:text-text-primary hover:bg-muted'
              }`}
            >
              <Icon name={platform?.icon} size={18} className="mr-2" />
              {platform?.label}
            </button>
          ))}
        </motion.div>

        {/* Social Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts?.map((post, index) => (
            <motion.div
              key={post?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-brand transition-all duration-300"
            >
              {/* Post Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={post?.avatar}
                    alt={post?.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-text-primary">
                        {post?.author}
                      </h4>
                      {post?.verified && (
                        <Icon name="BadgeCheck" size={16} className="text-blue-500" />
                      )}
                    </div>
                    <p className="text-sm text-text-secondary">
                      {post?.handle}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Icon 
                    name={getPlatformIcon(post?.platform)} 
                    size={20} 
                    className={getPlatformColor(post?.platform)} 
                  />
                  <span className="text-xs text-text-muted">
                    {formatTimeAgo(post?.timestamp)}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="mb-4">
                <p className="text-text-secondary leading-relaxed mb-3">
                  {post?.content?.split('\n')?.map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx < post?.content?.split('\n')?.length - 1 && <br />}
                    </span>
                  ))}
                </p>
                
                {post?.image && (
                  <div className="rounded-lg overflow-hidden mb-3">
                    <Image
                      src={post?.image}
                      alt="Post image"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Hashtags */}
                <div className="flex flex-wrap gap-2">
                  {post?.hashtags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-primary text-sm hover:text-primary/80 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Post Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-6">
                  <button
                    onClick={() => handleLike(post?.id)}
                    className={`flex items-center gap-2 text-sm transition-colors duration-200 ${
                      likedPosts?.has(post?.id)
                        ? 'text-red-500' :'text-text-muted hover:text-red-500'
                    }`}
                  >
                    <Icon 
                      name={likedPosts?.has(post?.id) ? "Heart" : "Heart"} 
                      size={16}
                      className={likedPosts?.has(post?.id) ? "fill-current" : ""}
                    />
                    <span>{post?.likes + (likedPosts?.has(post?.id) ? 1 : 0)}</span>
                  </button>

                  <button
                    onClick={() => handleShare(post?.id)}
                    className={`flex items-center gap-2 text-sm transition-colors duration-200 ${
                      sharedPosts?.has(post?.id)
                        ? 'text-green-500' :'text-text-muted hover:text-green-500'
                    }`}
                  >
                    <Icon name="Share" size={16} />
                    <span>{post?.shares + (sharedPosts?.has(post?.id) ? 1 : 0)}</span>
                  </button>

                  <button className="flex items-center gap-2 text-sm text-text-muted hover:text-blue-500 transition-colors duration-200">
                    <Icon name="MessageCircle" size={16} />
                    <span>{post?.comments}</span>
                  </button>
                </div>

                <button className="text-text-muted hover:text-text-primary transition-colors duration-200">
                  <Icon name="MoreHorizontal" size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" iconName="RefreshCw" iconPosition="left">
            Load More Posts
          </Button>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-card border border-border rounded-xl text-center"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Join Our Community
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Follow us on social media to stay updated with the latest news, success stories, and educational insights from the VishwAlpha community.
          </p>
          
          <div className="flex justify-center gap-4">
            {[
              { platform: 'Twitter', icon: 'Twitter', color: 'hover:bg-blue-500', handle: '@VishwAlpha' },
              { platform: 'LinkedIn', icon: 'Linkedin', color: 'hover:bg-blue-600', handle: 'VishwAlpha' },
              { platform: 'Instagram', icon: 'Instagram', color: 'hover:bg-pink-500', handle: '@vishwalpha_official' },
              { platform: 'YouTube', icon: 'Youtube', color: 'hover:bg-red-500', handle: 'VishwAlpha Education' }
            ]?.map((social) => (
              <button
                key={social?.platform}
                className={`flex items-center gap-2 px-4 py-2 bg-muted/50 text-text-secondary rounded-lg transition-all duration-300 ${social?.color} hover:text-white`}
              >
                <Icon name={social?.icon} size={20} />
                <span className="hidden sm:inline">{social?.handle}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMediaFeed;
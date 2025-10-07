import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunityHub = () => {
  const [activeTab, setActiveTab] = useState('forums');

  const tabs = [
    { id: 'forums', label: 'Community Forums', icon: 'MessageSquare' },
    { id: 'webinars', label: 'Webinars & Events', icon: 'Video' },
    { id: 'resources', label: 'Shared Resources', icon: 'BookOpen' },
    { id: 'collaboration', label: 'Collaborative Spaces', icon: 'Users' }
  ];

  const forumTopics = [
    {
      id: 1,
      title: "Best Practices for AI Integration in Primary Education",
      author: "Dr. Sunita Sharma",
      role: "Principal, Modern Public School",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      replies: 24,
      views: 156,
      lastActivity: "2 hours ago",
      category: "AI Integration",
      isHot: true
    },
    {
      id: 2,
      title: "Student Engagement Strategies Using VishwAlpha Tools",
      author: "Rajesh Kumar",
      role: "Mathematics Teacher",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      replies: 18,
      views: 89,
      lastActivity: "4 hours ago",
      category: "Teaching Methods",
      isHot: false
    },
    {
      id: 3,
      title: "Parent-Teacher Communication Enhancement",
      author: "Priya Patel",
      role: "Parent & Education Advocate",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      replies: 31,
      views: 203,
      lastActivity: "6 hours ago",
      category: "Communication",
      isHot: true
    },
    {
      id: 4,
      title: "Implementing NEP 2020 Guidelines with AI Support",
      author: "Prof. Amit Verma",
      role: "Education Consultant",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      replies: 42,
      views: 287,
      lastActivity: "1 day ago",
      category: "Policy Implementation",
      isHot: false
    }
  ];

  const upcomingWebinars = [
    {
      id: 1,
      title: "AI-Powered Assessment: Revolutionizing Student Evaluation",
      presenter: "Dr. Meera Joshi",
      role: "AI Education Specialist",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg",
      date: "October 15, 2024",
      time: "4:00 PM IST",
      duration: "90 minutes",
      attendees: 245,
      maxAttendees: 500,
      description: "Learn how AI-powered assessment tools can provide real-time insights into student learning patterns and help create personalized evaluation strategies.",
      tags: ["Assessment", "AI Tools", "Personalization"]
    },
    {
      id: 2,
      title: "Building Digital Literacy in Rural Schools",
      presenter: "Ravi Shankar",
      role: "Rural Education Expert",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      date: "October 22, 2024",
      time: "3:30 PM IST",
      duration: "75 minutes",
      attendees: 189,
      maxAttendees: 300,
      description: "Strategies and success stories for implementing digital education tools in resource-constrained rural environments.",
      tags: ["Digital Literacy", "Rural Education", "Implementation"]
    },
    {
      id: 3,
      title: "Parent Engagement in the Digital Age",
      presenter: "Kavita Singh",
      role: "Family Engagement Specialist",
      avatar: "https://randomuser.me/api/portraits/women/29.jpg",
      date: "October 28, 2024",
      time: "7:00 PM IST",
      duration: "60 minutes",
      attendees: 156,
      maxAttendees: 400,
      description: "How to effectively involve parents in their children\'s digital learning journey and create meaningful home-school partnerships.",
      tags: ["Parent Engagement", "Digital Learning", "Communication"]
    }
  ];

  const sharedResources = [
    {
      id: 1,
      title: "NEP 2020 Implementation Checklist",
      type: "PDF Guide",
      author: "VishwAlpha Research Team",
      downloads: 1247,
      rating: 4.8,
      size: "2.3 MB",
      description: "Comprehensive checklist for schools implementing NEP 2020 guidelines with AI support.",
      category: "Policy Implementation",
      icon: "FileText"
    },
    {
      id: 2,
      title: "AI Tools Comparison Matrix",
      type: "Interactive Spreadsheet",
      author: "Dr. Anita Rao",
      downloads: 892,
      rating: 4.6,
      size: "1.8 MB",
      description: "Detailed comparison of various AI education tools with implementation costs and benefits.",
      category: "Tool Selection",
      icon: "Table"
    },
    {
      id: 3,
      title: "Student Engagement Activity Templates",
      type: "Template Pack",
      author: "Creative Teachers Collective",
      downloads: 2156,
      rating: 4.9,
      size: "5.7 MB",
      description: "Ready-to-use activity templates designed to boost student engagement using AI tools.",
      category: "Teaching Resources",
      icon: "Layers"
    },
    {
      id: 4,
      title: "Parent Communication Scripts",
      type: "Text Templates",
      author: "Communication Experts",
      downloads: 734,
      rating: 4.5,
      size: "0.8 MB",
      description: "Pre-written communication templates for various parent-teacher interaction scenarios.",
      category: "Communication",
      icon: "MessageCircle"
    }
  ];

  const collaborativeSpaces = [
    {
      id: 1,
      name: "AI Integration Working Group",
      members: 156,
      activeProjects: 8,
      description: "Collaborative space for educators working on AI integration projects in their schools.",
      recentActivity: "New project: Smart Classroom Setup Guide",
      category: "Working Group",
      icon: "Users",
      isActive: true
    },
    {
      id: 2,
      name: "Rural Education Innovation Lab",
      members: 89,
      activeProjects: 5,
      description: "Focused on developing innovative solutions for rural education challenges.",
      recentActivity: "Resource shared: Low-bandwidth Learning Tools",
      category: "Innovation Lab",
      icon: "Lightbulb",
      isActive: true
    },
    {
      id: 3,
      name: "Parent-Teacher Partnership Hub",
      members: 234,
      activeProjects: 12,
      description: "Building stronger connections between parents and educators through collaborative initiatives.",
      recentActivity: "Discussion: Home Learning Environment Setup",
      category: "Partnership Hub",
      icon: "Heart",
      isActive: false
    },
    {
      id: 4,
      name: "STEM Education Collective",
      members: 178,
      activeProjects: 9,
      description: "Advancing STEM education through AI-powered tools and collaborative curriculum development.",
      recentActivity: "New member: Dr. Physics Teacher from Bangalore",
      category: "Subject Collective",
      icon: "Atom",
      isActive: true
    }
  ];

  const renderForums = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h3 className="text-2xl font-bold text-text-primary">Active Discussions</h3>
        <Button variant="outline" iconName="Plus" iconPosition="left">
          Start New Topic
        </Button>
      </div>
      
      <div className="space-y-4">
        {forumTopics?.map((topic) => (
          <motion.div
            key={topic?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-semibold text-text-primary hover:text-primary cursor-pointer">
                    {topic?.title}
                  </h4>
                  {topic?.isHot && (
                    <span className="px-2 py-1 bg-red-500/10 text-red-400 text-xs font-medium rounded-full">
                      Hot
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-4 text-sm text-text-secondary mb-3">
                  <div className="flex items-center gap-2">
                    <Image
                      src={topic?.avatar}
                      alt={topic?.author}
                      className="w-6 h-6 rounded-full"
                    />
                    <span>{topic?.author}</span>
                    <span className="text-text-muted">•</span>
                    <span>{topic?.role}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-text-muted">
                  <div className="flex items-center gap-1">
                    <Icon name="MessageSquare" size={14} />
                    <span>{topic?.replies} replies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Eye" size={14} />
                    <span>{topic?.views} views</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    <span>{topic?.lastActivity}</span>
                  </div>
                </div>
              </div>
              
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                {topic?.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderWebinars = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h3 className="text-2xl font-bold text-text-primary">Upcoming Webinars</h3>
        <Button variant="outline" iconName="Calendar" iconPosition="left">
          View Full Calendar
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {upcomingWebinars?.map((webinar) => (
          <motion.div
            key={webinar?.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-brand transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={webinar?.avatar}
                    alt={webinar?.presenter}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-text-primary">{webinar?.presenter}</h4>
                    <p className="text-sm text-text-secondary">{webinar?.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-primary">{webinar?.date}</div>
                  <div className="text-sm text-text-secondary">{webinar?.time}</div>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-text-primary mb-3">
                {webinar?.title}
              </h3>
              
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                {webinar?.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {webinar?.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-muted/50 text-text-secondary text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-text-muted">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    <span>{webinar?.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" size={14} />
                    <span>{webinar?.attendees}/{webinar?.maxAttendees}</span>
                  </div>
                </div>
                
                <Button variant="default" size="sm">
                  Register Now
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderResources = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h3 className="text-2xl font-bold text-text-primary">Shared Resources</h3>
        <Button variant="outline" iconName="Upload" iconPosition="left">
          Share Resource
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sharedResources?.map((resource) => (
          <motion.div
            key={resource?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={resource?.icon} size={24} className="text-primary" />
              </div>
              
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  {resource?.title}
                </h4>
                
                <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                  {resource?.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                  <span>{resource?.type}</span>
                  <span>•</span>
                  <span>{resource?.size}</span>
                  <span>•</span>
                  <span>by {resource?.author}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Icon name="Download" size={14} className="text-text-muted" />
                      <span className="text-text-muted">{resource?.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={14} className="text-yellow-500" />
                      <span className="text-text-muted">{resource?.rating}</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" iconName="Download">
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderCollaboration = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h3 className="text-2xl font-bold text-text-primary">Collaborative Spaces</h3>
        <Button variant="outline" iconName="Plus" iconPosition="left">
          Create New Space
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {collaborativeSpaces?.map((space) => (
          <motion.div
            key={space?.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={space?.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-primary">{space?.name}</h4>
                  <span className="px-2 py-1 bg-muted/50 text-text-secondary text-xs rounded-full">
                    {space?.category}
                  </span>
                </div>
              </div>
              
              {space?.isActive && (
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              )}
            </div>
            
            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
              {space?.description}
            </p>
            
            <div className="flex items-center gap-6 text-sm text-text-muted mb-4">
              <div className="flex items-center gap-1">
                <Icon name="Users" size={14} />
                <span>{space?.members} members</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Folder" size={14} />
                <span>{space?.activeProjects} active projects</span>
              </div>
            </div>
            
            <div className="p-3 bg-muted/20 rounded-lg mb-4">
              <div className="text-xs text-text-muted mb-1">Recent Activity</div>
              <div className="text-sm text-text-secondary">{space?.recentActivity}</div>
            </div>
            
            <Button variant="outline" fullWidth>
              Join Space
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'forums':
        return renderForums();
      case 'webinars':
        return renderWebinars();
      case 'resources':
        return renderResources();
      case 'collaboration':
        return renderCollaboration();
      default:
        return renderForums();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
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
            Community Hub
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Connect, collaborate, and grow with fellow educators, parents, and education enthusiasts
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab?.id
                  ? 'bg-gradient-primary text-white shadow-glow'
                  : 'bg-muted/50 text-text-secondary hover:text-text-primary hover:bg-muted'
              }`}
            >
              <Icon name={tab?.icon} size={18} className="mr-2" />
              {tab?.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderTabContent()}
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityHub;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const currentDate = new Date();
  const currentMonth = currentDate?.getMonth();
  const currentYear = currentDate?.getFullYear();

  const upcomingEvents = [
    {
      id: 1,
      title: "AI in Education: Global Perspectives",
      type: "Webinar",
      date: new Date(2024, 9, 15),
      time: "4:00 PM - 5:30 PM IST",
      presenter: "Dr. Sarah Johnson",
      role: "AI Education Researcher, MIT",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      attendees: 245,
      maxAttendees: 500,
      description: "Explore how different countries are implementing AI in their education systems and learn from global best practices.",
      tags: ["AI", "Global Education", "Policy"],
      registrationLink: "#",
      isLive: false,
      category: "webinar"
    },
    {
      id: 2,
      title: "VishwAlpha User Conference 2024",
      type: "Conference",
      date: new Date(2024, 9, 22),
      time: "9:00 AM - 6:00 PM IST",
      presenter: "VishwAlpha Team",
      role: "Product & Research Teams",
      avatar: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=face",
      attendees: 1200,
      maxAttendees: 2000,
      description: "Annual conference featuring product updates, success stories, and networking opportunities for educators and administrators.",
      tags: ["Conference", "Networking", "Product Updates"],
      registrationLink: "#",
      isLive: false,
      category: "conference"
    },
    {
      id: 3,
      title: "Implementing NEP 2020 with AI Tools",
      type: "Workshop",
      date: new Date(2024, 9, 28),
      time: "2:00 PM - 4:00 PM IST",
      presenter: "Prof. Rajesh Kumar",
      role: "Education Policy Expert",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      attendees: 89,
      maxAttendees: 150,
      description: "Hands-on workshop for school administrators on practical implementation of NEP 2020 guidelines using AI-powered tools.",
      tags: ["NEP 2020", "Implementation", "Hands-on"],
      registrationLink: "#",
      isLive: false,
      category: "workshop"
    },
    {
      id: 4,
      title: "Parent-Teacher Collaboration in Digital Age",
      type: "Panel Discussion",
      date: new Date(2024, 10, 5),
      time: "7:00 PM - 8:30 PM IST",
      presenter: "Education Experts Panel",
      role: "Parents, Teachers & Administrators",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg",
      attendees: 156,
      maxAttendees: 300,
      description: "Interactive panel discussion on building stronger parent-teacher partnerships using digital communication tools.",
      tags: ["Parent Engagement", "Communication", "Digital Tools"],
      registrationLink: "#",
      isLive: false,
      category: "panel"
    },
    {
      id: 5,
      title: "AI-Powered Assessment Strategies",
      type: "Training Session",
      date: new Date(2024, 10, 12),
      time: "3:00 PM - 5:00 PM IST",
      presenter: "Dr. Priya Sharma",
      role: "Assessment Technology Specialist",
      avatar: "https://randomuser.me/api/portraits/women/41.jpg",
      attendees: 67,
      maxAttendees: 100,
      description: "Comprehensive training on using AI tools for creating, conducting, and analyzing student assessments.",
      tags: ["Assessment", "AI Tools", "Training"],
      registrationLink: "#",
      isLive: false,
      category: "training"
    },
    {
      id: 6,
      title: "Rural Education Innovation Summit",
      type: "Summit",
      date: new Date(2024, 10, 18),
      time: "10:00 AM - 4:00 PM IST",
      presenter: "Rural Education Collective",
      role: "Educators & Policy Makers",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      attendees: 234,
      maxAttendees: 400,
      description: "Summit focused on innovative solutions for rural education challenges, featuring success stories and collaborative planning.",
      tags: ["Rural Education", "Innovation", "Collaboration"],
      registrationLink: "#",
      isLive: false,
      category: "summit"
    }
  ];

  const eventCategories = [
    { id: 'all', label: 'All Events', icon: 'Calendar', color: 'bg-primary' },
    { id: 'webinar', label: 'Webinars', icon: 'Video', color: 'bg-blue-500' },
    { id: 'workshop', label: 'Workshops', icon: 'Wrench', color: 'bg-green-500' },
    { id: 'conference', label: 'Conferences', icon: 'Users', color: 'bg-purple-500' },
    { id: 'training', label: 'Training', icon: 'GraduationCap', color: 'bg-orange-500' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredEvents = activeCategory === 'all' 
    ? upcomingEvents 
    : upcomingEvents?.filter(event => event?.category === activeCategory);

  const getDaysInMonth = (date) => {
    const year = date?.getFullYear();
    const month = date?.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay?.getDate();
    const startingDayOfWeek = firstDay?.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days?.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days?.push(new Date(year, month, day));
    }
    
    return days;
  };

  const getEventsForDate = (date) => {
    if (!date) return [];
    return upcomingEvents?.filter(event => 
      event?.date?.toDateString() === date?.toDateString()
    );
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const navigateMonth = (direction) => {
    const newDate = new Date(selectedDate);
    newDate?.setMonth(selectedDate?.getMonth() + direction);
    setSelectedDate(newDate);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-slate-900">
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
            Event Calendar
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Join our community events, webinars, and workshops to stay connected and continue learning
          </p>
        </motion.div>

        {/* Event Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {eventCategories?.map((category) => (
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar View */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-card border border-border rounded-xl p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-text-primary">
                  {monthNames?.[selectedDate?.getMonth()]} {selectedDate?.getFullYear()}
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => navigateMonth(-1)}
                    className="w-8 h-8 bg-muted/50 hover:bg-muted rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    <Icon name="ChevronLeft" size={16} />
                  </button>
                  <button
                    onClick={() => navigateMonth(1)}
                    className="w-8 h-8 bg-muted/50 hover:bg-muted rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    <Icon name="ChevronRight" size={16} />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {weekDays?.map((day) => (
                  <div key={day} className="text-center text-xs font-medium text-text-muted py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {getDaysInMonth(selectedDate)?.map((date, index) => {
                  const events = date ? getEventsForDate(date) : [];
                  const isToday = date && date?.toDateString() === currentDate?.toDateString();
                  const hasEvents = events?.length > 0;

                  return (
                    <div
                      key={index}
                      className={`aspect-square flex items-center justify-center text-sm relative cursor-pointer rounded-lg transition-all duration-200 ${
                        date
                          ? isToday
                            ? 'bg-primary text-white font-bold'
                            : hasEvents
                            ? 'bg-primary/10 text-primary hover:bg-primary/20' :'text-text-secondary hover:bg-muted/50' :''
                      }`}
                      onClick={() => date && setSelectedDate(date)}
                    >
                      {date && (
                        <>
                          <span>{date?.getDate()}</span>
                          {hasEvents && (
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                              <div className="w-1 h-1 bg-current rounded-full" />
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Selected Date Info */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-sm text-text-muted mb-2">Selected Date</div>
                <div className="text-text-primary font-medium mb-3">
                  {formatDate(selectedDate)}
                </div>
                {getEventsForDate(selectedDate)?.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-sm text-text-muted">
                      {getEventsForDate(selectedDate)?.length} event(s) scheduled
                    </div>
                    {getEventsForDate(selectedDate)?.slice(0, 2)?.map((event) => (
                      <div key={event?.id} className="text-xs text-primary">
                        • {event?.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Events List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-text-primary">
                  Upcoming Events
                </h3>
                <Button variant="outline" iconName="Plus" iconPosition="left">
                  Add to Calendar
                </Button>
              </div>

              <div className="space-y-4">
                {filteredEvents?.slice(0, 6)?.map((event, index) => (
                  <motion.div
                    key={event?.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card border border-border rounded-lg p-6 hover:shadow-brand transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Image
                          src={event?.avatar}
                          alt={event?.presenter}
                          className="w-12 h-12 rounded-full"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-lg font-bold text-text-primary mb-1">
                              {event?.title}
                            </h4>
                            <div className="flex items-center gap-2 text-sm text-text-secondary">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                event?.type === 'Webinar' ? 'bg-blue-500/10 text-blue-400' :
                                event?.type === 'Workshop' ? 'bg-green-500/10 text-green-400' :
                                event?.type === 'Conference' ? 'bg-purple-500/10 text-purple-400' :
                                event?.type === 'Training Session'? 'bg-orange-500/10 text-orange-400' : 'bg-primary/10 text-primary'
                              }`}>
                                {event?.type}
                              </span>
                              <span>by {event?.presenter}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-primary">
                              {event?.date?.toLocaleDateString('en-IN', { 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </div>
                            <div className="text-xs text-text-muted">
                              {event?.time?.split(' - ')?.[0]}
                            </div>
                          </div>
                        </div>

                        <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                          {event?.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-text-muted">
                            <div className="flex items-center gap-1">
                              <Icon name="Clock" size={14} />
                              <span>{event?.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Icon name="Users" size={14} />
                              <span>{event?.attendees}/{event?.maxAttendees}</span>
                            </div>
                          </div>

                          <Button variant="outline" size="sm">
                            Register
                          </Button>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-3">
                          {event?.tags?.slice(0, 3)?.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-muted/30 text-text-muted text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline">
                  View All Events
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e?.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={selectedEvent?.avatar}
                      alt={selectedEvent?.presenter}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h2 className="text-2xl font-bold text-text-primary mb-1">
                        {selectedEvent?.title}
                      </h2>
                      <div className="text-text-secondary">
                        {selectedEvent?.presenter} • {selectedEvent?.role}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="w-10 h-10 bg-muted/50 hover:bg-muted rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    <Icon name="X" size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Calendar" size={20} className="text-primary" />
                      <div>
                        <div className="font-medium text-text-primary">
                          {formatDate(selectedEvent?.date)}
                        </div>
                        <div className="text-sm text-text-secondary">
                          {selectedEvent?.time}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Icon name="Users" size={20} className="text-primary" />
                      <div>
                        <div className="font-medium text-text-primary">
                          {selectedEvent?.attendees} registered
                        </div>
                        <div className="text-sm text-text-secondary">
                          {selectedEvent?.maxAttendees - selectedEvent?.attendees} spots remaining
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Tag" size={20} className="text-primary" />
                      <div>
                        <div className="font-medium text-text-primary">
                          {selectedEvent?.type}
                        </div>
                        <div className="text-sm text-text-secondary">
                          Event Type
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Icon name="Globe" size={20} className="text-primary" />
                      <div>
                        <div className="font-medium text-text-primary">
                          Online Event
                        </div>
                        <div className="text-sm text-text-secondary">
                          Join from anywhere
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    About This Event
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {selectedEvent?.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    Topics Covered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent?.tags?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="default" fullWidth>
                    Register Now
                  </Button>
                  <Button variant="outline" fullWidth>
                    Add to Calendar
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EventCalendar;
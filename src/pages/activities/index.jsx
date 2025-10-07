import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ImpactGallery from './components/ImpactGallery';
import CommunityHub from './components/CommunityHub';
import InnovationLab from './components/InnovationLab';
import EventCalendar from './components/EventCalendar';
import SocialMediaFeed from './components/SocialMediaFeed';

const Activities = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Activities - VishwAlpha | Real Impact & Community Engagement</title>
        <meta 
          name="description" 
          content="Discover VishwAlpha's real-world impact through success stories, community engagement, innovation lab, and educational events. Join our vibrant community of educators, students, and parents transforming education with AI." 
        />
        <meta 
          name="keywords" 
          content="VishwAlpha activities, educational impact, community engagement, innovation lab, success stories, webinars, workshops, AI education events, teacher training, student success" 
        />
        <meta property="og:title" content="Activities - VishwAlpha | Real Impact & Community Engagement" />
        <meta 
          property="og:description" 
          content="Explore real transformation stories, join community events, and discover cutting-edge educational innovations at VishwAlpha's activities hub." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vishwalpha.com/activities" />
        <link rel="canonical" href="https://vishwalpha.com/activities" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <HeroSection />
          
          {/* Impact Gallery */}
          <ImpactGallery />
          
          {/* Community Hub */}
          <CommunityHub />
          
          {/* Innovation Lab */}
          <InnovationLab />
          
          {/* Event Calendar */}
          <EventCalendar />
          
          {/* Social Media Feed */}
          <SocialMediaFeed />
        </main>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-primary hover:opacity-90 rounded-full flex items-center justify-center text-white shadow-glow hover:shadow-glow-lg transition-all duration-300 z-40"
          aria-label="Back to top"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Activities;
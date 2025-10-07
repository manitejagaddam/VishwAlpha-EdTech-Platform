import React from 'react';

import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ScrollingTicker from './components/ScrollingTicker';
import ServicesGrid from './components/ServicesGrid';
import UserPathways from './components/UserPathways';
import ImpactSection from './components/ImpactSection';
import CTASection from './components/CTASection';
import BackToTop from './components/BackToTop';

const Homepage = () => {
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        {/* Hero Section with Animated Background */}
        <HeroSection onNavigate={handleNavigation} />
        
        {/* Scrolling Ticker */}
        <ScrollingTicker />
        
        {/* Services Grid with Glowing Cards */}
        <ServicesGrid onNavigate={handleNavigation} />
        
        {/* User Pathways - Personalized Journeys */}
        <UserPathways onNavigate={handleNavigation} />
        
        {/* Impact & Testimonials */}
        <ImpactSection />
        
        {/* Final CTA Section */}
        <CTASection onNavigate={handleNavigation} />
      </main>
      {/* Floating Back to Top Button */}
      <BackToTop />
      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-gradient-primary">VishwAlpha</h3>
                  <p className="text-xs text-slate-400">Intelligent Education</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4 max-w-md">
                Transforming education through AI-powered solutions that align with NEP 2020, 
                empowering educators and unlocking every student's potential.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-violet-600 transition-colors duration-300">
                  <span className="text-white text-sm font-bold">f</span>
                </button>
                <button className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-violet-600 transition-colors duration-300">
                  <span className="text-white text-sm font-bold">t</span>
                </button>
                <button className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-violet-600 transition-colors duration-300">
                  <span className="text-white text-sm font-bold">in</span>
                </button>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => handleNavigation('/about')} className="text-slate-400 hover:text-white transition-colors duration-300">About Us</button></li>
                <li><button onClick={() => handleNavigation('/services')} className="text-slate-400 hover:text-white transition-colors duration-300">Our Services</button></li>
                <li><button onClick={() => handleNavigation('/activities')} className="text-slate-400 hover:text-white transition-colors duration-300">Activities</button></li>
                <li><button onClick={() => handleNavigation('/contact')} className="text-slate-400 hover:text-white transition-colors duration-300">Contact</button></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
              <ul className="space-y-2 text-slate-400">
                <li>ceo@vishwalpha.com</li>
                <li>+91 63019 30132</li>
                <li>Hyderabad, India</li>
                <li>Global Presence</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {new Date()?.getFullYear()} VishwAlpha. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </button>
              <button className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
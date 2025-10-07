import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import LocationMap from './components/LocationMap';
import FAQSection from './components/FAQSection';

const Contact = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Contact Us - VishwAlpha | AI-Powered Education Solutions';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <ContactHero />
        
        {/* Contact Methods */}
        <ContactMethods />
        
        {/* Contact Form */}
        <ContactForm />
        
        {/* Contact Information */}
        <ContactInfo />
        
        {/* Location & Map */}
        {/* <LocationMap /> */}
        
        {/* FAQ Section */}
        <FAQSection />
        
        {/* Trust & Security Footer */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12 bg-slate-900/80 border-t border-slate-700/50"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500/20 border border-emerald-500/40 rounded-lg">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-400" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  Data Security
                </h3>
                <p className="text-sm text-text-secondary">
                  ISO 27001 certified with end-to-end encryption and Indian data residency compliance.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-violet-500/20 border border-violet-500/40 rounded-lg">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-violet-400" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  Privacy Guaranteed
                </h3>
                <p className="text-sm text-text-secondary">
                  GDPR compliant with transparent data practices. Your information is never shared with third parties.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-500/20 border border-pink-500/40 rounded-lg">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-pink-400" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  Trusted Partner
                </h3>
                <p className="text-sm text-text-secondary">
                  Serving 10+ educational institutions with 98% satisfaction rate and proven results.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8 pt-8 border-t border-slate-700/50">
              <p className="text-sm text-text-muted">
                © {new Date()?.getFullYear()} VishwAlpha Education Technologies. All rights reserved. 
                Transforming education through intelligent AI solutions.
              </p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Contact;
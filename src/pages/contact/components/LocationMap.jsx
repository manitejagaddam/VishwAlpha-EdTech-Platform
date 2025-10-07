import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationMap = () => {
  const [activeOffice, setActiveOffice] = useState('headquarters');

  const offices = [
    {
      id: 'headquarters',
      name: 'Headquarters - Gurugram',
      address: 'Tech Park, Sector 18, Gurugram, Haryana 122015, India',
      phone: '+91 98765 43210',
      email: 'hello@vishwalpha.com',
      coordinates: '28.4595,77.0266',
      type: 'headquarters',
      features: ['Main Operations', 'R&D Center', 'Training Facility', 'Client Meetings']
    },
    {
      id: 'bangalore',
      name: 'Development Center - Bangalore',
      address: 'Innovation Hub, Electronic City, Bangalore, Karnataka 560100, India',
      phone: '+91 87654 32109',
      email: 'bangalore@vishwalpha.com',
      coordinates: '12.9716,77.5946',
      type: 'development',
      features: ['AI Development', 'Product Engineering', 'Quality Assurance', 'Technical Support']
    },
    {
      id: 'mumbai',
      name: 'Business Office - Mumbai',
      address: 'Business District, Bandra Kurla Complex, Mumbai, Maharashtra 400051, India',
      phone: '+91 76543 21098',
      email: 'mumbai@vishwalpha.com',
      coordinates: '19.0760,72.8777',
      type: 'business',
      features: ['Sales & Marketing', 'Client Relations', 'Partnerships', 'Regional Support']
    }
  ];

  const getOfficeIcon = (type) => {
    switch (type) {
      case 'headquarters': return 'Building2';
      case 'development': return 'Code';
      case 'business': return 'Briefcase';
      default: return 'MapPin';
    }
  };

  const getOfficeColor = (type) => {
    switch (type) {
      case 'headquarters': return 'violet';
      case 'development': return 'emerald';
      case 'business': return 'pink';
      default: return 'slate';
    }
  };

  const getColorClasses = (color, isActive = false) => {
    const colors = {
      violet: {
        bg: isActive ? 'bg-violet-500/20' : 'bg-violet-500/10',
        border: isActive ? 'border-violet-500/40' : 'border-violet-500/20',
        text: 'text-violet-400',
        button: 'bg-violet-500 hover:bg-violet-600'
      },
      emerald: {
        bg: isActive ? 'bg-emerald-500/20' : 'bg-emerald-500/10',
        border: isActive ? 'border-emerald-500/40' : 'border-emerald-500/20',
        text: 'text-emerald-400',
        button: 'bg-emerald-500 hover:bg-emerald-600'
      },
      pink: {
        bg: isActive ? 'bg-pink-500/20' : 'bg-pink-500/10',
        border: isActive ? 'border-pink-500/40' : 'border-pink-500/20',
        text: 'text-pink-400',
        button: 'bg-pink-500 hover:bg-pink-600'
      }
    };
    return colors?.[color];
  };

  const currentOffice = offices?.find(office => office?.id === activeOffice);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-primary mb-4">
            Visit Our Offices
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            With strategic locations across India, we're always close to our clients and partners. 
            Schedule a visit to experience our AI education solutions firsthand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Office Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {offices?.map((office, index) => {
              const isActive = activeOffice === office?.id;
              const color = getOfficeColor(office?.type);
              const colorClasses = getColorClasses(color, isActive);
              
              return (
                <motion.div
                  key={office?.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-6 rounded-xl border backdrop-blur-sm cursor-pointer transition-all duration-300 hover:scale-105 ${colorClasses?.bg} ${colorClasses?.border}`}
                  onClick={() => setActiveOffice(office?.id)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${colorClasses?.bg} ${colorClasses?.border} flex items-center justify-center`}>
                      <Icon name={getOfficeIcon(office?.type)} size={20} className={colorClasses?.text} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-text-primary mb-2">
                        {office?.name}
                      </h3>
                      <p className="text-sm text-text-secondary mb-3">
                        {office?.address}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {office?.features?.map((feature, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-1 text-xs rounded-full ${colorClasses?.bg} ${colorClasses?.text}`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-center text-sm text-text-muted">
                          <Icon name="Phone" size={14} className="mr-2" />
                          {office?.phone}
                        </div>
                        <div className="flex items-center text-sm text-text-muted">
                          <Icon name="Mail" size={14} className="mr-2" />
                          {office?.email}
                        </div>
                      </div>
                    </div>
                    
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`w-6 h-6 rounded-full ${colorClasses?.button} flex items-center justify-center`}
                      >
                        <Icon name="Check" size={12} className="text-white" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Map and Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Interactive Map */}
            <div className="glass rounded-xl overflow-hidden backdrop-blur-sm">
              <div className="h-96 relative">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={currentOffice?.name}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${currentOffice?.coordinates}&z=14&output=embed`}
                  className="rounded-xl"
                />
                
                <div className="absolute top-4 left-4 right-4">
                  <div className="glass rounded-lg p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-text-primary">
                          {currentOffice?.name}
                        </h4>
                        <p className="text-sm text-text-secondary">
                          {currentOffice?.address}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-violet-500/40 text-violet-400 hover:bg-violet-500/10"
                        onClick={() => window.open(`https://maps.google.com?q=${currentOffice?.coordinates}`, '_blank')}
                      >
                        <Icon name="ExternalLink" size={14} className="mr-2" />
                        Directions
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="default"
                className="bg-gradient-primary hover:opacity-90 text-white shadow-glow"
                onClick={() => window.open(`tel:${currentOffice?.phone}`, '_self')}
              >
                <Icon name="Phone" size={16} className="mr-2" />
                Call Office
              </Button>
              
              <Button
                variant="outline"
                className="border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10"
                onClick={() => window.open(`mailto:${currentOffice?.email}`, '_self')}
              >
                <Icon name="Mail" size={16} className="mr-2" />
                Send Email
              </Button>
              
              <Button
                variant="outline"
                className="border-pink-500/40 text-pink-400 hover:bg-pink-500/10"
                onClick={() => window.open(`https://maps.google.com?q=${currentOffice?.coordinates}`, '_blank')}
              >
                <Icon name="Navigation" size={16} className="mr-2" />
                Get Directions
              </Button>
            </div>

            {/* Visit Information */}
            <div className="glass rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-text-primary mb-4">
                Planning a Visit?
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-text-primary mb-2">
                    What to Expect
                  </h5>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li className="flex items-center">
                      <Icon name="Check" size={14} className="mr-2 text-emerald-400" />
                      Live AI demonstration
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={14} className="mr-2 text-emerald-400" />
                      Meet our expert team
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={14} className="mr-2 text-emerald-400" />
                      Customized solution discussion
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={14} className="mr-2 text-emerald-400" />
                      Implementation roadmap
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-text-primary mb-2">
                    Visit Requirements
                  </h5>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li className="flex items-center">
                      <Icon name="Calendar" size={14} className="mr-2 text-violet-400" />
                      Advance appointment required
                    </li>
                    <li className="flex items-center">
                      <Icon name="Clock" size={14} className="mr-2 text-violet-400" />
                      Allow 60-90 minutes
                    </li>
                    <li className="flex items-center">
                      <Icon name="Users" size={14} className="mr-2 text-violet-400" />
                      Bring your team (max 6 people)
                    </li>
                    <li className="flex items-center">
                      <Icon name="FileText" size={14} className="mr-2 text-violet-400" />
                      Valid ID required for entry
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-violet-500/10 border border-violet-500/20 rounded-lg">
                <p className="text-sm text-violet-400 flex items-start">
                  <Icon name="Info" size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                  Schedule your visit at least 24 hours in advance. We'll send you parking instructions 
                  and building access details via email.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
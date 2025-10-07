import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: 'MapPin',
      title: 'Headquarters',
      details: [
        'VishwAlpha Education Technologies',
        'Tech Park, Sector 18, Gurugram',
        'Haryana 122015, India'
      ],
      action: 'View on Maps',
      color: 'violet'
    },
    {
      icon: 'Phone',
      title: 'Phone Support',
      details: [
        '+91 98765 43210 (Primary)',
        '+91 87654 32109 (Support)',
        'Available: Mon-Sat, 9 AM - 7 PM IST'
      ],
      action: 'Call Now',
      color: 'pink'
    },
    {
      icon: 'Mail',
      title: 'Email Support',
      details: [
        'hello@vishwalpha.com',
        'support@vishwalpha.com',
        'partnerships@vishwalpha.com'
      ],
      action: 'Send Email',
      color: 'emerald'
    },
    {
      icon: 'MessageCircle',
      title: 'Instant Chat',
      details: [
        'WhatsApp Business: +91 98765 43210',
        'Live Chat: Available 24/7',
        'AI Assistant: Immediate responses'
      ],
      action: 'Start Chat',
      color: 'amber'
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/company/vishwalpha', color: 'blue' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/vishwalpha', color: 'sky' },
    { name: 'YouTube', icon: 'Youtube', url: 'https://youtube.com/@vishwalpha', color: 'red' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/vishwalpha', color: 'pink' }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM IST', available: true },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM IST', available: true },
    { day: 'Sunday', hours: 'Emergency Support Only', available: false }
  ];

  const getColorClasses = (color) => {
    const colors = {
      violet: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
      pink: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
      emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      amber: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      sky: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
      red: 'text-red-400 bg-red-500/10 border-red-500/20'
    };
    return colors?.[color];
  };

  return (
    <section className="py-16 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-primary mb-4">
            Multiple Ways to Connect
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Choose the communication method that works best for you. We're committed to providing 
            prompt, helpful responses across all channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactDetails?.map((detail, index) => (
            <motion.div
              key={detail?.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-xl p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${getColorClasses(detail?.color)} mb-4`}>
                <Icon name={detail?.icon} size={20} />
              </div>
              
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                {detail?.title}
              </h3>
              
              <div className="space-y-2 mb-4">
                {detail?.details?.map((item, idx) => (
                  <p key={idx} className="text-sm text-text-secondary">
                    {item}
                  </p>
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                fullWidth
                className={`${getColorClasses(detail?.color)} hover:opacity-80`}
              >
                {detail?.action}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="flex items-center mb-6">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-violet-500/20 border border-violet-500/40 rounded-lg mr-4">
                <Icon name="Clock" size={20} className="text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">
                Office Hours
              </h3>
            </div>
            
            <div className="space-y-3">
              {officeHours?.map((schedule, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-slate-700/50 last:border-b-0">
                  <span className="text-text-secondary font-medium">
                    {schedule?.day}
                  </span>
                  <div className="flex items-center">
                    <span className="text-text-primary text-sm mr-2">
                      {schedule?.hours}
                    </span>
                    <div className={`w-2 h-2 rounded-full ${schedule?.available ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
              <p className="text-sm text-emerald-400 flex items-center">
                <Icon name="Info" size={16} className="mr-2" />
                Emergency support available 24/7 for existing clients
              </p>
            </div>
          </motion.div>

          {/* Social Media & Location */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Social Media */}
            <div className="glass rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-pink-500/20 border border-pink-500/40 rounded-lg mr-4">
                  <Icon name="Share2" size={20} className="text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Follow Us
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {socialLinks?.map((social) => (
                  <Button
                    key={social?.name}
                    variant="outline"
                    size="sm"
                    className={`${getColorClasses(social?.color)} hover:opacity-80`}
                    onClick={() => window.open(social?.url, '_blank')}
                  >
                    <Icon name={social?.icon} size={16} className="mr-2" />
                    {social?.name}
                  </Button>
                ))}
              </div>
              
              <p className="text-xs text-text-muted mt-4">
                Stay updated with the latest in AI education, success stories, and industry insights.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="glass rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Response Commitment
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-400 mb-1">
                    &lt; 2hrs
                  </div>
                  <div className="text-xs text-text-muted">
                    Email Response
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400 mb-1">
                    24/7
                  </div>
                  <div className="text-xs text-text-muted">
                    Chat Support
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">
                    98%
                  </div>
                  <div className="text-xs text-text-muted">
                    Satisfaction Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400 mb-1">
                    15+
                  </div>
                  <div className="text-xs text-text-muted">
                    Languages
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
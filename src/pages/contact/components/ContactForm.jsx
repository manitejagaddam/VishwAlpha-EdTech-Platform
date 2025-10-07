import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    inquiryType: '',
    message: '',
    newsletter: false,
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const roleOptions = [
    { value: 'educator', label: 'Teacher/Educator' },
    { value: 'principal', label: 'Principal/Head' },
    { value: 'administrator', label: 'Education Administrator' },
    { value: 'parent', label: 'Parent/Guardian' },
    { value: 'student', label: 'Student' },
    { value: 'consultant', label: 'Education Consultant' },
    { value: 'policymaker', label: 'Policy Maker' },
    { value: 'other', label: 'Other' }
  ];

  const inquiryOptions = [
    { value: 'consultation', label: 'Schedule Consultation' },
    { value: 'demo', label: 'Request Demo' },
    { value: 'partnership', label: 'Partnership Inquiry' },
    { value: 'pilot', label: 'Pilot Program' },
    { value: 'support', label: 'Technical Support' },
    { value: 'pricing', label: 'Pricing Information' },
    { value: 'training', label: 'Training & Workshops' },
    { value: 'other', label: 'Other Inquiry' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        role: '',
        inquiryType: '',
        message: '',
        newsletter: false,
        privacy: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-primary mb-4">
            Start Your Transformation Journey
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Share your details and we'll connect you with the right AI education solutions for your unique needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 backdrop-blur-md"
        >
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full mb-6">
                <Icon name="CheckCircle" size={32} className="text-emerald-400" />
              </div>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                Thank You for Reaching Out!
              </h3>
              <p className="text-text-secondary mb-6">
                We've received your inquiry and will respond within 2 hours during business hours.
                Check your email for a confirmation and next steps.
              </p>
              <Button
                variant="outline"
                onClick={() => setSubmitStatus(null)}
                className="border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10"
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData?.name}
                  onChange={(e) => handleInputChange('name', e?.target?.value)}
                  required
                />
                
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData?.phone}
                  onChange={(e) => handleInputChange('phone', e?.target?.value)}
                  description="We'll use this for WhatsApp updates"
                />
                
                <Input
                  label="Organization/School"
                  type="text"
                  placeholder="Your institution name"
                  value={formData?.organization}
                  onChange={(e) => handleInputChange('organization', e?.target?.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Your Role"
                  placeholder="Select your role"
                  options={roleOptions}
                  value={formData?.role}
                  onChange={(value) => handleInputChange('role', value)}
                  required
                />
                
                <Select
                  label="Inquiry Type"
                  placeholder="What can we help with?"
                  options={inquiryOptions}
                  value={formData?.inquiryType}
                  onChange={(value) => handleInputChange('inquiryType', value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 resize-none"
                  rows={5}
                  placeholder="Tell us about your educational goals, challenges, or specific requirements..."
                  value={formData?.message}
                  onChange={(e) => handleInputChange('message', e?.target?.value)}
                  required
                />
                <p className="text-xs text-text-muted mt-1">
                  Minimum 50 characters. Be specific about your needs for better assistance.
                </p>
              </div>

              <div className="space-y-4">
                <Checkbox
                  label="Subscribe to our newsletter for education insights and AI updates"
                  checked={formData?.newsletter}
                  onChange={(e) => handleInputChange('newsletter', e?.target?.checked)}
                />
                
                <Checkbox
                  label="I agree to the Privacy Policy and Terms of Service"
                  description="Required to process your inquiry and provide personalized recommendations"
                  checked={formData?.privacy}
                  onChange={(e) => handleInputChange('privacy', e?.target?.checked)}
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  type="submit"
                  variant="default"
                  loading={isSubmitting}
                  disabled={!formData?.privacy}
                  className="bg-gradient-primary hover:opacity-90 text-white shadow-glow hover:shadow-glow-lg flex-1"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  className="border-violet-500/40 text-violet-400 hover:bg-violet-500/10 sm:w-auto"
                  onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                >
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  WhatsApp Chat
                </Button>
              </div>

              {submitStatus === 'error' && (
                <div className="flex items-center p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                  <Icon name="AlertCircle" size={20} className="mr-3" />
                  <span>Failed to send message. Please try again or contact us directly.</span>
                </div>
              )}
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm text-text-muted">
            <div className="flex items-center">
              <Icon name="Shield" size={16} className="mr-2 text-emerald-400" />
              SSL Encrypted & GDPR Compliant
            </div>
            <div className="flex items-center">
              <Icon name="Clock" size={16} className="mr-2 text-violet-400" />
              Response within 2 hours
            </div>
            <div className="flex items-center">
              <Icon name="Award" size={16} className="mr-2 text-pink-400" />
              ISO 27001 Certified
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
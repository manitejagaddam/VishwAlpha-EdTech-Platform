import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceComparison = () => {
  const [selectedInstitution, setSelectedInstitution] = useState('school');

  const institutionTypes = [
    { id: 'school', name: 'K-12 Schools', icon: 'School' },
    { id: 'college', name: 'Colleges', icon: 'GraduationCap' },
    { id: 'university', name: 'Universities', icon: 'Building2' },
    { id: 'coaching', name: 'Coaching Centers', icon: 'Users' }
  ];

  const comparisonData = {
    school: {
      features: [
        { name: 'AI-Powered Learning Analytics', basic: true, premium: true, enterprise: true },
        { name: 'Student Performance Tracking', basic: true, premium: true, enterprise: true },
        { name: 'Personalized Learning Paths', basic: false, premium: true, enterprise: true },
        { name: 'Parent Communication Portal', basic: true, premium: true, enterprise: true },
        { name: 'NEP 2020 Compliance Tools', basic: false, premium: true, enterprise: true },
        { name: 'Advanced Career Guidance', basic: false, premium: false, enterprise: true },
        { name: 'Multi-language Support', basic: false, premium: true, enterprise: true },
        { name: 'Custom Integrations', basic: false, premium: false, enterprise: true }
      ],
      pricing: {
        basic: { amount: '2,999', students: '100' },
        premium: { amount: '7,999', students: '500' },
        enterprise: { amount: '19,999', students: 'Unlimited' }
      }
    },
    college: {
      features: [
        { name: 'Advanced Analytics Dashboard', basic: true, premium: true, enterprise: true },
        { name: 'Skill Assessment Tools', basic: true, premium: true, enterprise: true },
        { name: 'Industry Collaboration Platform', basic: false, premium: true, enterprise: true },
        { name: 'Placement Assistance AI', basic: false, premium: true, enterprise: true },
        { name: 'Research Project Management', basic: false, premium: false, enterprise: true },
        { name: 'Alumni Network Integration', basic: false, premium: false, enterprise: true },
        { name: 'Corporate Partnership Tools', basic: false, premium: true, enterprise: true },
        { name: 'Advanced Reporting Suite', basic: false, premium: false, enterprise: true }
      ],
      pricing: {
        basic: { amount: '9,999', students: '500' },
        premium: { amount: '24,999', students: '2000' },
        enterprise: { amount: '49,999', students: 'Unlimited' }
      }
    },
    university: {
      features: [
        { name: 'Enterprise-Grade Analytics', basic: true, premium: true, enterprise: true },
        { name: 'Multi-Campus Management', basic: false, premium: true, enterprise: true },
        { name: 'Research Analytics Platform', basic: false, premium: true, enterprise: true },
        { name: 'Global Collaboration Tools', basic: false, premium: false, enterprise: true },
        { name: 'Advanced AI Models', basic: false, premium: false, enterprise: true },
        { name: 'Custom Development', basic: false, premium: false, enterprise: true },
        { name: 'Dedicated Support Team', basic: false, premium: true, enterprise: true },
        { name: 'White-label Solutions', basic: false, premium: false, enterprise: true }
      ],
      pricing: {
        basic: { amount: '19,999', students: '1000' },
        premium: { amount: '49,999', students: '5000' },
        enterprise: { amount: '99,999', students: 'Unlimited' }
      }
    },
    coaching: {
      features: [
        { name: 'Performance Analytics', basic: true, premium: true, enterprise: true },
        { name: 'Mock Test Platform', basic: true, premium: true, enterprise: true },
        { name: 'Competitive Exam Prep', basic: true, premium: true, enterprise: true },
        { name: 'Parent Progress Reports', basic: false, premium: true, enterprise: true },
        { name: 'Batch Management Tools', basic: false, premium: true, enterprise: true },
        { name: 'Advanced Question Banks', basic: false, premium: false, enterprise: true },
        { name: 'Multi-location Support', basic: false, premium: false, enterprise: true },
        { name: 'Franchise Management', basic: false, premium: false, enterprise: true }
      ],
      pricing: {
        basic: { amount: '4,999', students: '200' },
        premium: { amount: '12,999', students: '1000' },
        enterprise: { amount: '29,999', students: 'Unlimited' }
      }
    }
  };

  const plans = ['basic', 'premium', 'enterprise'];
  const planNames = {
    basic: 'Basic',
    premium: 'Premium',
    enterprise: 'Enterprise'
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Tailored solutions for different educational institutions with transparent pricing and comprehensive features
          </p>
        </motion.div>

        {/* Institution Type Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {institutionTypes?.map((type) => (
            <button
              key={type?.id}
              onClick={() => setSelectedInstitution(type?.id)}
              className={`flex items-center px-6 py-3 rounded-lg border transition-all duration-300 ${
                selectedInstitution === type?.id
                  ? 'bg-gradient-primary text-white border-primary shadow-glow'
                  : 'bg-card text-text-secondary border-border hover:border-primary/40 hover:text-text-primary'
              }`}
            >
              <Icon name={type?.icon} size={20} className="mr-2" />
              {type?.name}
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          key={selectedInstitution}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-card border border-border rounded-xl overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-4 bg-muted/30">
            <div className="p-6">
              <h3 className="font-semibold text-text-primary">Features</h3>
            </div>
            {plans?.map((plan) => (
              <div key={plan} className="p-6 text-center border-l border-border">
                <h4 className="font-semibold text-text-primary mb-2">{planNames?.[plan]}</h4>
                <div className="text-2xl font-bold text-gradient-primary mb-1">
                  ₹{comparisonData?.[selectedInstitution]?.pricing?.[plan]?.amount}
                </div>
                <div className="text-sm text-text-secondary">
                  Up to {comparisonData?.[selectedInstitution]?.pricing?.[plan]?.students} students
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="divide-y divide-border">
            {comparisonData?.[selectedInstitution]?.features?.map((feature, index) => (
              <div key={index} className="grid grid-cols-4 hover:bg-muted/10 transition-colors duration-200">
                <div className="p-4">
                  <span className="text-text-secondary">{feature?.name}</span>
                </div>
                {plans?.map((plan) => (
                  <div key={plan} className="p-4 text-center border-l border-border">
                    {feature?.[plan] ? (
                      <Icon name="Check" size={20} className="text-success mx-auto" />
                    ) : (
                      <Icon name="X" size={20} className="text-error mx-auto" />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-4 bg-muted/30 border-t border-border">
            <div className="p-6"></div>
            {plans?.map((plan) => (
              <div key={plan} className="p-6 text-center border-l border-border">
                <Button
                  variant={plan === 'premium' ? 'default' : 'outline'}
                  fullWidth
                  className={plan === 'premium' ? 'bg-gradient-primary text-white' : 'border-primary/20'}
                >
                  {plan === 'basic' ? 'Start Free Trial' : plan === 'premium' ? 'Most Popular' : 'Contact Sales'}
                </Button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-text-secondary mb-4">
            All plans include 24/7 support, regular updates, and data security compliance
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-text-muted">
            <span className="flex items-center">
              <Icon name="Shield" size={16} className="mr-2 text-success" />
              SOC 2 Compliant
            </span>
            <span className="flex items-center">
              <Icon name="Lock" size={16} className="mr-2 text-success" />
              GDPR Ready
            </span>
            <span className="flex items-center">
              <Icon name="Award" size={16} className="mr-2 text-success" />
              ISO 27001 Certified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;
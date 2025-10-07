import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, index, onDemoRequest }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/40 overflow-hidden">
        {/* Gradient Border Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-20' : ''}`} />
        
        {/* Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl blur-xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${isHovered ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-muted'}`}>
              <Icon 
                name={service?.icon} 
                size={24} 
                className={`transition-colors duration-300 ${isHovered ? 'text-white' : 'text-primary'}`} 
              />
            </div>
          </div>

          {/* Content */}
          <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-gradient-primary transition-all duration-300">
            {service?.title}
          </h3>
          
          <p className="text-text-secondary mb-4 leading-relaxed">
            {service?.description}
          </p>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {service?.features?.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-text-secondary">
                <Icon name="Check" size={16} className="text-success mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Pricing */}
          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-text-primary">₹{service?.pricing?.amount}</span>
              <span className="text-text-secondary ml-1">/{service?.pricing?.period}</span>
            </div>
            <p className="text-xs text-text-muted mt-1">{service?.pricing?.note}</p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              variant="default"
              fullWidth
              className="bg-gradient-primary hover:opacity-90 text-white"
              onClick={() => onDemoRequest(service)}
            >
              Request Demo
            </Button>
            <Button
              variant="outline"
              fullWidth
              className="border-primary/20 text-text-secondary hover:text-text-primary hover:border-primary/40"
            >
              Learn More
            </Button>
          </div>

          {/* Success Metrics */}
          {service?.metrics && (
            <div className="mt-4 pt-4 border-t border-border">
              <div className="grid grid-cols-2 gap-4">
                {service?.metrics?.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-lg font-semibold text-primary">{metric?.value}</div>
                    <div className="text-xs text-text-muted">{metric?.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
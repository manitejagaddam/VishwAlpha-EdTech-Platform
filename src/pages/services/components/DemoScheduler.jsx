import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const DemoScheduler = ({ isOpen, onClose, selectedService }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    role: '',
    students: '',
    preferredDate: '',
    preferredTime: '',
    interests: [],
    message: ''
  });

  const [selectedSlots, setSelectedSlots] = useState([]);

  const steps = [
    { title: 'Personal Information', icon: 'User' },
    { title: 'Institution Details', icon: 'Building' },
    { title: 'Schedule Demo', icon: 'Calendar' },
    { title: 'Confirmation', icon: 'CheckCircle' }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const interests = [
    'AI Analytics Dashboard',
    'Student Performance Tracking',
    'Personalized Learning Paths',
    'Career Recommendation System',
    'NEP 2020 Compliance Tools',
    'Parent Communication Portal'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev?.interests?.includes(interest)
        ? prev?.interests?.filter(i => i !== interest)
        : [...prev?.interests, interest]
    }));
  };

  const nextStep = () => {
    if (currentStep < steps?.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Mock submission
    console.log('Demo scheduled:', formData);
    nextStep();
  };

  const generateAvailableSlots = () => {
    const slots = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date?.setDate(today?.getDate() + i);
      
      // Skip weekends
      if (date?.getDay() === 0 || date?.getDay() === 6) continue;
      
      slots?.push({
        date: date?.toISOString()?.split('T')?.[0],
        dateString: date?.toLocaleDateString('en-IN', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        }),
        times: timeSlots
      });
    }
    
    return slots?.slice(0, 7); // Show next 7 working days
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-card border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e?.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-text-primary">
                  Schedule Your Demo
                </h2>
                <p className="text-text-secondary mt-1">
                  {selectedService ? `${selectedService?.title} Demo` : 'VishwAlpha AI Platform Demo'}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-text-secondary hover:text-text-primary"
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="px-6 py-4 border-b border-border">
            <div className="flex items-center justify-between">
              {steps?.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                    index <= currentStep 
                      ? 'bg-gradient-primary border-primary text-white' :'border-border text-text-muted'
                  }`}>
                    <Icon name={step?.icon} size={16} />
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <div className={`text-sm font-medium ${
                      index <= currentStep ? 'text-text-primary' : 'text-text-muted'
                    }`}>
                      {step?.title}
                    </div>
                  </div>
                  {index < steps?.length - 1 && (
                    <div className={`w-12 h-0.5 mx-4 ${
                      index < currentStep ? 'bg-primary' : 'bg-border'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentStep === 0 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-text-primary mb-4">
                      Tell us about yourself
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
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
                        placeholder="your.email@institution.edu"
                        value={formData?.email}
                        onChange={(e) => handleInputChange('email', e?.target?.value)}
                        required
                      />
                      <Input
                        label="Phone Number"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData?.phone}
                        onChange={(e) => handleInputChange('phone', e?.target?.value)}
                        required
                      />
                      <Input
                        label="Your Role"
                        type="text"
                        placeholder="e.g., Principal, IT Director, Teacher"
                        value={formData?.role}
                        onChange={(e) => handleInputChange('role', e?.target?.value)}
                        required
                      />
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-text-primary mb-4">
                      Institution Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Institution Name"
                        type="text"
                        placeholder="Enter institution name"
                        value={formData?.institution}
                        onChange={(e) => handleInputChange('institution', e?.target?.value)}
                        required
                      />
                      <Input
                        label="Number of Students"
                        type="number"
                        placeholder="e.g., 500"
                        value={formData?.students}
                        onChange={(e) => handleInputChange('students', e?.target?.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-3">
                        Areas of Interest
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {interests?.map((interest) => (
                          <button
                            key={interest}
                            onClick={() => handleInterestToggle(interest)}
                            className={`p-3 text-left rounded-lg border transition-all duration-200 ${
                              formData?.interests?.includes(interest)
                                ? 'bg-primary/10 border-primary text-primary' :'bg-muted/30 border-border text-text-secondary hover:border-primary/40'
                            }`}
                          >
                            <div className="flex items-center">
                              <Icon 
                                name={formData?.interests?.includes(interest) ? "CheckSquare" : "Square"} 
                                size={16} 
                                className="mr-2" 
                              />
                              {interest}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Additional Message (Optional)
                      </label>
                      <textarea
                        className="w-full p-3 bg-input border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        rows={4}
                        placeholder="Tell us about your specific needs or questions..."
                        value={formData?.message}
                        onChange={(e) => handleInputChange('message', e?.target?.value)}
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-text-primary mb-4">
                      Choose Your Preferred Time
                    </h3>
                    
                    <div className="grid gap-4">
                      {generateAvailableSlots()?.map((slot) => (
                        <div key={slot?.date} className="border border-border rounded-lg p-4">
                          <h4 className="font-medium text-text-primary mb-3">{slot?.dateString}</h4>
                          <div className="grid grid-cols-4 gap-2">
                            {slot?.times?.map((time) => (
                              <button
                                key={`${slot?.date}-${time}`}
                                onClick={() => {
                                  handleInputChange('preferredDate', slot?.date);
                                  handleInputChange('preferredTime', time);
                                }}
                                className={`p-2 text-sm rounded-lg border transition-all duration-200 ${
                                  formData?.preferredDate === slot?.date && formData?.preferredTime === time
                                    ? 'bg-gradient-primary text-white border-primary' :'bg-muted/30 border-border text-text-secondary hover:border-primary/40'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {formData?.preferredDate && formData?.preferredTime && (
                      <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                        <div className="flex items-center text-success mb-2">
                          <Icon name="Calendar" size={20} className="mr-2" />
                          <span className="font-semibold">Selected Time</span>
                        </div>
                        <p className="text-text-secondary">
                          {new Date(formData.preferredDate)?.toLocaleDateString('en-IN', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })} at {formData?.preferredTime}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                      <Icon name="CheckCircle" size={40} className="text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-semibold text-text-primary mb-2">
                        Demo Scheduled Successfully!
                      </h3>
                      <p className="text-text-secondary">
                        We've sent a confirmation email with meeting details and calendar invite.
                      </p>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-6 text-left max-w-md mx-auto">
                      <h4 className="font-semibold text-text-primary mb-4">Demo Details:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-text-muted">Date:</span>
                          <span className="text-text-primary">
                            {new Date(formData.preferredDate)?.toLocaleDateString('en-IN')}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">Time:</span>
                          <span className="text-text-primary">{formData?.preferredTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">Duration:</span>
                          <span className="text-text-primary">45 minutes</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">Platform:</span>
                          <span className="text-text-primary">Google Meet</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button
                        variant="default"
                        className="bg-gradient-primary text-white"
                        onClick={onClose}
                      >
                        Close
                      </Button>
                      <p className="text-text-muted text-sm">
                        Questions? Contact us at demo@vishwalpha.com
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer */}
          {currentStep < 3 && (
            <div className="p-6 border-t border-border">
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="border-primary/20"
                >
                  <Icon name="ChevronLeft" size={16} className="mr-2" />
                  Previous
                </Button>
                
                {currentStep === 2 ? (
                  <Button
                    variant="default"
                    onClick={handleSubmit}
                    disabled={!formData?.preferredDate || !formData?.preferredTime}
                    className="bg-gradient-primary text-white"
                  >
                    Schedule Demo
                    <Icon name="Calendar" size={16} className="ml-2" />
                  </Button>
                ) : (
                  <Button
                    variant="default"
                    onClick={nextStep}
                    className="bg-gradient-primary text-white"
                  >
                    Next Step
                    <Icon name="ChevronRight" size={16} className="ml-2" />
                  </Button>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DemoScheduler;
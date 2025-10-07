import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const InteractiveDemo = ({ isOpen, onClose, service }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [demoData, setDemoData] = useState({
    studentName: '',
    grade: '',
    subject: '',
    skillLevel: ''
  });

  const demoSteps = [
    {
      title: "Student Information",
      description: "Enter basic student details to personalize the AI experience",
      fields: [
        { name: 'studentName', label: 'Student Name', type: 'text', placeholder: 'Enter student name' },
        { name: 'grade', label: 'Grade Level', type: 'text', placeholder: 'e.g., Grade 10' }
      ]
    },
    {
      title: "Subject & Skills",
      description: "Select subject area and current skill level for targeted recommendations",
      fields: [
        { name: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g., Mathematics' },
        { name: 'skillLevel', label: 'Skill Level', type: 'text', placeholder: 'Beginner/Intermediate/Advanced' }
      ]
    },
    {
      title: "AI Analysis Results",
      description: "See how our AI processes and provides personalized recommendations",
      isResult: true
    }
  ];

  const handleInputChange = (field, value) => {
    setDemoData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < demoSteps?.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateMockResults = () => {
    return {
      recommendations: [
        "Focus on algebraic problem-solving techniques",
        "Strengthen geometry visualization skills",
        "Practice advanced calculus concepts",
        "Develop statistical analysis abilities"
      ],
      skillGaps: [
        { skill: "Problem Solving", current: 75, target: 90 },
        { skill: "Analytical Thinking", current: 80, target: 95 },
        { skill: "Mathematical Reasoning", current: 70, target: 85 }
      ],
      careerPaths: [
        "Data Scientist",
        "Software Engineer",
        "Financial Analyst",
        "Research Scientist"
      ]
    };
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
          className="bg-card border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e?.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-text-primary">
                  {service?.title} Demo
                </h2>
                <p className="text-text-secondary mt-1">
                  Experience AI-powered education in action
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

          {/* Progress Bar */}
          <div className="px-6 py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-text-secondary">
                Step {currentStep + 1} of {demoSteps?.length}
              </span>
              <span className="text-sm text-text-secondary">
                {Math.round(((currentStep + 1) / demoSteps?.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / demoSteps?.length) * 100}%` }}
              />
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
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {demoSteps?.[currentStep]?.title}
                </h3>
                <p className="text-text-secondary mb-6">
                  {demoSteps?.[currentStep]?.description}
                </p>

                {demoSteps?.[currentStep]?.isResult ? (
                  <div className="space-y-6">
                    {/* AI Analysis Results */}
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                        <Icon name="Brain" size={20} className="text-primary mr-2" />
                        AI Recommendations
                      </h4>
                      <ul className="space-y-2">
                        {generateMockResults()?.recommendations?.map((rec, idx) => (
                          <li key={idx} className="flex items-start text-text-secondary">
                            <Icon name="ArrowRight" size={16} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skill Gap Analysis */}
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                        <Icon name="TrendingUp" size={20} className="text-secondary mr-2" />
                        Skill Gap Analysis
                      </h4>
                      <div className="space-y-3">
                        {generateMockResults()?.skillGaps?.map((skill, idx) => (
                          <div key={idx}>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-text-secondary">{skill?.skill}</span>
                              <span className="text-text-primary">{skill?.current}% → {skill?.target}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-gradient-secondary h-2 rounded-full"
                                style={{ width: `${skill?.current}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Career Recommendations */}
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                        <Icon name="Target" size={20} className="text-accent mr-2" />
                        Career Path Suggestions
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {generateMockResults()?.careerPaths?.map((career, idx) => (
                          <div key={idx} className="bg-background/50 rounded-lg p-3 text-center">
                            <span className="text-text-secondary text-sm">{career}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {demoSteps?.[currentStep]?.fields?.map((field) => (
                      <Input
                        key={field?.name}
                        label={field?.label}
                        type={field?.type}
                        placeholder={field?.placeholder}
                        value={demoData?.[field?.name]}
                        onChange={(e) => handleInputChange(field?.name, e?.target?.value)}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer */}
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
              
              {currentStep === demoSteps?.length - 1 ? (
                <Button
                  variant="default"
                  className="bg-gradient-primary text-white"
                  onClick={onClose}
                >
                  Schedule Full Demo
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InteractiveDemo;
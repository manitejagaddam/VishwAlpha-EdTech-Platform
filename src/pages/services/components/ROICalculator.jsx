import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    students: 500,
    teachers: 25,
    currentCosts: 50000,
    implementationCost: 25000
  });

  const [results, setResults] = useState({
    monthlySavings: 0,
    annualSavings: 0,
    roiPercentage: 0,
    paybackMonths: 0,
    productivityGain: 0
  });

  const calculateROI = () => {
    const { students, teachers, currentCosts, implementationCost } = inputs;
    
    // Mock calculations based on industry averages
    const efficiencyGain = 0.25; // 25% efficiency improvement
    const monthlySavings = (currentCosts * efficiencyGain);
    const annualSavings = monthlySavings * 12;
    const roiPercentage = ((annualSavings - implementationCost) / implementationCost) * 100;
    const paybackMonths = implementationCost / monthlySavings;
    const productivityGain = teachers * 0.3 * 8 * 22; // 30% productivity gain per teacher

    setResults({
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      roiPercentage: Math.round(roiPercentage),
      paybackMonths: Math.round(paybackMonths),
      productivityGain: Math.round(productivityGain)
    });
  };

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseInt(value) || 0
    }));
  };

  const benefits = [
    {
      icon: 'TrendingUp',
      title: 'Increased Efficiency',
      description: 'Automate administrative tasks and reduce manual workload by 25%'
    },
    {
      icon: 'Users',
      title: 'Better Student Outcomes',
      description: 'Personalized learning paths improve student performance by 30%'
    },
    {
      icon: 'Clock',
      title: 'Time Savings',
      description: 'Teachers save 2+ hours daily on grading and progress tracking'
    },
    {
      icon: 'Target',
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions with real-time analytics and insights'
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-4">
            Calculate Your ROI
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Discover the financial impact of implementing VishwAlpha's AI-powered education solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center">
              <Icon name="Calculator" size={24} className="text-primary mr-3" />
              Institution Details
            </h3>

            <div className="space-y-6">
              <Input
                label="Number of Students"
                type="number"
                value={inputs?.students}
                onChange={(e) => handleInputChange('students', e?.target?.value)}
                description="Total enrolled students in your institution"
              />

              <Input
                label="Number of Teachers"
                type="number"
                value={inputs?.teachers}
                onChange={(e) => handleInputChange('teachers', e?.target?.value)}
                description="Full-time teaching staff members"
              />

              <Input
                label="Current Monthly Operational Costs (₹)"
                type="number"
                value={inputs?.currentCosts}
                onChange={(e) => handleInputChange('currentCosts', e?.target?.value)}
                description="Administrative and educational technology costs"
              />

              <Input
                label="Implementation Investment (₹)"
                type="number"
                value={inputs?.implementationCost}
                onChange={(e) => handleInputChange('implementationCost', e?.target?.value)}
                description="One-time setup and training costs"
              />
            </div>

            <div className="mt-8 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-text-secondary">
                <Icon name="Info" size={16} className="inline mr-2" />
                Calculations based on industry averages and real customer data
              </p>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* ROI Metrics */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center">
                <Icon name="BarChart3" size={24} className="text-secondary mr-3" />
                Your ROI Analysis
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                  <div className="text-3xl font-bold text-gradient-primary mb-2">
                    ₹{results?.monthlySavings?.toLocaleString()}
                  </div>
                  <div className="text-sm text-text-secondary">Monthly Savings</div>
                </div>

                <div className="text-center p-4 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg">
                  <div className="text-3xl font-bold text-gradient-secondary mb-2">
                    ₹{results?.annualSavings?.toLocaleString()}
                  </div>
                  <div className="text-sm text-text-secondary">Annual Savings</div>
                </div>

                <div className="text-center p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-gradient-primary mb-2">
                    {results?.roiPercentage}%
                  </div>
                  <div className="text-sm text-text-secondary">ROI in Year 1</div>
                </div>

                <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                  <div className="text-3xl font-bold text-gradient-secondary mb-2">
                    {results?.paybackMonths}
                  </div>
                  <div className="text-sm text-text-secondary">Payback Period (Months)</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-lg">
                <div className="flex items-center text-success mb-2">
                  <Icon name="TrendingUp" size={20} className="mr-2" />
                  <span className="font-semibold">Productivity Boost</span>
                </div>
                <p className="text-text-secondary">
                  Save approximately <span className="font-semibold text-text-primary">{results?.productivityGain} hours</span> per month across your teaching staff
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h4 className="text-xl font-semibold text-text-primary mb-6">
                Additional Benefits
              </h4>
              <div className="space-y-4">
                {benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Icon name={benefit?.icon} size={20} className="text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-text-primary mb-1">{benefit?.title}</h5>
                      <p className="text-text-secondary text-sm">{benefit?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-primary text-white shadow-glow hover:shadow-glow-lg"
              >
                Schedule ROI Consultation
                <Icon name="Calendar" size={20} className="ml-2" />
              </Button>
              <p className="text-text-muted text-sm mt-2">
                Get a detailed ROI analysis tailored to your institution
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
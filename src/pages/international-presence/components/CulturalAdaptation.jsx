import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CulturalAdaptation = () => {
  const [selectedRegion, setSelectedRegion] = useState('india');

  const culturalAdaptations = {
    india: {
      name: 'India',
      flag: '🇮🇳',
      languages: ['Hindi', 'English', 'Tamil', 'Bengali', 'Telugu', 'Marathi'],
      currency: '₹ INR',
      educationSystem: 'NEP 2020 Framework',
      culturalElements: [
        {
          icon: 'BookOpen',
          title: 'Vedic Learning Integration',
          description: 'Ancient Indian wisdom integrated with modern AI pedagogy for holistic education'
        },
        {
          icon: 'Users',
          title: 'Joint Family Learning',
          description: 'Family-centric learning approaches respecting Indian social structures'
        },
        {
          icon: 'Calendar',
          title: 'Festival-Based Learning',
          description: 'Educational content aligned with Indian festivals and cultural celebrations'
        },
        {
          icon: 'Globe',
          title: 'Regional Language Support',
          description: 'AI solutions available in 12+ Indian regional languages'
        }
      ],
      successStory: {
        title: 'Rural Education Transformation in Rajasthan',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
        description: `VishwAlpha's culturally-adapted AI solutions helped transform 500+ rural schools in Rajasthan, integrating local folklore and traditional knowledge systems with modern STEM education. The program achieved 85% improvement in student engagement and 70% increase in learning outcomes.`,
        metrics: [
          { label: 'Schools Transformed', value: '500+' },
          { label: 'Students Impacted', value: '125K+' },
          { label: 'Languages Supported', value: '12+' },
          { label: 'Cultural Modules', value: '200+' }
        ]
      }
    },
    singapore: {
      name: 'Singapore',flag: '🇸🇬',
      languages: ['English', 'Mandarin', 'Malay', 'Tamil'],
      currency: 'S$ SGD',educationSystem: 'Smart Nation Initiative',
      culturalElements: [
        {
          icon: 'Languages',title: 'Multilingual AI',description: 'Seamless switching between English, Mandarin, Malay, and Tamil in learning interfaces'
        },
        {
          icon: 'Building2',title: 'Urban Learning Optimization',description: 'AI solutions designed for high-density urban educational environments'
        },
        {
          icon: 'Zap',title: 'Technology Integration',description: 'Advanced integration with Singapore\'s digital infrastructure and smart city systems'
        },
        {
          icon: 'Award',
          title: 'Excellence Standards',
          description: 'Alignment with Singapore\'s high academic standards and meritocratic values'
        }
      ],
      successStory: {
        title: 'Bilingual STEM Excellence Program',
        image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400',
        description: `Implementation of AI-powered bilingual STEM education across 150 Singapore schools, enabling students to learn complex concepts in both English and Mandarin. The program enhanced cross-cultural understanding while maintaining academic excellence.`,
        metrics: [
          { label: 'Bilingual Schools', value: '150+' },
          { label: 'Student Participants', value: '45K+' },
          { label: 'Language Pairs', value: '6+' },
          { label: 'STEM Modules', value: '180+' }
        ]
      }
    },
    uae: {
      name: 'United Arab Emirates',
      flag: '🇦🇪',
      languages: ['Arabic', 'English', 'Urdu', 'Hindi'],
      currency: 'د.إ AED',
      educationSystem: 'Vision 2071 Framework',
      culturalElements: [
        {
          icon: 'Crescent',
          title: 'Islamic Values Integration',
          description: 'Educational content respecting Islamic principles and cultural values'
        },
        {
          icon: 'Globe2',
          title: 'Multicultural Harmony',
          description: 'AI solutions accommodating diverse expatriate communities and cultures'
        },
        {
          icon: 'Sparkles',
          title: 'Innovation Culture',
          description: 'Emphasis on entrepreneurship and innovation aligned with UAE\'s vision'
        },
        {
          icon: 'Languages',
          title: 'Arabic-English Bilingual',
          description: 'Sophisticated Arabic NLP capabilities with seamless English integration'
        }
      ],
      successStory: {
        title: 'Multicultural AI Education Initiative',
        image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400',
        description: `VishwAlpha's culturally-sensitive AI platform successfully integrated diverse educational needs across UAE's multicultural student population, supporting Arabic, English, and heritage languages while promoting Emirati values and global citizenship.`,
        metrics: [
          { label: 'Multicultural Schools', value: '200+' },
          { label: 'Diverse Students', value: '80K+' },
          { label: 'Cultural Backgrounds', value: '50+' },
          { label: 'Heritage Languages', value: '15+' }
        ]
      }
    },
    uk: {
      name: 'United Kingdom',
      flag: '🇬🇧',
      languages: ['English', 'Welsh', 'Scottish Gaelic'],
      currency: '£ GBP',
      educationSystem: 'National Curriculum Framework',
      culturalElements: [
        {
          icon: 'Crown',
          title: 'British Educational Heritage',
          description: 'Respect for traditional British educational values while embracing innovation'
        },
        {
          icon: 'Shield',
          title: 'GDPR Compliance',
          description: 'Strict adherence to European data protection and privacy regulations'
        },
        {
          icon: 'BookMarked',
          title: 'Academic Rigor',
          description: 'Alignment with rigorous British academic standards and assessment methods'
        },
        {
          icon: 'Users2',
          title: 'Inclusive Education',
          description: 'Support for diverse learning needs and inclusive educational practices'
        }
      ],
      successStory: {
        title: 'GCSE AI Enhancement Program',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400',
        description: `Partnership with 300+ UK secondary schools to integrate AI-powered personalized learning into GCSE preparation, resulting in 25% improvement in student outcomes and enhanced teacher effectiveness through intelligent analytics.`,
        metrics: [
          { label: 'Partner Schools', value: '300+' },
          { label: 'GCSE Students', value: '75K+' },
          { label: 'Subject Areas', value: '15+' },
          { label: 'Outcome Improvement', value: '25%' }
        ]
      }
    }
  };

  const regions = Object.keys(culturalAdaptations);
  const currentRegion = culturalAdaptations?.[selectedRegion];

  return (
    <div className="space-y-8">
      {/* Region Selector */}
      <div className="flex flex-wrap gap-4 justify-center">
        {regions?.map((region) => (
          <motion.button
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all duration-300 ${
              selectedRegion === region
                ? 'border-primary bg-primary/10 text-primary shadow-glow'
                : 'border-border bg-card text-text-secondary hover:border-primary/30'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-2xl">{culturalAdaptations?.[region]?.flag}</span>
            <span className="font-medium">{culturalAdaptations?.[region]?.name}</span>
          </motion.button>
        ))}
      </div>
      {/* Cultural Adaptation Content */}
      <motion.div
        key={selectedRegion}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-8"
      >
        {/* Region Overview */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl">{currentRegion?.flag}</span>
            <div>
              <h2 className="text-2xl font-bold text-text-primary">{currentRegion?.name}</h2>
              <p className="text-text-secondary">Cultural Adaptation & Localization</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Icon name="Languages" size={20} className="text-primary" />
              </div>
              <div>
                <div className="text-sm text-text-muted">Languages</div>
                <div className="font-medium text-text-primary">{currentRegion?.languages?.join(', ')}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Icon name="DollarSign" size={20} className="text-secondary" />
              </div>
              <div>
                <div className="text-sm text-text-muted">Currency</div>
                <div className="font-medium text-text-primary">{currentRegion?.currency}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Icon name="GraduationCap" size={20} className="text-accent" />
              </div>
              <div>
                <div className="text-sm text-text-muted">Education System</div>
                <div className="font-medium text-text-primary">{currentRegion?.educationSystem}</div>
              </div>
            </div>
          </div>

          {/* Cultural Elements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentRegion?.culturalElements?.map((element, index) => (
              <motion.div
                key={index}
                className="flex gap-4 p-4 bg-muted/30 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={element?.icon} size={20} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">{element?.title}</h3>
                  <p className="text-sm text-text-secondary">{element?.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Star" size={20} className="text-accent" />
                <span className="text-sm font-medium text-accent">Success Story</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">{currentRegion?.successStory?.title}</h3>
              <p className="text-text-secondary mb-6">{currentRegion?.successStory?.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                {currentRegion?.successStory?.metrics?.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg font-bold text-primary mb-1">{metric?.value}</div>
                    <div className="text-xs text-text-muted">{metric?.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <Image
                src={currentRegion?.successStory?.image}
                alt={currentRegion?.successStory?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Localization Features */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
          <h3 className="text-xl font-bold text-text-primary mb-6 text-center">Localization Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Language Processing</h4>
              <p className="text-sm text-text-secondary">Advanced NLP capabilities for local languages with cultural context understanding</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" size={24} className="text-secondary" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Cultural Calendar</h4>
              <p className="text-sm text-text-secondary">Educational content aligned with local festivals, holidays, and cultural events</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-accent" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Social Adaptation</h4>
              <p className="text-sm text-text-secondary">Learning approaches that respect local social structures and family dynamics</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CulturalAdaptation;
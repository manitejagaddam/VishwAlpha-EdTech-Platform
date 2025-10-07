import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PartnershipPortal = () => {
  const [activeTab, setActiveTab] = useState('schools');

  const partnershipTypes = [
    {
      id: 'schools',
      name: 'Educational Institutions',
      icon: 'GraduationCap',
      description: 'Partner with schools and universities worldwide',
      count: '10+'
    },
    {
      id: 'government',
      name: 'Government Bodies',
      icon: 'Building2',
      description: 'Collaborate with education ministries and agencies',
      count: '2+'
    },
    {
      id: 'technology',
      name: 'Technology Partners',
      icon: 'Cpu',
      description: 'Integrate with leading EdTech platforms',
      count: '10+'
    },
    {
      id: 'research',
      name: 'Research Institutions',
      icon: 'Microscope',
      description: 'Joint research and development initiatives',
      count: '10+'
    }
  ];

  const partnershipContent = {
    schools: {
      title: "Educational Institution Partnerships",
      subtitle: "Empowering schools and universities with AI-driven education solutions",
      benefits: [
        {
          icon: 'BookOpen',
          title: 'Curriculum Integration',
          description: 'Seamless integration with existing curricula and learning management systems'
        },
        {
          icon: 'Users',
          title: 'Teacher Training',
          description: 'Comprehensive training programs for educators to maximize AI tool effectiveness'
        },
        {
          icon: 'BarChart3',
          title: 'Performance Analytics',
          description: 'Real-time insights into student progress and institutional performance metrics'
        },
        {
          icon: 'Globe',
          title: 'Global Standards',
          description: 'Alignment with international education standards while respecting local contexts'
        }
      ],
      partners: [
        {
          name: 'Cambridge International',
          logo: '🎓',
          region: 'Global',
          students: '500K+',
          description: 'AI-powered assessment and personalized learning pathways for Cambridge curriculum'
        },
        {
          name: 'Delhi Public School Society',
          logo: '🏫',
          region: 'India',
          students: '200K+',
          description: 'NEP 2020 implementation with AI-driven skill development programs'
        },
        {
          name: 'Singapore Ministry of Education',
          logo: '🏛️',
          region: 'Singapore',
          students: '180K+',
          description: 'Smart Nation education initiative with multilingual AI solutions'
        }
      ]
    },
    government: {
      title: "Government Partnerships",
      subtitle: "Collaborating with education ministries to transform national education systems",
      benefits: [
        {
          icon: 'Shield',
          title: 'Policy Compliance',
          description: 'Full compliance with national education policies and data protection regulations'
        },
        {
          icon: 'Target',
          title: 'Scalable Implementation',
          description: 'Large-scale deployment capabilities for nationwide education transformation'
        },
        {
          icon: 'FileText',
          title: 'Custom Solutions',
          description: 'Tailored AI solutions addressing specific national education challenges'
        },
        {
          icon: 'Award',
          title: 'Quality Assurance',
          description: 'Rigorous quality standards and continuous monitoring for government partnerships'
        }
      ],
      partners: [
        {
          name: 'Ministry of Education, India',
          logo: '🇮🇳',
          region: 'India',
          students: '2.5M+',
          description: 'National Education Policy 2020 implementation with AI-powered learning analytics'
        },
        {
          name: 'UAE Ministry of Education',
          logo: '🇦🇪',
          region: 'UAE',
          students: '110K+',
          description: 'Vision 2071 education strategy with Arabic-English bilingual AI solutions'
        },
        {
          name: 'Department of Education, UK',
          logo: '🇬🇧',
          region: 'United Kingdom',
          students: '95K+',
          description: 'Digital education transformation with AI-enhanced STEM learning programs'
        }
      ]
    },
    technology: {
      title: "Technology Partnerships",
      subtitle: "Integrating with leading platforms to create comprehensive education ecosystems",
      benefits: [
        {
          icon: 'Zap',
          title: 'Seamless Integration',
          description: 'API-first architecture enabling smooth integration with existing EdTech stacks'
        },
        {
          icon: 'Layers',
          title: 'Platform Agnostic',
          description: 'Compatible with major learning management systems and educational platforms'
        },
        {
          icon: 'Rocket',
          title: 'Innovation Acceleration',
          description: 'Joint development of cutting-edge AI features and educational technologies'
        },
        {
          icon: 'Lock',
          title: 'Security Standards',
          description: 'Enterprise-grade security and privacy protection for all integrated solutions'
        }
      ],
      partners: [
        {
          name: 'Google for Education',
          logo: '🔍',
          region: 'Global',
          students: '1.2M+',
          description: 'AI-powered Google Classroom integration with personalized learning recommendations'
        },
        {
          name: 'Microsoft Education',
          logo: '💻',
          region: 'Global',
          students: '800K+',
          description: 'Teams for Education integration with AI-driven collaborative learning tools'
        },
        {
          name: 'Canvas by Instructure',
          logo: '🎨',
          region: 'Global',
          students: '450K+',
          description: 'LMS integration with AI analytics and automated assessment capabilities'
        }
      ]
    },
    research: {
      title: "Research Institution Partnerships",
      subtitle: "Advancing AI in education through collaborative research and development",
      benefits: [
        {
          icon: 'Lightbulb',
          title: 'Innovation Research',
          description: 'Joint research projects exploring the future of AI in educational contexts'
        },
        {
          icon: 'Database',
          title: 'Data Collaboration',
          description: 'Shared research datasets and methodologies for advancing educational AI'
        },
        {
          icon: 'Users2',
          title: 'Academic Exchange',
          description: 'Faculty and student exchange programs for AI education research'
        },
        {
          icon: 'BookMarked',
          title: 'Publication Support',
          description: 'Co-authored research papers and academic publications in top-tier journals'
        }
      ],
      partners: [
        {
          name: 'MIT Computer Science',
          logo: '🔬',
          region: 'USA',
          students: '25K+',
          description: 'AI ethics in education research with focus on bias reduction and fairness'
        },
        {
          name: 'IIT Delhi',
          logo: '⚗️',
          region: 'India',
          students: '15K+',
          description: 'Machine learning applications in Indian language education and assessment'
        },
        {
          name: 'Oxford Internet Institute',
          logo: '📚',
          region: 'UK',
          students: '8K+',
          description: 'Digital education transformation and AI impact on learning outcomes research'
        }
      ]
    }
  };

  const currentContent = partnershipContent?.[activeTab];

  return (
    <div className="space-y-8">
      {/* Partnership Types Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {partnershipTypes?.map((type) => (
          <motion.button
            key={type?.id}
            onClick={() => setActiveTab(type?.id)}
            className={`p-6 rounded-xl border transition-all duration-300 text-left ${
              activeTab === type?.id
                ? 'border-primary bg-primary/5 shadow-glow'
                : 'border-border bg-card hover:border-primary/30'
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg ${
                activeTab === type?.id ? 'bg-primary text-white' : 'bg-muted text-text-muted'
              }`}>
                <Icon name={type?.icon} size={20} />
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-text-muted">Partners</div>
                <div className="text-lg font-bold text-text-primary">{type?.count}</div>
              </div>
            </div>
            <h3 className="font-semibold text-text-primary mb-2">{type?.name}</h3>
            <p className="text-sm text-text-secondary">{type?.description}</p>
          </motion.button>
        ))}
      </div>
      {/* Partnership Content */}
      {/* <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-8"
      > */}
        {/* Header */}
        {/* <div className="text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">{currentContent?.title}</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">{currentContent?.subtitle}</p>
        </div> */}

        {/* Benefits Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentContent?.benefits?.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={benefit?.icon} size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">{benefit?.title}</h3>
                <p className="text-text-secondary">{benefit?.description}</p>
              </div>
            </motion.div>
          ))}
        </div> */}

        {/* Featured Partners */}
        {/* <div>
          <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">Featured Partners</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {currentContent?.partners?.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{partner?.logo}</div>
                  <div>
                    <h4 className="font-semibold text-text-primary">{partner?.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-text-muted">
                      <Icon name="MapPin" size={14} />
                      <span>{partner?.region}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Users" size={16} className="text-primary" />
                    <span className="font-medium text-text-primary">{partner?.students} Students</span>
                  </div>
                </div>

                <p className="text-text-secondary text-sm mb-4">{partner?.description}</p>

                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  className="border-primary/20 text-primary hover:bg-primary/5"
                >
                  View Partnership
                </Button>
              </motion.div>
            ))}
          </div>
        </div> */}

        {/* Partnership CTA */}
        {/* <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center border border-primary/20">
          <h3 className="text-2xl font-bold text-text-primary mb-4">Ready to Partner with VishwAlpha?</h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Join our global network of educational partners and transform learning experiences with AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              className="bg-gradient-primary hover:opacity-90 text-white shadow-glow"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Start Partnership Discussion
            </Button>
            <Button
              variant="outline"
              className="border-primary/30 text-text-primary hover:bg-primary/5"
              iconName="Download"
              iconPosition="left"
            >
              Download Partnership Guide
            </Button>
          </div>
        </div>
      </motion.div> */}
    </div>
  );
};

export default PartnershipPortal;
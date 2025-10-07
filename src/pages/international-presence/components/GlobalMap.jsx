import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const GlobalMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const globalPresence = [
    {
      id: 1,
      country: "India",
      region: "South Asia",
      status: "Headquarters",
      students: "2.5M+",
      schools: "15,000+",
      partnerships: 45,
      coordinates: { x: 72, y: 45 },
      flag: "🇮🇳",
      description: "Primary market with comprehensive AI education solutions across all states",
      achievements: ["NEP 2020 Implementation Leader", "Government Partnership", "Cultural Integration Pioneer"]
    },
    {
      id: 2,
      country: "Singapore",
      region: "Southeast Asia",
      status: "Regional Hub",
      students: "180K+",
      schools: "850+",
      partnerships: 12,
      coordinates: { x: 78, y: 52 },
      flag: "🇸🇬",
      description: "Southeast Asian operations center focusing on multilingual AI solutions",
      achievements: ["Smart Nation Initiative Partner", "Bilingual AI Pioneer", "ASEAN Education Leader"]
    },
    {
      id: 3,
      country: "United Kingdom",
      region: "Europe",
      status: "Strategic Partner",
      students: "95K+",
      schools: "420+",
      partnerships: 8,
      coordinates: { x: 45, y: 25 },
      flag: "🇬🇧",
      description: "European gateway with focus on international curriculum integration",
      achievements: ["Cambridge Partnership", "GCSE AI Integration", "EdTech Innovation Award"]
    },
    {
      id: 4,
      country: "United States",
      region: "North America",
      status: "Expansion Market",
      students: "125K+",
      schools: "680+",
      partnerships: 15,
      coordinates: { x: 20, y: 30 },
      flag: "🇺🇸",
      description: "Growing presence in K-12 and higher education with AI-driven personalization",
      achievements: ["Silicon Valley Partnership", "STEM Education Leader", "Innovation Grant Recipient"]
    },
    {
      id: 5,
      country: "Australia",
      region: "Oceania",
      status: "Regional Partner",
      students: "75K+",
      schools: "320+",
      partnerships: 6,
      coordinates: { x: 85, y: 75 },
      flag: "🇦🇺",
      description: "Oceania operations with indigenous education integration focus",
      achievements: ["Indigenous AI Adaptation", "Rural Education Pioneer", "Cultural Sensitivity Leader"]
    },
    {
      id: 6,
      country: "UAE",
      region: "Middle East",
      status: "Strategic Hub",
      students: "110K+",
      schools: "480+",
      partnerships: 10,
      coordinates: { x: 62, y: 42 },
      flag: "🇦🇪",
      description: "Middle Eastern headquarters serving Arabic-speaking educational institutions",
      achievements: ["Arabic AI Integration", "Smart City Education", "Cultural Bridge Builder"]
    }
  ];

  const regionStats = {
    "South Asia": { countries: 3, students: "2.8M+", growth: "+45%" },
    "Southeast Asia": { countries: 4, students: "320K+", growth: "+38%" },
    "Europe": { countries: 6, students: "180K+", growth: "+28%" },
    "North America": { countries: 2, students: "145K+", growth: "+52%" },
    "Oceania": { countries: 2, students: "85K+", growth: "+35%" },
    "Middle East": { countries: 5, students: "195K+", growth: "+42%" }
  };

  return (
    <div className="relative">
      {/* Interactive World Map */}
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`
          }}></div>
        </div>

        {/* Map Container */}
        <div className="relative w-full h-96 bg-slate-700/30 rounded-xl overflow-hidden">
          {/* World Map SVG Background */}
          <svg 
            viewBox="0 0 100 60" 
            className="w-full h-full opacity-20"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Simplified world map paths */}
            <path 
              d="M15,25 L25,20 L35,25 L30,35 L20,40 L15,35 Z" 
              fill="currentColor" 
              className="text-slate-400"
            />
            <path 
              d="M40,20 L55,18 L60,25 L55,35 L45,38 L40,30 Z" 
              fill="currentColor" 
              className="text-slate-400"
            />
            <path 
              d="M65,25 L85,22 L90,30 L85,45 L70,48 L65,35 Z" 
              fill="currentColor" 
              className="text-slate-400"
            />
          </svg>

          {/* Country Markers */}
          {globalPresence?.map((country, index) => (
            <motion.div
              key={country?.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{
                left: `${country?.coordinates?.x}%`,
                top: `${country?.coordinates?.y}%`
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              onMouseEnter={() => setHoveredCountry(country)}
              onMouseLeave={() => setHoveredCountry(null)}
              onClick={() => setSelectedRegion(country)}
            >
              {/* Pulse Animation */}
              <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30"></div>
              
              {/* Main Marker */}
              <div className={`relative w-6 h-6 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
                country?.status === 'Headquarters' ? 'bg-gradient-to-r from-primary to-secondary' :
                country?.status === 'Regional Hub' ? 'bg-primary' :
                country?.status === 'Strategic Partner'? 'bg-secondary' : 'bg-accent'
              } ${hoveredCountry?.id === country?.id ? 'scale-125 shadow-xl' : ''}`}>
                <div className="absolute inset-0 flex items-center justify-center text-xs text-white font-bold">
                  {country?.flag}
                </div>
              </div>

              {/* Connection Lines */}
              {country?.status === 'Headquarters' && (
                <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  {globalPresence?.filter(c => c?.id !== country?.id)?.map(targetCountry => (
                    <line
                      key={targetCountry?.id}
                      x1="0"
                      y1="0"
                      x2={(targetCountry?.coordinates?.x - country?.coordinates?.x) * 4}
                      y2={(targetCountry?.coordinates?.y - country?.coordinates?.y) * 4}
                      stroke="rgba(139, 92, 246, 0.3)"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                  ))}
                </svg>
              )}
            </motion.div>
          ))}
        </div>

        {/* Hover Tooltip */}
        {hoveredCountry && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 bg-popover border border-border rounded-lg p-4 shadow-xl max-w-xs z-10"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{hoveredCountry?.flag}</span>
              <div>
                <h4 className="font-semibold text-text-primary">{hoveredCountry?.country}</h4>
                <p className="text-sm text-text-secondary">{hoveredCountry?.status}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-text-muted">Students:</span>
                <span className="text-text-primary ml-1">{hoveredCountry?.students}</span>
              </div>
              <div>
                <span className="text-text-muted">Schools:</span>
                <span className="text-text-primary ml-1">{hoveredCountry?.schools}</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Legend */}
        <div className="absolute top-4 right-4 bg-popover/90 backdrop-blur-sm border border-border rounded-lg p-4">
          <h4 className="font-semibold text-text-primary mb-3">Global Presence</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
              <span className="text-text-secondary">Headquarters</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-text-secondary">Regional Hub</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <span className="text-text-secondary">Strategic Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <span className="text-text-secondary">Expansion Market</span>
            </div>
          </div>
        </div>
      </div>
      {/* Regional Statistics */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(regionStats)?.map(([region, stats]) => (
          <motion.div
            key={region}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
            whileHover={{ y: -2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-text-primary">{region}</h3>
              <div className="flex items-center gap-1 text-success text-sm">
                <Icon name="TrendingUp" size={16} />
                <span>{stats?.growth}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-text-muted">Countries:</span>
                <span className="text-text-primary font-medium">{stats?.countries}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Students:</span>
                <span className="text-text-primary font-medium">{stats?.students}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Selected Region Details */}
      {selectedRegion && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-card border border-border rounded-xl p-6"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{selectedRegion?.flag}</span>
              <div>
                <h3 className="text-xl font-semibold text-text-primary">{selectedRegion?.country}</h3>
                <p className="text-text-secondary">{selectedRegion?.region} • {selectedRegion?.status}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedRegion(null)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <Icon name="X" size={20} className="text-text-muted" />
            </button>
          </div>

          <p className="text-text-secondary mb-6">{selectedRegion?.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">{selectedRegion?.students}</div>
              <div className="text-sm text-text-muted">Students Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary mb-1">{selectedRegion?.schools}</div>
              <div className="text-sm text-text-muted">Partner Schools</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">{selectedRegion?.partnerships}</div>
              <div className="text-sm text-text-muted">Active Partnerships</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-3">Key Achievements</h4>
            <div className="flex flex-wrap gap-2">
              {selectedRegion?.achievements?.map((achievement, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                >
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default GlobalMap;
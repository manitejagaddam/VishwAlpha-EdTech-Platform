import React from 'react';
import { motion } from 'framer-motion';

const ScrollingTicker = () => {
  const messages = [
    "Building Smarter Futures, One Student at a Time",
    "AI for Education. Skills for Tomorrow",
    "Empowering 100+ Students Across India",
    "NEP 2020 Implementation Made Simple",
    "Where Ancient Wisdom Meets Modern AI",
    "Transforming Education Through Intelligence"
  ];

  return (
    <div className="bg-gradient-to-r from-violet-600 via-pink-500 to-amber-500 py-3 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -2000] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...messages, ...messages]?.map((message, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="text-white font-medium text-sm md:text-base">
              {message}
            </span>
            <div className="w-2 h-2 bg-white/60 rounded-full ml-8" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingTicker;

import React from 'react';
import AnimatedNumber from '@/components/AnimatedNumber';

const HeroStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8 animate-fade-in px-2 sm:px-0" style={{animationDelay: '0.6s'}}>
      <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
        <div className="text-xl sm:text-2xl font-bold text-blue-300">
          <AnimatedNumber value={2} suffix="+" duration={800} />
        </div>
        <div className="text-xs sm:text-sm text-blue-100">Years Experience</div>
      </div>
      <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
        <div className="text-xl sm:text-2xl font-bold text-indigo-300">
          <AnimatedNumber value={5} suffix="th" duration={1000} />
        </div>
        <div className="text-xs sm:text-sm text-blue-100">State Rank ECET</div>
      </div>
      <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
        <div className="text-xl sm:text-2xl font-bold text-purple-300">
          <AnimatedNumber value={10} suffix="+" duration={1200} />
        </div>
        <div className="text-xs sm:text-sm text-blue-100">Projects Built</div>
      </div>
      <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
        <div className="text-xl sm:text-2xl font-bold text-cyan-300">
          <AnimatedNumber value={100} suffix="+" duration={1400} />
        </div>
        <div className="text-xs sm:text-sm text-blue-100">Students Taught</div>
      </div>
    </div>
  );
};

export default HeroStats;

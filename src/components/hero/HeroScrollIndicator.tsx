
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroScrollIndicator = () => {
  return (
    <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
      <div className="flex flex-col items-center text-white/70 hover:text-white transition-colors cursor-pointer"
           onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <span className="text-xs sm:text-sm mb-2">Scroll to explore</span>
        <ChevronDown size={20} />
      </div>
    </div>
  );
};

export default HeroScrollIndicator;

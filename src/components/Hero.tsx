
import React from 'react';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroStats from './hero/HeroStats';
import HeroButtons from './hero/HeroButtons';
import HeroContactLinks from './hero/HeroContactLinks';
import HeroScrollIndicator from './hero/HeroScrollIndicator';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <HeroBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 min-h-screen flex items-center">
        <HeroContent />
      </div>

      {/* Key Highlights */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="w-full lg:w-3/5">
          <HeroStats />
          <HeroButtons />
          <HeroContactLinks />
        </div>
      </div>

      <HeroScrollIndicator />
    </section>
  );
};

export default Hero;

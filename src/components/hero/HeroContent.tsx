
import React from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';

const HeroContent = () => {
  const texts = [
    'Data Engineer',
    'Full Stack Developer',
    'Software Developer',
    'Python Developer',
    'Cloud Engineer',
    'Backend Developer',
    'Problem Solver',
    'Tech Innovator',
    'Machine Learning Enthusiast',
    'Data Pipeline Architect'
  ];

  const currentText = useTypewriter({ texts });

  return (
    <div className="w-full lg:w-3/5 text-white">
      <div className="animate-fade-in">
        {/* Greeting */}
        <div className="text-xl sm:text-2xl md:text-3xl font-light text-blue-300 mb-4 animate-fade-in">
          👋 Hello, I'm
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 drop-shadow-2xl leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent block">
            Nikhil
          </span>
          <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent block">
            Maroju
          </span>
        </h1>
        
        <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 h-12 sm:h-16 flex items-center animate-fade-in" style={{animationDelay: '0.2s'}}>
          <span className="font-light text-slate-300">I'm a </span>
          <span className="ml-2 text-blue-300 font-bold min-w-[200px] sm:min-w-[300px] text-left">
            {currentText}
            <span className="animate-pulse text-blue-400">|</span>
          </span>
        </div>
      </div>
      
      <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed mb-6 sm:mb-8 animate-fade-in drop-shadow-lg px-2 sm:px-0" style={{animationDelay: '0.4s'}}>
        Data Engineer at <span className="font-semibold text-blue-300">Providence India</span> with <span className="font-semibold text-white">2+ years</span> of professional experience 
        across data engineering, cloud technologies, and full-stack development. 
        I transform complex data challenges into scalable solutions using <span className="text-blue-200">cloud technologies, machine learning, and modern data architectures</span>.
      </p>
    </div>
  );
};

export default HeroContent;

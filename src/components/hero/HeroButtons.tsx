
import React from 'react';
import { Mail, Github, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in px-2 sm:px-0" style={{animationDelay: '0.8s'}}>
      <Button 
        size="lg" 
        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg backdrop-blur-md border border-blue-400/30 transform hover:scale-105 transition-all duration-300 shadow-xl w-full sm:w-auto"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <Mail className="mr-2" size={18} />
        Let's Connect
      </Button>
      <Button 
        size="lg" 
        variant="outline" 
        className="border-2 border-white text-white hover:bg-white/10 hover:text-white bg-white/5 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg backdrop-blur-md transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <Github className="mr-2" size={18} />
        View My Work
      </Button>
      <Button 
        size="lg" 
        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg backdrop-blur-md border border-green-400/30 transform hover:scale-105 transition-all duration-300 shadow-xl w-full sm:w-auto"
        asChild
      >
        <a 
          href="https://drive.google.com/file/d/1CUBUNUTW6rNjjQsTPDVMMgPINS47ScEY/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer nofollow"
          referrerPolicy="strict-origin-when-cross-origin"
        >
          <Download className="mr-2" size={18} />
          Download Resume
        </a>
      </Button>
    </div>
  );
};

export default HeroButtons;

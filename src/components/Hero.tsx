import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Download, ExternalLink, Instagram, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedNumber from '@/components/AnimatedNumber';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentFullText = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay - Emergency fix for mobile responsiveness */}
      <div 
        className="absolute inset-0 hero-background"
        style={{
          backgroundImage: `url('/lovable-uploads/94465d1a-0458-44df-882f-76295d31aba6.png')`
        }}
      >
        {/* Enhanced gradient overlays for better mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60 sm:from-slate-900/90 sm:via-slate-900/70 sm:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/50"></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 min-h-screen flex items-center">
        <div className="w-full text-white">
          <div className="animate-fade-in">
            {/* Greeting - Mobile responsive */}
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-blue-300 mb-2 sm:mb-3 md:mb-4 animate-fade-in">
              👋 Hello, I'm
            </div>
            
            {/* Name - Mobile responsive with better line heights */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 drop-shadow-2xl leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Nikhil
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                Maroju
              </span>
            </h1>
            
            {/* Typing animation - Mobile responsive */}
            <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-4 sm:mb-6 md:mb-8 min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem] lg:min-h-[4rem] flex flex-wrap items-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <span className="font-light text-slate-300">I'm a </span>
              <span className="ml-1 sm:ml-2 text-blue-300 font-bold min-w-[150px] sm:min-w-[200px] md:min-w-[250px] lg:min-w-[300px] text-left">
                {currentText}
                <span className="animate-pulse text-blue-400">|</span>
              </span>
            </div>
          </div>
          
          {/* Description - Mobile responsive with better spacing */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-slate-200 max-w-4xl leading-relaxed mb-4 sm:mb-6 md:mb-8 animate-fade-in drop-shadow-lg" style={{animationDelay: '0.4s'}}>
            Data Engineer at <span className="font-semibold text-blue-300">Providence India</span> with <span className="font-semibold text-white">2+ years</span> of professional experience 
            across data engineering, cloud technologies, and full-stack development. 
            I transform complex data challenges into scalable solutions using <span className="text-blue-200">cloud technologies, machine learning, and modern data architectures</span>.
          </p>

          {/* Key Highlights - Mobile responsive grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-2 sm:p-3 md:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-300">
                <AnimatedNumber value={2} suffix="+" duration={800} />
              </div>
              <div className="text-xs sm:text-sm text-blue-100">Years Experience</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-2 sm:p-3 md:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-indigo-300">
                <AnimatedNumber value={5} suffix="th" duration={1000} />
              </div>
              <div className="text-xs sm:text-sm text-blue-100">State Rank ECET</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-2 sm:p-3 md:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-purple-300">
                <AnimatedNumber value={10} suffix="+" duration={1200} />
              </div>
              <div className="text-xs sm:text-sm text-blue-100">Projects Built</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-2 sm:p-3 md:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-cyan-300">
                <AnimatedNumber value={100} suffix="+" duration={1400} />
              </div>
              <div className="text-xs sm:text-sm text-blue-100">Students Taught</div>
            </div>
          </div>

          {/* CTA Buttons - Mobile responsive stacking */}
          <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg backdrop-blur-md border border-blue-400/30 transform hover:scale-105 transition-all duration-300 shadow-xl w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2" size={16} />
                Let's Connect
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 hover:text-white bg-white/5 px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg backdrop-blur-md transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Github className="mr-2" size={16} />
                View My Work
              </Button>
            </div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg backdrop-blur-md border border-green-400/30 transform hover:scale-105 transition-all duration-300 shadow-xl w-full sm:w-auto"
              asChild
            >
              <a 
                href="https://drive.google.com/file/d/1CUBUNUTW6rNjjQsTPDVMMgPINS47ScEY/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                referrerPolicy="strict-origin-when-cross-origin"
              >
                <Download className="mr-2" size={16} />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Contact Links - Mobile responsive with smaller icons */}
          <div className="flex flex-wrap gap-2 sm:gap-3 animate-fade-in" style={{animationDelay: '1s'}}>
            <a href="mailto:marojunikhil2002@gmail.com" className="flex items-center gap-1 sm:gap-2 text-blue-200 hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-md rounded-lg px-2 sm:px-3 py-2 border border-white/20 hover:bg-white/20 text-xs sm:text-sm">
              <Mail size={12} />
              <span className="hidden xs:inline sm:inline">Email</span>
            </a>
            <a href="tel:+918179049021" className="flex items-center gap-1 sm:gap-2 text-blue-200 hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-md rounded-lg px-2 sm:px-3 py-2 border border-white/20 hover:bg-white/20 text-xs sm:text-sm">
              <Phone size={12} />
              <span>Call</span>
            </a>
            <a href="https://linkedin.com/in/nikhil-maroju" target="_blank" rel="noopener noreferrer nofollow" referrerPolicy="strict-origin-when-cross-origin" className="flex items-center gap-1 sm:gap-2 text-blue-200 hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-md rounded-lg px-2 sm:px-3 py-2 border border-white/20 hover:bg-white/20 text-xs sm:text-sm">
              <Linkedin size={12} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Maroju-Nikhil" target="_blank" rel="noopener noreferrer nofollow" referrerPolicy="strict-origin-when-cross-origin" className="flex items-center gap-1 sm:gap-2 text-blue-200 hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-md rounded-lg px-2 sm:px-3 py-2 border border-white/20 hover:bg-white/20 text-xs sm:text-sm">
              <Github size={12} />
              <span>GitHub</span>
            </a>
            <a href="https://www.instagram.com/its_maroju_nikhil" target="_blank" rel="noopener noreferrer nofollow" referrerPolicy="strict-origin-when-cross-origin" className="flex items-center gap-1 sm:gap-2 text-blue-200 hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-md rounded-lg px-2 sm:px-3 py-2 border border-white/20 hover:bg-white/20 text-xs sm:text-sm">
              <Instagram size={12} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Mobile responsive */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center text-white/70 hover:text-white transition-colors cursor-pointer"
             onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-xs sm:text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={16} />
        </div>
      </div>
      
      {/* Add the hero-bg class to the background div */}
      <script>{`
        document.querySelector('#home > div').classList.add('hero-bg');
      `}</script>
    </section>
  );
};

export default Hero;

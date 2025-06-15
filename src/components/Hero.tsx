
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Download, ExternalLink, Instagram, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/94465d1a-0458-44df-882f-76295d31aba6.png')`
        }}
      >
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40"></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="w-full lg:w-3/5 text-white">
          <div className="animate-fade-in">
            {/* Greeting */}
            <div className="text-2xl md:text-3xl font-light text-blue-300 mb-4 animate-fade-in">
              👋 Hello, I'm
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Nikhil
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                Maroju
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl lg:text-4xl mb-8 h-16 flex items-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <span className="font-light text-slate-300">I'm a </span>
              <span className="ml-2 text-blue-300 font-bold min-w-[300px] text-left">
                {currentText}
                <span className="animate-pulse text-blue-400">|</span>
              </span>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed mb-8 animate-fade-in drop-shadow-lg" style={{animationDelay: '0.4s'}}>
            Data Engineer at <span className="font-semibold text-blue-300">Providence India</span> with <span className="font-semibold text-white">2+ years</span> of professional experience 
            across data engineering, cloud technologies, and full-stack development. 
            I transform complex data challenges into scalable solutions using <span className="text-blue-200">cloud technologies, machine learning, and modern data architectures</span>.
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-2xl font-bold text-blue-300">2+</div>
              <div className="text-sm text-blue-100">Years Experience</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-2xl font-bold text-indigo-300">5th</div>
              <div className="text-sm text-blue-100">State Rank ECET</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-2xl font-bold text-purple-300">10+</div>
              <div className="text-sm text-blue-100">Projects Built</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-2xl font-bold text-cyan-300">100+</div>
              <div className="text-sm text-blue-100">Students Taught</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg backdrop-blur-md border border-blue-400/30 transform hover:scale-105 transition-all duration-300 shadow-xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2" size={20} />
              Let's Connect
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 hover:text-white bg-white/5 px-8 py-4 text-lg backdrop-blur-md transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Github className="mr-2" size={20} />
              View My Work
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg backdrop-blur-md border border-green-400/30 transform hover:scale-105 transition-all duration-300 shadow-xl"
              asChild
            >
              <a 
                href="https://drive.google.com/file/d/1CUBUNUTW6rNjjQsTPDVMMgPINS47ScEY/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap gap-3 animate-fade-in" style={{animationDelay: '1s'}}>
            <a href="mailto:marojunikhil2002@gmail.com" className="flex items-center gap-2 text-blue-200 hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 border border-white/20 hover:bg-white/20 text-sm">
              <Mail size={16} />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a href="tel:+918179049021" className="flex items-center gap-2 text-blue-200 hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 border border-white/20 hover:bg-white/20 text-sm">
              <Phone size={16} />
              <span>Call</span>
            </a>
            <a href="https://linkedin.com/in/nikhil-maroju" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-200 hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 border border-white/20 hover:bg-white/20 text-sm">
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/nikhilmaroju" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-200 hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 border border-white/20 hover:bg-white/20 text-sm">
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a href="https://www.instagram.com/its_maroju_nikhil" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-200 hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 border border-white/20 hover:bg-white/20 text-sm">
              <Instagram size={16} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center text-white/70 hover:text-white transition-colors cursor-pointer"
             onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Full Stack Developer',
    'Data Engineer',
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
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent mb-6 drop-shadow-2xl">
              Nikhil Maroju
            </h1>
            <div className="text-3xl md:text-4xl mb-8 animate-fade-in h-16 flex items-center justify-center" style={{animationDelay: '0.2s'}}>
              <span className="font-semibold text-white drop-shadow-lg">I'm a </span>
              <span className="ml-2 text-blue-300 font-bold min-w-[350px] text-left drop-shadow-lg">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in drop-shadow-lg" style={{animationDelay: '0.4s'}}>
            Software Engineer at <span className="font-semibold text-white">Providence India</span> with <span className="font-semibold text-white">2+ years of experience</span> building enterprise solutions and full-stack applications. 
            I specialize in transforming complex technical challenges into scalable, automated solutions across 
            <span className="font-semibold text-blue-200"> cloud technologies, machine learning, web development, and software engineering</span>.
            From data pipelines to complete applications, I deliver measurable business impact through innovative technology solutions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-blue-300">2+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-indigo-300">75%</div>
              <div className="text-blue-100">Efficiency Improvement</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-purple-300">10+</div>
              <div className="text-blue-100">Projects Delivered</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-cyan-300">500+</div>
              <div className="text-blue-100">Students Mentored</div>
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <a href="mailto:marojunikhil2002@gmail.com" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
              <Mail size={20} />
              <span className="hidden sm:inline">marojunikhil2002@gmail.com</span>
            </a>
            <a href="tel:+918179049021" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
              <Phone size={20} />
              <span>+91 8179049021</span>
            </a>
            <a href="https://linkedin.com/in/nikhil-maroju" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
              <Linkedin size={20} />
              <span>LinkedIn</span>
              <ExternalLink size={16} />
            </a>
            <a href="https://github.com/nikhilmaroju" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
              <Github size={20} />
              <span>GitHub</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{animationDelay: '1s'}}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg backdrop-blur-md border border-blue-400/30"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2" size={20} />
              Let's Connect
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/50 text-white hover:bg-white/20 hover:text-white px-8 py-4 text-lg backdrop-blur-md"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Github className="mr-2" size={20} />
              View My Work
            </Button>
            <Button 
              size="lg" 
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 text-lg backdrop-blur-md border border-white/30"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

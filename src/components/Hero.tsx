
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Data Engineer',
    'Software Developer',
    'Python Developer',
    'Cloud Engineer',
    'Data Analyst'
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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="animate-fade-in mb-8">
            <Avatar className="w-48 h-48 mx-auto mb-8 ring-4 ring-blue-200 ring-offset-4 ring-offset-white shadow-2xl">
              <AvatarImage 
                src="/placeholder.svg" 
                alt="Nikhil Maroju"
                className="object-cover"
              />
              <AvatarFallback className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                NM
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Nikhil Maroju
            </h1>
            <div className="text-3xl md:text-4xl text-slate-700 mb-8 animate-fade-in h-16 flex items-center justify-center" style={{animationDelay: '0.2s'}}>
              <span className="font-semibold">I'm a </span>
              <span className="ml-2 text-blue-600 font-bold min-w-[300px] text-left">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            Transforming raw data into actionable insights with <span className="font-semibold text-blue-600">1.5 years of experience</span>. 
            Specialized in building robust data pipelines, optimizing performance by <span className="font-semibold text-indigo-600">97%</span>, 
            and reducing operational overhead by <span className="font-semibold text-purple-600">75%</span>.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">1.5+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">97%</div>
              <div className="text-slate-600">Query Optimization</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">75%</div>
              <div className="text-slate-600">Effort Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">90%</div>
              <div className="text-slate-600">Data Footprint Cut</div>
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <a href="mailto:marojunikhil2002@gmail.com" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
              <Mail size={20} />
              <span className="hidden sm:inline">marojunikhil2002@gmail.com</span>
            </a>
            <a href="tel:+918179049021" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
              <Phone size={20} />
              <span>+91 8179049021</span>
            </a>
            <a href="https://linkedin.com/in/nikhil-maroju" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
              <span>LinkedIn</span>
              <ExternalLink size={16} />
            </a>
            <a href="https://github.com/nikhilmaroju" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
              <Github size={20} />
              <span>GitHub</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{animationDelay: '1s'}}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Github className="mr-2" size={20} />
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-8 py-4 text-lg"
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

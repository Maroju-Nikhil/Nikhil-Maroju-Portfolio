
import React from 'react';
import { Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';

const HeroContactLinks = () => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 animate-fade-in px-2 sm:px-0" style={{animationDelay: '1s'}}>
      <a href="mailto:marojunikhil2002@gmail.com" className="flex items-center gap-2 text-blue-200 hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 border border-white/20 hover:bg-white/20 text-xs sm:text-sm">
        <Mail size={14} />
        <span className="hidden sm:inline">Email</span>
      </a>
      <a href="tel:+918179049021" className="flex items-center gap-2 text-blue-200 hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 border border-white/20 hover:bg-white/20 text-xs sm:text-sm">
        <Phone size={14} />
        <span>Call</span>
      </a>
      <a href="https://linkedin.com/in/nikhil-maroju" target="_blank" rel="noopener noreferrer nofollow" referrerPolicy="strict-origin-when-cross-origin" className="flex items-center gap-2 text-blue-200 hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 border border-white/20 hover:bg-white/20 text-xs sm:text-sm">
        <Linkedin size={14} />
        <span>LinkedIn</span>
      </a>
      <a href="https://github.com/Maroju-Nikhil" target="_blank" rel="noopener noreferrer nofollow" referrerPolicy="strict-origin-when-cross-origin" className="flex items-center gap-2 text-blue-200 hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 border border-white/20 hover:bg-white/20 text-xs sm:text-sm">
        <Github size={14} />
        <span>GitHub</span>
      </a>
      <a href="https://www.instagram.com/its_maroju_nikhil" target="_blank" rel="noopener noreferrer nofollow" referrerPolicy="strict-origin-when-cross-origin" className="flex items-center gap-2 text-blue-200 hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 border border-white/20 hover:bg-white/20 text-xs sm:text-sm">
        <Instagram size={14} />
        <span>Instagram</span>
      </a>
    </div>
  );
};

export default HeroContactLinks;


import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, ExternalLink } from 'lucide-react';

const FitnessJourney = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            Fitness Journey
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
            Beyond coding and creativity, I'm passionate about fitness and personal growth. 
            Since January 2024, I've been dedicated to strength training and building a healthier lifestyle.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 md:mt-16 text-center bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 md:p-8 border border-orange-200 dark:border-gray-600">
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-4">
            Let's Connect & Motivate Each Other
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto text-sm md:text-base px-4">
            Whether it's about fitness, technology, or life in general, I believe in the power of community and mutual motivation. 
            Let's connect and inspire each other to reach new heights!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="px-3 md:px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs md:text-sm font-medium">
              Strength Training
            </span>
            <span className="px-3 md:px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs md:text-sm font-medium">
              Discipline & Consistency
            </span>
            <span className="px-3 md:px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs md:text-sm font-medium">
              Personal Growth
            </span>
            <span className="px-3 md:px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs md:text-sm font-medium">
              Mind-Body Balance
            </span>
          </div>
          
          {/* Instagram Connection */}
          <div className="mt-6">
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm md:text-base">Connect with me on Instagram to see my fitness journey:</p>
            <a 
              href="https://www.instagram.com/its_maroju_nikhil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
            >
              <Instagram size={18} className="md:w-5 md:h-5" />
              Follow on Instagram
              <ExternalLink size={14} className="md:w-4 md:h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnessJourney;


import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FitnessJourney = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            Fitness Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Beyond coding and creativity, I'm passionate about fitness and personal growth. 
            Since January 2024, I've been dedicated to strength training and building a healthier lifestyle.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Let's Connect & Motivate Each Other
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Whether it's about fitness, technology, or life in general, I believe in the power of community and mutual motivation. 
            Let's connect and inspire each other to reach new heights!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              Strength Training
            </span>
            <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
              Discipline & Consistency
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              Personal Growth
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Mind-Body Balance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnessJourney;

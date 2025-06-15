
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dumbbell, Calendar, Target, TrendingUp, Instagram, ExternalLink } from 'lucide-react';

const FitnessJourney = () => {
  const fitnessStats = [
    {
      icon: Calendar,
      title: 'Training Since',
      value: 'Jan 2024',
      description: 'Consistent dedication for 11+ months',
      color: 'text-green-500'
    },
    {
      icon: Target,
      title: 'Focus Area',
      value: 'Strength',
      description: 'Weight lifting & muscle building',
      color: 'text-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'Progress',
      value: 'Significant',
      description: 'Visible improvements in strength & physique',
      color: 'text-purple-500'
    },
    {
      icon: Dumbbell,
      title: 'Training Style',
      value: 'Progressive',
      description: 'Structured workouts with measurable goals',
      color: 'text-orange-500'
    }
  ];

  const fitnessValues = [
    {
      title: 'Discipline & Consistency',
      description: 'Maintaining a regular workout schedule since January 2024, demonstrating the same discipline I apply to my professional work.'
    },
    {
      title: 'Goal-Oriented Approach',
      description: 'Setting and achieving fitness milestones, mirroring my approach to software development and project delivery.'
    },
    {
      title: 'Continuous Improvement',
      description: 'Constantly learning new techniques and optimizing my training, just like I do with coding and technology.'
    },
    {
      title: 'Mind-Body Balance',
      description: 'Understanding that physical fitness enhances mental clarity and productivity in my technical work.'
    }
  ];

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

        {/* Fitness Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {fitnessStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <stat.icon className={`${stat.color} mx-auto mb-4`} size={40} />
                <h3 className="font-semibold text-slate-800 mb-2">{stat.title}</h3>
                <div className="text-2xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <p className="text-slate-600 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Instagram Showcase */}
        <div className="mb-16">
          <Card className="hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-orange-100 to-red-100 overflow-hidden">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                    <Instagram className="text-pink-600" size={32} />
                    Follow My Progress
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Check out my fitness transformation and daily workout updates on Instagram. 
                    I share my progress, workout routines, and the journey of building strength and discipline.
                  </p>
                  <a 
                    href="https://www.instagram.com/its_maroju_nikhil" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Instagram size={20} />
                    @its_maroju_nikhil
                    <ExternalLink size={16} />
                  </a>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-white p-4 rounded-lg shadow-lg">
                    <img 
                      src="/lovable-uploads/bb095dd5-b01c-43d3-a12c-bec2c80d8c39.png" 
                      alt="Instagram QR Code"
                      className="w-48 h-48 object-contain"
                    />
                    <p className="text-sm text-slate-600 mt-3">Scan to follow my fitness journey</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fitness Values & Principles */}
        <div>
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            How Fitness Enhances My Professional Life
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {fitnessValues.map((value, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-800 mb-3 text-lg">{value.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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

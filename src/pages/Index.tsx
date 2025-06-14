
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';

const Index = () => {
  const achievements = [
    'Received the CTS Rising Star Award (Best Team Employee) for consistently delivering high-quality work',
    'Secured State 5th Rank in ECET-2021 (Computer Science and Engineering stream)',
    'One of the top 25 teams from CBIT selected for the Smart India Hackathon',
    'Led Py-Star(Python-Star) event in sudhee-2023 CBIT with record-breaking turnout',
    'Awarded Merit Certificate in All India Essay Writing Competition by United Nations Information Centre (UNIC)',
    'Cleared Facebook Hackercup 2022 Qualification round with 8,803 rank',
    'Conducted Machine Learning and Flask Bootcamp for 100+ students as part of CBIT Open Source Community Club',
    'Taught ML and Flask to 100+ participants in Bootcamp organized by CBIT Open Source Community club'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              I'm a versatile Data Engineer and Full-Stack Developer with expertise in building scalable data pipelines, 
              automation solutions, and web applications. With a strong foundation in Python, SQL, machine learning, and 
              cloud technologies, I've successfully delivered projects that drive business value through data-driven insights, 
              optimized workflows, and innovative solutions across multiple domains.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">9.46</div>
              <div className="text-slate-600">B.E CGPA</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-2">9.93</div>
              <div className="text-slate-600">Diploma CGPA</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">5th</div>
              <div className="text-slate-600">State Rank ECET</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-lg">
              <div className="text-3xl font-bold text-pink-600 mb-2">100+</div>
              <div className="text-slate-600">Students Mentored</div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Timeline />
      <Projects />

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Key Achievements & Recognition
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Recognition and accomplishments throughout my academic and professional journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Award className="text-yellow-600 mt-1 flex-shrink-0" size={24} />
                    <p className="text-slate-700 leading-relaxed">{achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default Index;

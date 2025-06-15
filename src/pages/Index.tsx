
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import ArtisticPortfolio from '@/components/ArtisticPortfolio';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';

const Index = () => {
  const achievements = [
    'Currently serving as Data Engineer at Providence India with 2+ years of experience',
    'Led Py-Star (Python-Star) event in Sudhee-2023 CBIT with record-breaking turnout',
    'Secured State 5th Rank in ECET-2021 (Computer Science and Engineering stream)',
    'Merit Certificate in All India Essay Writing Competition by United Nations Information Center',
    'Cleared Facebook Hackercup 2022 Qualification round with 8,803 rank',
    'Taught ML and Flask to 100+ participants in Bootcamp organized by CBIT Open Source Community',
    'Led CBIT Open Source Community as General Secretary, mentoring 100+ students',
    'Organized Hacktoberfest\'22 with 105 teams and 500+ participants',
    'Successfully transitioned from LEAP internship to full-time role at Providence India'
  ];

  const certifications = [
    {
      title: 'Academy Accreditation - Databricks Lakehouse Fundamentals',
      issuer: 'Databricks',
      date: 'May 2024',
      credentialId: '104669734'
    },
    {
      title: 'Microsoft Azure Fundamentals (AZ-900) Cert Prep',
      issuer: 'LinkedIn Learning',
      date: 'Jun 2023'
    },
    {
      title: 'Machine Learning',
      issuer: 'Internshala',
      date: 'Jan 2022'
    }
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
              I'm a Software Engineer at Providence India with 2+ years of experience building comprehensive technology solutions. 
              My journey spans from competitive programming and machine learning to full-stack web development and enterprise cloud solutions. 
              I've delivered measurable business impact through innovative automation, scalable applications, and technical leadership.
              As a passionate tech enthusiast, I thrive on solving complex challenges across diverse domains - from data engineering 
              and cloud architecture to mobile app development and machine learning. My experience leading technical communities, 
              mentoring 500+ students, and building everything from corporate websites to ML recommendation systems reflects my 
              commitment to continuous learning and knowledge sharing in the ever-evolving world of technology.
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
              <div className="text-3xl font-bold text-pink-600 mb-2">500+</div>
              <div className="text-slate-600">Students Mentored</div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Timeline />
      <Projects />
      <ArtisticPortfolio />

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Key Achievements & Recognition
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional accomplishments and recognition throughout my career journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
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

          {/* Certifications Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h4 className="font-semibold text-slate-800 mb-2">{cert.title}</h4>
                      <p className="text-blue-600 font-medium mb-1">{cert.issuer}</p>
                      <p className="text-slate-600 text-sm mb-2">{cert.date}</p>
                      {cert.credentialId && (
                        <p className="text-xs text-slate-500">ID: {cert.credentialId}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default Index;

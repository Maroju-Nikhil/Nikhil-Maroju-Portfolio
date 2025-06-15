
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import ArtisticPortfolio from '@/components/ArtisticPortfolio';
import FitnessJourney from '@/components/FitnessJourney';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Award, ExternalLink } from 'lucide-react';

const Index = () => {
  const achievements = [
    'Data Engineer at Providence India with 1.5 years of specialized data engineering experience and 2+ years total professional experience',
    'Led Py-Star (Python-Star) event in Sudhee-2023 CBIT with record-breaking turnout',
    'Secured State 5th Rank in ECET-2021 (Computer Science and Engineering stream)',
    'Merit Certificate in All India Essay Writing Competition by United Nations Information Center',
    'Cleared Facebook Hackercup 2022 Qualification round with 8,803 rank',
    'Taught ML and Flask to 100+ participants in Bootcamp organized by CBIT Open Source Community',
    'Led CBIT Open Source Community as General Secretary, mentoring 100+ students',
    'Organized Hacktoberfest\'22 with 105 teams and 500+ participants'
  ];

  const certifications = [
    {
      title: 'Academy Accreditation - Databricks Lakehouse Fundamentals',
      issuer: 'Databricks',
      date: 'May 2024',
      credentialId: '104669734',
      link: 'https://credentials.databricks.com/c1065ece-7e64-4894-8f0d-60edb3703fdb#acc.E1aIoqG8'
    },
    {
      title: 'Microsoft Azure Fundamentals (AZ-900) Cert Prep',
      issuer: 'LinkedIn Learning',
      date: 'Jun 2023',
      link: 'https://www.linkedin.com/learning/certificates/ea1b10eba3a7116ea3ecce7ff1304decc590931f89173ec7435da511fa642123'
    },
    {
      title: 'Machine Learning',
      issuer: 'Internshala',
      date: 'Jan 2022',
      link: 'https://trainings.internshala.com/view_certificate/F50810BC-0371-C1D0-35B7-9355B539426C/1838F928-F276-873A-E98B-567440D74D7D/'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navigation />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Data Engineer at Providence India with 1.5 years of specialized data engineering experience and 2+ years total professional experience building scalable technology solutions. 
              I specialize in data engineering, cloud architecture, and full-stack development, delivering measurable 
              business impact through innovative automation and applications. As a tech educator and community leader, 
              I've taught 100+ students in specialized bootcamps and led technical communities while continuously 
              exploring cutting-edge technologies from machine learning to mobile development.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                300+
              </div>
              <div className="text-slate-600 dark:text-slate-300">Py-Star Participants</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                9.0
              </div>
              <div className="text-slate-600 dark:text-slate-300">CGPA</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                12+
              </div>
              <div className="text-slate-600 dark:text-slate-300">Sketches</div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Timeline />
      <Projects />
      <ArtisticPortfolio />
      <FitnessJourney />
      <Testimonials />

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Key Achievements & Recognition
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Professional accomplishments and recognition throughout my career journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Award className="text-yellow-600 dark:text-yellow-400 mt-1 flex-shrink-0" size={24} />
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 text-center">
              Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group cursor-pointer">
                  <CardContent className="p-6">
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-center"
                    >
                      <div className="flex items-center justify-center mb-3">
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200 mr-2">{cert.title}</h4>
                        <ExternalLink size={16} className="text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors" />
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{cert.issuer}</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{cert.date}</p>
                      {cert.credentialId && (
                        <p className="text-xs text-slate-500 dark:text-slate-500">ID: {cert.credentialId}</p>
                      )}
                    </a>
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


import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, MapPin } from 'lucide-react';

const Index = () => {
  const experiences = [
    {
      title: 'Data Engineer - I',
      company: 'Providence Global Center',
      duration: 'Jan 2024 – June 2025 (18 Months)',
      achievements: [
        'Led onboarding of Genesys.org (Access Center) to Enterprise Contact Center (ECC) platform',
        'Contributed to ECC platform code refactoring initiative, accelerating onboarding time by 30%',
        'Designed and implemented Databricks-based testing automation framework, reducing testing effort by 75%',
        'Automated L1/L2 access provisioning process, eliminating repetitive daily effort (~15 minutes/day)',
        'Rapidly diagnosed and resolved critical production outages including CrowdStrike incidents within 12 hours',
        'Optimized Power BI environment, reducing data footprint by 90% (from 40GB to 4GB) and slashing query time by 97%'
      ]
    },
    {
      title: 'Data Engineer Intern',
      company: 'Providence Global Center',
      duration: 'June 2023 – Aug 2023 (3 Months)',
      achievements: [
        'Worked on setting up pipelines using Azure Data factory and automated data storing using SQL',
        'Improved communication, team collaboration, data engineering skills and secured full-time offer',
        'Received appreciation from managers and senior managers for strong presentation skills'
      ]
    },
    {
      title: 'Backend Developer Intern',
      company: 'OKLI',
      duration: 'Aug 2022 – March 2023 (7 Months)',
      achievements: [
        'Enhanced Selenium-based web scraper performance, accelerating data collection',
        'Leveraged Python to cleanse and normalize large Excel datasets, ensuring data integrity',
        'Developed automated code to upload processed data to AWS S3, reducing manual intervention by 100%'
      ]
    }
  ];

  const achievements = [
    'Received the CTS Rising Star Award (Best Team Employee) for consistently delivering high-quality work',
    'Secured State 5th Rank in ECET-2021 (Computer Science and Engineering stream)',
    'Awarded Merit Certificate in All India Essay Writing Competition by United Nations Information Centre (UNIC)',
    'Conducted Machine Learning and Flask Bootcamp for 100+ students as part of CBIT Open Source Community Club'
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
              I'm a passionate Data Engineer with expertise in building scalable data pipelines and automation solutions. 
              With a strong foundation in Python, SQL, and cloud technologies, I've successfully delivered projects that 
              drive business value through data-driven insights and optimized workflows.
            </p>
          </div>

          {/* Education */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-r from-white to-blue-50/50">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">B.E in Computer Science</CardTitle>
                <CardDescription className="text-blue-600 font-semibold">Chaitanya Bharathi Institute of Technology</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-slate-600 mb-2">
                  <Award size={16} />
                  <span>CGPA 9.4</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar size={16} />
                  <span>2021-2024</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-r from-white to-indigo-50/50">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Diploma in Computer Engineering</CardTitle>
                <CardDescription className="text-indigo-600 font-semibold">Govt. Polytechnic, Masab Tank</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-slate-600 mb-2">
                  <Award size={16} />
                  <span>CGPA 9.8</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar size={16} />
                  <span>2018-2021</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Skills />

      {/* Professional Experience */}
      <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Professional Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              My career progression in data engineering and software development
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-2xl text-slate-800">{exp.title}</CardTitle>
                      <CardDescription className="text-lg text-blue-600 font-semibold">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 px-4 py-2 text-sm">
                      <Calendar className="mr-2" size={16} />
                      {exp.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Projects />

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Key Achievements
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Recognition and accomplishments throughout my academic and professional journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-r from-white to-yellow-50/50">
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

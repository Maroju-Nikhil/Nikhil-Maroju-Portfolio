
import React from 'react';
import { Mail, Phone, Linkedin, Github, Database, Code, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const skills = {
    languages: ['Python', 'SQL', 'C++'],
    frameworks: ['PySpark', 'Bootstrap'],
    etlTools: ['Azure Data Factory', 'Databricks', 'Power BI'],
    techniques: ['Data cleansing & normalization', 'Report UI/UX enhancements'],
    cloudServices: ['AWS (S3, RDS, EC2)', 'Azure'],
    frontend: ['HTML', 'CSS', 'React'],
    backend: ['Django', 'RESTful services'],
    concepts: ['DBMS', 'Operating Systems', 'Data Structures & Algorithms']
  };

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-fade-in">
              Nikhil Maroju
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-700 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Data Engineer & Software Developer
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
              Skilled in building data pipelines and automation with <span className="font-semibold text-blue-600">1.5 years of experience</span>. 
              Led Databricks testing framework, cutting efforts by <span className="font-semibold text-indigo-600">75%</span>, and optimized Power BI, 
              reducing data footprint by <span className="font-semibold text-purple-600">90%</span> and query time by <span className="font-semibold text-blue-600">97%</span>.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <a href="mailto:marojunikhil2002@gmail.com" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                <Mail size={20} />
                <span>marojunikhil2002@gmail.com</span>
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
            </div>

            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg">
                <Mail className="mr-2" size={20} />
                Contact Me
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg">
                <Database className="mr-2" size={20} />
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="px-6 py-16 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-r from-white to-blue-50/50">
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

      {/* Skills Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <Code size={24} />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-indigo-50 to-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-indigo-700">
                  <Database size={24} />
                  ETL & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.etlTools.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-indigo-100 text-indigo-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-700">
                  <Award size={24} />
                  Cloud Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.cloudServices.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-pink-700">
                  <Code size={24} />
                  Web Tech
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[...skills.frontend, ...skills.backend].map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-pink-100 text-pink-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-6 py-16 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
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

      {/* Achievements Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Key Achievements
          </h2>
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

      {/* Footer */}
      <footer className="px-6 py-12 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Interested in discussing data engineering opportunities, collaborating on projects, or just want to connect? 
            I'd love to hear from you!
          </p>
          <div className="flex justify-center gap-6">
            <Button size="lg" className="bg-white text-slate-800 hover:bg-slate-100">
              <Mail className="mr-2" size={20} />
              Send Email
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800">
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

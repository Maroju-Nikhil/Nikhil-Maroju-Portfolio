
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const Timeline = () => {
  const timelineItems = [
    {
      type: 'work',
      title: 'Data Engineer - I',
      company: 'Providence Global Center',
      location: 'Hyderabad, India',
      duration: 'Jan 2024 – June 2025 (18 Months)',
      period: '2024-2025',
      description: 'Leading enterprise-level data engineering initiatives and platform migrations.',
      achievements: [
        'Led onboarding of Genesys.org (Access Center) to Enterprise Contact Center (ECC) platform',
        'Contributed to ECC platform code refactoring initiative, accelerating onboarding time by 30%',
        'Designed and implemented Databricks-based testing automation framework, reducing testing effort by 75%',
        'Automated L1/L2 access provisioning process, eliminating repetitive daily effort (~15 minutes/day)',
        'Rapidly diagnosed and resolved critical production outages including CrowdStrike incidents within 12 hours',
        'Optimized Power BI environment, reducing data footprint by 90% (from 40GB to 4GB) and slashing query time by 97%'
      ],
      skills: ['Databricks', 'Azure Data Factory', 'Power BI', 'Python', 'SQL', 'PySpark']
    },
    {
      type: 'work',
      title: 'Data Engineer Intern',
      company: 'Providence Global Center',
      location: 'Hyderabad, India',
      duration: 'June 2023 – Aug 2023 (3 Months)',
      period: '2023',
      description: 'Internship focused on data pipeline development and automation.',
      achievements: [
        'Worked on setting up pipelines using Azure Data factory and automated data storing using SQL',
        'Improved communication, team collaboration, data engineering skills and secured full-time offer',
        'Received appreciation from managers and senior managers for strong presentation skills'
      ],
      skills: ['Azure Data Factory', 'SQL', 'Data Pipelines', 'Team Collaboration']
    },
    {
      type: 'work',
      title: 'Backend Developer Intern',
      company: 'OKLI',
      location: 'Remote',
      duration: 'Aug 2022 – March 2023 (7 Months)',
      period: '2022-2023',
      description: 'Focused on backend development, web scraping, and cloud automation.',
      achievements: [
        'Enhanced Selenium-based web scraper performance, accelerating data collection',
        'Leveraged Python to cleanse and normalize large Excel datasets, ensuring data integrity',
        'Developed automated code to upload processed data to AWS S3, reducing manual intervention by 100%'
      ],
      skills: ['Python', 'Selenium', 'AWS S3', 'Data Processing', 'Excel']
    },
    {
      type: 'work',
      title: 'Course Mentor Intern',
      company: 'NxtWave Disruptive Technologies',
      location: 'Remote',
      duration: 'Aug 2022 – Sep 2022 (1 Month)',
      period: '2022',
      description: 'Mentoring engineering aspirants and developing educational content.',
      achievements: [
        'Designed Course for engineering aspirants, developed and worked on many test cases for different difficulty of programs on multiple languages'
      ],
      skills: ['Mentoring', 'Course Development', 'Programming', 'Problem Solving']
    },
    {
      type: 'work',
      title: 'Software Developer Intern',
      company: 'Crimson Innovative Technologies, Pvt Ltd.',
      location: 'Remote',
      duration: 'Jul 2020 – Dec 2020 (6 Months)',
      period: '2020',
      description: 'Early career experience in software development and web technologies.',
      achievements: [
        'Worked on a real-time project using React Native, and was successful in developing a number of project components, like user authentication. Created Responsive Web pages using Bootstrap.'
      ],
      skills: ['React Native', 'Bootstrap', 'Web Development', 'User Authentication']
    },
    {
      type: 'education',
      title: 'B.E in Computer Science and Engineering',
      company: 'Chaitanya Bharathi Institute of Technology',
      location: 'Hyderabad, India',
      duration: '2021 – 2024',
      period: '2021-2024',
      description: 'Bachelor\'s degree with excellent academic performance.',
      achievements: [
        'CGPA: 9.46/10',
        'Strong foundation in computer science fundamentals',
        'Active participation in coding competitions and hackathons'
      ],
      skills: ['Computer Science', 'Programming', 'Data Structures', 'Algorithms']
    },
    {
      type: 'education',
      title: 'Diploma in Computer Engineering',
      company: 'Government Polytechnic, Masab Tank',
      location: 'Hyderabad, India',
      duration: '2018 – 2021',
      period: '2018-2021',
      description: 'Diploma with outstanding academic performance.',
      achievements: [
        'CGPA: 9.93/10',
        'Secured State 5th Rank in ECET-2021 (Computer Science and Engineering stream)',
        'Built strong technical foundation in computer engineering'
      ],
      skills: ['Computer Engineering', 'Technical Skills', 'Problem Solving']
    }
  ];

  const getIcon = (type: string) => {
    return type === 'work' ? Briefcase : GraduationCap;
  };

  const getGradient = (type: string) => {
    return type === 'work' 
      ? 'from-blue-500 to-indigo-600' 
      : 'from-purple-500 to-pink-600';
  };

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Professional Timeline
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My journey through education and professional experiences
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${getGradient(item.type)} flex items-center justify-center shadow-lg border-4 border-white`}>
                    {React.createElement(getIcon(item.type), { size: 24, className: 'text-white' })}
                  </div>
                </div>

                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                    <div className={`h-2 bg-gradient-to-r ${getGradient(item.type)}`}></div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className={`bg-gradient-to-r ${getGradient(item.type)} text-white`}>
                          {item.period}
                        </Badge>
                        <Badge variant="outline" className="text-slate-600">
                          {item.type === 'work' ? 'Work' : 'Education'}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-slate-800">{item.title}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-blue-600">{item.company}</CardDescription>
                      <div className="flex items-center gap-4 text-sm text-slate-500 mt-2">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{item.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 mb-4">{item.description}</p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-slate-700">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4">
                        <h4 className="font-semibold text-slate-700 mb-2">Skills & Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for the other side */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

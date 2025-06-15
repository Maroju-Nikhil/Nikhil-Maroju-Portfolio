
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Building2, GraduationCap, Briefcase, Award } from 'lucide-react';

const Timeline = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Data Engineer',
      company: 'Providence India',
      location: 'Hyderabad, India',
      period: 'Feb 2023 - Present',
      description: 'Specializing in data engineering solutions, cloud architecture, and automation frameworks.',
      achievements: [
        'Led Genesys.org to Enterprise Contact Center migration with automated testing frameworks',
        'Reduced onboarding time by 30% (saving $2,400 per cycle at $80/hour)',
        'Cut testing effort by 75% through Databricks framework implementation',
        'Optimized Power BI environment: 90% data footprint reduction (40GB → 4GB)',
        'Achieved 97% query time reduction and $2,000 monthly cost savings',
        'Automated L1/L2 access provisioning, eliminating 15 minutes daily manual effort'
      ],
      technologies: ['Databricks', 'Azure Data Factory', 'Power BI', 'PySpark', 'Python', 'SQL', 'Azure']
    },
    {
      type: 'work',
      title: 'Backend Developer Intern',
      company: 'Crimson Innovative Technologies',
      location: 'Hyderabad, India',
      period: 'Jun 2020 - Aug 2020',
      description: 'Developed data processing solutions and web scraping automation during 12th standard.',
      achievements: [
        'Enhanced a Selenium-based web scraper\'s performance—accelerating data collection—and integrated it with AWS services (RDS, S3) for end-to-end data ingestion and management',
        'Leveraged Python to cleanse and normalize large Excel datasets, ensuring data integrity and readiness for downstream processing',
        'Developed an automated code to upload processed data to AWS S3, achieving hands-free synchronization and reducing manual intervention by 100%'
      ],
      technologies: ['Python', 'Selenium', 'AWS RDS', 'AWS S3', 'Excel', 'Data Processing']
    },
    {
      type: 'education',
      title: 'Bachelor of Technology in Computer Science',
      company: 'Chaitanya Bharathi Institute of Technology',
      location: 'Hyderabad, India',
      period: '2021 - 2024',
      description: 'Graduated with 9.0 CGPA. Active in technical communities and event leadership.',
      achievements: [
        'Graduated with 9.0 CGPA',
        'Led Py-Star (Python-Star) event with record-breaking turnout',
        'General Secretary of CBIT Open Source Community',
        'Organized Hacktoberfest\'22 with 105 teams and 500+ participants',
        'Taught ML and Flask to 100+ participants in specialized bootcamps'
      ],
      technologies: ['Python', 'Machine Learning', 'Web Development', 'Data Structures', 'Algorithms']
    },
    {
      type: 'education',
      title: 'Intermediate (12th Grade)',
      company: 'Narayana Junior College',
      location: 'Hyderabad, India',
      period: '2019 - 2021',
      description: 'Completed intermediate education with strong foundation in Mathematics, Physics, and Chemistry.',
      achievements: [
        'Strong academic performance in MPC stream',
        'Secured State 5th Rank in ECET-2021',
        'Built foundation for engineering studies'
      ],
      technologies: ['Mathematics', 'Physics', 'Chemistry']
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="text-blue-600" size={20} />;
      case 'education':
        return <GraduationCap className="text-green-600" size={20} />;
      default:
        return <Award className="text-purple-600" size={20} />;
    }
  };

  const getGradient = (type: string) => {
    switch (type) {
      case 'work':
        return 'from-blue-500 to-indigo-600';
      case 'education':
        return 'from-green-500 to-emerald-600';
      default:
        return 'from-purple-500 to-pink-600';
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Professional Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            My career progression from student to data engineering professional
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* Timeline dot */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${getGradient(experience.type)} text-white shadow-lg`}>
                  {getIcon(experience.type)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl text-slate-800 mb-2">
                            {experience.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                            <Building2 size={16} />
                            {experience.company}
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-slate-600 text-sm">
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              {experience.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              {experience.period}
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-slate-600 leading-relaxed">
                        {experience.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-slate-700 mb-3">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-slate-600">
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${getGradient(experience.type)} mt-2 flex-shrink-0`}></div>
                                <span className="text-sm leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-slate-700 mb-3">
                            Technologies & Skills:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, idx) => (
                              <Badge 
                                key={idx} 
                                variant="secondary" 
                                className="text-xs bg-slate-100 text-slate-700 hover:bg-slate-200"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

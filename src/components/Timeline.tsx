import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';

const Timeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const timelineSection = document.getElementById('timeline');
      if (timelineSection) {
        const rect = timelineSection.getBoundingClientRect();
        const sectionHeight = timelineSection.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate how much of the timeline section is visible
        const visibleTop = Math.max(0, -rect.top);
        const visibleBottom = Math.min(sectionHeight, windowHeight - rect.top);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        
        // Convert to progress percentage (0 to 100)
        const progress = Math.min(100, Math.max(0, (visibleHeight / windowHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineItems = [
    {
      type: 'work',
      title: 'Data Engineer',
      company: 'Providence India',
      location: 'Hyderabad, Telangana, India',
      duration: 'Jul 2024 – Present (1+ year)',
      period: '2024-Present',
      description: 'Leading enterprise-level data engineering initiatives and platform scalability projects.',
      achievements: [
        'Contributed to ECC platform code refactoring initiative, accelerating onboarding time by 30% and reducing maintenance efforts—key to the 2025 scalability roadmap',
        'Designed and implemented Databricks-based (PySpark) testing automation framework, reducing manual regression and onboarding testing effort by 75%',
        'Automated L1/L2 access provisioning process using parameterized design across ECC organizations—eliminated repetitive daily effort (~15 minutes/day) for Product Owners by auto-handling Active Directory group updates across 5–7 organizations',
        'Translated stakeholder requirements into end-to-end report development and incorporated UI/UX enhancements, redesigning reports for improved visual clarity and usability'
      ],
      skills: ['Microsoft SQL Server', 'Microsoft Power BI', 'Azure Data Factory', 'Azure Databricks', 'PySpark', 'Data Modeling', 'Delta Table', 'Azure Data Lake']
    },
    {
      type: 'work',
      title: 'Data Engineer Intern',
      company: 'Providence India',
      location: 'Hyderabad, Telangana, India',
      duration: 'Jan 2024 – Jun 2024 (6 months)',
      period: '2024',
      description: 'LEAP internship program leading to full-time role through high-impact data engineering solutions.',
      achievements: [
        'Successfully transitioned from 5-month LEAP internship to full-time role by delivering high-impact data engineering solutions across enterprise-level platforms',
        'Led onboarding of new Genesys org (Access Center) to Enterprise Contact Center (ECC) platform as primary developer—built custom configurations, robust data pipelines, and interactive Power BI reports'
      ],
      skills: ['Microsoft SQL Server', 'Microsoft Power BI', 'Azure Databricks', 'Data Engineering']
    },
    {
      type: 'leadership',
      title: 'General Secretary',
      company: 'CBIT Open Source Community',
      location: 'Hyderabad, India',
      duration: 'Dec 2022 – Nov 2023 (1 year)',
      period: '2022-2023',
      description: 'Leading open source initiatives and community building at college level.',
      achievements: [
        'Coordinated and organized workshop on WEB-3.0 (blockchain technology)',
        'Conducted Git/GitHub session as part of Open Source technologies',
        'Conducted Bootcamp on ML & Flask with 100+ students with hands-on experience',
        'Led team initiatives and community engagement programs'
      ],
      skills: ['Leadership', 'Event Management', 'Machine Learning', 'Flask', 'Git/GitHub', 'Blockchain']
    },
    {
      type: 'work',
      title: 'Data Engineer Intern',
      company: 'Providence India',
      location: 'Hyderabad, Telangana, India',
      duration: 'Jun 2023 – Aug 2023 (3 months)',
      period: '2023',
      description: 'Summer internship focused on data pipeline development and business intelligence.',
      achievements: [
        'Worked on creating pipelines using Azure Data Factory and automated data storing using SQL procedures',
        'Visualized data using Power BI for business improvement',
        'Improved communication, team collaboration, and data engineering skills',
        'Received appreciation from managers, senior managers, and director for strong presentation skills and impactful storytelling',
        'Secured full-time offer'
      ],
      skills: ['Microsoft SQL Server', 'Microsoft Power BI', 'Azure Data Factory', 'Data Engineering']
    },
    {
      type: 'work',
      title: 'Backend Developer',
      company: 'OKLI Pvt. Ltd.',
      location: 'Remote',
      duration: 'Feb 2023 – Apr 2023 (3 months)',
      period: '2023',
      description: 'Backend development focused on data processing and cloud automation.',
      achievements: [
        'Worked on cleaning data from Excel using Python',
        'Automated updating content to AWS S3 bucket',
        'Worked on storing cleaned data to RDS EC2 instance (PostgreSQL)'
      ],
      skills: ['Python', 'Flask', 'AWS S3', 'PostgreSQL', 'Data Processing']
    },
    {
      type: 'leadership',
      title: 'Junior Coordinator',
      company: 'CBIT Open Source Community',
      location: 'CBIT, Hyderabad',
      duration: 'Mar 2022 – Dec 2022 (10 months)',
      period: '2022',
      description: 'Coordinating major hackathons and open source initiatives.',
      achievements: [
        'Organized and conducted 24-hour hackathon called Hacktoberfest\'22 with 105 teams and 500+ participants',
        'Designed problem statement website capable of handling many concurrent hits',
        'Helped organizing committee in publicizing and spreading awareness about open source'
      ],
      skills: ['Event Management', 'Web Development', 'Open Source', 'Community Building']
    },
    {
      type: 'work',
      title: 'Backend Developer',
      company: 'OKLI Pvt. Ltd.',
      location: 'Remote',
      duration: 'Aug 2022 – Nov 2022 (4 months)',
      period: '2022',
      description: 'Backend development and Python automation projects.',
      achievements: [
        'Enhanced Selenium-based web scraper performance, accelerating data collection',
        'Leveraged Python to cleanse and normalize large Excel datasets',
        'Developed automated code to upload processed data to AWS S3'
      ],
      skills: ['Python', 'Selenium', 'Data Processing', 'Automation']
    },
    {
      type: 'work',
      title: 'Course Mentor Intern',
      company: 'NxtWave',
      location: 'Hyderabad, Telangana, India',
      duration: 'Aug 2022 (1 month)',
      period: '2022',
      description: 'Course mentoring and curriculum development for engineering aspirants.',
      achievements: [
        'Course Mentor to design course for Engineering Job aspirants',
        'Developed comprehensive curriculum and learning materials',
        'Provided guidance and mentorship to aspiring engineers'
      ],
      skills: ['Mentoring', 'Course Development', 'Curriculum Design']
    },
    {
      type: 'work',
      title: 'Software Developer Intern',
      company: 'Crimson Innovative Technologies',
      location: 'Attapur, Hyderabad (Hybrid)',
      duration: 'Jul 2020 – Dec 2020 (6 months)',
      period: '2020',
      description: 'Mobile application development with authentication systems.',
      achievements: [
        'Developed mobile screens for Authentication',
        'Worked on setting up Google, Facebook, Email, Phone authentication using Google Firebase securely',
        'Built responsive mobile interfaces using React Native'
      ],
      skills: ['JavaScript', 'Bootstrap', 'CSS3', 'React Native', 'HTML5', 'Firebase']
    },
    {
      type: 'education',
      title: 'B.E in Computer Science and Engineering',
      company: 'Chaitanya Bharathi Institute of Technology',
      location: 'Hyderabad, India',
      duration: '2021 – 2024',
      period: '2021-2024',
      description: 'Bachelor\'s degree with excellent academic performance and active participation in tech communities.',
      achievements: [
        'CGPA: 9.46/10',
        'Active member of CBIT Open Source Community',
        'Strong foundation in computer science fundamentals',
        'Participated in multiple hackathons and coding competitions'
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
      description: 'Diploma with outstanding academic performance and state-level recognition.',
      achievements: [
        'CGPA: 9.93/10',
        'Secured State 5th Rank in ECET-2021 (Computer Science and Engineering stream)',
        'Built strong technical foundation in computer engineering'
      ],
      skills: ['Computer Engineering', 'Technical Skills', 'Problem Solving']
    },
    {
      type: 'education',
      title: 'IIIrd - Xth Standard',
      company: 'Jyothi Vidyalaya High School',
      location: 'India',
      duration: '2010 – 2018',
      period: '2010-2018',
      description: 'High school education with excellent academic performance and active leadership roles.',
      achievements: [
        'CGPA: 9.8/10',
        'Ruby vice-Captain for a year, carrying out all responsibilities of the group',
        'Active leader in organizing quizzes, public speaking, and cultural programs',
        'Strong foundation in academics and extracurricular activities'
      ],
      skills: ['Leadership', 'Public Speaking', 'Academic Excellence', 'Cultural Activities']
    }
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'work': return Briefcase;
      case 'education': return GraduationCap;
      case 'leadership': return Award;
      default: return Briefcase;
    }
  };

  const getGradient = (type: string) => {
    switch(type) {
      case 'work': return 'from-blue-500 to-indigo-600';
      case 'education': return 'from-purple-500 to-pink-600';
      case 'leadership': return 'from-green-500 to-teal-600';
      default: return 'from-blue-500 to-indigo-600';
    }
  };

  const getTypeLabel = (type: string) => {
    switch(type) {
      case 'work': return 'Work';
      case 'education': return 'Education';
      case 'leadership': return 'Leadership';
      default: return 'Experience';
    }
  };

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Clouds */}
        <div className="absolute top-10 left-10 w-20 h-12 bg-white/30 rounded-full animate-float" style={{ animationDelay: '0s', animationDuration: '8s' }}></div>
        <div className="absolute top-20 right-20 w-16 h-10 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
        <div className="absolute top-40 left-1/3 w-24 h-14 bg-white/25 rounded-full animate-float" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
        
        {/* Traveling Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 animate-text-glow">
            Professional Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            My comprehensive journey through professional experience, leadership roles, and education
          </p>
          
          {/* Journey Road Animation */}
          <div className="relative mt-8 h-2 bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 rounded-full mx-auto max-w-md overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div>
          </div>
        </div>

        <div className="relative">
          {/* Animated Timeline Road */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full shadow-lg">
            {/* Road Markings */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 transform -translate-x-1/2 w-3 h-1 bg-white/80 rounded-full animate-pulse"
                style={{
                  top: `${i * 5}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2s'
                }}
              ></div>
            ))}
          </div>

          {/* Traveling Car Animation - Now follows scroll progress */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 text-blue-600 z-20 transition-all duration-300 ease-out"
            style={{ 
              top: `${Math.min(95, scrollProgress)}%`,
              transform: 'translateX(-50%) translateY(-50%)'
            }}
          >
            <div className="relative">
              <div className="w-8 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg relative animate-float">
                {/* Headlights */}
                <div className="absolute -top-1 left-1 w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
                <div className="absolute -top-1 right-1 w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
                {/* Wheels */}
                <div className="absolute -bottom-1 left-0 w-2 h-2 bg-gray-800 rounded-full animate-spin" style={{ animationDuration: '0.5s' }}></div>
                <div className="absolute -bottom-1 right-0 w-2 h-2 bg-gray-800 rounded-full animate-spin" style={{ animationDuration: '0.5s' }}></div>
              </div>
              {/* Exhaust animation */}
              <div className="absolute -left-3 top-1/2 w-6 h-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-gray-400/60 rounded-full animate-pulse"
                    style={{
                      left: `${i * 2}px`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: '1s'
                    }}
                  ></div>
                ))}
              </div>
              {/* Speed lines when moving */}
              {scrollProgress > 5 && (
                <div className="absolute -right-4 top-0 w-8 h-6 opacity-60">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-0.5 bg-blue-400 rounded-full animate-pulse"
                      style={{
                        top: `${i * 1.5 + 1}px`,
                        right: `${i * 2}px`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '0.8s'
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${getGradient(item.type)} flex items-center justify-center shadow-xl border-4 border-white animate-bounce-in hover:animate-wobble transition-all duration-300 hover:scale-110`}>
                    {React.createElement(getIcon(item.type), { size: 24, className: 'text-white animate-glow-pulse' })}
                    
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping"></div>
                    <div className="absolute inset-0 rounded-full border border-blue-400/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>

                {/* Content card with enhanced animations */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm card-hover magnetic-hover relative overflow-hidden">
                    {/* Animated top border */}
                    <div className={`h-2 bg-gradient-to-r ${getGradient(item.type)} animate-gradient-x`}></div>
                    
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
                    </div>
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className={`bg-gradient-to-r ${getGradient(item.type)} text-white animate-glow-pulse`}>
                          {item.period}
                        </Badge>
                        <Badge variant="outline" className="text-slate-600 hover:bg-blue-50 transition-colors">
                          {getTypeLabel(item.type)}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors gradient-text-hover">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-semibold text-blue-600 animate-text-glow">
                        {item.company}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm text-slate-500 mt-2">
                        <div className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                          <Calendar size={14} className="animate-pulse" />
                          <span>{item.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                          <MapPin size={14} className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-slate-600 mb-4 group-hover:text-slate-700 transition-colors">{item.description}</p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-slate-700 flex items-center gap-2">
                          Key Achievements:
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        </h4>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 hover:text-slate-800 transition-colors group/item">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0 group-hover/item:animate-pulse"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4">
                        <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                          Skills & Technologies:
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, idx) => (
                            <Badge 
                              key={idx} 
                              variant="secondary" 
                              className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-200 transition-all duration-300 hover:scale-105 animate-fade-in"
                              style={{ animationDelay: `${idx * 0.1}s` }}
                            >
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

          {/* Journey Completion Animation */}
          <div className="flex justify-center mt-16">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-xl animate-bounce-in">
                <div className="text-white text-2xl">🏁</div>
                <div className="absolute inset-0 rounded-full border-4 border-green-400/30 animate-ping"></div>
              </div>
              <p className="text-center mt-4 text-slate-600 font-medium animate-fade-in" style={{ animationDelay: '1s' }}>
                Journey Continues...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

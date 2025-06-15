
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Database, BarChart3, Zap, Clock, Brain, Video, Car, Film, Globe, Building2, Sparkles, Star } from 'lucide-react';

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const projects = [
    {
      title: 'Enterprise Contact Center Migration',
      description: 'Led the migration of Genesys.org to Enterprise Contact Center platform, implementing automated testing frameworks and optimization strategies.',
      achievements: [
        'Reduced onboarding time by 30% (saving $2,400 per onboarding cycle at $80/hour)',
        'Implemented Databricks testing framework',
        'Cut testing effort by 75%'
      ],
      technologies: ['Databricks', 'Azure', 'Python', 'PySpark'],
      icon: Database,
      gradient: 'from-blue-500 via-blue-600 to-indigo-700',
      category: 'Professional',
      featured: true
    },
    {
      title: 'Power BI Performance Optimization',
      description: 'Comprehensive optimization of Power BI environment resulting in dramatic performance improvements and cost reduction.',
      achievements: [
        'Reduced data footprint by 90% (40GB → 4GB)',
        'Slashed query time by 97%',
        'Optimized dashboard performance'
      ],
      technologies: ['Power BI', 'SQL', 'Azure', 'Data Modeling'],
      icon: BarChart3,
      gradient: 'from-indigo-500 via-purple-600 to-pink-600',
      category: 'Professional',
      featured: true
    },
    {
      title: 'Automated Data Pipeline Framework',
      description: 'Built robust data pipelines using Azure Data Factory with automated monitoring, error handling, and data quality checks.',
      achievements: [
        'Automated L1/L2 access provisioning process',
        'Eliminated 15 minutes daily manual effort (7.5 hours monthly = $600/month savings at $80/hour)',
        'Improved data quality and reliability'
      ],
      technologies: ['Azure Data Factory', 'SQL', 'Python', 'Power BI'],
      icon: Zap,
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
      category: 'Professional'
    },
    {
      title: 'Real-time Data Processing System',
      description: 'Developed high-performance data processing system using Power BI and PySpark for scalable real-time analytics with strategic pipeline design.',
      achievements: [
        'Built views, materialized views, and tables using PySpark',
        'Implemented strategic real-time data processing pipelines',
        'Designed comprehensive Power BI analytics framework'
      ],
      technologies: ['Power BI', 'PySpark', 'Data Pipelines', 'Real-time Analytics'],
      icon: Clock,
      gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
      category: 'Professional'
    },
    {
      title: 'Crimson Innovative Technologies Website',
      description: 'Enhanced responsive corporate website built during software internship, creating a much improved version of the previous site that earned mentor appreciation.',
      achievements: [
        '🏆 Built entirely in 12th standard without AI assistance (2020)',
        'Received positive feedback from mentor for quality work',
        'Earned trust for additional design responsibilities',
        'Mentor recommended learning React Native for future projects',
        'Delivered enhanced, responsive design from scratch'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      icon: Building2,
      gradient: 'from-orange-400 via-red-500 to-pink-600',
      category: 'Personal',
      liveUrl: 'https://maroju-nikhil.github.io/Crimson_innovative_technologies/'
    },
    {
      title: 'PY-STAR Event Website',
      description: 'Designed and developed the official website for Py-Star (Python-Star) event in Sudhee-2023 CBIT, which achieved record-breaking turnout.',
      achievements: [
        'Led the development for major college event',
        'Created responsive and engaging design',
        'Contributed to record-breaking event turnout',
        '🏆 Featured in achievements section'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      icon: Globe,
      gradient: 'from-green-400 via-emerald-500 to-teal-600',
      category: 'Personal',
      githubUrl: 'https://github.com/Maroju-Nikhil/PY-STAR',
      liveUrl: 'https://maroju-nikhil.github.io/PY-STAR/'
    },
    {
      title: 'Car Price Prediction System',
      description: 'Designed Full stack application which predicts car price using ML Linear model with Ridge regression.',
      achievements: [
        'Built end-to-end ML pipeline',
        'Implemented Ridge regression model',
        'Created responsive web interface'
      ],
      technologies: ['Flask', 'Python', 'Machine Learning', 'Bootstrap'],
      icon: Car,
      gradient: 'from-green-400 via-emerald-500 to-teal-600',
      category: 'Personal',
      liveUrl: 'https://car-price-prediction-b9tm.onrender.com/'
    },
    {
      title: 'Photo To Video Converter',
      description: 'An application developed using Python that takes a collection of photos and converts it into one video. Simple standalone application.',
      achievements: [
        'Automated video generation',
        'Batch photo processing',
        'User-friendly interface'
      ],
      technologies: ['Python', 'OpenCV', 'PIL', 'Tkinter'],
      icon: Video,
      gradient: 'from-purple-400 via-pink-500 to-rose-600',
      category: 'Personal'
    },
    {
      title: 'Movie Recommender System',
      description: 'Designed ML model using cosine similarity which recommends movies based on user input preferences, trained with IMDB top movie rating system data.',
      achievements: [
        'Implemented cosine similarity algorithm',
        'Built recommendation engine with IMDB dataset',
        'Used NLTK for text processing and analysis',
        'Trained on top-rated movies database'
      ],
      technologies: ['Python', 'Machine Learning', 'NLTK', 'Cosine Similarity', 'IMDB Dataset'],
      icon: Film,
      gradient: 'from-red-400 via-orange-500 to-yellow-500',
      category: 'Personal',
      githubUrl: 'https://github.com/Maroju-Nikhil/ML-projects/tree/main/Movie%20Recommender%20System'
    },
    {
      title: 'Simple To-Do App',
      description: 'A React-Native To-Do Application, which helps to add To-do\'s to list and view them efficiently. Includes video demonstrations of the app functionality.',
      achievements: [
        'Cross-platform mobile app',
        'Local data persistence',
        'Intuitive user interface',
        'Video documentation available'
      ],
      technologies: ['JavaScript', 'React-Native', 'JSON'],
      icon: Brain,
      gradient: 'from-indigo-400 via-blue-500 to-cyan-600',
      category: 'Personal',
      videoUrl: 'https://drive.google.com/drive/folders/1DA-NhkJMqvNCOy0OdHfuV5AldVrqLgtJ?usp=sharing'
    }
  ];

  const professionalProjects = projects.filter(p => p.category === 'Professional');
  const personalProjects = projects.filter(p => p.category === 'Personal');

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  const ProjectCard = ({ project, index, category }: { project: any, index: number, category: string }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const globalIndex = category === 'Professional' ? index : index + professionalProjects.length;

    useEffect(() => {
      if (cardRef.current && observerRef.current) {
        observerRef.current.observe(cardRef.current);
      }
    }, []);

    const isVisible = visibleCards.has(globalIndex);
    const isHovered = hoveredCard === globalIndex;

    return (
      <div
        ref={cardRef}
        data-index={globalIndex}
        className={`group relative transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        style={{ 
          transitionDelay: `${globalIndex * 100}ms`,
          animationDelay: `${globalIndex * 100}ms` 
        }}
        onMouseEnter={() => setHoveredCard(globalIndex)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Animated background glow */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-500 animate-pulse`}></div>
        
        {/* Featured project sparkle */}
        {project.featured && (
          <div className="absolute -top-2 -right-2 z-20">
            <div className="relative">
              <Sparkles className="text-yellow-400 animate-pulse" size={28} />
              <div className="absolute inset-0 animate-ping">
                <Sparkles className="text-yellow-300 opacity-75" size={28} />
              </div>
            </div>
          </div>
        )}

        <Card className={`relative overflow-hidden border-0 backdrop-blur-xl transition-all duration-500 transform ${
          isHovered ? 'scale-105 shadow-2xl' : 'shadow-lg'
        } ${
          project.featured 
            ? 'bg-gradient-to-br from-white/95 via-white/90 to-white/95' 
            : 'bg-white/80'
        }`}>
          {/* Gradient top border */}
          <div className={`h-1 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
            <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} transform transition-transform duration-700 ${
              isHovered ? 'translate-x-0' : '-translate-x-full'
            }`}></div>
            <div className={`absolute inset-0 bg-white/30 transform transition-transform duration-700 ${
              isHovered ? 'translate-x-full' : 'translate-x-0'
            }`}></div>
          </div>

          {/* Floating particles */}
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          )}

          <CardHeader className="relative">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className={`relative p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white shadow-lg transform transition-all duration-300 ${
                  isHovered ? 'rotate-6 scale-110' : 'rotate-0 scale-100'
                }`}>
                  <project.icon size={28} />
                  <div className={`absolute inset-0 bg-white/20 rounded-xl transform transition-all duration-500 ${
                    isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-0'
                  }`}></div>
                </div>
                <div>
                  <CardTitle className={`text-xl transition-all duration-300 ${
                    isHovered ? 'text-transparent bg-gradient-to-r bg-clip-text' : 'text-slate-800'
                  } ${isHovered ? project.gradient : ''}`}>
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="text-yellow-500 fill-current" size={14} />
                      <span className="text-xs font-medium text-yellow-600">Featured Project</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <CardDescription className="text-slate-600 leading-relaxed text-sm">
              {project.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="relative">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement: string, idx: number) => (
                    <li key={idx} className={`flex items-start gap-3 text-slate-600 transform transition-all duration-300 ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`} style={{ transitionDelay: `${(globalIndex * 100) + (idx * 50)}ms` }}>
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`}></div>
                      <span className="text-sm leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, idx: number) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className={`text-xs transition-all duration-300 transform hover:scale-105 ${
                        isHovered 
                          ? `bg-gradient-to-r ${project.gradient} text-white border-transparent` 
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                {project.liveUrl && (
                  <Button 
                    size="sm" 
                    className={`relative overflow-hidden transition-all duration-300 transform hover:scale-105 bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg hover:shadow-xl`}
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <ExternalLink size={16} className="mr-2 relative z-10" />
                    <span className="relative z-10">Live Site</span>
                  </Button>
                )}
                {project.videoUrl && (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="relative overflow-hidden transition-all duration-300 transform hover:scale-105 border-purple-300 text-purple-600 hover:bg-purple-50 hover:border-purple-400 hover:text-purple-700"
                    onClick={() => window.open(project.videoUrl, '_blank')}
                  >
                    <Video size={16} className="mr-2" />
                    Videos
                  </Button>
                )}
                {project.category === 'Personal' && project.githubUrl && (
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="relative overflow-hidden transition-all duration-300 transform hover:scale-105 text-slate-600 hover:text-slate-800 hover:bg-slate-100"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                )}
                {project.category === 'Personal' && !project.githubUrl && (
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="relative overflow-hidden transition-all duration-300 text-slate-400 cursor-not-allowed"
                    disabled
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
            <Sparkles className="text-blue-600" size={20} />
            <span className="text-blue-700 font-medium">Portfolio Showcase</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-gradient-x">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real-world solutions that delivered measurable business impact and personal learning
          </p>
        </div>

        {/* Professional Projects */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
              Professional Projects
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {professionalProjects.map((project, index) => (
              <ProjectCard key={`prof-${index}`} project={project} index={index} category="Professional" />
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
              Personal Projects
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project, index) => (
              <ProjectCard key={`pers-${index}`} project={project} index={index} category="Personal" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

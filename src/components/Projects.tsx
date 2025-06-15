
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Database, BarChart3, Zap, Clock, Brain, Video, Car, Film, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Enterprise Contact Center Migration',
      description: 'Led the migration of Genesys.org to Enterprise Contact Center platform, implementing automated testing frameworks and optimization strategies.',
      achievements: [
        'Reduced onboarding time by 30%',
        'Implemented Databricks testing framework',
        'Cut testing effort by 75%'
      ],
      technologies: ['Databricks', 'Azure', 'Python', 'PySpark'],
      icon: Database,
      gradient: 'from-blue-500 to-indigo-600',
      category: 'Professional'
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
      gradient: 'from-indigo-500 to-purple-600',
      category: 'Professional'
    },
    {
      title: 'Automated Data Pipeline Framework',
      description: 'Built robust data pipelines using Azure Data Factory with automated monitoring, error handling, and data quality checks.',
      achievements: [
        'Automated L1/L2 access provisioning',
        'Eliminated 15 minutes daily manual effort',
        'Improved data quality and reliability'
      ],
      technologies: ['Azure Data Factory', 'SQL', 'Python', 'Power BI'],
      icon: Zap,
      gradient: 'from-yellow-500 to-orange-600',
      category: 'Professional'
    },
    {
      title: 'Real-time Data Processing System',
      description: 'Developed high-performance web scraping and data processing system with AWS integration for scalable data collection.',
      achievements: [
        'Enhanced Selenium scraper performance',
        'Automated data upload to AWS S3',
        'Reduced manual intervention by 100%'
      ],
      technologies: ['Python', 'Selenium', 'AWS S3', 'Excel Processing'],
      icon: Clock,
      gradient: 'from-cyan-500 to-blue-600',
      category: 'Professional'
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
      gradient: 'from-green-500 to-blue-600',
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
      gradient: 'from-green-500 to-teal-600',
      category: 'Personal'
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
      gradient: 'from-purple-500 to-pink-600',
      category: 'Personal'
    },
    {
      title: 'Movie Recommender System',
      description: 'Designed ML model using cosine similarity which recommends movies based on user input preferences.',
      achievements: [
        'Implemented cosine similarity algorithm',
        'Built recommendation engine',
        'Data preprocessing and analysis'
      ],
      technologies: ['Streamlit', 'Python', 'Machine Learning', 'NLTK'],
      icon: Film,
      gradient: 'from-red-500 to-orange-600',
      category: 'Personal'
    },
    {
      title: 'Simple To-Do App',
      description: 'A React-Native To-Do Application, which helps to add To-do\'s to list and view them efficiently.',
      achievements: [
        'Cross-platform mobile app',
        'Local data persistence',
        'Intuitive user interface'
      ],
      technologies: ['JavaScript', 'React-Native', 'JSON'],
      icon: Brain,
      gradient: 'from-indigo-500 to-blue-600',
      category: 'Personal'
    }
  ];

  const professionalProjects = projects.filter(p => p.category === 'Professional');
  const personalProjects = projects.filter(p => p.category === 'Personal');

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm overflow-hidden">
      <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
              <project.icon size={24} />
            </div>
            <div>
              <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors">
                {project.title}
              </CardTitle>
            </div>
          </div>
        </div>
        <CardDescription className="text-slate-600 leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-700 mb-2">Key Achievements:</h4>
            <ul className="space-y-1">
              {project.achievements.map((achievement: string, idx: number) => (
                <li key={idx} className="flex items-center gap-2 text-slate-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-700 mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, idx: number) => (
                <Badge key={idx} variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            {project.liveUrl && (
              <Button 
                size="sm" 
                variant="outline" 
                className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                <ExternalLink size={16} className="mr-1" />
                Live Site
              </Button>
            )}
            {project.githubUrl ? (
              <Button 
                size="sm" 
                variant="ghost" 
                className="text-slate-600 hover:text-blue-600"
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <Github size={16} className="mr-1" />
                Code
              </Button>
            ) : (
              <Button size="sm" variant="ghost" className="text-slate-600 hover:text-blue-600">
                <Github size={16} className="mr-1" />
                Code
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real-world solutions that delivered measurable business impact and personal learning
          </p>
        </div>

        {/* Professional Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Professional Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {professionalProjects.map((project, index) => (
              <ProjectCard key={`prof-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Personal Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project, index) => (
              <ProjectCard key={`pers-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

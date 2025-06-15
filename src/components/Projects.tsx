
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Database, BarChart3, Zap, Clock, Brain, Video, Car, Film, Globe, Building2, Star } from 'lucide-react';

const Projects = () => {
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
      gradient: 'from-blue-500 to-indigo-600',
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
      gradient: 'from-indigo-500 to-purple-600',
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
      gradient: 'from-yellow-400 to-orange-500',
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
      gradient: 'from-cyan-400 to-blue-500',
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
      gradient: 'from-orange-400 to-red-500',
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
      gradient: 'from-green-400 to-emerald-500',
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
      gradient: 'from-green-400 to-teal-500',
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
      gradient: 'from-purple-400 to-pink-500',
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
      gradient: 'from-red-400 to-yellow-500',
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
      gradient: 'from-indigo-400 to-cyan-500',
      category: 'Personal',
      videoUrl: 'https://drive.google.com/drive/folders/1DA-NhkJMqvNCOy0OdHfuV5AldVrqLgtJ?usp=sharing'
    }
  ];

  const professionalProjects = projects.filter(p => p.category === 'Professional');
  const personalProjects = projects.filter(p => p.category === 'Personal');

  const ProjectCard = ({ project }: { project: any }) => {
    return (
      <Card className="relative overflow-hidden border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        {/* Featured project indicator */}
        {project.featured && (
          <div className="absolute -top-2 -right-2 z-10">
            <Star className="text-yellow-400 fill-current" size={24} />
          </div>
        )}

        {/* Gradient top border */}
        <div className={`h-1 bg-gradient-to-r ${project.gradient}`}></div>

        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
                <project.icon size={24} />
              </div>
              <div>
                <CardTitle className="text-xl text-slate-800">
                  {project.title}
                </CardTitle>
                {project.featured && (
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-xs font-medium text-yellow-600">Featured Project</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <CardDescription className="text-slate-600 leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-slate-700 mb-3">
                Key Achievements:
              </h4>
              <ul className="space-y-2">
                {project.achievements.map((achievement: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`}></div>
                    <span className="text-sm leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-700 mb-3">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, idx: number) => (
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

            <div className="flex gap-2 pt-4">
              {project.liveUrl && (
                <Button 
                  size="sm" 
                  className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg hover:shadow-xl`}
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Site
                </Button>
              )}
              {project.videoUrl && (
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-purple-300 text-purple-600 hover:bg-purple-50"
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
                  className="text-slate-600 hover:text-slate-800 hover:bg-slate-100"
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
                  className="text-slate-400 cursor-not-allowed"
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
    );
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real-world solutions that delivered measurable business impact and personal learning
          </p>
        </div>

        {/* Professional Projects */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Professional Projects
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {professionalProjects.map((project, index) => (
              <ProjectCard key={`prof-${index}`} project={project} />
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Personal Projects
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project, index) => (
              <ProjectCard key={`pers-${index}`} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

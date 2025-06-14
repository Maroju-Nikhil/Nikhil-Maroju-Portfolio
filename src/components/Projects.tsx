
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Database, BarChart3, Zap, Clock } from 'lucide-react';

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
      gradient: 'from-blue-500 to-indigo-600'
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
      gradient: 'from-indigo-500 to-purple-600'
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
      gradient: 'from-purple-500 to-pink-600'
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
      gradient: 'from-pink-500 to-red-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real-world data engineering solutions that delivered measurable business impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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
                      {project.achievements.map((achievement, idx) => (
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
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button size="sm" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                      <ExternalLink size={16} className="mr-1" />
                      View Details
                    </Button>
                    <Button size="sm" variant="ghost" className="text-slate-600 hover:text-blue-600">
                      <Github size={16} className="mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

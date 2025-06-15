
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Award, Cloud, Brain, Wrench, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 95 },
        { name: 'C++', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'Java', level: 30 }
      ],
      color: 'blue'
    },
    {
      title: 'Data Engineering & Analytics',
      icon: Database,
      skills: [
        { name: 'Apache Spark/PySpark', level: 90 },
        { name: 'Azure Data Factory', level: 90 },
        { name: 'Databricks', level: 90 },
        { name: 'Power BI', level: 85 },
        { name: 'ETL Pipelines', level: 88 }
      ],
      color: 'indigo'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'Azure (ADF, Databricks)', level: 85 },
        { name: 'AWS (S3, RDS, EC2)', level: 65 },
        { name: 'RESTful APIs', level: 80 },
        { name: 'Git/GitHub', level: 85 }
      ],
      color: 'purple'
    },
    {
      title: 'Web Technologies',
      icon: Award,
      skills: [
        { name: 'React', level: 80 },
        { name: 'React Native', level: 75 },
        { name: 'Django', level: 75 },
        { name: 'Flask', level: 80 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'Bootstrap', level: 80 }
      ],
      color: 'pink'
    },
    {
      title: 'Machine Learning & AI',
      icon: Brain,
      skills: [
        { name: 'Machine Learning', level: 80 },
        { name: 'Scikit-learn', level: 75 },
        { name: 'NLTK', level: 70 },
        { name: 'Streamlit', level: 75 }
      ],
      color: 'green'
    },
    {
      title: 'Artistic & Creative Skills',
      icon: Palette,
      skills: [
        { name: 'Realistic Pencil Sketches', level: 90 },
        { name: 'Portrait Drawing', level: 88 },
        { name: 'Shading & Detailing', level: 85 }
      ],
      color: 'rose'
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: [
        { name: 'OpenCV', level: 70 },
        { name: 'Excel Processing', level: 85 },
        { name: 'Data Structures & Algorithms', level: 80 },
        { name: 'DBMS', level: 85 }
      ],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700',
      indigo: 'from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700',
      purple: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700',
      pink: 'from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-700',
      green: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700',
      rose: 'from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/20 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-700',
      orange: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getProgressColor = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500',
      indigo: 'bg-indigo-500',
      purple: 'bg-purple-500',
      pink: 'bg-pink-500',
      green: 'bg-green-500',
      rose: 'bg-rose-500',
      orange: 'bg-orange-500'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Technical & Creative Expertise
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
            Comprehensive skill set spanning technology, data engineering, full-stack development, machine learning, and artistic creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`hover:shadow-xl transition-all duration-300 border-2 bg-gradient-to-br ${getColorClasses(category.color)}`}>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg md:text-xl">
                  <category.icon size={24} className="md:w-7 md:h-7" />
                  <span className="text-sm md:text-base lg:text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 md:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-xs md:text-sm">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getProgressColor(category.color)} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


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
        { name: 'Java', level: 70 }
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
        { name: 'AWS (S3, RDS, EC2)', level: 80 },
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
        { name: 'Shading & Detailing', level: 85 },
        { name: 'Custom Commissions', level: 80 }
      ],
      color: 'rose'
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: [
        { name: 'Selenium', level: 85 },
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
      blue: 'from-blue-50 to-blue-100 text-blue-700 border-blue-200',
      indigo: 'from-indigo-50 to-indigo-100 text-indigo-700 border-indigo-200',
      purple: 'from-purple-50 to-purple-100 text-purple-700 border-purple-200',
      pink: 'from-pink-50 to-pink-100 text-pink-700 border-pink-200',
      green: 'from-green-50 to-green-100 text-green-700 border-green-200',
      rose: 'from-rose-50 to-rose-100 text-rose-700 border-rose-200',
      orange: 'from-orange-50 to-orange-100 text-orange-700 border-orange-200'
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
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Technical & Creative Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive skill set spanning technology, data engineering, full-stack development, machine learning, and artistic creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`hover:shadow-xl transition-all duration-300 border-2 bg-gradient-to-br ${getColorClasses(category.color)}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <category.icon size={28} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
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


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Award, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'SQL', level: 95 },
        { name: 'C++', level: 75 }
      ],
      color: 'blue'
    },
    {
      title: 'Data Engineering',
      icon: Database,
      skills: [
        { name: 'Apache Spark', level: 85 },
        { name: 'Azure Data Factory', level: 90 },
        { name: 'Databricks', level: 90 },
        { name: 'Power BI', level: 85 }
      ],
      color: 'indigo'
    },
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: [
        { name: 'AWS (S3, RDS, EC2)', level: 80 },
        { name: 'Azure', level: 85 },
        { name: 'RESTful APIs', level: 80 }
      ],
      color: 'purple'
    },
    {
      title: 'Web Technologies',
      icon: Award,
      skills: [
        { name: 'React', level: 80 },
        { name: 'Django', level: 75 },
        { name: 'HTML/CSS', level: 85 }
      ],
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-50 to-blue-100 text-blue-700 border-blue-200',
      indigo: 'from-indigo-50 to-indigo-100 text-indigo-700 border-indigo-200',
      purple: 'from-purple-50 to-purple-100 text-purple-700 border-purple-200',
      pink: 'from-pink-50 to-pink-100 text-pink-700 border-pink-200'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getProgressColor = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500',
      indigo: 'bg-indigo-500',
      purple: 'bg-purple-500',
      pink: 'bg-pink-500'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Proficient in modern data engineering tools and technologies with hands-on experience in building scalable solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`hover:shadow-xl transition-all duration-300 border-2 bg-gradient-to-br ${getColorClasses(category.color)}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <category.icon size={28} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
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

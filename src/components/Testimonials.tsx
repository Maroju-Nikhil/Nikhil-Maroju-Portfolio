
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Senior Data Scientist at TechCorp",
      image: "/lovable-uploads/f03e165d-437d-47b1-a19a-5faaf9845aaa.png",
      content: "Nikhil's expertise in data engineering and machine learning is exceptional. His ability to translate complex technical concepts into actionable business solutions is remarkable.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Technical Lead at Innovation Labs",
      image: "/lovable-uploads/90df04c6-c3a3-43e8-ae07-79d79f1f5902.png",
      content: "Working with Nikhil on our ML recommendation system was a game-changer. His technical skills and leadership in mentoring the team were outstanding.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Product Manager at StartupXYZ",
      image: "/lovable-uploads/d48aa813-ec8a-4590-ad35-e7d35cf7d7a5.png",
      content: "Nikhil's full-stack development skills and his ability to deliver scalable solutions on time made our project a huge success. Highly recommended!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO at Digital Solutions",
      image: "/lovable-uploads/de19eeb5-13e0-47da-81b2-923263010051.png",
      content: "His expertise in cloud architecture and automation helped us reduce deployment time by 60%. Nikhil is a true technical leader.",
      rating: 5
    },
    {
      name: "Ankita Reddy",
      role: "Engineering Manager at CloudTech",
      image: "/lovable-uploads/1ba26dea-ea0c-4b0e-a17b-87c7121ada1d.png",
      content: "Nikhil's mentorship and technical guidance helped our team adopt best practices in data engineering. His impact on our organization has been tremendous.",
      rating: 5
    },
    {
      name: "David Williams",
      role: "DevOps Engineer at Enterprise Inc",
      image: "/lovable-uploads/a22221c2-f7ed-4b25-96c8-cea0cfdf0746.png",
      content: "His knowledge of modern development practices and ability to lead technical communities is inspiring. Nikhil is definitely someone you want on your team.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            What People Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Testimonials from colleagues, mentees, and industry professionals I've had the privilege to work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                  <Quote className="text-blue-600 flex-shrink-0" size={20} />
                </div>
                
                <p className="text-slate-700 mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={16} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Have We Worked Together?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            If we've collaborated on a project or if I've mentored you, I'd love to hear your feedback. 
            Your testimonial helps others understand the value of our potential collaboration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/nikhil-maroju/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Share on LinkedIn
            </a>
            <a 
              href="mailto:nikhil@example.com?subject=Testimonial&body=Hi Nikhil, I'd like to share my experience working with you..." 
              className="inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Send via Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

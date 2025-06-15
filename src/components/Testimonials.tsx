
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Veldoj Saiteja",
      title: "IT Professional at Qualcomm",
      image: "/lovable-uploads/1ba26dea-ea0c-4b0e-a17b-87c7121ada1d.png",
      content: "I have been his friend from past 4 years, he is very good at many programming languages and technical skills, really a hardworking guy and always tries to make better of himself. Lot to learn from him.",
    },
    {
      name: "Kiran Deep",
      title: "SDE at Oracle",
      image: "/lovable-uploads/90df04c6-c3a3-43e8-ae07-79d79f1f5902.png",
      content: "He's a great guy, experienced wonderful time working with him in projects related to Django, React Native, Web-Dev, talented and great thinker as well.",
    },
    {
      name: "Yogitha Aratla",
      title: "Software Engineer at F5 Networks",
      image: "/lovable-uploads/d48aa813-ec8a-4590-ad35-e7d35cf7d7a5.png",
      content: "I'm jst another team mate.But I can definitely say nikhil is a great team mate that one could get!. Lot's to say ,summarized-Potential team lead,Great coordinating ability and cool friend indeed!",
    },
    {
      name: "Irfan Mirza Baig",
      title: "AI/ML Engineer at Centella AI",
      image: "/lovable-uploads/de19eeb5-13e0-47da-81b2-923263010051.png",
      content: "An enterprising individual and a great learner. He is the right person one can look for. He is definitely a great individual. It was joyful to be his class fellow.",
    },
    {
      name: "Sreeja Somavarapu",
      title: "SDE at ServiceNow (Previously at Amazon)",
      image: "/lovable-uploads/f03e165d-437d-47b1-a19a-5faaf9845aaa.png",
      content: "I worked with him in a team at the Smart India Hackathon. His eagerness to learn new Tech is remarkable. He is a diligent and motivated individual. Working in a team with him was an incredible experience.",
    },
    {
      name: "Nithin Gaddamedi",
      title: "Software Engineer at Oracle",
      image: "/lovable-uploads/a22221c2-f7ed-4b25-96c8-cea0cfdf0746.png",
      content: "I've known him as a friend for the last four years. He's always enthusiastic about learning new things, which are challenging. He can handle tough situations at work too.",
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Testimonials
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            What People say about <strong>Me</strong>.
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
                    <p className="text-sm text-blue-600 font-medium">{testimonial.title}</p>
                  </div>
                  <Quote className="text-blue-600 flex-shrink-0" size={20} />
                </div>
                
                <p className="text-slate-700 mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Write A Testimony
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Have we worked together or been friends? I'd love to hear your feedback. 
            Your testimonial helps others understand our collaboration experience.
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
              href="mailto:marojunikhil2002@gmail.com?subject=Testimonial&body=Hi Nikhil, I'd like to share my experience working with you..." 
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

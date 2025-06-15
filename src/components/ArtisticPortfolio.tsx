
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Heart, Gift, Users } from 'lucide-react';

const ArtisticPortfolio = () => {
  const artworks = [
    {
      src: '/lovable-uploads/f759149f-f093-4ed5-a158-b0c850c88c0f.png',
      title: 'Realistic Male Portrait',
      description: 'Detailed pencil sketch showcasing realistic facial features and shading techniques'
    },
    {
      src: '/lovable-uploads/9385b3fc-c06b-4b12-8281-99f291c57857.png',
      title: 'Anime-Style Portrait',
      description: 'Charming sketch with anime influences, featuring expressive eyes and flowing hair'
    },
    {
      src: '/lovable-uploads/6c8b99bb-cecc-4d81-a517-3125c2c661a3.png',
      title: 'Ethereal Violinist',
      description: 'Artistic composition with colored elements, depicting a graceful figure with violin'
    },
    {
      src: '/lovable-uploads/2862544c-e7a6-4f6d-8495-6450e3ec2ae6.png',
      title: 'Traditional Portrait',
      description: 'Classic pencil portrait with traditional clothing and precise detailing'
    },
    {
      src: '/lovable-uploads/07445f7e-3b9c-40f1-8053-f260c2e3dca7.png',
      title: 'Contemporary Portrait',
      description: 'Modern realistic sketch with excellent light and shadow work'
    },
    {
      src: '/lovable-uploads/01c43e23-3914-459f-a41a-183eca5ef78c.png',
      title: 'Stylized Male Portrait',
      description: 'Professional-quality sketch with attention to facial hair and expression'
    }
  ];

  const achievements = [
    {
      icon: Heart,
      title: 'Client Appreciation',
      description: '"Super Art, looks like exact Xerox Copy, really love your art"',
      color: 'text-red-500'
    },
    {
      icon: Gift,
      title: 'Custom Commissions',
      description: 'Created personalized sketches as gifts, bringing joy to recipients',
      color: 'text-blue-500'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'People actively request pencil sketches, building a loyal following',
      color: 'text-green-500'
    },
    {
      icon: Palette,
      title: 'Artistic Journey',
      description: 'Continuously creating realistic sketches since 2020',
      color: 'text-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Artistic Portfolio
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Beyond code and algorithms, I express creativity through realistic pencil sketches. 
            Since 2020, I've been creating detailed portraits that capture the essence and emotion of my subjects.
          </p>
        </div>

        {/* Artistic Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-slate-50 to-purple-50">
              <CardContent className="p-6 text-center">
                <achievement.icon className={`${achievement.color} mx-auto mb-4`} size={40} />
                <h3 className="font-semibold text-slate-800 mb-2">{achievement.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Art Gallery */}
        <div>
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Gallery of Realistic Sketches
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={artwork.src} 
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-800 mb-2">{artwork.title}</h4>
                  <p className="text-slate-600 text-sm">{artwork.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Interested in a Custom Sketch?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            I create personalized pencil portraits that capture the unique essence of individuals. 
            Each sketch is carefully crafted with attention to detail and emotional expression.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              Realistic Portraits
            </span>
            <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
              Custom Commissions
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Gift Sketches
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              Professional Quality
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisticPortfolio;

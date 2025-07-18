
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Heart, Gift, Users, Eye } from 'lucide-react';

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

  const comparisons = [
    {
      original: '/lovable-uploads/e34237e1-0cca-4ce2-9eeb-21ee095cf9cf.png',
      sketch: '/lovable-uploads/2862544c-e7a6-4f6d-8495-6450e3ec2ae6.png',
      title: 'Traditional Portrait Comparison',
      description: 'Original photo vs realistic pencil sketch - demonstrating the "exact Xerox Copy" quality that clients appreciate'
    },
    {
      original: '/lovable-uploads/54abaff1-4d66-4133-97d0-b69029b9af12.png',
      sketch: '/lovable-uploads/07445f7e-3b9c-40f1-8053-f260c2e3dca7.png',
      title: 'Contemporary Portrait Comparison',
      description: 'From black and white photograph to pencil art - maintaining every detail and expression'
    },
    {
      original: '/lovable-uploads/b8c6dd7f-65cf-4960-9911-b7b63860fa22.png',
      sketch: '/lovable-uploads/01c43e23-3914-459f-a41a-183eca5ef78c.png',
      title: 'Stylized Male Portrait Comparison',
      description: 'Professional-quality sketch showcasing incredible attention to facial hair and expression details'
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
    <section className="py-12 md:py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Artistic Portfolio
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Beyond code and algorithms, I express creativity through realistic pencil sketches. 
            Since 2020, I've been creating detailed portraits that capture the essence and emotion of my subjects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
              <CardContent className="p-4 md:p-6 text-center">
                <achievement.icon className={`${achievement.color} mx-auto mb-3 md:mb-4`} size={32} />
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2 text-sm md:text-base">{achievement.title}</h3>
                <p className="text-slate-600 dark:text-gray-300 text-xs md:text-sm leading-relaxed">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4 flex items-center justify-center gap-3">
              <Eye className="text-purple-600" size={24} />
              Original vs Sketch Comparison
            </h3>
            <p className="text-slate-600 dark:text-gray-300 max-w-2xl mx-auto px-4 text-sm md:text-base">
              See the incredible accuracy and attention to detail that makes my sketches look like "exact Xerox copies" of the original photographs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:gap-12">
            {comparisons.map((comparison, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <h4 className="text-lg md:text-xl font-semibold text-slate-800 dark:text-white mb-4 text-center">{comparison.title}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="text-center">
                      <h5 className="font-medium text-slate-700 dark:text-gray-300 mb-3 text-sm md:text-base">Original Photo</h5>
                      <div className="aspect-square overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg">
                        <img 
                          src={comparison.original} 
                          alt={`Original ${comparison.title}`}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h5 className="font-medium text-slate-700 dark:text-gray-300 mb-3 text-sm md:text-base">Pencil Sketch</h5>
                      <div className="aspect-square overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg">
                        <img 
                          src={comparison.sketch} 
                          alt={`Sketch ${comparison.title}`}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-gray-300 text-center mt-4 italic text-sm md:text-base px-4">{comparison.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6 md:mb-8 text-center">
            Complete Gallery of Realistic Sketches
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {artworks.map((artwork, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white dark:bg-gray-900 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={artwork.src} 
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4 md:p-6">
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-2 text-sm md:text-base">{artwork.title}</h4>
                  <p className="text-slate-600 dark:text-gray-300 text-xs md:text-sm">{artwork.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 md:p-8 border border-purple-200 dark:border-gray-600">
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-4">
            Interested in a Custom Sketch?
          </h3>
          <p className="text-slate-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto text-sm md:text-base px-4">
            I create personalized pencil portraits that capture the unique essence of individuals. 
            Each sketch is carefully crafted with attention to detail and emotional expression.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <span className="px-3 md:px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs md:text-sm font-medium">
              Realistic Portraits
            </span>
            <span className="px-3 md:px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-xs md:text-sm font-medium">
              Custom Commissions
            </span>
            <span className="px-3 md:px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs md:text-sm font-medium">
              Gift Sketches
            </span>
            <span className="px-3 md:px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs md:text-sm font-medium">
              Professional Quality
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisticPortfolio;


import React from 'react';

const HeroBackground = () => {
  return (
    <>
      {/* Responsive Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat sm:bg-top md:bg-center"
          style={{
            backgroundImage: `url('/lovable-uploads/94465d1a-0458-44df-882f-76295d31aba6.png')`,
            minHeight: '100vh',
            backgroundAttachment: 'fixed'
          }}
        />

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40"></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </>
  );
};

export default HeroBackground;

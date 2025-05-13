import React from 'react';
import Button from '../components/Button';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-stone-900 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=800')",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-900/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white text-left mt-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="animate-pulse w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            <span className="text-sm font-medium">Open Now · Closes 7pm</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Where Style<br />
            Meets <span className="text-amber-500">Tradition</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-8 max-w-2xl">
            Experience premium grooming at Fama Barber Shop & Beauty Salon
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button href="#book" size="lg" className="text-lg">
              Book Appointment
            </Button>
            <Button href="#services" variant="outline" size="lg" className="text-lg">
              Our Services
            </Button>
          </div>

          {/* Rating Badge */}
          <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl">
            <div className="flex items-center">
              <div className="flex items-center">
                {[1, 2, 3, 4].map((i) => (
                  <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <svg className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="url(#half-star)" />
                  <defs>
                    <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
                      <stop offset="60%" stopColor="currentColor"/>
                      <stop offset="60%" stopColor="rgba(0,0,0,0.3)"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="ml-2 text-lg font-medium">4.6</span>
              <span className="mx-2 text-stone-400">|</span>
              <span className="text-stone-300">116+ reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce bg-white/10 backdrop-blur-sm p-2 rounded-full">
          <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
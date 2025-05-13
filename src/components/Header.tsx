import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stone-900/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo color={isScrolled ? 'text-white' : 'text-stone-900'} />
          
          {/* Quick Info - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <div className={`flex items-center ${isScrolled ? 'text-white' : 'text-stone-900'}`}>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">Open · Closes 7pm</span>
              </div>
            </div>
            <div className={`flex items-center ${isScrolled ? 'text-white' : 'text-stone-900'}`}>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">+1 940-612-9127</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-all duration-300 hover:text-amber-500 relative group ${
                  isScrolled ? 'text-white' : 'text-stone-900'
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Book Now Button */}
          <a 
            href="#book" 
            className="hidden md:inline-flex items-center px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-amber-600/25 hover:shadow-amber-600/40"
          >
            Book Now
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-full bg-white/10 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-stone-900'}`} /> : 
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-stone-900'}`} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-stone-900/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-5 h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <Logo color="text-white" />
              <button 
                className="p-2 rounded-full bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center">
              {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-4 text-2xl font-medium text-white hover:text-amber-500 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="py-6">
              <a 
                href="#book" 
                className="block py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-full text-center transition-all duration-300 shadow-lg shadow-amber-600/25 hover:shadow-amber-600/40"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
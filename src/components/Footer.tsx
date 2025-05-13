import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <Logo color="text-white" />
            <p className="mt-4 text-stone-300">
              Premium barber shop offering quality cuts, shaves, and grooming services in a classic yet modern atmosphere.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-stone-300 hover:text-amber-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-300 hover:text-amber-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-300 hover:text-amber-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-stone-300 hover:text-amber-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              {['Haircut', 'Beard Trim', 'Hot Towel Shave', 'Hair Styling', 'Kids Cut', 'Facial Treatment'].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-stone-300 hover:text-amber-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 mr-3 text-amber-500" />
                <span className="text-stone-300">500 N Bell Ave #109, Denton, TX 76209</span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 mr-3 text-amber-500" />
                <a href="tel:+19406129127" className="text-stone-300 hover:text-amber-500 transition-colors">
                  +1 940-612-9127
                </a>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 mr-3 text-amber-500" />
                <a href="mailto:info@famabarber.com" className="text-stone-300 hover:text-amber-500 transition-colors">
                  info@famabarber.com
                </a>
              </li>
              <li className="flex">
                <Clock className="w-5 h-5 mr-3 text-amber-500" />
                <span className="text-stone-300">Mon-Sat: 9am-7pm<br />Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-stone-700 my-8" />
        
        <div className="text-center text-stone-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Fama Barber Shop & Beauty Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
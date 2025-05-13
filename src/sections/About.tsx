import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    'Expert barbers with years of experience',
    'Premium grooming products',
    'Clean and sanitized equipment',
    'Relaxing atmosphere',
    'Complimentary beverages',
    'Hot towel service'
  ];

  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Barber working" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-600 rounded-lg p-6 md:p-8 shadow-xl hidden md:block">
              <div className="text-white">
                <p className="font-serif font-bold text-xl md:text-2xl">10+</p>
                <p className="text-sm md:text-base mt-1">Years of Experience</p>
              </div>
            </div>
          </div>

          <div>
            <SectionTitle 
              title="About Fama Barber Shop" 
              subtitle="Where tradition meets modern style in the heart of Denton"
            />

            <p className="text-stone-700 mb-6">
              Welcome to Fama Barber Shop & Beauty Salon, where we combine traditional barbering techniques with modern styles to give you the perfect look. Our skilled team of barbers is dedicated to providing exceptional service in a comfortable and relaxing environment.
            </p>
            
            <p className="text-stone-700 mb-8">
              Since opening our doors, we've built a reputation for quality cuts, professional service, and attention to detail. Whether you're looking for a classic cut, a modern style, or a hot towel shave, our experienced barbers have got you covered.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-amber-600 mr-2" />
                  <span className="text-stone-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button href="#services">
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
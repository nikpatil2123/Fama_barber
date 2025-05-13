import React from 'react';
import { Scissors, Bean as Beard, Droplet, Users, Sparkles, Heart } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Classic Haircut',
      price: '₹250',
      description: 'Traditional haircut with clippers and scissors, includes wash and styling.',
      icon: <Scissors className="h-8 w-8" />
    },
    {
      title: 'Beard Trim',
      price: '₹150',
      description: 'Shape and style your beard with precision trimming and hot towel treatment.',
      icon: <Beard className="h-8 w-8" />
    },
    {
      title: 'Hot Towel Shave',
      price: '₹350',
      description: 'Luxurious straight razor shave with hot towels and premium products.',
      icon: <Droplet className="h-8 w-8" />
    },
    {
      title: 'Haircut & Beard Combo',
      price: '₹350',
      description: 'Get both a haircut and beard trim at a special combo price.',
      icon: <Users className="h-8 w-8" />
    },
    {
      title: 'Premium Styling',
      price: '₹200',
      description: 'Professional styling with premium products for any occasion.',
      icon: <Sparkles className="h-8 w-8" />
    },
    {
      title: 'Kids Cut',
      price: '₹180',
      description: 'Haircuts for children under 12, with extra care and patience.',
      icon: <Heart className="h-8 w-8" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Services" 
          subtitle="Premium grooming services tailored to your needs"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              price={service.price}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-700 mb-6 max-w-2xl mx-auto">
            Looking for something specific? We offer additional services not listed here.
            Contact us for custom grooming packages and special requests.
          </p>
          <Button href="#book">
            Book an Appointment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Michael Johnson",
      rating: 5,
      comment: "Best barber in town! I've been going to Fama for years and have never been disappointed. The attention to detail is amazing.",
      date: "2 weeks ago",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "David Martinez",
      rating: 4,
      comment: "Great service and atmosphere. The barbers are skilled and take their time to make sure you get exactly what you want.",
      date: "1 month ago",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Robert Wilson",
      rating: 5,
      comment: "Fantastic place! Clean, professional, and they really know how to cut hair. Highly recommend their hot towel shave.",
      date: "2 months ago",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Client Testimonials" 
          subtitle="What our clients say about us"
          center
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                rating={testimonial.rating}
                comment={testimonial.comment}
                date={testimonial.date}
                image={testimonial.image}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-stone-100 px-4 py-2 rounded-lg">
              <span className="text-amber-600 font-bold text-lg mr-2">4.6</span>
              <div className="flex items-center mx-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className={`w-5 h-5 ${star <= 4 ? 'text-amber-500 fill-amber-500' : 'text-amber-400 fill-amber-400'}`} 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-stone-600">Based on 116+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
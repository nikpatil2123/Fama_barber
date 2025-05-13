import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  rating: number;
  comment: string;
  date: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  rating,
  comment,
  date,
  image,
}) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <div className="flex items-start gap-4">
        {image && (
          <div className="flex-shrink-0">
            <img 
              src={image} 
              alt={name} 
              loading="lazy"
              className="w-14 h-14 rounded-xl object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <h4 className="font-medium text-lg text-stone-900">{name}</h4>
          <div className="flex items-center mt-1 mb-3">
            <div className="flex gap-0.5">
              {Array(5).fill(0).map((_, index) => (
                <Star 
                  key={index}
                  className={`w-4 h-4 ${index < rating ? 'text-amber-500 fill-amber-500' : 'text-stone-300'}`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-stone-500">{date}</span>
          </div>
          <p className="text-stone-700 leading-relaxed">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
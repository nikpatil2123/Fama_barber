import React from 'react';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  icon?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  price,
  description,
  icon,
}) => {
  return (
    <div className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {icon && (
        <div className="mb-4 text-amber-600 bg-amber-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-medium text-stone-900">{title}</h3>
        <span className="text-lg font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">{price}</span>
      </div>
      <p className="text-stone-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
import React from 'react';
import { Scissors } from 'lucide-react';

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color = 'text-stone-900' }) => {
  return (
    <div className={`flex items-center ${color}`}>
      <Scissors className="h-6 w-6 mr-2 transform -rotate-45" />
      <span className="font-serif text-xl font-bold">FAMA</span>
    </div>
  );
};

export default Logo;
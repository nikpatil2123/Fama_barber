import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl";
  
  const variantClasses = {
    primary: "bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-600/25 hover:shadow-amber-600/40",
    secondary: "bg-stone-800 hover:bg-stone-900 text-white shadow-lg shadow-stone-800/25 hover:shadow-stone-800/40",
    outline: "border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white hover:shadow-lg hover:shadow-amber-600/25",
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={allClasses}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={allClasses}>
      {children}
    </button>
  );
};

export default Button;
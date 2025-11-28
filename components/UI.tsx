import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}) => {
  const variants = {
    primary: 'bg-primary-800 text-white hover:bg-primary-900 shadow-sm',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 shadow-sm',
    outline: 'border-2 border-primary-800 text-primary-800 hover:bg-primary-50',
    ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg font-semibold',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};

export const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className, id }) => (
  <section id={id} className={cn('py-16 md:py-24', className)}>
    {children}
  </section>
);

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}>
    {children}
  </div>
);

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn('bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300', className)}>
    {children}
  </div>
);

export const Badge: React.FC<{ children: React.ReactNode; variant?: 'blue' | 'green'; className?: string }> = ({ children, variant = 'blue', className }) => {
  const styles = variant === 'blue' 
    ? 'bg-primary-100 text-primary-800'
    : 'bg-secondary-100 text-secondary-800';
    
  return (
    <span className={cn('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium', styles, className)}>
      {children}
    </span>
  );
};
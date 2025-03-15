"use client";

import React from 'react';
import Link from 'next/link';
import { cn } from '@/app/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, href, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50';
    
    const variants = {
      primary: 'bg-primary hover:bg-primary-dark text-dark shadow',
      secondary: 'bg-dark-lighter hover:bg-dark-lightest text-white',
      outline: 'border border-primary text-primary hover:bg-primary/10',
      ghost: 'hover:bg-dark-lighter text-gray-light hover:text-white',
    };
    
    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4',
      lg: 'h-12 px-6 text-lg',
    };
    
    const classes = cn(baseStyles, variants[variant], sizes[size], className);
    
    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }
    
    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button }; 
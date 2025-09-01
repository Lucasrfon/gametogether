import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 bg-amber-700 rounded-lg font-medium cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-amber-600 hover:scale-105 ${className}`}
      {...props}
    />
  );
}

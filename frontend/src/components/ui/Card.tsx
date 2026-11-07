import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: 'blue' | 'purple' | 'emerald' | 'none';
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = false,
  glow = 'none',
  onClick,
}) => {
  const glowStyles = {
    none: '',
    blue: 'hover:shadow-blue-500/10 hover:border-blue-500/40',
    purple: 'hover:shadow-purple-500/10 hover:border-purple-500/40',
    emerald: 'hover:shadow-emerald-500/10 hover:border-emerald-500/40',
  };

  return (
    <div
      onClick={onClick}
      className={`relative bg-slate-900/70 backdrop-blur-xl border border-slate-800/90 rounded-2xl p-6 transition-all duration-300 ${
        hoverEffect ? 'hover:-translate-y-1 hover:shadow-xl hover:border-slate-700 cursor-pointer' : ''
      } ${glowStyles[glow]} ${className}`}
    >
      {children}
    </div>
  );
};


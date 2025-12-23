import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  light?: boolean;
  pattern?: 'grid' | 'dots' | 'none';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id, 
  light = false,
  pattern = 'none' 
}) => {
  const bgClass = className.includes('bg-') ? '' : (light ? 'bg-brand-light' : 'bg-white');
  const patternClass = pattern === 'grid' ? 'bg-grid-pattern' : pattern === 'dots' ? 'bg-dots-pattern' : '';

  return (
    <section
      id={id}
      className={`py-20 md:py-32 px-4 md:px-6 relative overflow-hidden ${bgClass} ${patternClass} ${className}`}
    >
      {/* Decorative Blob for visual interest if light background */}
      {light && (
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none"></div>
      )}
      
      <div className="container mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

export const SectionHeader: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center'; highlight?: string }> = ({
  title,
  subtitle,
  align = 'center',
  highlight
}) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} max-w-4xl ${align === 'center' ? 'mx-auto' : ''} animate-fade-in-up`}>
      <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6 relative inline-block">
        {title}
        {highlight && <span className="text-brand-accent ml-2">{highlight}</span>}
      </h2>
      {subtitle && <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">{subtitle}</p>}
      
      {align === 'center' && (
        <div className="w-24 h-1.5 bg-brand-accent mx-auto mt-6 rounded-full opacity-80"></div>
      )}
       {align === 'left' && (
        <div className="w-24 h-1.5 bg-brand-accent mt-6 rounded-full opacity-80"></div>
      )}
    </div>
  );
};
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  const alignment = centered ? 'text-center' : 'text-left';
  const titleColor = light ? 'text-white' : 'text-gray-900';
  const subtitleColor = light ? 'text-gray-200' : 'text-gray-600';
  const lineColor = light ? 'bg-white' : 'bg-primary-600';

  return (
    <div className={`mb-12 ${alignment}`}>
      <h2 className={`text-3xl md:text-4xl font-bold ${titleColor} mb-4 font-heading`}>{title}</h2>
      {centered && <div className={`w-24 h-1 ${lineColor} mx-auto mb-4 rounded-full`}></div>}
      {subtitle && (
        <p className={`text-lg ${subtitleColor} max-w-3xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

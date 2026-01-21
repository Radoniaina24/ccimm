'use client';

import React from 'react';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Geometric Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></span>
          <span className="text-white/90 text-sm font-medium">
            Chambre de Commerce et d'Industrie
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 animate-slide-up font-heading">
          CCIMM
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 animate-slide-up font-heading">
          Maurice – Madagascar
        </h2>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed animate-slide-up">
          Relier les économies. Structurer les partenariats.
          <br className="hidden md:block" />
          Servir les intérêts de Maurice et de Madagascar.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
          <Button href="/about" size="lg" variant="secondary">
            Découvrir la CCIMM
          </Button>
          <Button
            href="/membership"
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary-800"
          >
            Devenir membre
          </Button>
        </div>

        {/* Stats */}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

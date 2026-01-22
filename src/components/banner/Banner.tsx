'use client';

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BannerProps, BannerSlide, TransitionType } from '@/types/banner';

export default function Banner({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  showArrows = true,
  showDots = true,
  showProgress = true,
  height = 'large',
  variant = 'default',
  pauseOnHover = true,
  transition = 'crossZoom',
  transitionDuration = 1000,
}: BannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const slideRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const heightClasses = {
    small: 'h-[50vh] min-h-[400px]',
    medium: 'h-[70vh] min-h-[500px]',
    large: 'h-[85vh] min-h-[600px]',
    full: 'h-screen',
  };

  // Durée CSS pour les transitions
  const durationStyle = useMemo(
    () =>
      ({
        '--transition-duration': `${transitionDuration}ms`,
      }) as React.CSSProperties,
    [transitionDuration]
  );

  const goToSlide = useCallback(
    (index: number, dir?: 'next' | 'prev') => {
      if (isAnimating || index === currentIndex) return;

      setIsAnimating(true);
      setPreviousIndex(currentIndex);
      setDirection(dir || (index > currentIndex ? 'next' : 'prev'));
      setCurrentIndex(index);
      setProgress(0);

      setTimeout(() => setIsAnimating(false), transitionDuration);
    },
    [isAnimating, currentIndex, transitionDuration]
  );

  const goToNext = useCallback(() => {
    goToSlide((currentIndex + 1) % slides.length, 'next');
  }, [currentIndex, slides.length, goToSlide]);

  const goToPrev = useCallback(() => {
    goToSlide((currentIndex - 1 + slides.length) % slides.length, 'prev');
  }, [currentIndex, slides.length, goToSlide]);

  // Auto-play
  useEffect(() => {
    if (!isPlaying || isPaused) {
      if (progressRef.current) clearInterval(progressRef.current);
      if (slideRef.current) clearTimeout(slideRef.current);
      return;
    }

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 100 / (autoPlayInterval / 100);
      });
    }, 100);

    slideRef.current = setTimeout(goToNext, autoPlayInterval);

    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
      if (slideRef.current) clearTimeout(slideRef.current);
    };
  }, [isPlaying, isPaused, currentIndex, autoPlayInterval, goToNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) goToNext();
      else goToPrev();
    }
  };

  // Classes de transition pour les images
  const getImageTransitionClasses = (index: number): string => {
    const isActive = index === currentIndex;
    const isPrevious = index === previousIndex;
    const isNext = direction === 'next';

    const baseClasses = 'absolute inset-0 transition-all ease-out';
    const duration = `duration-[${transitionDuration}ms]`;

    switch (transition) {
      case 'fade':
        return `${baseClasses} ${duration} ${isActive ? 'opacity-100 z-20' : 'opacity-0 z-10'}`;

      case 'slide':
        if (isActive) {
          return `${baseClasses} ${duration} opacity-100 z-20 translate-x-0`;
        }
        if (isPrevious && isAnimating) {
          return `${baseClasses} ${duration} opacity-100 z-10 ${
            isNext ? '-translate-x-full' : 'translate-x-full'
          }`;
        }
        return `${baseClasses} ${duration} opacity-0 z-0 ${
          isNext ? 'translate-x-full' : '-translate-x-full'
        }`;

      case 'slideUp':
        if (isActive) {
          return `${baseClasses} ${duration} opacity-100 z-20 translate-y-0`;
        }
        if (isPrevious && isAnimating) {
          return `${baseClasses} ${duration} opacity-100 z-10 ${
            isNext ? '-translate-y-full' : 'translate-y-full'
          }`;
        }
        return `${baseClasses} ${duration} opacity-0 z-0 translate-y-full`;

      case 'zoom':
        return `${baseClasses} ${duration} ${
          isActive ? 'opacity-100 z-20 scale-100' : 'opacity-0 z-10 scale-110'
        }`;

      case 'zoomFade':
        return `${baseClasses} ${duration} ${
          isActive
            ? 'opacity-100 z-20 scale-100'
            : isPrevious && isAnimating
              ? 'opacity-0 z-10 scale-125'
              : 'opacity-0 z-0 scale-95'
        }`;

      case 'kenBurns':
        return `${baseClasses} ${duration} ${
          isActive ? 'opacity-100 z-20 animate-ken-burns' : 'opacity-0 z-10'
        }`;

      case 'parallax':
        if (isActive) {
          return `${baseClasses} ${duration} opacity-100 z-20 translate-x-0 scale-100`;
        }
        if (isPrevious && isAnimating) {
          return `${baseClasses} ${duration} opacity-60 z-10 ${
            isNext ? '-translate-x-1/3 scale-90' : 'translate-x-1/3 scale-90'
          }`;
        }
        return `${baseClasses} ${duration} opacity-0 z-0 ${
          isNext ? 'translate-x-1/2' : '-translate-x-1/2'
        }`;

      case 'curtain':
        return `${baseClasses} ${duration} ${
          isActive
            ? 'opacity-100 z-20 clip-path-full'
            : isPrevious && isAnimating
              ? 'opacity-100 z-10 clip-path-left'
              : 'opacity-0 z-0'
        }`;

      case 'blur':
        return `${baseClasses} ${duration} ${
          isActive
            ? 'opacity-100 z-20 blur-0 scale-100'
            : isPrevious && isAnimating
              ? 'opacity-0 z-10 blur-xl scale-105'
              : 'opacity-0 z-0 blur-lg scale-110'
        }`;

      case 'flip':
        return `${baseClasses} ${duration} backface-hidden ${
          isActive
            ? 'opacity-100 z-20 rotate-y-0'
            : isPrevious && isAnimating
              ? `opacity-100 z-10 ${isNext ? '-rotate-y-180' : 'rotate-y-180'}`
              : 'opacity-0 z-0'
        }`;

      case 'cube':
        if (isActive) {
          return `${baseClasses} ${duration} opacity-100 z-20 rotate-y-0 translate-z-0`;
        }
        if (isPrevious && isAnimating) {
          return `${baseClasses} ${duration} opacity-100 z-10 ${
            isNext ? '-rotate-y-90 -translate-x-1/2' : 'rotate-y-90 translate-x-1/2'
          }`;
        }
        return `${baseClasses} ${duration} opacity-0 z-0`;

      case 'crossZoom':
        if (isActive) {
          return `${baseClasses} ${duration} opacity-100 z-20 scale-100`;
        }
        if (isPrevious && isAnimating) {
          return `${baseClasses} ${duration} opacity-0 z-10 scale-150`;
        }
        return `${baseClasses} ${duration} opacity-0 z-0 scale-75`;

      case 'slideReveal':
        if (isActive) {
          return `${baseClasses} ${duration} opacity-100 z-20 translate-x-0`;
        }
        if (isPrevious && isAnimating) {
          return `${baseClasses} ${duration} opacity-100 z-30 ${
            isNext ? '-translate-x-[30%]' : 'translate-x-[30%]'
          }`;
        }
        return `${baseClasses} ${duration} opacity-0 z-0 ${
          isNext ? 'translate-x-full' : '-translate-x-full'
        }`;

      case 'morphing':
        return `${baseClasses} ${duration} ${
          isActive
            ? 'opacity-100 z-20 scale-100 rounded-none'
            : isPrevious && isAnimating
              ? 'opacity-0 z-10 scale-50 rounded-[50%]'
              : 'opacity-0 z-0 scale-150'
        }`;

      default:
        return `${baseClasses} ${duration} ${isActive ? 'opacity-100 z-20' : 'opacity-0 z-10'}`;
    }
  };

  // Classes de transition pour le contenu
  const getContentTransitionClasses = (index: number): string => {
    const isActive = index === currentIndex;
    const baseClasses = 'transition-all ease-out';
    const duration = `duration-[${transitionDuration}ms]`;

    if (isActive) {
      return `${baseClasses} ${duration} opacity-100 translate-y-0 delay-300`;
    }
    return `${baseClasses} ${duration} opacity-0 translate-y-8`;
  };

  return (
    <section
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-black ${heightClasses[height]}`}
      style={durationStyle}
      // onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      // onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Image carousel"
      aria-roledescription="carousel"
    >
      {/* Perspective wrapper for 3D effects */}
      <div
        className={`relative w-full h-full ${
          ['flip', 'cube'].includes(transition) ? 'perspective-1000' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={getImageTransitionClasses(index)}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${slides.length}`}
            aria-hidden={index !== currentIndex}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0 || index === 1}
                className={`object-contain ${
                  transition === 'kenBurns' && index === currentIndex ? 'animate-ken-burns' : ''
                }`}
                sizes="100vw"
                quality={90}
              />

              {/* ===== OVERLAY PRINCIPAL - Multiple couches pour une meilleure lisibilité ===== */}

              {/* Couche 1: Overlay sombre uniforme */}
              <div className="absolute inset-0 bg-black/0" aria-hidden="true" />

              {/* Couche 4: Vignette effect (assombrit les coins) */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)',
                }}
                aria-hidden="true"
              />

              {/* Gradient variant optionnel */}
              {variant === 'gradient' && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/50 to-transparent" />
              )}
            </div>

            {/* ===== CONTENU CENTRÉ ===== */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-full max-w-4xl mx-auto px-6 md:px-12 text-center">
                <div className={getContentTransitionClasses(index)}>
                  {/* Container avec fond semi-transparent pour le texte */}
                  <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
                    {/* Title avec ombre pour meilleure lisibilité */}
                    <h2
                      className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 font-heading leading-tight transition-all duration-700 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] ${
                        index === currentIndex
                          ? 'opacity-100 translate-y-0 delay-300'
                          : 'opacity-0 translate-y-6'
                      }`}
                      style={{
                        textShadow:
                          '0 2px 4px rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.4)',
                      }}
                    >
                      {slide.title}
                    </h2>

                    {/* Ligne décorative */}
                    <div
                      className={`w-24 h-1 bg-gradient-to-r from-secondary-400 to-primary-400 mx-auto mb-6 rounded-full transition-all duration-700 ${
                        index === currentIndex
                          ? 'opacity-100 scale-x-100 delay-350'
                          : 'opacity-0 scale-x-0'
                      }`}
                    />

                    {/* Description avec ombre */}
                    <p
                      className={`text-base sm:text-lg md:text-xl text-white/95 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto transition-all duration-700 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${
                        index === currentIndex
                          ? 'opacity-100 translate-y-0 delay-400'
                          : 'opacity-0 translate-y-6'
                      }`}
                      style={{
                        textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)',
                      }}
                    >
                      {slide.description}
                    </p>

                    {/* CTA Button */}
                    {/* {slide.ctaText && slide.ctaLink && (
                      <Link
                        href={slide.ctaLink}
                        className={`inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-secondary-400 hover:text-white transition-all duration-300 hover:scale-105 shadow-xl ${
                          index === currentIndex
                            ? 'opacity-100 translate-y-0 delay-500'
                            : 'opacity-0 translate-y-6'
                        }`}
                      >
                        {slide.ctaText}
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && slides.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            disabled={isAnimating}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 group border border-white/30 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 shadow-lg"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            disabled={isAnimating}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 group border border-white/30 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 shadow-lg"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </section>
  );
}

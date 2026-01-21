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

  const getAlignmentClasses = (alignment: string = 'center') => {
    switch (alignment) {
      case 'left':
        return 'items-start text-left';
      case 'right':
        return 'items-end text-right';
      default:
        return 'items-center text-center';
    }
  };

  const getContentPosition = (alignment: string = 'center') => {
    switch (alignment) {
      case 'left':
        return 'left-0 lg:left-[10%]';
      case 'right':
        return 'right-0 lg:right-[10%]';
      default:
        return 'left-1/2 -translate-x-1/2';
    }
  };

  return (
    <section
      ref={containerRef}
      className={`relative w-full overflow-hidden ${heightClasses[height]}`}
      style={durationStyle}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
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
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0 || index === 1}
                className={`object-cover ${
                  transition === 'kenBurns' && index === currentIndex ? 'animate-ken-burns' : ''
                }`}
                sizes="100vw"
                quality={90}
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"
                style={{
                  opacity: slide.overlayOpacity || 0.6,
                  backgroundColor: slide.overlayColor,
                }}
              />

              {/* Gradient variant */}
              {variant === 'gradient' && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/50 to-transparent" />
              )}
            </div>

            {/* Content */}
            <div
              className={`absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-0 w-full lg:w-auto lg:max-w-2xl ${getContentPosition(slide.alignment)} ${getAlignmentClasses(slide.alignment)}`}
            >
              <div className={getContentTransitionClasses(index)}>
                {/* Subtitle Badge */}
                {/* {slide.subtitle && (
                  <span
                    className={`inline-block bg-secondary-500/90 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-lg transition-all duration-700 ${
                      index === currentIndex
                        ? 'opacity-100 translate-y-0 delay-200'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {slide.subtitle}
                  </span>
                )} */}

                {/* Title */}
                <h2
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 font-heading leading-tight transition-all duration-700 ${
                    index === currentIndex
                      ? 'opacity-100 translate-y-0 delay-300'
                      : 'opacity-0 translate-y-6'
                  }`}
                >
                  {slide.title}
                </h2>

                {/* Description */}
                <p
                  className={`text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed max-w-xl transition-all duration-700 ${
                    index === currentIndex
                      ? 'opacity-100 translate-y-0 delay-400'
                      : 'opacity-0 translate-y-6'
                  }`}
                >
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                {/* <div
                  className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
                    slide.alignment === 'center' ? 'justify-center' : ''
                  } ${
                    index === currentIndex
                      ? 'opacity-100 translate-y-0 delay-500'
                      : 'opacity-0 translate-y-6'
                  }`}
                >
                  {slide.ctaText && slide.ctaLink && (
                    <Link
                      href={slide.ctaLink}
                      className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-secondary-500 text-white font-semibold rounded-xl hover:bg-secondary-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-secondary-500/25 transform hover:-translate-y-1 group"
                    >
                      {slide.ctaText}
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
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
                  )}
                  {slide.ctaSecondaryText && slide.ctaSecondaryLink && (
                    <Link
                      href={slide.ctaSecondaryLink}
                      className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
                    >
                      {slide.ctaSecondaryText}
                    </Link>
                  )}
                </div> */}
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
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 group border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
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
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 group border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
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

      {/* Dots Navigation */}
      {/* {showDots && slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`relative transition-all duration-500 overflow-hidden rounded-full disabled:cursor-not-allowed ${
                index === currentIndex
                  ? 'w-12 md:w-14 h-3 bg-white'
                  : 'w-3 h-3 bg-white/40 hover:bg-white/70 hover:scale-125'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            >
              
              {showProgress && index === currentIndex && isPlaying && !isPaused && (
                <span
                  className="absolute inset-0 bg-secondary-500 rounded-full transition-transform origin-left"
                  style={{
                    transform: `scaleX(${progress / 100})`,
                  }}
                />
              )}
            </button>
          ))}
        </div>
      )} */}

      {/* Play/Pause Button */}
      {/* {autoPlay && (
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute bottom-8 right-8 z-30 w-11 h-11 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 border border-white/20 hover:scale-110"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying && !isPaused ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      )} */}

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-30 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 text-white text-sm font-medium border border-white/20">
        <span className="text-secondary-400 font-bold">
          {String(currentIndex + 1).padStart(2, '0')}
        </span>
        <span className="mx-2 text-white/50">/</span>
        <span className="text-white/70">{String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* Transition Type Indicator (optional - for demo) */}
      <div className="absolute top-8 left-8 z-30 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white text-xs font-medium border border-white/20 uppercase tracking-wider">
        {transition}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 z-30 hidden md:flex flex-col items-center space-y-3 text-white/60">
        <span className="text-xs uppercase tracking-widest writing-vertical">Scroll</span>
        <div className="w-px h-16 bg-white/20 relative overflow-hidden rounded-full">
          <div className="absolute top-0 w-full h-6 bg-gradient-to-b from-white to-transparent animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}

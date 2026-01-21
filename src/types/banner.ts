export type TransitionType =
  | 'fade'
  | 'slide'
  | 'slideUp'
  | 'zoom'
  | 'zoomFade'
  | 'kenBurns'
  | 'parallax'
  | 'curtain'
  | 'blur'
  | 'flip'
  | 'cube'
  | 'crossZoom'
  | 'slideReveal'
  | 'morphing';

export interface BannerSlide {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
  alignment?: 'left' | 'center' | 'right';
  overlayOpacity?: number;
  overlayColor?: string;
}

export interface BannerProps {
  slides: BannerSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  showProgress?: boolean;
  height?: 'small' | 'medium' | 'large' | 'full';
  variant?: 'default' | 'minimal' | 'gradient' | 'split';
  pauseOnHover?: boolean;
  transition?: TransitionType;
  transitionDuration?: number;
}

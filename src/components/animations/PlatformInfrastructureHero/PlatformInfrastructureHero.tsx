import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import type { AnimationItem } from 'lottie-web';


export interface PlatformInfrastructureHeroProps {
  className?: string;
}

export const PlatformInfrastructureHero: React.FC<
  PlatformInfrastructureHeroProps
> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<AnimationItem | null>(null);

  const getLottiePath = (width: number) => {
    if (width > 1024) return '/lottie/platform-infrastructure-hero/desktop.json';
    if (width > 768) return '/lottie/platform-infrastructure-hero/tablet.json';
    return '/lottie/platform-infrastructure-hero/mobile.json';
  };

  useEffect(() => {
    if (!containerRef.current) return;

    let currentPath = getLottiePath(window.innerWidth);

    const loadAnimation = (path: string) => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }

      animationInstance.current = lottie.loadAnimation({
        container: containerRef.current!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: path,
      });
    };

    loadAnimation(currentPath);

    const handleResize = () => {
      const newPath = getLottiePath(window.innerWidth);
      if (newPath !== currentPath) {
        currentPath = newPath;
        loadAnimation(currentPath);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute top-0 left-0 w-full h-full z-0 opacity-100 ${className}`}
      aria-hidden="true"
    />
  );
};

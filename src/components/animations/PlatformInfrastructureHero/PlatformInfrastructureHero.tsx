import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import desktopLottie from './assets/home-hero-desktop-71d8ee09850a.json';
import tabletLottie from './assets/home-hero-tablet-35ad653e35a7.json';
import mobileLottie from './assets/home-hero-mobile-9d2f4330c1fd.json';

export interface PlatformInfrastructureHeroProps {
  className?: string;
}

export const PlatformInfrastructureHero: React.FC<
  PlatformInfrastructureHeroProps
> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<any>(null);

  const getLottieData = (width: number) => {
    if (width > 1024) return desktopLottie;
    if (width > 768) return tabletLottie;
    return mobileLottie;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    let currentData = getLottieData(window.innerWidth);

    const loadAnimation = (animationData: any) => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }

      animationInstance.current = lottie.loadAnimation({
        container: containerRef.current!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    };

    loadAnimation(currentData);

    const handleResize = () => {
      const newData = getLottieData(window.innerWidth);
      if (newData !== currentData) {
        currentData = newData;
        loadAnimation(currentData);
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

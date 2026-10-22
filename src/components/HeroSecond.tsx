"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroSecond() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      ticking = false;
      if (!containerRef.current || !imageRef.current) return;

      // Measure live every frame so layout shifts above (images, fonts) can't make it jump
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      if (rect.bottom < 0 || rect.top > viewportHeight) return;

      // -1 when the box is just entering from below, 1 when it is just leaving at the top
      const travel = (viewportHeight + rect.height) / 2;
      const progress = (viewportHeight / 2 - (rect.top + rect.height / 2)) / travel;
      const clamped = Math.max(-1, Math.min(1, progress));

      // The image is 180% tall with 40% overhang on each side, so stay inside that
      const offset = clamped * rect.height * 0.38;
      imageRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const requestUpdate = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    updateParallax(); // Initial positioning

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  return (
    <div className="pt-[10px] px-[10px] relative w-full overflow-hidden">
      <div 
        ref={containerRef}
        className="relative z-0 min-h-[400px] lg:min-h-[84vh] w-full flex items-center justify-center overflow-hidden"
      >
        <div 
          ref={imageRef}
          className="w-full h-[180%] absolute top-[-40%] left-0 will-change-transform"
        >
          <Image 
            src="/assets/6760393d72ab33d59002b3e4_hero-2.avif"
            alt="Hero Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

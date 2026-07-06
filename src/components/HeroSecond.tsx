"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroSecond() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let isVisible = false;

    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    let initialTop = 0;
    if (containerRef.current) {
      initialTop = containerRef.current.offsetTop;
      // Get the absolute top relative to document by traversing offsetParents
      let el: HTMLElement | null = containerRef.current;
      while (el.offsetParent) {
        el = el.offsetParent as HTMLElement;
        initialTop += el.offsetTop;
      }
    }

    const updateParallax = () => {
      if (!containerRef.current || !imageRef.current || !isVisible) {
        ticking = false;
        return;
      }
      
      const scrollY = window.scrollY;
      const viewportCenter = scrollY + window.innerHeight / 2;
      const elementHeight = containerRef.current.offsetHeight;
      const elementCenter = initialTop + elementHeight / 2;
      
      const distanceFromCenter = viewportCenter - elementCenter;
      
      // Dialed back to 0.4 so the image doesn't fly out of bounds completely
      const offset = distanceFromCenter * 0.4;
      imageRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking && isVisible) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateParallax(); // Initial positioning
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
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

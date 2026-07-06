"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let animationFrameId: number;
    let currentX = 0;
    let lastScrollY = window.scrollY;
    let halfWidth = 0;

    if (marqueeRef.current) {
      halfWidth = marqueeRef.current.scrollWidth / 2;
      const resizeObserver = new ResizeObserver(() => {
        if (marqueeRef.current) {
          halfWidth = marqueeRef.current.scrollWidth / 2;
        }
      });
      resizeObserver.observe(marqueeRef.current);
    }

    const loop = () => {
      // 1. Slow continuous movement (right to left)
      currentX -= 0.515;

      // 2. Add scroll delta
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollY;
      lastScrollY = scrollY;
      
      currentX -= scrollDelta * 1.5;

      // Reset logic to make it infinite
      if (marqueeRef.current && halfWidth > 0) {
        if (currentX <= -halfWidth) {
          currentX += halfWidth;
        } else if (currentX > 0) {
          currentX -= halfWidth;
        }

        marqueeRef.current.style.transform = `translate3d(${currentX}px, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div 
          className="relative z-0 min-h-[400px] lg:min-h-[84vh] w-full flex items-center justify-center bg-center bg-no-repeat bg-cover"
        >
          <div 
            className="w-full h-full absolute inset-0"
          >
            <Image 
              src="/assets/675c3668bf2d6dd9c7580b04_hero.avif"
              alt="Hero Architecture"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-main text-white pt-[60px] pb-[60px] md:pt-[120px] md:pb-[66px] text-[16vw] font-semibold leading-tight whitespace-nowrap overflow-hidden tracking-[-1px]">
        <div 
          ref={marqueeRef}
          className="flex w-fit will-change-transform"
        >
          {/* Marquee Content */}
          <div className="flex gap-[50px] items-center pr-[50px]">
            <div className="flex items-center gap-10">
              <span>Tomorrow’s Way of Life</span>
              <PlayButton />
            </div>
            <div className="flex items-center gap-10">
              <span>Future of Living</span>
              <PlayButton />
            </div>
            <div className="flex items-center gap-10">
              <span>New Era in Lifestyle</span>
              <PlayButton />
            </div>
          </div>
          <div className="flex gap-[50px] items-center pr-[50px]" aria-hidden="true">
            <div className="flex items-center gap-10">
              <span>Tomorrow’s Way of Life</span>
              <PlayButton />
            </div>
            <div className="flex items-center gap-10">
              <span>Future of Living</span>
              <PlayButton />
            </div>
            <div className="flex items-center gap-10">
              <span>New Era in Lifestyle</span>
              <PlayButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PlayButton() {
  return (
    <div className="relative flex items-center justify-center w-[10vw] h-[10vw] rounded-sm overflow-hidden shrink-0">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 brightness-50"
        style={{ backgroundImage: `url('/assets/675c3668bf2d6dd9c7580b04_hero.avif')` }}
      />
    </div>
  );
}

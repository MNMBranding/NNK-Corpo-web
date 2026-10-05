'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { projects } from '../data/projects';

interface TrailImage {
  id: number;
  x: number;
  y: number;
  src: string;
  rotate: number;
}

let trailIdCounter = 0;
const MIN_DISTANCE = 55;
const LIFETIME_MS = 700;
const MAX_TRAIL = 8;
const ALL_IMAGES = projects.map((p) => p.image);
const SLIDE_MS = 3500;

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function ProjectsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);
  const queueRef = useRef<string[]>([]);
  const lastImageRef = useRef<string | null>(null);
  const [trail, setTrail] = useState<TrailImage[]>([]);

  const nextImage = () => {
    if (queueRef.current.length === 0) {
      const shuffled = shuffle(ALL_IMAGES);
      if (shuffled.length > 1 && shuffled[0] === lastImageRef.current) {
        [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];
      }
      queueRef.current = shuffled;
    }
    const next = queueRef.current.shift()!;
    lastImageRef.current = next;
    return next;
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    // Desktop only: needs a mouse and the desktop layout (phones get the slideshow instead)
    if (!window.matchMedia('(hover: hover) and (min-width: 768px)').matches) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (lastPosRef.current) {
      const dx = x - lastPosRef.current.x;
      const dy = y - lastPosRef.current.y;
      if (Math.sqrt(dx * dx + dy * dy) < MIN_DISTANCE) return;
    }
    lastPosRef.current = { x, y };

    const id = trailIdCounter++;
    const item: TrailImage = {
      id,
      x,
      y,
      src: nextImage(),
      rotate: Math.random() * 16 - 8,
    };

    setTrail((prev) => [...prev.slice(-(MAX_TRAIL - 1)), item]);

    window.setTimeout(() => {
      setTrail((prev) => prev.filter((t) => t.id !== id));
    }, LIFETIME_MS);
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full md:h-[80dvh] overflow-hidden bg-main text-white flex flex-col md:items-center md:justify-center pt-10 pb-6 md:p-0"
    >
      {trail.map((item) => (
        <div
          key={item.id}
          className="absolute pointer-events-none"
          style={{
            left: item.x,
            top: item.y,
            transform: `translate(-50%, -50%) rotate(${item.rotate}deg)`,
          }}
        >
          <div className="trail-fade relative w-[110px] h-[140px] md:w-[150px] md:h-[190px] rounded-lg overflow-hidden shadow-2xl">
            <Image src={item.src} alt="" fill sizes="150px" className="object-cover" />
          </div>
        </div>
      ))}

      <div className="relative z-10 text-center px-[6%]">
        <h1 className="text-[16vw] md:text-[length:min(9vw,158px)] leading-[0.95] font-semibold tracking-tight uppercase">
          Projects
        </h1>
      </div>

      <MobileSlideshow />
    </section>
  );
}

// Phones only: every project render in turn, shown whole (full width, no cropping), cross-fading
function MobileSlideshow() {
  const [index, setIndex] = useState(0);
  // Renders are mounted as they come up, so the phone doesn't download all of them at once
  const [loaded, setLoaded] = useState(2);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % projects.length);
      setLoaded((n) => Math.min(n + 1, projects.length));
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, []);

  const current = projects[index];

  return (
    <div className="md:hidden mt-8 flex flex-col gap-4">
      <div className="relative w-full aspect-video">
        {projects.slice(0, loaded).map((project, i) => (
          <Image
            key={project.slug}
            src={project.image}
            alt={project.name}
            fill
            sizes="100vw"
            priority={i === 0}
            className={`object-contain transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      <div className="px-5 flex items-baseline justify-between">
        <span className="text-[17px] font-semibold">{current.name}</span>
        <span className="text-xs tracking-widest text-[#a1a1aa] tabular-nums">
          {String(index + 1).padStart(2, '0')} / {projects.length}
        </span>
      </div>

      {/* Fills up while the current render is showing; key restarts it for each render */}
      <div className="mx-5 h-[2px] bg-white/15">
        <div key={index} className="h-full bg-white animate-progress" />
      </div>
    </div>
  );
}

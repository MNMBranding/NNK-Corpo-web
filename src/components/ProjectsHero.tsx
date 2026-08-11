'use client';

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
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
      className="relative w-full h-[80dvh] overflow-hidden bg-main text-white flex items-center justify-center"
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
        <h1 className="text-[16vw] md:text-[9vw] leading-[0.95] font-semibold tracking-tight uppercase">
          Projects
        </h1>
      </div>
    </section>
  );
}

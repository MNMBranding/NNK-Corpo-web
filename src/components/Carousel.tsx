'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Carousel({
  label,
  heading,
  images,
  alt,
  fit = 'cover',
  labels,
  captions,
  slideClassName = 'w-[85vw] md:w-[500px] h-[400px] md:h-[500px]',
  lightbox = false,
}: {
  label: string;
  heading: React.ReactNode;
  images: string[];
  alt: string;
  fit?: 'cover' | 'contain';
  labels?: string[];
  captions?: (string | undefined)[];
  slideClassName?: string;
  lightbox?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  const scrollByOneSlide = (dir: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const firstChild = container.firstElementChild as HTMLElement | null;
    const slideWidth = firstChild ? firstChild.getBoundingClientRect().width + 16 : 420;
    container.scrollBy({ left: dir * slideWidth, behavior: 'smooth' });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0 mb-10 md:mb-16">
        <div className="md:col-start-1 md:col-end-4 pt-2">
          <span className="uppercase text-sm tracking-wide opacity-80">{label}</span>
        </div>
        <div className="md:col-start-4 md:col-end-11">
          <h2 className="text-[10vw] md:text-[length:min(5vw,88px)] leading-[1.1] font-medium tracking-tight">{heading}</h2>
        </div>
        {images.length > 1 && (
          <div className="md:col-start-11 md:col-end-13 flex justify-end items-end gap-[2px] mt-6 md:mt-0">
            <button
              onClick={() => scrollByOneSlide(-1)}
              aria-label="Previous"
              className="w-[60px] h-[60px] bg-[#1a1a1a] hover:bg-[#2a2a2a] pointer-coarse:bg-[#2a2a2a] max-md:bg-[#2a2a2a] flex items-center justify-center transition-colors"
            >
              <Image src="/assets/67601b81e9864eae0d43a2d7_icons8-arrow-left.svg" alt="Prev" width={24} height={24} />
            </button>
            <button
              onClick={() => scrollByOneSlide(1)}
              aria-label="Next"
              className="w-[60px] h-[60px] bg-[#1a1a1a] hover:bg-[#2a2a2a] pointer-coarse:bg-[#2a2a2a] max-md:bg-[#2a2a2a] flex items-center justify-center transition-colors"
            >
              <Image src="/assets/67601b826b691d5a30fb50ed_icons8-arrow-right.svg" alt="Next" width={24} height={24} />
            </button>
          </div>
        )}
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((src, idx) => (
          <div
            key={`${src}-${idx}`}
            onClick={lightbox ? () => setLightboxIndex(idx) : undefined}
            className={`relative flex flex-col flex-none snap-center shrink-0 first:ml-auto last:mr-auto bg-[#0c0c0c] overflow-hidden ${slideClassName} ${lightbox ? 'cursor-zoom-in' : ''}`}
          >
            <div className="relative flex-1 min-h-0">
              <Image
                src={src}
                alt={`${alt} ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className={fit === 'contain' ? 'object-contain px-4 pt-14 pb-4 md:px-10 md:pt-16 md:pb-10' : 'object-cover'}
              />
            </div>

            {labels && labels[idx] && (
              <span className="absolute top-4 left-4 uppercase text-[11px] tracking-widest bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">
                {labels[idx]}
              </span>
            )}

            {captions && captions[idx] && (
              <div className="border-t border-white/10 text-white text-xs md:text-sm px-4 md:px-6 py-3 md:py-4 leading-snug">
                {captions[idx]}
              </div>
            )}
          </div>
        ))}
      </div>

      {lightbox && lightboxIndex !== null && (
        <Lightbox
          images={images}
          alt={alt}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}

export function Lightbox({
  images,
  alt,
  index,
  onClose,
  onNavigate,
}: {
  images: string[];
  alt: string;
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [index, images.length, onClose, onNavigate]);

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 md:top-8 md:right-8 w-[60px] h-[60px] bg-[#1a1a1a] hover:bg-[#2a2a2a] pointer-coarse:bg-[#2a2a2a] max-md:bg-[#2a2a2a] flex items-center justify-center transition-colors z-10"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + images.length) % images.length);
            }}
            aria-label="Previous"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-[#1a1a1a] hover:bg-[#2a2a2a] pointer-coarse:bg-[#2a2a2a] max-md:bg-[#2a2a2a] flex items-center justify-center transition-colors z-10"
          >
            <Image src="/assets/67601b81e9864eae0d43a2d7_icons8-arrow-left.svg" alt="Prev" width={24} height={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % images.length);
            }}
            aria-label="Next"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-[#1a1a1a] hover:bg-[#2a2a2a] pointer-coarse:bg-[#2a2a2a] max-md:bg-[#2a2a2a] flex items-center justify-center transition-colors z-10"
          >
            <Image src="/assets/67601b826b691d5a30fb50ed_icons8-arrow-right.svg" alt="Next" width={24} height={24} />
          </button>
        </>
      )}

      <div
        className="relative w-[92vw] h-[80vh] md:w-[85vw] md:h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index]}
          alt={`${alt} ${index + 1}`}
          fill
          sizes="92vw"
          className="object-contain"
        />
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-white text-xs tracking-widest bg-[#1a1a1a] px-4 py-2 rounded-full">
          {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </div>
      )}
    </div>
  );
}

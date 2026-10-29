"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import BorderButton from './BorderButton';
import { projects } from '../data/projects';

// Banner slides: same layout, one project each. Location is the short area name.
const slides = [
  { slug: 'aira', location: 'Shaikpet' },
  { slug: 'vrindhavan', location: 'Shaikpet' },
  { slug: 'vyoma', location: 'Shaikpet' },
].map((slide) => ({ ...slide, project: projects.find((p) => p.slug === slide.slug)! }));

// How long each banner stays before moving to the next one.
const SLIDE_DURATION = '6s';

// Position of a slide relative to the active one: -1 = left of it, 0 = showing, 1+ = to the right
function slideOffset(index: number, active: number) {
  const offset = (index - active + slides.length) % slides.length;
  return offset === slides.length - 1 ? -1 : offset;
}

export default function Hero() {
  const router = useRouter();
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  // The slide that was showing before the last change, used to decide which slides animate
  const [previous, setPrevious] = useState(0);

  // Banner drag: dragX is how far the pointer has moved since pressing (null = not dragging)
  const [dragX, setDragX] = useState<number | null>(null);
  const dragStartX = useRef(0);

  const goTo = (index: number) => {
    setPrevious(active);
    setActive((index + slides.length) % slides.length);
  };

  const onDragStart = (e: React.PointerEvent<HTMLDivElement>) => {
    // Let the slide-timer buttons handle their own clicks
    if ((e.target as HTMLElement).closest('button')) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    dragStartX.current = e.clientX;
    // A drag starts from where the slides are now, so a short drag snaps back smoothly
    setPrevious(active);
    setDragX(0);
  };

  const onDragMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragX === null) return;
    setDragX(e.clientX - dragStartX.current);
  };

  const onDragEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragX === null) return;
    // Dragged past 15% of the banner width: move to the next / previous project
    const threshold = e.currentTarget.offsetWidth * 0.15;
    if (dragX < -threshold) goTo(active + 1);
    if (dragX > threshold) goTo(active - 1);
    // A click (barely moved) opens the project, same as "More Details"
    if (Math.abs(dragX) < 6) router.push(`/projects/${slides[active].slug}`);
    setDragX(null);
  };

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
      currentX -= 1.8;

      // 2. Add scroll delta
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollY;
      lastScrollY = scrollY;
      
      currentX -= scrollDelta * 1.7;

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
      <section className="w-full px-5 md:px-[3%] lg:pl-0 lg:pr-0 pt-2 lg:pt-0">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[auto_minmax(0,1fr)_minmax(260px,17%)]">
          {/* Column 1: N mark + headline, with equal breathing room on both sides */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:justify-center lg:w-[calc(min(9vw,158px)+2*min(2.2vw,40px))] lg:px-[min(2.2vw,40px)] pb-8 lg:pb-0">
            <Image
              src="/assets/n-logo.png"
              alt="NNK"
              width={148}
              height={197}
              priority
              className="w-[90px] lg:w-full h-auto"
            />
            <h1 className="mt-5 lg:mt-6 font-display font-semibold text-ink uppercase leading-[1.05] tracking-[-0.5px] text-[22px] lg:text-[length:min(1.6vw,28px)]">
              A Blissful Experience <br className="lg:hidden" />Enriching Everyday
            </h1>
          </div>

          {/* Columns 2 + 3: banner + project panel. Hovering or dragging pauses the slideshow. */}
          <div className="group lg:col-span-2 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-subgrid">
            {/* Column 2: banner images. Slides sideways; drag or swipe to change project. */}
            <div
              onPointerDown={onDragStart}
              onPointerMove={onDragMove}
              onPointerUp={onDragEnd}
              onPointerCancel={onDragEnd}
              className={`relative aspect-[4/3] lg:aspect-auto lg:min-h-[min(46vw,800px)] overflow-hidden bg-surface-2 touch-pan-y select-none ${dragX !== null ? 'cursor-grabbing' : 'cursor-grab'}`}
            >
              {slides.map((slide, i) => {
                const offset = slideOffset(i, active);
                // Only animate a slide moving one step. A slide wrapping from one side to the other
                // (e.g. left → right with 3 slides) jumps while hidden instead of sliding across the banner.
                const animate = dragX === null && Math.abs(offset - slideOffset(i, previous)) <= 1;

                return (
                  <div
                    key={slide.slug}
                    aria-hidden={offset !== 0}
                    style={{ transform: `translateX(calc(${offset * 100}% + ${dragX ?? 0}px))` }}
                    className={`absolute inset-0 ${animate ? 'transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]' : ''}`}
                  >
                    <Image
                      src={slide.project.image}
                      alt={slide.project.name}
                      fill
                      priority={i === 0}
                      draggable={false}
                      sizes="(min-width: 1024px) 70vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                );
              })}

              {/* Slide dots on a dark capsule at the right edge (visible on light banners): the active dot stretches into a pill that fills top to bottom, then the next banner shows */}
              <div className="absolute right-3 lg:right-5 top-1/2 -translate-y-1/2 flex flex-col items-center z-10 py-[6px] rounded-full bg-black/35 backdrop-blur-sm">
                {slides.map((slide, i) => (
                  <button
                    key={slide.slug}
                    onClick={() => goTo(i)}
                    aria-label={`Show ${slide.project.name}`}
                    className="group/dot p-[6px]"
                  >
                    <span
                      className={`block w-[9px] rounded-full overflow-hidden transition-[height,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${i === active ? 'h-[44px] bg-white/45' : 'h-[9px] bg-white/55 group-hover/dot:bg-white'}`}
                    >
                      {i === active && (
                        <span
                          key={active}
                          onAnimationEnd={() => goTo(active + 1)}
                          style={{ animationDuration: SLIDE_DURATION }}
                          className={`block w-full bg-white animate-progress-y group-hover:[animation-play-state:paused] ${dragX !== null ? '[animation-play-state:paused]' : ''}`}
                        />
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Column 3: project panel (cross-fade) */}
            <div className="grid grid-cols-[minmax(0,1fr)] bg-ink text-white">
              {slides.map((slide, i) => (
                <div
                  key={slide.slug}
                  aria-hidden={i !== active}
                  className={`[grid-area:1/1] flex flex-col p-6 lg:px-6 lg:py-10 lg:justify-center lg:items-center lg:text-center transition-opacity duration-1000 ease-in-out ${i === active ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                  <div className="relative h-12 w-[150px] lg:h-[min(5vw,84px)] lg:w-full">
                    <Image
                      src={slide.project.logo}
                      alt={`${slide.project.name} logo`}
                      fill
                      sizes="200px"
                      className="object-contain object-left lg:object-center"
                    />
                  </div>

                  <dl className="grid grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-5 lg:gap-y-[min(2vw,32px)] mt-7 lg:my-[min(3vw,48px)]">
                    <Stat value={slide.project.specs.plotArea} label="Total Extent" />
                    <Stat value={slide.project.specs.floors} label="Floors" />
                    <Stat value={slide.project.specs.bhk} label="Configuration" />
                    <Stat value={slide.location} label="Location" />
                  </dl>

                  {/* RERA + approval numbers */}
                  <div className="mt-7 lg:mt-0 lg:mb-[min(3vw,48px)] text-[12px] lg:text-[length:clamp(11px,0.8vw,14px)] uppercase tracking-wide leading-relaxed text-white/65">
                    {slide.project.specs.rera && <p>TS RERA: {slide.project.specs.rera}</p>}
                    {slide.project.specs.approvalNumber && (
                      <p>{slide.project.specs.approvalAuthority || 'Approval'}: {slide.project.specs.approvalNumber}</p>
                    )}
                  </div>

                  <div className="mt-7 lg:mt-0">
                    <BorderButton href={`/projects/${slide.slug}`} text="More Details" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 bg-surface text-ink pt-[60px] pb-[60px] md:pt-[120px] md:pb-[66px] text-[length:min(16vw,282px)] font-semibold leading-tight whitespace-nowrap overflow-hidden tracking-[-1px]">
        <div 
          ref={marqueeRef}
          className="flex w-fit will-change-transform"
        >
          {/* Marquee Content */}
          <div className="flex gap-[50px] items-center pr-[50px]">
            <div className="flex items-center gap-10">
              <span>REDEFINING LIFESTYLE  |</span>
            </div>
            <div className="flex items-center gap-10">
              <span>DISCOVER THE EXCEPTIONAL</span>
            </div>
          </div>
          <div className="flex gap-[50px] items-center pr-[50px]" aria-hidden="true">
            <div className="flex items-center gap-10">
              <span>REDEFINING LIFESTYLE  |</span>
            </div>
            <div className="flex items-center gap-10">
              <span>DISCOVER THE EXCEPTIONAL</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col-reverse justify-end">
      <dt className="text-[14px] lg:text-[length:clamp(14px,1vw,17px)] text-white/65 mt-1">{label}</dt>
      <dd className="font-display font-semibold text-[17px] lg:text-[length:clamp(17px,1.45vw,26px)] leading-tight">{value}</dd>
    </div>
  );
}

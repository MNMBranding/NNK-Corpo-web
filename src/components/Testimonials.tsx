'use client';
import { useRef } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    image: '/assets/676036c59f4ed5cdb2be537b_team-1.avif',
    logo: '/assets/675c1d31c59bdbc0d9795f06_logo-1.avif',
    quote: 'Working with this architectural firm was a dream come true. They balanced creativity and practicality to design a space that perfectly reflects our brand.',
    name: 'Lucas Smith',
    title: 'Marketing Director',
  },
  {
    image: '/assets/676036c75e533f3c717ce364_team-3.avif',
    logo: '/assets/675c1d31c59bdbc0d9795f70_logo-2.avif',
    quote: 'Their attention to detail and commitment to sustainable materials set them apart. Our new building has become a landmark.',
    name: 'James Sullivan',
    title: 'Pulse CEO',
  },
  {
    image: '/assets/676036c78cb8c5a68bf7f82f_team-2.avif',
    logo: '/assets/675c1d31c59bdbc0d9795f01_logo-3.avif',
    quote: 'From the first consultation to the final walk-through, the team was professional, communicative, and dedicated to our vision.',
    name: 'Sarah Thompson',
    title: 'Bilg Founder',
  },
  {
    image: '/assets/676036c790dfc6a64cd60b4c_team-4.avif',
    logo: '/assets/675c1d31c59bdbc0d9795f79_logo-4.avif',
    quote: 'They transformed our outdated space into a modern, functional office that has greatly improved workflow and morale.',
    name: 'Emma Harrison',
    title: 'Cube Marketing',
  },
];

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Arrows move by one card (card width + 16px gap)
  const scrollByOneCard = (dir: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const firstCard = container.firstElementChild as HTMLElement | null;
    const step = firstCard ? firstCard.getBoundingClientRect().width + 16 : 300;
    container.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  // Drag-to-scroll with a mouse (touch screens already swipe natively).
  // Snapping is switched off while dragging, then back on so it settles on a card.
  const drag = useRef<{ startX: number; startScroll: number } | null>(null);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return;
    const container = scrollContainerRef.current;
    if (!container) return;
    drag.current = { startX: e.clientX, startScroll: container.scrollLeft };
    container.style.scrollSnapType = 'none';
    container.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!drag.current || !container) return;
    container.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX);
  };

  const onPointerUp = () => {
    const container = scrollContainerRef.current;
    if (!drag.current || !container) return;
    drag.current = null;
    container.style.scrollSnapType = '';
  };

  return (
    <section className="bg-main text-white py-[72px] md:py-[140px] lg:py-[200px] overflow-hidden">
      <div className="max-w-[1760px] mx-auto w-full px-5 md:px-[3%] mb-10 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-y-0">
          <div className="md:col-start-1 md:col-end-3 pt-2">
            <span className="uppercase text-sm tracking-wide opacity-80">
              Testimonials
            </span>
          </div>
          <div className="md:col-start-4 md:col-end-10">
            <h2 className="text-[8vw] md:text-[length:min(3vw,53px)] leading-[1.15] font-medium tracking-tight">
              Discover the impact we've made for our clients.
            </h2>
          </div>
          <div className="flex md:col-start-11 md:col-end-13 justify-end items-end gap-[2px]">
            <button 
              onClick={() => scrollByOneCard(-1)}
              aria-label="Previous testimonial"
              className="w-[60px] h-[60px] bg-[#1a1a1a] hover:bg-[#2a2a2a] pointer-coarse:bg-[#2a2a2a] max-md:bg-[#2a2a2a] flex items-center justify-center transition-colors"
            >
              <Image src="/assets/67601b81e9864eae0d43a2d7_icons8-arrow-left.svg" alt="Prev" width={24} height={24} />
            </button>
            <button 
              onClick={() => scrollByOneCard(1)}
              aria-label="Next testimonial"
              className="w-[60px] h-[60px] bg-[#1a1a1a] hover:bg-[#2a2a2a] pointer-coarse:bg-[#2a2a2a] max-md:bg-[#2a2a2a] flex items-center justify-center transition-colors"
            >
              <Image src="/assets/67601b826b691d5a30fb50ed_icons8-arrow-right.svg" alt="Next" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full group">
        <div 
          ref={scrollContainerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 px-5 md:px-[3%] scroll-px-5 md:scroll-px-[3%] cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Mobile: one card per person (photo above quote). Desktop: photo and quote side by side as two panels */}
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex-none snap-center md:snap-start shrink-0 w-[85vw] md:w-auto flex flex-col md:flex-row md:gap-4"
            >
              <div className="relative w-full h-[260px] md:w-[400px] md:h-[450px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  draggable={false}
                  sizes="(max-width: 768px) 85vw, 400px"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex-1 md:flex-none md:w-[400px] md:h-[450px] bg-[#141414] p-6 md:p-12 flex flex-col justify-between transition-colors duration-300 hover:bg-[#1a1a1a]">
                <div>
                  <Image src={item.logo} alt="Logo" width={100} height={40} draggable={false} className="mb-6 md:mb-8 invert" />
                  <p className="text-lg md:text-2xl font-medium leading-snug">
                    {item.quote}
                  </p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide opacity-80 mt-6 md:mt-8">
                    {item.name}, <span className="text-white opacity-100 font-semibold">{item.title}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

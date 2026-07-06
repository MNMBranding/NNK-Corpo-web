'use client';
import { useRef } from 'react';
import Image from 'next/image';

const slides = [
  {
    type: 'image',
    src: '/assets/676036c59f4ed5cdb2be537b_team-1.avif'
  },
  {
    type: 'testimonial',
    logo: '/assets/675c1d31c59bdbc0d9795f06_logo-1.avif',
    quote: 'Working with this architectural firm was a dream come true. They balanced creativity and practicality to design a space that perfectly reflects our brand.',
    name: 'Lucas Smith',
    title: 'Marketing Director',
  },
  {
    type: 'image',
    src: '/assets/676036c75e533f3c717ce364_team-3.avif'
  },
  {
    type: 'testimonial',
    logo: '/assets/675c1d31c59bdbc0d9795f70_logo-2.avif',
    quote: 'Their attention to detail and commitment to sustainable materials set them apart. Our new building has become a landmark.',
    name: 'James Sullivan',
    title: 'Pulse CEO',
  },
  {
    type: 'image',
    src: '/assets/676036c78cb8c5a68bf7f82f_team-2.avif'
  },
  {
    type: 'testimonial',
    logo: '/assets/675c1d31c59bdbc0d9795f01_logo-3.avif',
    quote: 'From the first consultation to the final walk-through, the team was professional, communicative, and dedicated to our vision.',
    name: 'Sarah Thompson',
    title: 'Bilg Founder',
  },
  {
    type: 'image',
    src: '/assets/676036c790dfc6a64cd60b4c_team-4.avif'
  },
  {
    type: 'testimonial',
    logo: '/assets/675c1d31c59bdbc0d9795f79_logo-4.avif',
    quote: 'They transformed our outdated space into a modern, functional office that has greatly improved workflow and morale.',
    name: 'Emma Harrison',
    title: 'Cube Marketing',
  }
];

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-main text-white py-[100px] md:py-[200px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto w-full px-[3%] mb-16 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0">
          <div className="md:col-start-1 md:col-end-3 pt-2">
            <span className="uppercase text-sm tracking-wide opacity-80">
              Testimonials
            </span>
          </div>
          <div className="md:col-start-4 md:col-end-10">
            <h2 className="text-[10vw] md:text-[5vw] leading-[1.1] font-medium tracking-tight">
              Discover the impact we've made for our clients.
            </h2>
          </div>
          <div className="md:col-start-11 md:col-end-13 flex justify-end items-end gap-[2px] mt-6 md:mt-0">
            <button 
              onClick={scrollLeft}
              className="w-[60px] h-[60px] bg-[#1a1a1a] hover:bg-[#2a2a2a] flex items-center justify-center transition-colors"
            >
              <Image src="/assets/67601b81e9864eae0d43a2d7_icons8-arrow-left.svg" alt="Prev" width={24} height={24} />
            </button>
            <button 
              onClick={scrollRight}
              className="w-[60px] h-[60px] bg-[#1a1a1a] hover:bg-[#2a2a2a] flex items-center justify-center transition-colors"
            >
              <Image src="/assets/67601b826b691d5a30fb50ed_icons8-arrow-right.svg" alt="Next" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative max-w-[1440px] mx-auto w-full group">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 px-5 md:px-[5%]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {slides.map((slide, idx) => (
            <div 
              key={idx} 
              className="flex-none w-[85vw] md:w-[400px] snap-center shrink-0 h-[450px]"
            >
              {slide.type === 'image' ? (
                <div className="relative w-full h-full overflow-hidden">
                  <Image 
                    src={slide.src!} 
                    alt="Testimonial Image" 
                    fill 
                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105" 
                  />
                </div>
              ) : (
                <div className="w-full h-full bg-[#141414] p-8 md:p-12 flex flex-col justify-between transition-colors duration-300 hover:bg-[#1a1a1a]">
                  <div>
                    <Image src={slide.logo!} alt="Logo" width={100} height={40} className="mb-8 invert" />
                    <p className="text-xl md:text-2xl font-medium leading-snug">
                      {slide.quote}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wide opacity-80 mt-8">
                      {slide.name}, <span className="text-white opacity-100 font-semibold">{slide.title}</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

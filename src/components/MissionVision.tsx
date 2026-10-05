"use client";

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 20, prefix: '', suffix: ' Lakh Sft.', label: 'Developed' },
  { value: 30, prefix: '', suffix: ' Projects', label: 'Delivered' },
  { value: 400, prefix: '', suffix: '', label: 'Acres in the Pipeline' },
  { value: 2000, prefix: '', suffix: '+', label: 'Happy Families' },
];

export default function MissionVision() {
  return (
    <section className="bg-main text-white py-[72px] md:py-[140px] lg:py-[200px] px-5 md:px-[3%] overflow-hidden">
      <div className="max-w-[1760px] mx-auto w-full relative">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-[10vw] md:gap-y-[6vw]">

          {/* Row 1 */}
          <div className="md:col-start-1 md:col-end-3">
            <span className="uppercase text-sm tracking-wide opacity-80">
              About NNK
            </span>
          </div>

          <div className="md:col-start-4 md:col-end-13">
            <h2 className="text-[8vw] md:text-[length:min(3vw,53px)] leading-[1.15] font-medium tracking-tight">
              <span className="text-[#a1a1aa]">NNK</span>
              {" "} creates iconic spaces through expertise, innovation, and excellence, delivering trusted, thoughtfully designed landmarks that inspire modern living and lasting value.            </h2>
          </div>

          <div className="md:col-start-2 md:col-end-13 grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-0 md:pt-10">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="text-[7vw] md:text-[length:min(3.2vw,56px)] leading-[1] font-medium tracking-tighter"
                />
                <p className="uppercase text-sm tracking-wide mt-2 opacity-80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function Counter({ value, prefix, suffix, className }: { value: number; prefix: string; suffix: string; className: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLHeadingElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const duration = 1600;
        const startTime = performance.now();

        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * value));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <h2 ref={ref} className={className}>
      {prefix}{count.toLocaleString('en-IN')}{suffix}
    </h2>
  );
}

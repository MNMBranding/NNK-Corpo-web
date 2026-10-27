import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Thank You | NNK",
  robots: { index: false, follow: false },
};

// Hand-drawn line doodles scattered around the edges; each draws itself in after the curtain lifts.
// x / y / size are % of the screen width / height / width. `mobile: false` hides ones that would crowd a phone screen.
const doodles = [
  { name: 'house', x: 7, y: 12, size: 9, rotate: -6, blue: false, mobile: true,
    d: 'M18 52 50 22l32 30M26 46v36h48V46M43 82V62h14v20' },
  { name: 'sparkle', x: 24, y: 8, size: 4, rotate: 0, blue: true, mobile: false,
    d: 'M50 18c2 22 10 30 32 32-22 2-30 10-32 32-2-22-10-30-32-32 22-2 30-10 32-32z' },
  { name: 'key', x: 76, y: 10, size: 10, rotate: -24, blue: false, mobile: true,
    d: 'M16 50a14 14 0 1 0 28 0 14 14 0 1 0-28 0M44 50h40M72 50v10M80 50v8' },
  { name: 'sun', x: 64, y: 6, size: 6, rotate: 0, blue: false, mobile: false,
    d: 'M38 50a12 12 0 1 0 24 0 12 12 0 1 0-24 0M50 22v-8M50 86v-8M22 50h-8M86 50h-8M30 30l-6-6M76 76l-6-6M70 30l6-6M24 76l6-6' },
  { name: 'tower', x: 4, y: 58, size: 11, rotate: 0, blue: false, mobile: false,
    d: 'M34 88V20h32v68M44 30h4m4 0h4m-12 12h4m4 0h4m-12 12h4m4 0h4m-12 12h4m4 0h4M24 88h52' },
  { name: 'squiggle', x: 15, y: 40, size: 9, rotate: -10, blue: true, mobile: false,
    d: 'M10 50c10-16 20 16 30 0s20 16 30 0 20 16 30 0' },
  { name: 'plan', x: 84, y: 44, size: 10, rotate: 6, blue: false, mobile: false,
    d: 'M16 20h68v60H16zM16 52h30v28M46 20v20M62 52h22M62 52v14' },
  { name: 'plane', x: 70, y: 76, size: 10, rotate: 0, blue: false, mobile: true,
    d: 'M12 50 88 18 66 84 48 58zM48 58 88 18' },
  { name: 'tree', x: 20, y: 78, size: 9, rotate: 0, blue: false, mobile: true,
    d: 'M50 88V58m0 8-10-8m10 4 10-8m-10 4c-22 2-26-26-8-30 2-14 22-14 24 0 18 4 14 32-16 30' },
  { name: 'heart', x: 90, y: 80, size: 5, rotate: 12, blue: true, mobile: false,
    d: 'M50 80C20 60 14 40 28 30c10-6 20 0 22 10 2-10 12-16 22-10 14 10 8 30-22 50z' },
  { name: 'sparkle-2', x: 45, y: 88, size: 3.5, rotate: 0, blue: true, mobile: false,
    d: 'M50 18c2 22 10 30 32 32-22 2-30 10-32 32-2-22-10-30-32-32 22-2 30-10 32-32z' },
];

export default async function ThankYou({ searchParams }: { searchParams: Promise<{ project?: string }> }) {
  const { project: slug } = await searchParams;
  const brochure = projects.find((p) => p.slug === slug)?.brochure;

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-surface flex items-center justify-center px-[6%]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {doodles.map((doodle, i) => (
          <svg
            key={doodle.name}
            viewBox="0 0 100 100"
            fill="none"
            className={`absolute h-auto ${doodle.mobile ? '' : 'hidden md:block'} ${doodle.blue ? 'text-[#015ce1]/60' : 'text-ink/25'}`}
            style={{ left: `${doodle.x}%`, top: `${doodle.y}%`, width: `max(${doodle.size}vw, 56px)`, rotate: `${doodle.rotate}deg` }}
          >
            <path
              d={doodle.d}
              pathLength={1}
              strokeDasharray={1}
              stroke="currentColor"
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              className="animate-draw [animation-duration:1.4s] motion-reduce:animate-none"
              style={{ animationDelay: `${0.9 + i * 0.08}s` }}
            />
          </svg>
        ))}
      </div>

      {/* Entrance: the curtain the contact form raised lifts away, then the content builds in */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        <svg aria-hidden="true" viewBox="0 0 64 64" className="size-16 md:size-20 mb-8 text-ink" fill="none">
          <circle cx="32" cy="32" r="30" pathLength={1} strokeDasharray={1} stroke="currentColor" strokeOpacity={0.35} strokeWidth={1.5} className="animate-draw [animation-delay:0.75s] motion-reduce:animate-none" />
          <path d="M20 33l8 8 16-17" pathLength={1} strokeDasharray={1} stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="animate-draw [animation-delay:1.1s] motion-reduce:animate-none" />
        </svg>
        <div className="overflow-hidden pb-[0.08em] mb-6">
          <h1 className="text-ink text-[12vw] md:text-[length:min(6vw,105px)] leading-none font-semibold tracking-tight animate-rise [animation-delay:0.85s] motion-reduce:animate-none">
            Thank You
          </h1>
        </div>
        <p className="uppercase text-sm md:text-[15px] tracking-wide text-muted mb-10 animate-fade-up [animation-delay:1.15s] motion-reduce:animate-none">
          We&apos;ve received your enquiry. Our team will get in touch with you shortly.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up [animation-delay:1.3s] motion-reduce:animate-none">
          <Link
            href="/"
            className="group relative overflow-hidden inline-flex items-center justify-center bg-ink text-white rounded-[100px] py-[16px] px-[32px] uppercase font-medium text-[13px] transition-colors duration-300 w-fit"
          >
            <span className="relative z-10">Go to Home Page</span>
            <div className="absolute inset-0 bg-[#3f3f46] rounded-full translate-y-[103%] group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
          </Link>
          {brochure && (
            <a
              href={brochure}
              download
              className="inline-flex items-center justify-center gap-2 border border-ink/30 text-ink rounded-[100px] py-[16px] px-[32px] uppercase font-medium text-[13px] hover:bg-ink hover:text-white transition-colors duration-300 w-fit"
            >
              Download Brochure
              <span aria-hidden="true">&darr;</span>
            </a>
          )}
        </div>
      </div>

      <div aria-hidden="true" className="fixed inset-0 z-[200] bg-ink -translate-y-full pointer-events-none animate-curtain-out motion-reduce:animate-none" />
    </section>
  );
}

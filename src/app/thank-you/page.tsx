import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Thank You | NNK",
  robots: { index: false, follow: false },
};

export default async function ThankYou({ searchParams }: { searchParams: Promise<{ project?: string }> }) {
  const { project: slug } = await searchParams;
  const brochure = projects.find((p) => p.slug === slug)?.brochure;

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-main flex items-center justify-center px-[6%]">
      <Image
        src="/assets/projects/gokula.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Entrance: the curtain the contact form raised lifts away, then the content builds in */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        <svg aria-hidden="true" viewBox="0 0 64 64" className="size-16 md:size-20 mb-8 text-white" fill="none">
          <circle cx="32" cy="32" r="30" pathLength={1} strokeDasharray={1} stroke="currentColor" strokeOpacity={0.35} strokeWidth={1.5} className="animate-draw [animation-delay:0.75s] motion-reduce:animate-none" />
          <path d="M20 33l8 8 16-17" pathLength={1} strokeDasharray={1} stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="animate-draw [animation-delay:1.1s] motion-reduce:animate-none" />
        </svg>
        <div className="overflow-hidden pb-[0.08em] mb-6">
          <h1 className="text-white text-[12vw] md:text-[length:min(6vw,105px)] leading-none font-semibold tracking-tight animate-rise [animation-delay:0.85s] motion-reduce:animate-none">
            Thank You
          </h1>
        </div>
        <p className="uppercase text-sm md:text-[15px] tracking-wide text-[#a1a1aa] mb-10 animate-fade-up [animation-delay:1.15s] motion-reduce:animate-none">
          We&apos;ve received your enquiry. Our team will get in touch with you shortly.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up [animation-delay:1.3s] motion-reduce:animate-none">
          <Link
            href="/"
            className="group relative overflow-hidden inline-flex items-center justify-center bg-white text-ink rounded-[100px] py-[16px] px-[32px] uppercase font-medium text-[13px] hover:text-white pointer-coarse:text-white max-md:text-white transition-colors duration-300 w-fit"
          >
            <span className="relative z-10">Go to Home Page</span>
            <div className="absolute inset-0 bg-[#111111] rounded-full translate-y-[103%] group-hover:translate-y-0 pointer-coarse:translate-y-0 max-md:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
          </Link>
          {brochure && (
            <a
              href={brochure}
              download
              className="inline-flex items-center justify-center gap-2 border border-white/60 text-white rounded-[100px] py-[16px] px-[32px] uppercase font-medium text-[13px] hover:bg-white hover:text-ink transition-colors duration-300 w-fit"
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

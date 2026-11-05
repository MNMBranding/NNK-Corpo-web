import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

// Giant "404" filling the screen with the message sitting inside the 0 (desktop).
// Below 1280px the message sits in the middle and the 404 drops to the bottom.
// --s is the 404 size on large screens; the message width follows it so it always fits inside the 0.
export default function NotFound() {
  return (
    <main className="min-h-svh xl:h-svh overflow-hidden flex flex-col bg-surface text-ink">
      <section className="relative flex-1 min-h-0 flex flex-col items-center xl:justify-center px-5 xl:px-[2%] pb-8 xl:pb-0 xl:[--s:min(53vw,calc((100svh-130px)*1.3))]">
        <div className="my-auto xl:my-0 xl:absolute xl:left-1/2 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 z-10 max-w-[300px] xl:max-w-[min(240px,calc(var(--s)*0.34))] text-center">
          <h1 className="text-[26px] xl:text-[length:clamp(22px,2vw,32px)] leading-tight font-medium tracking-tight mb-3">
            Page Not Found
          </h1>
          <p className="text-[15px] leading-normal text-[#52525b] mb-6">
            The page you&apos;re looking for doesn&apos;t exist, or return to the home page
          </p>
          <Link
            href="/"
            className="inline-block rounded-full border border-ink px-10 py-2.5 text-sm font-medium hover:bg-ink hover:text-white transition-colors duration-300"
          >
            Go to Home Page
          </Link>
        </div>

        {/* Decorative: the heading above already says the page wasn't found */}
        <span
          aria-hidden="true"
          className="block select-none [translate:-0.03em_0] font-normal leading-[0.8] tracking-[-0.04em] [font-variant-numeric:lining-nums] text-[length:min(54vw,55svh)] xl:text-[length:var(--s)]"
        >
          404
        </span>
      </section>
    </main>
  );
}

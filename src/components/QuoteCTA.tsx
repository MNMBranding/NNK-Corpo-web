import Image from 'next/image';
import BorderButton from './BorderButton';

export default function QuoteCTA() {
  return (
    <section className="bg-surface-2 pt-[60px] md:pt-[100px] pb-[100px] md:pb-[150px] px-5 md:px-[3%] relative overflow-hidden ml-[1%] mr-[1%] md:mt-[100px] mt-[50px]">
      <div className="relative z-10 max-w-[1760px] mx-auto w-full">
        {/* Map Drawing */}
        <div className="relative w-full h-[50vh] md:h-[85vh] mb-16 md:mb-24">
          <Image
            src="https://cdn.prod.website-files.com/675c1d31c59bdbc0d9795e5c/676018be10d094b388a7bf06_draw.avif"
            alt="Architectural Line Drawing"
            fill
            className="object-cover invert"
          />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[9vw] md:text-[length:min(3.6vw,60px)] leading-[1.15] font-medium tracking-tight text-ink mb-8">
            Where vision meets <span className="text-muted">craftsmanship,</span> every project is thoughtfully created to <span className="text-muted">inspire, endure, and leave a lasting impression</span>.
          </h2>

          <div className="flex justify-center">
            <BorderButton href="/projects" text="Explore Our Projects" />
          </div>
        </div>
      </div>
    </section>
  );
}

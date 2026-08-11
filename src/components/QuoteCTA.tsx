import Image from 'next/image';
import BorderButton from './BorderButton';

export default function QuoteCTA() {
  return (
    <section className="bg-third pt-[60px] md:pt-[100px] pb-[100px] md:pb-[150px] px-[3%] relative overflow-hidden ml-[1%] mr-[1%] md:mt-[100px] mt-[50px]">
      <div className="relative z-10 max-w-[1240px] mx-auto w-full">
        {/* Map Drawing */}
        <div className="relative w-full h-[50vh] md:h-[85vh] mb-16 md:mb-24">
          <Image
            src="https://cdn.prod.website-files.com/675c1d31c59bdbc0d9795e5c/676018be10d094b388a7bf06_draw.avif"
            alt="Architectural Line Drawing"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[10vw] md:text-[5vw] leading-[1.1] font-medium tracking-tight text-white mb-8">
            Where vision meets <span className="text-[#a1a1aa]">craftsmanship,</span> every project is thoughtfully created to <span className="text-[#a1a1aa]">inspire, endure, and leave a lasting impression</span>.
          </h2>

          <div className="flex justify-center">
            <BorderButton href="/projects" text="Explore Our Projects" />
          </div>
        </div>
      </div>
    </section>
  );
}

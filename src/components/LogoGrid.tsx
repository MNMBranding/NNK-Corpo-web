import Image from 'next/image';

const topLogos = [
  "/assets/672b702ec9b191cc7f9c4f8b_logo-1.png",
  "/assets/672b702eff24b29d517cec8b_logo-2.png",
  "/assets/672b702ec9b191cc7f9c4f8f_logo-3.png",
  "/assets/672b6a3604692d33d8ea98d0_logo-4.png",
  "/assets/672b702ee51675bac18ffda3_logo-5.png",
];

const bottomLogos = [
  "/assets/675c1d31c59bdbc0d9795f70_logo-2.avif",
  "/assets/672b6ef2639f18a8d60661c2_logo-9.png",
  "/assets/672b702e1982de8ef1a7cb2b_logo-10.png",
  "/assets/672b702e435224ece2015a18_logo-11.png",
  "/assets/672b702f5224af25878a88db_logo-4.png",
];

export default function LogoGrid() {
  return (
    <section className="bg-main text-white pt-[80px] pb-[120px] relative z-10 overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-left {
          animation: marquee-left 25s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 25s linear infinite;
        }
      `}} />

      <div className="w-full flex flex-col items-center text-center">
        <div className="text-[16px] mb-16 font-medium tracking-wide">
          Trusted by businesses around the world
        </div>

        <div className="w-full flex flex-col gap-16 overflow-hidden">
          {/* Top Row (Moving Left) */}
          <div className="flex w-[200%] animate-marquee-left">
            <div className="flex w-1/2 justify-around px-8">
              {topLogos.map((src, i) => <Logo key={i} src={src} />)}
            </div>
            <div className="flex w-1/2 justify-around px-8" aria-hidden="true">
              {topLogos.map((src, i) => <Logo key={i + 10} src={src} />)}
            </div>
          </div>

          {/* Bottom Row (Moving Right) */}
          <div className="flex w-[200%] animate-marquee-right">
            <div className="flex w-1/2 justify-around px-8">
              {bottomLogos.map((src, i) => <Logo key={i} src={src} />)}
            </div>
            <div className="flex w-1/2 justify-around px-8" aria-hidden="true">
              {bottomLogos.map((src, i) => <Logo key={i + 10} src={src} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Logo({ src }: { src: string }) {
  return (
    <div className="flex items-center justify-center w-[160px] h-[50px] transition-all duration-300 opacity-60 hover:opacity-100">
      <div className="relative w-full h-full flex items-center justify-center">
        <Image 
          src={src} 
          alt="Client Logo" 
          fill
          className="object-contain invert brightness-0 contrast-200" 
        />
      </div>
    </div>
  );
}

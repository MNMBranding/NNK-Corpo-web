import Image from 'next/image';
import Link from 'next/link';

export default function QuoteCTA() {
  return (
    <section className="bg-third py-[100px] md:pt-[150px] md:pb-0 px-[3%] relative overflow-hidden rounded-[40px] md:mx-[3%] md:mt-[100px] mt-[50px] mx-[15px] min-h-[80vh] md:min-h-[130vh] flex items-center justify-center">
      {/* Background Map Drawing */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-40 pointer-events-none">
        <Image 
          src="https://cdn.prod.website-files.com/675c1d31c59bdbc0d9795e5c/676018be10d094b388a7bf06_draw.avif" 
          alt="Map Drawing Background" 
          fill 
          className="object-cover object-bottom"
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto w-full text-center flex flex-col items-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[10vw] md:text-[5vw] leading-[1.1] font-medium tracking-tight text-white mb-8">
            We excel at bringing <span className="text-[#a1a1aa]">visionary designs</span> from concept to completion.
          </h2>
          
          <p className="text-xl md:text-3xl font-semibold opacity-100 text-white mb-12">
            Experience innovative architectural solutions built around your vision.
          </p>
          
          <div className="flex justify-center">
            <Link 
              href="/contact"
              className="group relative overflow-hidden inline-flex items-center justify-center bg-white text-main rounded-[100px] py-[18px] px-[30px] uppercase font-medium text-[15px] hover:text-white transition-colors duration-300"
            >
              <span className="relative z-10">Ask for a quote</span>
              <div className="absolute inset-0 bg-[#111111] rounded-full translate-y-[103%] group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

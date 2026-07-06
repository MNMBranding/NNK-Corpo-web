"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function Footer() {
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef<HTMLElement>(null);

  const [isCurtain, setIsCurtain] = useState(false);

  useEffect(() => {
    if (!footerRef.current) return;
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };
    
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(footerRef.current);
    window.addEventListener('resize', updateHeight);
    updateHeight();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <>
      {/* Spacer that pushes the document scroll down exactly by the footer's height */}
      <div style={{ height: footerHeight }} className="w-full pointer-events-none" />

      {/* The actual footer stays fixed behind the page content */}
      <footer 
        ref={footerRef}
        className="fixed bottom-0 left-0 w-full bg-[#111111] text-white pt-[60px] pb-[30px] px-[3%] z-0 border-t border-white/10"
      >
        <div className="max-w-[1240px] mx-auto w-full">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div>
            <h2 className="text-[12vw] md:text-[6vw] leading-[1] font-medium tracking-tight">
              Let's
            </h2>
            <h2 className="text-[12vw] md:text-[6vw] leading-[1] font-medium tracking-tight text-[#a1a1aa]">
              Work together
            </h2>
          </div>
          <Link 
            href="/contact"
            className="group relative overflow-hidden inline-flex items-center justify-center bg-white text-main rounded-[100px] py-[18px] px-[40px] uppercase font-medium text-[15px] hover:text-white transition-colors duration-300 w-fit shrink-0"
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-[#111111] rounded-full translate-y-[103%] group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
          </Link>
        </div>
        
        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-white/10 pb-8">
          {/* Col 1 */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-xl font-medium tracking-wide">
              LUNA ARC®
            </Link>
            <p className="text-[#a1a1aa] text-sm max-w-[200px]">
              Crafting timeless structures that inspire.
            </p>
          </div>
          
          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="uppercase text-xs tracking-widest text-[#a1a1aa] mb-2 font-semibold">Sitemap</h3>
            <FooterLink href="/" text="Home" />
            <FooterLink href="/about" text="Studio" />
            <FooterLink href="/news" text="News" />
            <FooterLink href="/packages" text="Packages" />
            <FooterLink href="/contact" text="Contact" />
          </div>
          
          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="uppercase text-xs tracking-widest text-[#a1a1aa] mb-2 font-semibold">Legal</h3>
            <FooterLink href="/styleguide" text="Styleguide" />
            <FooterLink href="/licenses" text="Licenses" />
            <FooterLink href="/changelog" text="Changelog" />
            <FooterLink href="/404" text="404 Error" />
          </div>
          
          {/* Col 4 - Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="uppercase text-xs tracking-widest text-[#a1a1aa] mb-2 font-semibold">Subscribe to our newsletter</h3>
            <div className="flex w-full mt-2 relative">
              <input 
                type="email" 
                placeholder="E-mail" 
                className="w-full bg-transparent border-b border-white/30 pb-3 text-white placeholder:text-[#a1a1aa] focus:outline-none focus:border-white transition-colors"
              />
              <button className="absolute right-0 bottom-3">
                <Image src="/assets/67601b826b691d5a30fb50ed_icons8-arrow-right.svg" alt="Submit" width={20} height={20} />
              </button>
            </div>
            <div className="flex items-start gap-2 mt-4 cursor-pointer">
              <input type="checkbox" id="terms" className="mt-1" />
              <label htmlFor="terms" className="text-xs text-[#a1a1aa] cursor-pointer">
                By subscribing you agree to with our Privacy Policy
              </label>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#a1a1aa] pt-8 border-t border-white/10">
          <div>
            Copyright © Luna Arc — powered by Webflow
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors uppercase tracking-widest">
            Back to top ↑
          </button>
        </div>
        
      </div>
      </footer>
    </>
  );
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} className="text-sm hover:text-[#a1a1aa] transition-colors w-fit">
      {text}
    </Link>
  );
}

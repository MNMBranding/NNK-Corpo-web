"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import BorderButton from './BorderButton';

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
              Connect
            </h2>
            <h2 className="text-[12vw] md:text-[6vw] leading-[1] font-medium tracking-tight text-[#a1a1aa]">
              With Us
            </h2>
          </div>
          <BorderButton href="/contact" text="Contact" />
        </div>
        
        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-white/10 pb-8">
          {/* Col 1 */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="relative block w-[130px] h-12">
              <Image src="/nnk-logo-1.png" alt="NNK LOGO" fill className="object-contain object-left"/>
            </Link>
            <p className="text-[#a1a1aa] text-sm max-w-[200px]">
              Experience Bliss Everyday
            </p>
          </div>
          
          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="uppercase text-xs tracking-widest text-[#a1a1aa] mb-2 font-semibold">Quick Links</h3>
            <FooterLink href="/" text="Home" />
            <FooterLink href="/projects" text="Projects" />
            <FooterLink href="/blogs" text="Blogs" />
            <FooterLink href="/contact" text="Contact" />
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#a1a1aa] pt-8 border-t border-white/10">
          <div>
            Copyright © {new Date().getFullYear()} NNK. All rights reserved.
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

"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import BorderButton from './BorderButton';
import facebookAnimation from '@/lottie/facebook.json';
import instagramAnimation from '@/lottie/instagram.json';
import youtubeAnimation from '@/lottie/youtube.json';
import linkedinAnimation from '@/lottie/linkedin.json';

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
      <div style={{ height: footerHeight }} className="hidden md:block w-full pointer-events-none" />

      {/* On desktop the footer stays fixed behind the page content; on mobile it is taller than the screen, so it scrolls normally */}
      <footer 
        ref={footerRef}
        className="relative md:fixed md:bottom-0 md:left-0 w-full bg-[#111111] text-white pt-[60px] pb-[30px] px-5 md:px-[3%] z-0 border-t border-white/10"
      >
        <div className="max-w-[1760px] mx-auto w-full">
        
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-8 pt-8 border-t border-white/10 pb-8">
          {/* Col 1 */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
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

          {/* Col 3 */}
          <div className="col-span-2 md:col-span-1 max-md:order-last flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="uppercase text-xs tracking-widest text-[#a1a1aa] font-semibold">Reach Us</h3>
              <p className="text-sm leading-relaxed max-w-[240px]">
                H.No. 8-1-297/SN/224, Sakkubai Nagar, Shaikpet, Hyderabad - 500008
              </p>
              <a href="tel:+919092290933" className="text-sm hover:text-[#a1a1aa] transition-colors w-fit">
                Mobile: +91 90922 90933
              </a>
              <a href="mailto:sales@nnk.co.in" className="text-sm hover:text-[#a1a1aa] transition-colors w-fit">
                E-mail: sales@nnk.co.in
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="uppercase text-xs tracking-widest text-[#a1a1aa] font-semibold">Careers &amp; General Enquiries</h3>
              <a href="mailto:hello@nnk.co.in" className="text-sm hover:text-[#a1a1aa] transition-colors w-fit">
                E-mail: hello@nnk.co.in
              </a>
            </div>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-4">
            <h3 className="uppercase text-xs tracking-widest text-[#a1a1aa] font-semibold">Follow Us</h3>
            <div className="grid grid-cols-4 gap-2 max-w-[152px] md:flex md:items-center md:gap-3 md:max-w-none">
              <SocialIcon href="https://www.facebook.com/share/1ENNwFmYnM/?mibextid=wwXIfr" label="Facebook" animationData={facebookAnimation} />
              <SocialIcon href="https://www.instagram.com/nnk.constructions?igsh=aHpraTJtejNjd3R1&utm_source=qr" label="Instagram" animationData={instagramAnimation} />
              <SocialIcon href="https://www.youtube.com/@nnkconstructions" label="YouTube" animationData={youtubeAnimation} />
              <SocialIcon href="https://www.linkedin.com/company/nnk-constructions" label="LinkedIn" animationData={linkedinAnimation} />
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="flex flex-wrap justify-between items-center gap-4 text-xs text-[#a1a1aa] pt-8 border-t border-white/10">
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

function SocialIcon({ href, label, animationData }: { href: string; label: string; animationData: object }) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => lottieRef.current?.play()}
      onMouseLeave={() => lottieRef.current?.stop()}
      className="flex items-center justify-center aspect-square md:w-9 md:h-9"
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop
        autoplay={false}
        className="w-full h-full"
      />
    </a>
  );
}

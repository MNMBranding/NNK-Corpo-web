"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-50 relative bg-main">
      <div className="grid grid-cols-2 lg:grid-cols-[1fr_0.7fr_1fr_1fr_auto] gap-10 px-5 lg:px-[3%] pt-[30px] pb-[30px] items-center lg:items-start">
        {/* Column 1: Logo */}
        <Link href="/" className="relative z-50 block w-[110px] h-10">
          <Image src="/nnk-logo-1.png" alt="NNK LOGO" fill className="object-contain object-left"/>
        </Link>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden justify-self-end text-white z-50 relative p-2"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-4 flex flex-col justify-between">
            <span className={`block h-[2px] w-full bg-white transition-transform duration-300 ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-[2px] w-full bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block h-[2px] w-full bg-white transition-transform duration-300 ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </div>
        </button>

        {/* Column 2: Subhead (Hidden on mobile) */}
        <div className="hidden lg:block">
          <p className="uppercase text-white text-[13px] font-medium opacity-80 leading-tight">
            A Blissful Experience<br />Enriching Everyday<br />
          </p>
        </div>

        {/* Column 3: Nav Menu (Desktop) */}
        <div className="hidden lg:flex flex-col gap-[2px]">
          <NavLink href="/" text="Home" />
          <NavLink href="/projects" text="Projects" />
        </div>

        {/* Column 4: Right Menu (Desktop) */}
        <div className="hidden lg:flex flex-col gap-[2px]">
          <NavLink href="/contact" text="Contact"/>
          <NavLink href="/blogs" text="Blogs" />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`fixed inset-0 bg-main text-white z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col pt-[100px] px-5 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col gap-6 text-[32px] font-medium tracking-tight mt-10">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        <div className="mt-auto pb-10 flex flex-wrap gap-x-6 gap-y-2 text-[15px] opacity-70">
          <a href="https://www.facebook.com/share/1ENNwFmYnM/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/nnk.constructions?igsh=aHpraTJtejNjd3R1&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.youtube.com/@nnkconstructions" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://www.linkedin.com/company/nnk-constructions" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, text, count }: { href: string; text: string; count?: number }) {
  return (
    <Link href={href} className="group flex items-center gap-1 text-white overflow-hidden relative w-fit">
      <div className="w-4 h-4 flex items-center justify-center -ml-5 group-hover:ml-0 transition-all duration-300">
        <Image 
          src="/assets/675c46b4c27c49c12277a1e5_arrow-small-left.svg" 
          alt="arrow" 
          width={12} 
          height={12} 
          className=""
        />
      </div>
      <span className="uppercase text-[13px] font-medium tracking-wide whitespace-nowrap">
        {text} {count !== undefined && <span className="opacity-70 ml-1">{count}</span>}
      </span>
    </Link>
  );
}

function SocialLink({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} className="text-white text-[13px] font-medium tracking-wide hover:opacity-70 transition-opacity">
      {text}
    </Link>
  );
}

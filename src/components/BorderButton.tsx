import Link from 'next/link';

export default function BorderButton({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center justify-center overflow-hidden bg-surface text-ink border border-black/[0.12] py-[14px] px-[25px]"
    >
      <div className="absolute inset-0 bg-[#e4e4e7] translate-y-full group-hover:translate-y-0 pointer-coarse:translate-y-0 max-md:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />

      <span className="relative z-10 block h-5 overflow-hidden">
        <span className="flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:-translate-y-[20px]">
          <span className="block h-5 leading-5 font-medium text-[16px] whitespace-nowrap">{text}</span>
          <span className="block h-5 leading-5 font-medium text-[16px] whitespace-nowrap">{text}</span>
        </span>
      </span>
    </Link>
  );
}

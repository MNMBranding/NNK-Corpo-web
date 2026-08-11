import Link from 'next/link';

export default function ProjectEnquiry({ projectName }: { projectName: string }) {
  return (
    <section className="bg-main text-white py-[100px] md:py-[150px] px-[3%] text-center">
      <div className="max-w-3xl mx-auto w-full">
        <h2 className="text-[10vw] md:text-[4vw] leading-[1.1] font-medium tracking-tight mb-10">
          Interested in <span className="text-[#a1a1aa]">{projectName}</span>? Let&apos;s talk.
        </h2>
        <Link
          href="/contact"
          className="group relative overflow-hidden inline-flex items-center justify-center bg-white text-main rounded-[100px] py-[18px] px-[40px] uppercase font-medium text-[15px] hover:text-white transition-colors duration-300"
        >
          <span className="relative z-10">Enquire Now</span>
          <div className="absolute inset-0 bg-[#111111] rounded-full translate-y-[103%] group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
        </Link>
      </div>
    </section>
  );
}

import Link from 'next/link';

export default function ProjectEnquiry({ projectName }: { projectName: string }) {
  return (
    <section className="bg-surface text-ink py-[72px] md:py-[150px] px-5 md:px-[3%] text-center">
      <div className="max-w-3xl mx-auto w-full">
        <h2 className="text-[9vw] md:text-[length:min(3.6vw,60px)] leading-[1.1] font-medium tracking-tight mb-10">
          Interested in <span className="text-muted">{projectName}</span>? Let&apos;s talk.
        </h2>
        <Link
          href="/contact"
          className="group relative overflow-hidden inline-flex items-center justify-center bg-ink text-white rounded-[100px] py-[18px] px-[40px] uppercase font-medium text-[15px] hover:text-white pointer-coarse:text-white max-md:text-white transition-colors duration-300"
        >
          <span className="relative z-10">Enquire Now</span>
          <div className="absolute inset-0 bg-[#3f3f46] rounded-full translate-y-[103%] group-hover:translate-y-0 pointer-coarse:translate-y-0 max-md:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
        </Link>
      </div>
    </section>
  );
}

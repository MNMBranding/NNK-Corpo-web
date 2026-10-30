import Image from 'next/image';
import { Project, reraLabel } from '../data/projects';

export default function ProjectHero({ project }: { project: Project }) {
  const { rera, approvalAuthority, approvalNumber } = project.specs;

  return (
    // Desktop: fills the screen below the 100px navbar, so the name and tagline are always in view
    <section className="relative w-full md:h-[calc(100svh-100px)] md:min-h-[520px] overflow-hidden bg-surface text-ink md:text-white">
      <Image
        src={project.image}
        alt={project.name}
        fill
        priority
        sizes="100vw"
        // Fills the section on desktop; on mobile it drops back into the flow at its natural shape
        className="object-cover object-center max-md:!static max-md:!h-auto"
      />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

      {/* RERA + approval numbers, top right (client request) */}
      {(rera || approvalNumber) && (
        <div className="absolute top-3 right-3 md:top-[3%] md:right-[3%] z-10 text-right text-white uppercase text-[11px] md:text-sm tracking-wide leading-relaxed bg-black/45 md:bg-black/30 backdrop-blur-sm rounded px-3 py-2">
          {rera && <p>{reraLabel(project.slug)}: {rera}</p>}
          {approvalNumber && <p>{approvalAuthority || 'Approval'}: {approvalNumber}</p>}
        </div>
      )}

      <div className="relative md:absolute md:inset-0 flex flex-col justify-end px-[6%] pt-8 pb-4 md:p-[3%]">
        <span className="uppercase text-sm tracking-wide opacity-80 block mb-4">
          {project.status === 'ongoing' ? 'Ongoing Project' : 'Completed Project'}
        </span>
        <h1 className="text-[14vw] md:text-[length:min(8vw,120px)] leading-[1.1] font-medium tracking-tight mb-6">
          {project.name}
        </h1>
        <p className="text-xl md:text-[27px] font-medium leading-snug text-muted md:text-[#a1a1aa] max-w-2xl">
          {project.tagline}
        </p>
      </div>
    </section>
  );
}

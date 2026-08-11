import Image from 'next/image';
import { Project } from '../data/projects';

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-main text-white">
      <Image
        src={project.image}
        alt={project.name}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

      <div className="absolute inset-0 flex flex-col justify-end p-[6%] md:p-[3%]">
        <span className="uppercase text-sm tracking-wide opacity-80 block mb-4">
          {project.status === 'ongoing' ? 'Ongoing Project' : 'Completed Project'}
        </span>
        <h1 className="text-[12vw] md:text-[6vw] leading-[1.1] font-medium tracking-tight mb-6">
          {project.name}
        </h1>
        <p className="text-xl md:text-[27px] font-medium leading-snug text-[#a1a1aa] max-w-2xl">
          {project.tagline}
        </p>
      </div>
    </section>
  );
}

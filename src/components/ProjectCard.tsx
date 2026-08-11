import Image from 'next/image';
import Link from 'next/link';
import { Project, projectPath } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={projectPath(project)}
      className="group relative h-[400px] md:h-[600px] block overflow-hidden bg-[#141414]"
    >
      {/* Image Background */}
      <Image
        src={project.image}
        alt={project.name}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none" />

      {/* Text Content */}
      <div className="absolute top-[30px] left-[30px] md:top-[50px] md:left-[50px] max-w-[85%] md:max-w-[73%] z-10">
        <div className="uppercase text-sm tracking-wide font-medium mb-3">
          {project.name}
        </div>
        <p className="text-xl md:text-[25px] font-semibold leading-tight opacity-100">
          {project.tagline}
        </p>
      </div>

      {/* Hover Arrow */}
      <div className="absolute bottom-6 right-6 bg-[#141414]/90 backdrop-blur-sm rounded-full w-[80px] h-[80px] flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
        <span className="text-white text-[40px] leading-none font-light block pb-[4px]">
          +
        </span>
      </div>
    </Link>
  );
}

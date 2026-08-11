import ProjectCard from './ProjectCard';
import { getProjectBySlug } from '../data/projects';

const featuredSlugs = ['aira', 'aravali', 'vyoma', 'vrindhavan'];

export default function Services() {
  const featuredProjects = featuredSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <section className="bg-main text-white py-[100px] md:py-[200px] px-[3%] overflow-hidden">
      <div className="max-w-[1240px] mx-auto w-full relative">
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0 mb-16 md:mb-32">
          <div className="md:col-start-1 md:col-end-3 pt-2">
            <span className="uppercase text-sm tracking-wide opacity-80">
              PROJECTS AT A GLANCE
            </span>
          </div>
          <div className="md:col-start-5 md:col-end-12">
            <h2 className="text-[10vw] md:text-[5vw] leading-[1.1] font-medium tracking-tight">
              A curated portfolio of  iconic residences, defined by<span className="text-[#a1a1aa]"> timeless elegance, architectural excellence, and refined living</span>.
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

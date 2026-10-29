import Image from 'next/image';
import Link from 'next/link';
import { getProjectsByStatus, projectPath, Project } from '../data/projects';

// Each half of a marquee row must be wider than the screen, otherwise the loop runs out and leaves a gap.
// 12 logos (~240px each on desktop) cover screens up to ~2900px wide, so short lists are repeated to reach 12.
const MIN_LOGOS_PER_HALF = 12;
// Seconds per logo, so both rows move at the same speed however many logos they have
const SECONDS_PER_LOGO = 1.7;

function fillRow(list: Project[]) {
  const times = Math.max(1, Math.ceil(MIN_LOGOS_PER_HALF / list.length));
  return Array.from({ length: times }, () => list).flat();
}

export default function LogoGrid() {
  const ongoing = getProjectsByStatus('ongoing');
  const completed = getProjectsByStatus('completed');
  const topLogos = fillRow(ongoing);
  const bottomLogos = fillRow(completed);

  return (
    <section className="bg-surface text-ink pt-[56px] pb-[72px] md:pt-[80px] md:pb-[120px] relative z-10 overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-left {
          animation: marquee-left 25s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 25s linear infinite;
        }
      `}} />

      <div className="w-full flex flex-col items-center text-center">
        <div className="text-[16px] mb-10 md:mb-16 font-medium tracking-wide">
          OUR PROJECTS
        </div>

        <div className="w-full flex flex-col gap-10 md:gap-16 overflow-hidden">
          {/* Top Row (Moving Left) */}
          <div className="flex w-max animate-marquee-left" style={{ animationDuration: `${topLogos.length * SECONDS_PER_LOGO}s` }}>
            <div className="flex shrink-0 gap-10 pr-10 md:gap-20 md:pr-20">
              {/* Only the first copy of each logo is reachable by keyboard / screen readers */}
              {topLogos.map((project, i) => <Logo key={i} project={project} hidden={i >= ongoing.length} />)}
            </div>
            <div className="flex shrink-0 gap-10 pr-10 md:gap-20 md:pr-20" aria-hidden="true">
              {topLogos.map((project, i) => <Logo key={i} project={project} hidden />)}
            </div>
          </div>

          {/* Bottom Row (Moving Right) */}
          <div className="flex w-max animate-marquee-right" style={{ animationDuration: `${bottomLogos.length * SECONDS_PER_LOGO}s` }}>
            <div className="flex shrink-0 gap-10 pr-10 md:gap-20 md:pr-20">
              {bottomLogos.map((project, i) => <Logo key={i} project={project} hidden={i >= completed.length} />)}
            </div>
            <div className="flex shrink-0 gap-10 pr-10 md:gap-20 md:pr-20" aria-hidden="true">
              {bottomLogos.map((project, i) => <Logo key={i} project={project} hidden />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Each logo opens its project page. The duplicate copy (for the seamless loop) is skipped by keyboard + screen readers.
function Logo({ project, hidden = false }: { project: Project; hidden?: boolean }) {
  return (
    <Link
      href={projectPath(project)}
      tabIndex={hidden ? -1 : undefined}
      aria-label={project.name}
      className="flex items-center justify-center shrink-0 w-[120px] h-[40px] md:w-[160px] md:h-[50px] transition-all duration-300 opacity-60 hover:opacity-100"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={project.logo}
          alt={`${project.name} logo`}
          fill
          className="object-contain brightness-0"
        />
      </div>
    </Link>
  );
}

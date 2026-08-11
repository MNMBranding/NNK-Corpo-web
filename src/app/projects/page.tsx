import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectsHero from "../../components/ProjectsHero";
import FlowingMenu from "../../components/FloatingMenu";
import { getProjectsByStatus, projectPath, Project } from "../../data/projects";

function toMenuItems(list: Project[]) {
  return list.map((project) => ({
    link: projectPath(project),
    text: project.name.replace(/^NNK\s+/i, ''),
    image: project.image,
  }));
}

export default function ProjectsPage() {
  const ongoing = getProjectsByStatus('ongoing');
  const completed = getProjectsByStatus('completed');

  return (
    <>
      <div className="min-h-screen bg-main text-white relative z-10">
        <Navbar />
        <ProjectsHero />

        <section className="pt-[100px] md:pt-[150px] pb-[60px] md:pb-[80px] px-[3%]">
          <div className="max-w-[1240px] mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0 mb-16 md:mb-24">
              <div className="md:col-start-1 md:col-end-3 pt-2">
                <span className="uppercase text-sm tracking-wide opacity-80">Ongoing</span>
              </div>
              <div className="md:col-start-5 md:col-end-12">
                <h2 className="text-[10vw] md:text-[5vw] leading-[1.1] font-medium tracking-tight">
                  Ongoing <span className="text-[#a1a1aa]">Projects</span>
                </h2>
              </div>
            </div>
            <div style={{ height: `${Math.max(ongoing.length * 16, 90)}vh` }}>
              <FlowingMenu items={toMenuItems(ongoing)} bgColor="transparent" borderColor="rgba(255,255,255,0.15)" />
            </div>
          </div>
        </section>

        <section className="pt-[60px] md:pt-[100px] pb-[100px] md:pb-[150px] px-[3%]">
          <div className="max-w-[1240px] mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0 mb-16 md:mb-24">
              <div className="md:col-start-1 md:col-end-3 pt-2">
                <span className="uppercase text-sm tracking-wide opacity-80">Completed</span>
              </div>
              <div className="md:col-start-5 md:col-end-12">
                <h2 className="text-[10vw] md:text-[5vw] leading-[1.1] font-medium tracking-tight">
                  Completed <span className="text-[#a1a1aa]">Projects</span>
                </h2>
              </div>
            </div>
            <div style={{ height: `${Math.max(completed.length * 16, 90)}vh` }}>
              <FlowingMenu items={toMenuItems(completed)} bgColor="transparent" borderColor="rgba(255,255,255,0.15)" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

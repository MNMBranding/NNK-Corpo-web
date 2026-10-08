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
      <div className="min-h-screen bg-surface text-ink relative z-10">
        <Navbar />
        <ProjectsHero />

        <section className="pt-[100px] md:pt-[150px] pb-[60px] md:pb-[80px]">
          {/* heading keeps the page margins; the list below runs edge to edge */}
          <div className="max-w-[1760px] mx-auto w-full px-5 md:px-[3%]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0 mb-16 md:mb-24">
              <div className="md:col-start-1 md:col-end-3 pt-2">
                <span className="uppercase text-sm tracking-wide opacity-80">Ongoing</span>
              </div>
              <div className="md:col-start-5 md:col-end-12">
                <h2 className="text-[9vw] md:text-[length:min(3.6vw,60px)] leading-[1.1] font-medium tracking-tight">
                  Ongoing <span className="text-muted">Projects</span>
                </h2>
              </div>
            </div>
          </div>
          <div style={{ height: `${ongoing.length * 11}vh` }}>
            <FlowingMenu items={toMenuItems(ongoing)} bgColor="transparent" textColor="#0a0a0a" marqueeBgColor="#e7ecfd" marqueeTextColor="#0a0a0a" borderColor="rgba(0,0,0,0.12)" />
          </div>
        </section>

        <section className="pt-[60px] md:pt-[100px] pb-[100px] md:pb-[150px]">
          {/* heading keeps the page margins; the list below runs edge to edge */}
          <div className="max-w-[1760px] mx-auto w-full px-5 md:px-[3%]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0 mb-16 md:mb-24">
              <div className="md:col-start-1 md:col-end-3 pt-2">
                <span className="uppercase text-sm tracking-wide opacity-80">Completed</span>
              </div>
              <div className="md:col-start-5 md:col-end-12">
                <h2 className="text-[9vw] md:text-[length:min(3.6vw,60px)] leading-[1.1] font-medium tracking-tight">
                  Completed <span className="text-muted">Projects</span>
                </h2>
              </div>
            </div>
          </div>
          <div style={{ height: `${completed.length * 11}vh` }}>
            <FlowingMenu items={toMenuItems(completed)} bgColor="transparent" textColor="#0a0a0a" marqueeBgColor="#e7ecfd" marqueeTextColor="#0a0a0a" borderColor="rgba(0,0,0,0.12)" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

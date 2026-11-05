import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectsHero from "../../components/ProjectsHero";
import FlowingMenu from "../../components/FloatingMenu";
import JsonLd from "../../components/JsonLd";
import { getProjectsByStatus, projectPath, reraLabel, Project, projects } from "../../data/projects";
import { siteUrl, breadcrumbSchema } from "../../data/site";

export const metadata: Metadata = {
  title: "Residential Projects | Ongoing & Completed Developments",
  description: "Explore our portfolio of premium ongoing and completed residential communities in Kokapet, Khajaguda, and Shaikpet, Hyderabad.",
  keywords: [
    "NNK Projects",
    "Flats in Hyderabad",
    "Apartments in Kokapet",
    "Khajaguda Projects",
    "Shaikpet Residential",
    "Ongoing Projects Hyderabad",
    "Completed Gated Communities"
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Residential Projects | Ongoing & Completed Developments | NNK",
    description: "Explore our portfolio of premium ongoing and completed residential communities in Kokapet, Khajaguda, and Shaikpet, Hyderabad.",
    url: "/projects",
  },
};

// schema.org data: this page as a collection, listing every project page in order
const projectsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/projects#webpage`,
      url: `${siteUrl}/projects`,
      name: "Residential Projects",
      description: String(metadata.description),
      inLanguage: "en-IN",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: projects.length,
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.name,
          url: `${siteUrl}${projectPath(project)}`,
        })),
      },
    },
    breadcrumbSchema([{ name: "Projects", path: "/projects" }]),
  ],
};

function toMenuItems(list: Project[]) {
  return list.map((project) => ({
    link: projectPath(project),
    text: project.name.replace(/^NNK\s+/i, ''),
    image: project.image,
    rera: project.specs.rera && `${reraLabel(project.slug)}: ${project.specs.rera}`,
    approval: project.specs.approvalNumber && `${project.specs.approvalAuthority || 'Approval'}: ${project.specs.approvalNumber}`,
  }));
}

export default function ProjectsPage() {
  const ongoing = getProjectsByStatus('ongoing');
  const completed = getProjectsByStatus('completed');

  return (
    <>
      <div className="min-h-screen bg-surface text-ink relative z-10">
        <Navbar />
        <JsonLd data={projectsSchema} />
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

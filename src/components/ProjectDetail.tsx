import Navbar from "./Navbar";
import Footer from "./Footer";
import ProjectHero from "./ProjectHero";
import ProjectSpecs from "./ProjectSpecs";
import Gallery from "./Gallery";
import FloorPlan from "./FloorPlan";
import NearbyLocations from "./NearbyLocations";
import LocationMap from "./LocationMap";
import ProjectSpecifications from "./ProjectSpecifications";
import ConstructionUpdates from "./ConstructionUpdates";
import ProjectEnquiry from "./ProjectEnquiry";
import { Project } from "../data/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <>
      <div className="min-h-screen relative z-10 bg-main">
        <Navbar />
        <ProjectHero project={project} />
        <ProjectSpecs project={project} />
        <Gallery images={[project.image, ...project.gallery]} name={project.name} />
        <FloorPlan floorPlans={project.floorPlans} masterPlan={project.masterPlan} name={project.name} />
        {project.nearbyLocations && <NearbyLocations locations={project.nearbyLocations} />}
        <LocationMap address={project.address} name={project.name} />
        <ProjectSpecifications />
        <ConstructionUpdates image={project.image} name={project.name} status={project.status} />
        <ProjectEnquiry projectName={project.name} />
      </div>
      <Footer />
    </>
  );
}

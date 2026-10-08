import Navbar from "./Navbar";
import Footer from "./Footer";
import ProjectHero from "./ProjectHero";
import ProjectSpecs from "./ProjectSpecs";
import FloorPlan from "./FloorPlan";
import NearbyLocations from "./NearbyLocations";
import LocationMap from "./LocationMap";
// import ProjectSpecifications from "./ProjectSpecifications"; // hidden for now
import ConstructionUpdates from "./ConstructionUpdates";
import ProjectEnquiry from "./ProjectEnquiry";
import { Project } from "../data/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <>
      <div className="min-h-screen relative z-10 bg-surface">
        <Navbar />
        <ProjectHero project={project} />
        <ProjectSpecs project={project} />
        <FloorPlan floorPlans={project.floorPlans} masterPlan={project.masterPlan} name={project.name} />
        {project.nearbyLocations && <NearbyLocations locations={project.nearbyLocations} />}
        <LocationMap address={project.address} name={project.name} />
        {/* <ProjectSpecifications /> hidden for now */}
        <ConstructionUpdates image={project.image} name={project.name} status={project.status} />
        <ProjectEnquiry projectName={project.name} />
      </div>
      <Footer />
    </>
  );
}

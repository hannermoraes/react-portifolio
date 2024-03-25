import { HeroSection } from "@/components/Hero-Section/HeroSection";
import { HighlightedProjects } from "@/components/pages/home/highlighted-projects/HighlightedProjects";
import { KnownTechs } from "@/components/pages/home/knowTech/KnownTechs";
import { WorkExperience } from "@/components/pages/home/work-experience/WorkExperience";


export default async function Home() {

  return (
    <div className="container">
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
    </div >
  );
}

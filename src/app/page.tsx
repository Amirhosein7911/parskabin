import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/home/hero-section";
import ProjectDiscovery from "@/components/home/project-discovery";
import MakerGrid from "@/components/home/maker-grid";
import ExploreByStyle from "@/components/home/explore-by-style";
import HowItWorks from "@/components/home/how-it-works";
import ProjectRequestCTA from "@/components/home/project-request-cta";
import { makers } from "@/lib/mock-data";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectDiscovery />
      <MakerGrid makers={makers} />
      <ExploreByStyle />
      <HowItWorks />
      <ProjectRequestCTA />
    </>
  );
}
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoPreview from "@/components/VideoPreview";
import SocialProof from "@/components/SocialProof";
import SocialClips from "@/components/SocialClips";
import ShowcaseCarousel from "@/components/ShowcaseCarousel";
import ProcessWorkflow from "@/components/ProcessWorkflow";
import AIFeatures from "@/components/AIFeatures";
import EditingCapabilities from "@/components/EditingCapabilities";
import AudienceGrid from "@/components/AudienceGrid";
import TeamWorkspace from "@/components/TeamWorkspace";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#1a0a3e]">
      {/* 
        This wrapper groups the Navbar, Hero, and VideoPreview so they all 
        share the same continuous hero gradient, mirroring the original Clipped Ai layout 
        where the video preview box floats entirely within the gradient.
      */}
      <div className="hero-gradient">
        <Navbar />
        <Hero />
        <VideoPreview />
      </div>

      <SocialProof />
      <ShowcaseCarousel />
      <AudienceGrid />
      <TeamWorkspace />
      <AIFeatures />

      <ProcessWorkflow />
      <SocialClips />
      {/* EditingCapabilities goes here when built */}
      <EditingCapabilities />
      <Footer />
    </main>
  );
}

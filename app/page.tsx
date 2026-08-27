import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrustedByLogos } from "@/components/home/TrustedByLogos";
import { VideoSection } from "@/components/home/VideoSection";
import { ValuePropCards } from "@/components/home/ValuePropCards";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { CaseStudies } from "@/components/home/CaseStudies";
import { DataEngineStats } from "@/components/home/DataEngineStats";
import { SocialProof } from "@/components/home/SocialProof";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedByLogos />
        <VideoSection />
        <ValuePropCards />
        <ProcessSteps />
        <CaseStudies />
        <DataEngineStats />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

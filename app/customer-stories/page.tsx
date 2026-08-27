import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomerStoriesHero } from "@/components/customer-stories/CustomerStoriesHero";
import { TrustedLogos } from "@/components/customer-stories/TrustedLogos";
import { FeaturedStories } from "@/components/customer-stories/FeaturedStories";
import { IndustryCaseStudies } from "@/components/customer-stories/IndustryCaseStudies";
// import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Customer Stories",
  description:
    "Proven impact from the fastest growing organisations. See how Uhubs clients reduce ramp time, increase win rates and grow revenue per head.",
  alternates: {
    canonical: "/customer-stories",
  },
  openGraph: {
    title: "Customer Stories | Uhubs",
    description:
      "Proven impact from the fastest growing organisations. See how Uhubs clients reduce ramp time, increase win rates and grow revenue per head.",
    url: "/customer-stories",
  },
};

export default function CustomerStoriesPage() {
  return (
    <>
      <Header />
      <main>
        <CustomerStoriesHero />
        <TrustedLogos />
        <FeaturedStories />
        <IndustryCaseStudies />
        {/* <FinalCTA className="pt-4" /> */}
      </main>
      <Footer />
    </>
  );
}

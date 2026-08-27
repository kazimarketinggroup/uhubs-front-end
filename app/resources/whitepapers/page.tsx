import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhitepapersHero } from "@/components/resources/WhitepapersHero";
import { WhitepaperList } from "@/components/resources/WhitepaperList";
import { ConsultationCTA } from "@/components/resources/ConsultationCTA";

export const metadata: Metadata = {
  title: "Whitepapers",
  description:
    "Download Uhubs whitepapers on sales enablement, coaching, onboarding and the competencies that drive A-player performance.",
  alternates: {
    canonical: "/resources/whitepapers",
  },
  openGraph: {
    title: "Whitepapers | Uhubs",
    description:
      "Download Uhubs whitepapers on sales enablement, coaching, onboarding and the competencies that drive A-player performance.",
    url: "/resources/whitepapers",
  },
};

export default function WhitepapersPage() {
  return (
    <>
      <Header />
      <main>
        <WhitepapersHero />
        <WhitepaperList />
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
}

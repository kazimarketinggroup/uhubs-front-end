import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustriesHero } from "@/components/industries/IndustriesHero";
import { IndustryCards } from "@/components/industries/IndustryCards";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "The capabilities that drive revenue look different in every sector. Uhubs benchmarks your team against the patterns that win in your industry.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industries | Uhubs",
    description:
      "The capabilities that drive revenue look different in every sector. Uhubs benchmarks your team against the patterns that win in your industry.",
    url: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <IndustriesHero />
        <IndustryCards />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

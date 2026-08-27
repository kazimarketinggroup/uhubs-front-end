import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustryDetailHero } from "@/components/industries/IndustryDetailHero";
import { IndustryChallenges } from "@/components/industries/IndustryChallenges";
import { IndustryVideoBreak } from "@/components/industries/IndustryVideoBreak";
import { IndustryHowUhubsHelps } from "@/components/industries/IndustryHowUhubsHelps";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getIndustry, industries } from "@/lib/industries";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  return {
    title: industry.title,
    description: industry.description,
    alternates: {
      canonical: `/industries/${industry.slug}`,
    },
    openGraph: {
      title: `${industry.title} | Uhubs`,
      description: industry.description,
      url: `/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const { detail } = industry;

  return (
    <>
      <Header />
      <main>
        <IndustryDetailHero
          slug={industry.slug}
          title={detail.heroTitle}
          bullets={detail.heroBullets}
          image={detail.heroImage}
          imageAlt={detail.heroImageAlt}
        />
        <IndustryChallenges challenges={detail.challenges} />
        <IndustryVideoBreak
          title={detail.midTitle}
          description={detail.midDescription}
        />
        <IndustryHowUhubsHelps
          title={detail.helpsTitle}
          helps={detail.helps}
          datasetNote={detail.datasetNote}
        />
        <FinalCTA className="pt-16 sm:pt-24" />
      </main>
      <Footer />
    </>
  );
}

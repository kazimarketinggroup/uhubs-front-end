import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StoryDetailHero } from "@/components/customer-stories/StoryDetailHero";
import { FinalCTA } from "@/components/home/FinalCTA";
import {
  caseStudies,
  featuredStories,
  getCaseStudy,
  getFeaturedStory,
} from "@/lib/customerStories";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return [
    ...featuredStories.map((story) => ({ slug: story.slug })),
    ...caseStudies.map((study) => ({ slug: study.slug })),
  ];
}

function getStoryContent(slug: string) {
  const featured = getFeaturedStory(slug);
  if (featured) {
    return {
      badges: ["Customer Story"],
      title: featured.title,
      description: featured.description,
      image: featured.image,
      imageAlt: featured.imageAlt,
    };
  }

  const caseStudy = getCaseStudy(slug);
  if (caseStudy) {
    return {
      badges: [caseStudy.industry, caseStudy.topic],
      title: caseStudy.title,
      description: undefined,
      image: caseStudy.image,
      imageAlt: caseStudy.imageAlt,
    };
  }

  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryContent(slug);
  if (!story) return {};

  return {
    title: story.title,
    description: story.description ?? story.title,
    alternates: {
      canonical: `/customer-stories/${slug}`,
    },
    openGraph: {
      title: `${story.title} | Uhubs`,
      description: story.description ?? story.title,
      url: `/customer-stories/${slug}`,
    },
  };
}

export default async function CustomerStoryDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const story = getStoryContent(slug);
  if (!story) notFound();

  return (
    <>
      <Header />
      <main>
        <StoryDetailHero
          badges={story.badges}
          title={story.title}
          description={story.description}
          image={story.image}
          imageAlt={story.imageAlt}
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

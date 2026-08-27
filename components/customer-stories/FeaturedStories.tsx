"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { featuredStories } from "@/lib/customerStories";

export function FeaturedStories() {
  return (
    <section className="bg-brand-surface pb-16 sm:pb-24">
      <Container>
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featuredStories.map((story, index) => (
            <motion.article
              key={story.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.1,
                ease: "easeOut",
              }}
              className="flex flex-col"
            >
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  width={720}
                  height={640}
                  className="aspect-[6/5] w-full object-cover"
                />
              </div>
              <h3 className="mt-5 text-base font-medium leading-snug text-brand-ink">
                {story.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink/60">
                {story.description}
              </p>
              <div className="mt-auto pt-5">
                <Button
                  variant="outline"
                  size="sm"
                  href={`/customer-stories/${story.slug}`}
                  className="rounded-lg"
                >
                  Read Full Story
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

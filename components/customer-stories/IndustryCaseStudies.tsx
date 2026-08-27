"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { caseStudies, caseStudyIndustries } from "@/lib/customerStories";
import { cn } from "@/lib/utils";

const VIEW_ALL = "View All";

export function IndustryCaseStudies() {
  const [activeFilter, setActiveFilter] = useState(VIEW_ALL);

  const visibleStudies =
    activeFilter === VIEW_ALL
      ? caseStudies
      : caseStudies.filter((study) => study.industry === activeFilter);

  return (
    <section className="bg-brand-surface pb-16 sm:pb-24">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl font-semibold tracking-tight text-brand-ink/70 sm:text-3xl"
        >
          Industry Case Studies
        </motion.h2>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-black/5 pb-3">
          {[VIEW_ALL, ...caseStudyIndustries].map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "relative pb-2 text-xs transition-colors sm:text-sm",
                  isActive
                    ? "font-medium text-brand-ink after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-brand-orange"
                    : "text-brand-ink/40 hover:text-brand-ink"
                )}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleStudies.map((study) => (
              <motion.article
                key={study.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <Link
                  href={`/customer-stories/${study.slug}`}
                  className="flex h-full flex-col p-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                >
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={study.image}
                      alt={study.imageAlt}
                      width={640}
                      height={360}
                      className="h-36 w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-2 pb-5 pt-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center rounded-full border border-black/10 px-3 py-1 text-[11px] text-brand-ink/70">
                        {study.industry}
                      </span>
                      <span className="text-[11px] text-brand-ink/50">
                        {study.topic}
                      </span>
                    </div>
                    <h3 className="mt-4 text-sm font-medium leading-snug text-brand-ink">
                      {study.title}
                    </h3>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/lib/data/case-studies";

export function CaseStudies() {
  return (
    <section
      aria-labelledby="case-studies-heading"
      className="relative overflow-hidden bg-brand-surface pb-16 pt-0 sm:pb-24"
    >
      <Image
        src="/assets/images/measurableImpactBg.png"
        alt=""
        aria-hidden="true"
        width={1440}
        height={690}
        className="pointer-events-none absolute inset-x-0 top-1/2 z-0 w-full -translate-y-1/2 opacity-40"
      />

      <Container className="relative z-10">
        <SectionHeading
          title={
            <>
              Measurable Impact:
              <br /> Why Revenue Leaders Love Partnering With Uhubs
            </>
          }
          align="left"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center rounded-3xl border border-black/5 bg-white px-6 py-8 text-center shadow-[0_10px_40px_-20px_rgba(20,20,26,0.25)]"
            >
              <div className="flex w-full justify-end">
                <span className="inline-flex items-center rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-brand-ink/70">
                  Case Study
                </span>
              </div>

              <div className="flex h-16 items-center justify-center">
                <Image
                  src={study.logo}
                  alt={study.company}
                  width={study.logoWidth}
                  height={study.logoHeight}
                  className="h-8 w-auto object-contain"
                />
              </div>

              <p className="mt-4 max-w-xs text-sm font-medium leading-relaxed text-brand-ink">
                {study.headline}
              </p>

              <Button
                href={study.href}
                variant="primary"
                size="sm"
                className="mt-6 bg-brand-ink hover:bg-brand-ink/90 focus-visible:outline-brand-ink"
              >
                Read Full Story
              </Button>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/customer-stories"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-ink/60 transition-colors hover:text-brand-ink"
          >
            See more customer outcomes
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

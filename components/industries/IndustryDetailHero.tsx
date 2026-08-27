"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { industries } from "@/lib/industries";

export function IndustryDetailHero({
  slug,
  title,
  bullets,
  image,
  imageAlt,
}: {
  slug: string;
  title: string;
  bullets: string[];
  image: string;
  imageAlt: string;
}) {
  return (
    <section
      className="overflow-hidden bg-brand-surface bg-top bg-no-repeat pb-10 pt-16 sm:pt-20"
      style={{
        backgroundImage: "url('/assets/images/herobgPng.png')",
        backgroundSize: "100% auto",
      }}
    >
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start text-left">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl text-2xl font-semibold leading-tight tracking-tight text-brand-ink sm:text-3xl lg:text-[34px]"
          >
            {title}
          </motion.h1>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-3"
          >
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 text-sm leading-relaxed text-brand-ink/70"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange"
                />
                {bullet}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mx-auto w-full max-w-2xs sm:max-w-xs lg:max-w-sm"
        >
          <Image
            src={image}
            alt={imageAlt}
            width={510}
            height={430}
            priority
            className="h-auto w-full"
          />
        </motion.div>
      </Container>

      <Container className="mt-12 lg:mt-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm font-semibold text-brand-ink"
        >
          Industries We Work With
        </motion.p>
        <motion.nav
          aria-label="Industries"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-black/5 pt-4"
        >
          {industries.map((industry) => {
            const isActive = industry.slug === slug;
            return (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "relative pb-1.5 text-sm font-medium text-brand-ink after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-brand-orange"
                    : "pb-1.5 text-sm text-brand-ink/50 transition-colors hover:text-brand-ink"
                }
              >
                {industry.navLabel}
              </Link>
            );
          })}
        </motion.nav>
      </Container>
    </section>
  );
}

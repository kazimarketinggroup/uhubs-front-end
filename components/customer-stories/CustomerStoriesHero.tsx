"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { customerStoriesHeroImage } from "@/lib/customerStories";

export function CustomerStoriesHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={customerStoriesHeroImage}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-surface/85" />

      <Container className="relative py-20 sm:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl text-2xl font-semibold leading-tight tracking-tight text-brand-ink sm:text-3xl lg:text-[34px]"
        >
          Proven Impact. Clients Share
          <br className="hidden sm:block" /> Their Success
        </motion.h1>
      </Container>
    </section>
  );
}

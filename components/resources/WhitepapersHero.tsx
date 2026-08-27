"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function WhitepapersHero() {
  return (
    <section className="relative overflow-hidden bg-brand-ink">
      <Image
        src="/assets/images/whitepapersBg.avif"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <Container className="relative flex min-h-56 items-start py-14 sm:min-h-64 sm:py-16">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl"
        >
          Uhubs Whitepapers
        </motion.h1>
      </Container>
    </section>
  );
}


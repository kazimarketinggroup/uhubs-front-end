"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { trustedByLogos } from "@/lib/data/logos";

export function TrustedByLogos() {
  return (
    <section
      aria-labelledby="trusted-by-heading"
      className="bg-brand-surface pb-16 pt-4 sm:pb-24"
    >
      <Container>
        <motion.h2
          id="trusted-by-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-md text-center text-base font-medium text-brand-ink sm:text-lg"
        >
          Trusted By Leaders Scaling Revenue At PE-Backed Organisations.
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 lg:gap-x-20"
        >
          {trustedByLogos.map((logo) => (
            <li key={logo.name} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-7 w-auto object-contain transition-transform duration-300 hover:scale-105 sm:h-8"
              />
            </li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}

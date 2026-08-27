"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { clientLogos } from "@/lib/customerStories";

export function TrustedLogos() {
  return (
    <section className="bg-brand-surface py-16 sm:py-20">
      <Container className="flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center text-base font-bold uppercase tracking-wide text-brand-ink sm:text-lg"
        >
          Trusted by the fastest growing organisations
        </motion.h2>

        <div className="mt-10 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.4,
                delay: (index % 5) * 0.06,
                ease: "easeOut",
              }}
              className="flex h-20 items-center justify-center rounded-xl border border-black/5 bg-white px-6 shadow-sm"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={200}
                height={60}
                className="h-7 w-auto max-w-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

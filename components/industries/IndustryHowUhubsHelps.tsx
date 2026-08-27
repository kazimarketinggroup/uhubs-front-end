"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function IndustryHowUhubsHelps({
  title,
  helps,
  datasetNote,
}: {
  title: string;
  helps: { title: string; description: string }[];
  datasetNote: string;
}) {
  return (
    <section className="bg-brand-ink py-16 sm:py-24">
      <Container className="flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-medium text-brand-ink shadow-sm"
        >
          How Uhubs helps
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-center text-xl font-semibold leading-[1.3] tracking-tight text-white sm:text-2xl"
        >
          {title}
        </motion.h2>

        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {helps.map((help, index) => (
            <motion.article
              key={help.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 px-6 py-7"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/20 text-brand-orange">
                <Check className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-base font-semibold text-white">
                {help.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {help.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-12 max-w-2xl text-center text-sm leading-relaxed text-white/80"
        >
          {datasetNote}
        </motion.p>
      </Container>
    </section>
  );
}

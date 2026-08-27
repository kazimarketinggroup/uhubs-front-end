"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function IndustryChallenges({
  challenges,
}: {
  challenges: { title: string; description: string }[];
}) {
  return (
    <section className="bg-brand-surface pb-16 pt-16 sm:pb-20">
      <Container className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Badge>The Challenge</Badge>
        </motion.div>

        <div className="mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {challenges.map((challenge, index) => (
            <motion.article
              key={challenge.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="flex flex-col rounded-2xl border border-black/5 bg-white px-6 py-7 shadow-sm"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-ink/20 text-brand-ink">
                <X className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-base font-medium text-brand-ink">
                {challenge.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink/60">
                {challenge.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

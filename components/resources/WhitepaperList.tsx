"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { whitepapers } from "@/lib/whitepapers";

export function WhitepaperList() {
  return (
    <section className="bg-brand-surface pb-16 pt-12 sm:pb-24 sm:pt-16">
      <Container>
        <div className="rounded-3xl border border-black/5 bg-white px-6 py-4 shadow-sm sm:px-10">
          {whitepapers.map((paper, index) => (
            <motion.article
              key={paper.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
              className={
                index > 0
                  ? "flex items-center gap-6 border-t border-black/5 py-6"
                  : "flex items-center gap-6 py-6"
              }
            >
              <div className="flex-1">
                <h2 className="text-sm font-semibold text-brand-ink sm:text-base">
                  {paper.title}
                </h2>
                <p className="mt-2 max-w-2xl text-xs leading-relaxed text-brand-ink/50 sm:text-sm">
                  {paper.description}
                </p>
              </div>
              <a
                href={paper.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="shrink-0 rounded-full border border-brand-ink/20 px-5 py-2 text-[11px] font-medium uppercase tracking-wide text-brand-ink transition-colors hover:border-brand-ink hover:bg-brand-ink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink"
              >
                Download
              </a>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

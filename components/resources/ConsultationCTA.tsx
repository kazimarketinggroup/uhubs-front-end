"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ConsultationModal } from "@/components/resources/ConsultationModal";

export function ConsultationCTA() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <section className="bg-brand-surface pb-20 sm:pb-28">
      <Container className="flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl font-semibold tracking-tight text-brand-ink sm:text-3xl lg:text-4xl"
        >
          Visualise Your A-Player DNA
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-4 max-w-md text-sm leading-relaxed text-brand-ink/60"
        >
          Establish your own process to identify what &lsquo;good looks
          like&rsquo; and how to replicate it
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-8"
        >
          <button
            type="button"
            onClick={() => setConsultationOpen(true)}
            className="group inline-flex items-center gap-3 rounded-full bg-brand-ink py-2.5 pl-6 pr-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink"
          >
            Book Consultation
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </button>
        </motion.div>
      </Container>

      <ConsultationModal
        open={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </section>
  );
}

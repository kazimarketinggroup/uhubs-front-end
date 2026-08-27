"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DiagnosticModal } from "@/components/ui/DiagnosticModal";

export function IndustriesHero() {
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);

  return (
    <section className="overflow-hidden bg-brand-surface pb-16 pt-16 sm:pb-24 sm:pt-20">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start text-left">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl text-2xl font-semibold leading-[1.2] tracking-tight text-brand-ink sm:text-3xl lg:text-[36px]"
          >
            <span >A specialist</span>{" "}
            partner tuned to your market.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-6 max-w-md text-sm leading-relaxed text-brand-ink/60"
          >
            The capabilities that drive revenue look different in every sector.
            Uhubs benchmarks your team against the patterns that win in your
            industry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-10"
          >
            <Button size="md" onClick={() => setDiagnosticOpen(true)}>
              Book a Revenue Diagnostic
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mx-auto w-full max-w-xs sm:max-w-sm"
        >
          <Image
            src="/assets/images/industries/Group 1707481024.png"
            alt="Uhubs industries: PE Backed Companies, Professional services, Software, Logistics & Manufacturing and Travel orbiting the Uhubs logo"
            width={976}
            height={776}
            priority
            className="h-auto w-full"
          />
        </motion.div>
      </Container>

      <DiagnosticModal
        open={diagnosticOpen}
        onClose={() => setDiagnosticOpen(false)}
      />
    </section>
  );
}

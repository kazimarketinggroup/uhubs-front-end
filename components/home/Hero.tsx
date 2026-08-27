"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DiagnosticModal } from "@/components/ui/DiagnosticModal";

export function Hero() {
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);

  return (
    <section
      className="relative overflow-hidden bg-brand-surface bg-top bg-no-repeat pb-16 pt-16 sm:pb-24 sm:pt-24"
      style={{
        backgroundImage: "url('/assets/images/herobgPng.png')",
        backgroundSize: "100% auto",
      }}
    >
      <Container className="relative flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl text-2xl font-semibold leading-[1.15] text-brand-ink sm:text-3xl lg:text-[36px]"
        >
          Increase your win rate and <br /> revenue per head
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-brand-ink/60"
        >
          Built on the industry&apos;s largest sales capability benchmark,
          Uhubs combines Human Experts and AI Assistants to increase revenue
          per head by <span className="font-semibold text-brand-ink">83%</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-8"
        >
          <Button size="md" onClick={() => setDiagnosticOpen(true)}>
            Book a Revenue Diagnostic
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative mt-14 w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-15px_rgba(20,20,26,0.15)]"
        >
          <Image
            src="/assets/images/herocard.jpg"
            alt="Uhubs Sales Excellence Score dashboard showing integrated GTM data, a 360-degree capability score of 74, and connected GTM AI Assistants"
            width={2062}
            height={1124}
            className="h-auto w-full"
            priority
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

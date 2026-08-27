"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DiagnosticModal } from "@/components/ui/DiagnosticModal";
import { cn } from "@/lib/utils";

export function FinalCTA({ className }: { className?: string }) {
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-brand-surface pb-16 pt-0 sm:pb-24",
        className
      )}
    >
      <Image
        src="/assets/images/ctabg (1).png"
        alt=""
        aria-hidden="true"
        width={428}
        height={380}
        className="pointer-events-none absolute left-0 top-0 z-0 hidden h-auto w-1/4 max-w-107 sm:block"
      />
      <Image
        src="/assets/images/ctabg (2).png"
        alt=""
        aria-hidden="true"
        width={427}
        height={380}
        className="pointer-events-none absolute right-0 top-0 z-0 hidden h-auto w-1/4 max-w-107 sm:block"
      />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/assets/images/Group 1707480519.png"
            alt="Uhubs"
            width={543}
            height={543}
            className="h-32 w-32 sm:h-36 sm:w-36"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-8 max-w-2xl text-xl font-semibold leading-[1.2] tracking-tight text-brand-ink sm:text-2xl"
        >
          The reasons behind your revenue.
          <br /> Not just the results
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-5 text-sm text-brand-ink/60"
        >
          Turn potential into performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-6"
        >
          <Button size="md" onClick={() => setDiagnosticOpen(true)}>
            Book a Revenue Diagnostic
          </Button>
        </motion.div>
      </Container>

      <DiagnosticModal
        open={diagnosticOpen}
        onClose={() => setDiagnosticOpen(false)}
      />
    </section>
  );
}

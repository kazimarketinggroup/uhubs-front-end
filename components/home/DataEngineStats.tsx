"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { DiagnosticModal } from "@/components/ui/DiagnosticModal";

export function DataEngineStats() {
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);

  return (
    <section className="bg-brand-surface pb-16 pt-0 sm:pb-24">
      <Container className="flex flex-col items-center">
        <SectionHeading
          badge="The Data Engine"
          title={
            <>
              Built on the industry&apos;s largest proprietary sales
              <br className="hidden sm:block" /> capability dataset across
              PE-Backed GTM teams.
            </>
          }
          titleClassName="max-w-2xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 w-full max-w-2xl"
        >
          <Image
            src="/assets/images/Group 1707480930.png"
            alt="Uhubs data engine: 500K+ data points, 30+ role types assessed, 6+ years of data, 45 countries, and 80+ competencies, all linked directly to revenue outcomes"
            width={863}
            height={365}
            className="h-auto w-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-10"
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

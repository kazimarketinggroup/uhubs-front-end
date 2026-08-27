"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DiagnosticModal } from "@/components/ui/DiagnosticModal";

export function StoryDetailHero({
  badges,
  title,
  description,
  image,
  imageAlt,
}: {
  badges: string[];
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
}) {
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);

  return (
    <section className="overflow-hidden bg-brand-surface pb-16 pt-16 sm:pb-24 sm:pt-20">
      <Container className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-brand-ink sm:text-3xl"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-brand-ink/60"
          >
            {description}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
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
          className="mt-14 w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-15px_rgba(20,20,26,0.15)]"
        >
          <Image
            src={image}
            alt={imageAlt}
            width={1460}
            height={640}
            priority
            className="h-56 w-full object-cover sm:h-72 lg:h-80"
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

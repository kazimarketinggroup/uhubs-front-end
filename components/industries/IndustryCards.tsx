"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DiagnosticModal } from "@/components/ui/DiagnosticModal";
import { industries } from "@/lib/industries";

export function IndustryCards() {
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);

  return (
    <section className="bg-brand-surface pb-16 sm:pb-24">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.article
                key={industry.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.1,
                  ease: "easeOut",
                }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white p-2.5 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={industry.image}
                    alt={industry.imageAlt}
                    width={365}
                    height={160}
                    className="h-40 w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-ink/70 text-brand-orange backdrop-blur-sm">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-4 pb-6 pt-5">
                  <h3 className="text-base font-medium text-brand-ink">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-ink/60">
                    {industry.description}
                  </p>
                  <div className="mt-auto grid grid-rows-[0fr] pt-0 opacity-0 transition-all duration-300 ease-out group-focus-within:grid-rows-[1fr] group-focus-within:pt-4 group-focus-within:opacity-100 group-hover:grid-rows-[1fr] group-hover:pt-4 group-hover:opacity-100">
                    <div className="overflow-hidden">
                      <Link
                        href={`/industries/${industry.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange transition-colors hover:text-brand-orange-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                      >
                        Learn More
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col rounded-2xl border border-black/5 bg-white px-6 py-8 shadow-sm"
          >
            <h3 className="text-base font-medium text-brand-ink">
              Not sure where you fit?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-ink/60">
              Book a diagnostic and we&apos;ll benchmark your team against the
              closest patterns in our dataset.
            </p>
            <div className="mt-auto pt-8">
              <Button size="sm" onClick={() => setDiagnosticOpen(true)}>
                Book a Revenue Diagnostic
              </Button>
            </div>
          </motion.article>
        </div>
      </Container>

      <DiagnosticModal
        open={diagnosticOpen}
        onClose={() => setDiagnosticOpen(false)}
      />
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type Step = {
  tab: string;
  description: string;
  image: string;
};

const steps: Step[] = [
  {
    tab: "Step 1: Diagnose",
    description:
      "Understand why some reps outperform others. Uhubs benchmarks each rep against your top performers to reveal where the gap sits and what to close first.",
    image: "/assets/images/what1.png",
  },
  {
    tab: "Step 2: Accelerate & Improve",
    description:
      "Turn diagnostic insight into a structured improvement programme. Uhubs human experts and AI Assistants work as an extension to your team to close the performance gap.",
    image: "/assets/images/what2.png",
  },
  {
    tab: "Step 3: Track, Embed & Scale",
    description:
      "Uhubs continuously tracks initiatives against improvements in leading indicators to identify what has the greatest impact on revenue performance.",
    image: "/assets/images/what3.png",
  },
];

export function ProcessSteps() {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <section className="bg-brand-surface pb-16 pt-0 sm:pb-24">
      <Container>
        <SectionHeading
          badge="What makes Uhubs unique"
          title="From Diagnosing Gaps To Scaling Success"
          align="left"
        />

        <div
          role="tablist"
          aria-label="Uhubs process steps"
          className="mt-8 flex flex-wrap gap-3"
        >
          {steps.map((step, index) => {
            const isActive = index === active;
            return (
              <button
                key={step.tab}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(index)}
                className={cn(
                  "rounded-xl px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-brand-ink",
                  isActive
                    ? "bg-brand-orange text-white shadow-sm"
                    : "bg-white text-brand-ink ring-1 ring-black/5 hover:bg-black/5"
                )}
              >
                {step.tab}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="max-w-md text-sm leading-relaxed text-brand-ink/70"
              >
                {current.description}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_20px_60px_-20px_rgba(20,20,26,0.2)]"
              >
                <Image
                  src={current.image}
                  alt={`${current.tab} — Uhubs product view`}
                  width={1800}
                  height={1000}
                  className="h-auto w-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Database, Headphones, LineChart, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ValueProp = {
  icon: LucideIcon;
  title: string;
  description: string;
  bg: string;
};

const valueProps: ValueProp[] = [
  {
    icon: Database,
    title: "Revenue Leaders",
    description:
      "Uhubs benchmarks GTM teams against capability patterns from top-performing reps across companies.",
    bg: "bg-[#F8EDE7]",
  },
  {
    icon: Headphones,
    title: "Rev Ops & Enablement",
    description:
      "Turn diagnostic insight into a structured improvement programme. Uhubs human experts and AI Assistants work for you to close the performance gap.",
    bg: "bg-[#E4F0EA]",
  },
  {
    icon: LineChart,
    title: "Consulting Firms",
    description:
      "Uhubs continuously tracks initiatives against improvements in leading indicators to identify what has the greatest impact on revenue performance.",
    bg: "bg-[#E7EAF6]",
  },
];

export function ValuePropCards() {
  return (
    <section className="bg-brand-surface pb-16 pt-0 sm:pb-24">
      <Container>
        <SectionHeading
          badge="Most Enablement Focuses On Training."
          title={
            <>
              Uhubs Focuses On What&apos;s Actually
              <br className="hidden sm:block" /> Costing You Revenue.
            </>
          }
          description="Uhubs benchmarks capabilities to show exactly where improvement will increase win rates and helps you accelerate the path to getting there."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <motion.article
                key={prop.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className={`flex flex-col items-center rounded-3xl ${prop.bg} px-6 py-10 text-center`}
              >
                <span className="flex h-11 w-11 items-center justify-center text-brand-ink">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-medium text-brand-ink">
                  {prop.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-brand-ink/60">
                  {prop.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

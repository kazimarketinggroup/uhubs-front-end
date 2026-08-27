"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const awards = [
  {
    name: "G2 High Performer — 4.4 out of 5 stars",
    src: "/assets/images/Group 1707480730.png",
    width: 462,
    height: 70,
    className: "h-9 w-auto",
  },
  {
    name: "The British Psychological Society",
    src: "/assets/images/BPS-logo-250-pix 1.png",
    width: 101,
    height: 51,
    className: "h-8 w-auto",
  },
  {
    name: "Tech Nation Rising Stars Winner 2025",
    src: "/assets/images/Group 427321485.png",
    width: 132,
    height: 42,
    className: "h-7 w-auto",
  },
];

export function SocialProof() {
  return (
    <section
      aria-labelledby="social-proof-heading"
      className="bg-brand-surface pb-16 pt-0 sm:pb-24"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[7fr_3fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h2
              id="social-proof-heading"
              className="text-xl font-semibold leading-[1.2] tracking-tight text-brand-ink sm:text-2xl"
            >
              Built By GTM Operators.
              <br /> Validated By The People We Work With.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-brand-ink/60">
              Uhubs has been independently recognised by G2 as a High Performer
              in Sales Performance, and Easiest to Do Business With. Our
              methodology is reviewed by the British Psychological Society. Our
              research is published annually as the Global Sales Capability
              Index.
            </p>

            <ul className="mt-8 flex flex-wrap items-center gap-4">
              {awards.map((award) => (
                <li
                  key={award.name}
                  className="flex items-center rounded-lg border border-black/5 bg-white px-3 py-2 shadow-sm"
                >
                  <Image
                    src={award.src}
                    alt={award.name}
                    width={award.width}
                    height={award.height}
                    className={award.className}
                  />
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative aspect-4/3 overflow-hidden rounded-3xl"
          >
            <Image
              src="/assets/images/679393a082a1075c7345e749_Screenshot 2025-01-24 at 14.20.27 1.png"
              alt="Two members of the Uhubs team in conversation, wearing branded Uhubs t-shirts"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

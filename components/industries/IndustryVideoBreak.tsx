"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Container } from "@/components/ui/Container";

const YOUTUBE_ID = "O_BqBD4urzk";
const VIDEO_TITLE =
  "Uhubs: Capability Intelligence for AI-Driven Revenue Teams";

export function IndustryVideoBreak({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-brand-surface pb-16 pt-8 sm:pb-24">
      <Container className="flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl text-xl font-semibold leading-[1.3] tracking-tight text-brand-ink sm:text-2xl"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-5 max-w-xl text-sm leading-relaxed text-brand-ink/60"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="relative mt-10 aspect-video w-full max-w-3xl overflow-hidden rounded-2xl bg-brand-ink shadow-[0_20px_60px_-15px_rgba(20,20,26,0.25)]"
        >
          {playing ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
              title={VIDEO_TITLE}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Play video: ${VIDEO_TITLE}`}
              className="group absolute inset-0 h-full w-full cursor-pointer"
            >
              <Image
                src="/assets/images/Rectangle 4651.png"
                alt={VIDEO_TITLE}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
              <span className="absolute inset-0 bg-black/5 transition-colors group-hover:bg-black/15" />
              <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 shadow-lg transition-transform group-hover:scale-110">
                <Play className="ml-1 h-7 w-7 fill-white text-white" aria-hidden="true" />
              </span>
            </button>
          )}
        </motion.div>
      </Container>
    </section>
  );
}

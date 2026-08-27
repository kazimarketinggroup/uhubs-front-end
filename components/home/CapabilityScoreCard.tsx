"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const dataSources = [
  {
    title: "Capability Data",
    description: "Skills & knowledge from assessments",
    tag: "Uhubs",
  },
  {
    title: "Call Data",
    description: "Call analysis & AI role play",
    tag: "Gong · Zoom · Clari",
  },
  {
    title: "CRM Data",
    description: "Win rate, pipeline coverage, sales cycle",
    tag: "Salesforce · HubSpot",
  },
];

const assistants = [
  "CRM Analysis Assistant",
  "Capability Framework Assistant",
  "Behaviour Analysis Assistant",
  "Play Reinforcement Assistant",
  "AI Roleplay Assistant",
  "Manager Assistant MCP",
  "Consultant Assistant MCP",
  "Enablement Assistant MCP",
];

const SCORE = 74;
const RADIUS = 72;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function CapabilityScoreCard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    controls.start({
      strokeDashoffset: CIRCUMFERENCE * (1 - SCORE / 100),
      transition: { duration: 1.4, ease: "easeOut" },
    });

    const duration = 1400;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayScore(Math.round(progress * SCORE));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      className="relative w-full rounded-3xl border border-black/5 bg-white p-5 shadow-[0_20px_60px_-15px_rgba(20,20,26,0.15)] sm:p-8"
    >
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-brand-ink/50 sm:text-sm">
        Integrated GTM Data + Uhubs Benchmarking Gives A 360° View Of Every
        Team Member
      </p>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {dataSources.map((source) => (
          <div
            key={source.title}
            className="rounded-2xl border border-black/5 bg-brand-surface/60 p-3.5"
          >
            <p className="text-sm font-semibold text-brand-ink">
              {source.title}
            </p>
            <p className="mt-1 text-xs leading-snug text-brand-ink/60">
              {source.description}
            </p>
            <p className="mt-2 text-[11px] font-medium text-brand-ink/40">
              {source.tag}
            </p>
          </div>
        ))}
      </div>

      <div className="relative mt-8 flex flex-col items-center">
        <div className="pointer-events-none absolute -left-2 top-2 hidden text-[11px] font-medium text-brand-ink/40 sm:block">
          Centralised
          <br />
          Uhubs Platform
        </div>

        <div className="relative h-44 w-44">
          <svg
            viewBox="0 0 168 168"
            className="h-full w-full -rotate-90"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5732D" />
                <stop offset="55%" stopColor="#8B6FE0" />
                <stop offset="100%" stopColor="#2FBFA6" />
              </linearGradient>
            </defs>
            <circle
              cx="84"
              cy="84"
              r={RADIUS}
              fill="none"
              stroke="#EEEDE9"
              strokeWidth="12"
            />
            <motion.circle
              cx="84"
              cy="84"
              r={RADIUS}
              fill="none"
              stroke="url(#scoreGradient)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              initial={{ strokeDashoffset: CIRCUMFERENCE }}
              animate={controls}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-brand-ink tabular-nums">
              {displayScore}
            </span>
            <span className="mt-1 max-w-[7rem] text-center text-[10px] font-semibold uppercase tracking-wide text-brand-ink/50">
              Sales Excellence Score
            </span>
          </div>
        </div>

        <div className="mt-3 flex gap-1.5" aria-hidden="true">
          <span className="h-1.5 w-8 rounded-full bg-brand-orange" />
          <span className="h-1.5 w-8 rounded-full bg-violet-400" />
          <span className="h-1.5 w-8 rounded-full bg-teal-400" />
        </div>

        <div className="pointer-events-none absolute -left-2 bottom-2 hidden text-[11px] font-medium text-brand-ink/40 sm:block">
          Cutting Edge
          <br />
          AI Assistants
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-surface px-4 py-1.5 text-xs font-semibold text-brand-ink/70">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          GTM AI Assistants
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {assistants.map((assistant) => (
          <div
            key={assistant}
            className="rounded-xl border border-black/5 bg-white px-2.5 py-2 text-center text-[11px] font-medium leading-snug text-brand-ink/70 shadow-sm"
          >
            {assistant}
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DiagnosticModal } from "@/components/ui/DiagnosticModal";
import type { NavLink } from "@/lib/types";

type FooterColumn = {
  heading: string;
  links: NavLink[];
};

const footerColumns: FooterColumn[] = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "The Unfair Advantage", href: "/unfair-advantage" },
      { label: "Partnerships", href: "/partnerships" },
      { label: "Sales Experts", href: "/sales-experts" },
      { label: "Careers", href: "/careers" },
      { label: "Customer stories", href: "/customer-stories" },
    ],
  },
  {
    heading: "Resources",
    links: [
      {
        label: "The Global Sales Capability Index 2026",
        href: "/resources/global-sales-capability-index",
      },
      { label: "Whitepapers", href: "/resources/whitepapers" },
      { label: "Blog", href: "/blog" },
      { label: "Podcast", href: "/podcast" },
      { label: "Support Hub", href: "/support" },
    ],
  },
  {
    heading: "Industries",
    links: [
      {
        label: "Private Equity Backed Companies",
        href: "/industries/private-equity",
      },
      { label: "Professional services", href: "/industries/professional-services" },
      {
        label: "Logistics & Manufacturing",
        href: "/industries/logistics-manufacturing",
      },
      { label: "Software", href: "/industries/software" },
      { label: "Travel", href: "/industries/travel" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Terms & Conditions", href: "/legal/terms" },
    ],
  },
];

export function Footer() {
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-brand-ink text-white">
      <Image
        src="/assets/images/footerbg.png"
        alt=""
        aria-hidden="true"
        width={1439}
        height={453}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 w-full opacity-[0.06]"
      />

      <Container className="relative z-10 py-12 sm:py-16">
        {/* Top row */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-center lg:justify-between">
          <Link
            href="/"
            className="flex shrink-0 items-center rounded-full focus-visible:outline-2 focus-visible:outline-white"
          >
            <Image
              src="/assets/images/uhubsLogo.png"
              alt="Uhubs"
              width={140}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10 lg:gap-12">
            <address className="max-w-xs text-xs not-italic leading-relaxed text-white/60 sm:text-sm">
              UPSKILLHUBS LIMITED, 4th Floor, Silverstream House,
              <br /> 45 Fitzroy Street, London, W1T 6EB
            </address>

            <div className="text-xs leading-relaxed text-white/60 sm:text-sm">
              CRN – 11869565
              <br />
              <a
                href="mailto:hello@uhubs.ai"
                className="underline underline-offset-2 transition-colors hover:text-white"
              >
                hello@uhubs.ai
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/login"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Login
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDiagnosticOpen(true)}
              className="border-white/30 text-white hover:border-white/60 hover:bg-white/5 focus-visible:outline-white"
            >
              Book a Diagnostic
            </Button>
          </div>
        </div>

        {/* Link columns */}
        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4"
        >
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-medium text-white">
                {column.heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Bottom row */}
        <div className="flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© Copyright 2026 Uhubs.ai</p>
          <p>Made in London</p>
        </div>
      </Container>

      <DiagnosticModal
        open={diagnosticOpen}
        onClose={() => setDiagnosticOpen(false)}
      />
    </footer>
  );
}

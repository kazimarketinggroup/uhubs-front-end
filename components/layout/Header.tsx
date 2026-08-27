"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DiagnosticModal } from "@/components/ui/DiagnosticModal";
import { industries } from "@/lib/industries";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/lib/types";

const industryLinks: NavLink[] = industries.map((industry) => ({
  label: industry.menuLabel,
  href: `/industries/${industry.slug}`,
}));

const resourceLinks: NavLink[] = [
  { label: "Podcasts", href: "/resources/podcasts" },
  {
    label: "The Global Sales Index 2026",
    href: "/resources/global-sales-capability-index",
  },
  { label: "Whitepapers", href: "/resources/whitepapers" },
  { label: "Blog", href: "/resources/blog" },
  { label: "Support Hub", href: "/resources/support-hub" },
];

function DesktopNavDropdown({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: NavLink[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
    >
      <Link
        href={href}
        aria-expanded={open}
        className="flex items-center gap-1.5 py-2 text-sm font-medium text-brand-ink/80 transition-colors hover:text-brand-ink"
      >
        {label}
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 top-full pt-2"
          >
            <div className="w-64 rounded-2xl border border-black/5 bg-white p-2 shadow-[0_16px_40px_-12px_rgba(20,20,26,0.2)]">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-sm text-brand-ink/80 transition-colors hover:bg-black/3 hover:text-brand-orange"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNavDropdown({
  label,
  href,
  items,
  onNavigate,
}: {
  label: string;
  href: string;
  items: NavLink[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center">
        <Link
          href={href}
          onClick={onNavigate}
          className="flex-1 rounded-lg px-2 py-2.5 text-sm font-medium text-brand-ink/80 transition-colors hover:bg-black/5 hover:text-brand-ink"
        >
          {label}
        </Link>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? `Collapse ${label}` : `Expand ${label}`}
          aria-expanded={open}
          className="rounded-lg p-2.5 text-brand-ink/60 transition-colors hover:bg-black/5 hover:text-brand-ink"
        >
          <ChevronDown
            aria-hidden="true"
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 pb-1 pl-4">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className="rounded-lg px-2 py-2 text-sm text-brand-ink/70 transition-colors hover:bg-black/5 hover:text-brand-orange"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Header() {
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);

  return (
    <>
      <AnimatePresence initial={false}>
        {announcementVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-brand-ink"
          >
            <Container className="relative flex items-center justify-center gap-3 py-2.5 text-center">
              <p className="text-xs font-medium text-white/90 sm:text-sm">
                The Global Sales Capability Index 2026 is out.{" "}
                <Link
                  href="/resources/global-sales-capability-index"
                  className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Download the full report
                  <span aria-hidden="true">→</span>
                </Link>
              </p>
              <button
                type="button"
                onClick={() => setAnnouncementVisible(false)}
                aria-label="Dismiss announcement"
                className="absolute right-4 rounded-full p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white sm:right-6"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="sticky top-0 z-50 border-b border-black/5 bg-brand-surface/90 backdrop-blur-md">
        <Container className="flex h-18 items-center justify-between gap-4 py-3.5">
          <Link
            href="/"
            className="flex items-center rounded-full focus-visible:outline-2 focus-visible:outline-brand-ink"
          >
            <Image
              src="/assets/images/Group 16.svg"
              alt="Uhubs"
              width={155}
              height={36}
              priority
              className="h-8 w-auto"
            />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 lg:flex"
          >
            <DesktopNavDropdown
              label="Industries"
              href="/industries"
              items={industryLinks}
            />
            <Link
              href="/customer-stories"
              className="text-sm font-medium text-brand-ink/80 transition-colors hover:text-brand-ink"
            >
              Customer Stories
            </Link>
            <DesktopNavDropdown
              label="Resources"
              href="/resources"
              items={resourceLinks}
            />
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <Link
              href="https://app.uhubs.co.uk/landing-page"
              className="text-sm font-medium text-brand-ink/80 transition-colors hover:text-brand-ink"
              target="_blank"
              rel="noopener noreferrer"
            >
              Client Login
            </Link>
            <Button size="sm" onClick={() => setDiagnosticOpen(true)}>
              Book a Revenue Diagnostic
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="inline-flex items-center justify-center rounded-full p-2 text-brand-ink transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-brand-ink lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </Container>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden border-t border-black/5 lg:hidden"
            >
              <Container className="flex flex-col gap-1 py-4">
                <MobileNavDropdown
                  label="Industries"
                  href="/industries"
                  items={industryLinks}
                  onNavigate={() => setMobileMenuOpen(false)}
                />
                <Link
                  href="/customer-stories"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-sm font-medium text-brand-ink/80 transition-colors hover:bg-black/5 hover:text-brand-ink"
                >
                  Customer Stories
                </Link>
                <MobileNavDropdown
                  label="Resources"
                  href="/resources"
                  items={resourceLinks}
                  onNavigate={() => setMobileMenuOpen(false)}
                />
                <Link
                  href="https://app.uhubs.co.uk/landing-page"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-sm font-medium text-brand-ink/80 transition-colors hover:bg-black/5 hover:text-brand-ink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client Login
                </Link>
                <Button
                  size="sm"
                  className="mt-2 w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setDiagnosticOpen(true);
                  }}
                >
                  Book a Revenue Diagnostic
                </Button>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <DiagnosticModal
        open={diagnosticOpen}
        onClose={() => setDiagnosticOpen(false)}
      />
    </>
  );
}

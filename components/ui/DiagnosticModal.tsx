"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const diagnosticSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  workEmail: z.string().email("Please enter a valid work email"),
  phone: z.string().optional(),
  revenueOrgSize: z.enum(["1-10", "11-25", "26-50", "51-100", "100+"], {
    message: "Please select your revenue org size",
  }),
  consentCare: z.boolean().optional(),
  consentMarketing: z.boolean().optional(),
});

type DiagnosticFormValues = z.infer<typeof diagnosticSchema>;

const orgSizes: DiagnosticFormValues["revenueOrgSize"][] = [
  "1-10",
  "11-25",
  "26-50",
  "51-100",
  "100+",
];

export function DiagnosticModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DiagnosticFormValues>({
    resolver: zodResolver(diagnosticSchema),
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      reset();
    }
  }, [open, reset]);

  if (!mounted) return null;

  const onSubmit = async (data: DiagnosticFormValues) => {
    // Frontend-only for now: backend submission will be wired up later.
    console.log("Diagnostic request submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
  };

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="diagnostic-modal-title"
            className="relative z-10 grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-[2fr_3fr]"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Left brand panel */}
            <div className="hidden flex-col justify-between bg-brand-ink p-7 text-white md:flex">
              <div>
                <Image
                  src="/assets/images/uhubsLogo.png"
                  alt="Uhubs"
                  width={140}
                  height={32}
                  className="h-7 w-auto"
                />

                <h3 className="mt-8 text-xl font-semibold leading-snug">
                  See how your revenue team stacks up against the best
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-white/60">
                  A 30-minute diagnostic that pinpoints the coaching and
                  pipeline gaps costing your deals, no prep, no pitch.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
                  <div className="flex -space-x-2">
                    <Image
                      src="/assets/images/Group 427321688 1.png"
                      alt="Uhubs co-founder"
                      width={70}
                      height={70}
                      className="h-9 w-9 rounded-full ring-2 ring-brand-ink"
                    />
                    <Image
                      src="/assets/images/Group 427321688 1 (1).png"
                      alt="Uhubs co-founder"
                      width={70}
                      height={70}
                      className="h-9 w-9 rounded-full ring-2 ring-brand-ink"
                    />
                  </div>
                  <span className="text-sm font-medium text-white">
                    Run by our co-founders
                  </span>
                </div>

                <p className="mt-6 text-xs text-white/50">
                  30 mins . No prep needed . No obligation
                </p>
              </div>
            </div>

            {/* Right form panel */}
            <div className="relative p-6 sm:p-7">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="absolute right-5 top-5 rounded-full p-1.5 text-brand-ink/60 transition-colors hover:bg-black/5 hover:text-brand-ink focus-visible:outline-2 focus-visible:outline-brand-ink"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>

              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 py-12 text-center">
                  <CheckCircle2
                    className="h-12 w-12 text-emerald-500"
                    aria-hidden="true"
                  />
                  <h2
                    id="diagnostic-modal-title"
                    className="text-lg font-semibold text-brand-ink"
                  >
                    Request received
                  </h2>
                  <p className="max-w-xs text-sm text-brand-ink/60">
                    Thanks — a member of our team will reach out to schedule
                    your Revenue Diagnostic shortly.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-2 rounded-full border border-brand-ink/15 px-5 py-2 text-sm font-medium text-brand-ink transition-colors hover:bg-black/5"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h2
                    id="diagnostic-modal-title"
                    className="pr-8 text-lg font-semibold text-brand-ink sm:text-xl"
                  >
                    Book Your Revenue Diagnostic
                  </h2>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="mt-5 flex flex-col gap-4"
                  >
                    <Field
                      label="Full name"
                      required
                      htmlFor="name"
                      error={errors.name?.message}
                    >
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        className={inputClasses(!!errors.name)}
                        {...register("name")}
                      />
                    </Field>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                      <Field
                        label="Work email"
                        required
                        htmlFor="workEmail"
                        error={errors.workEmail?.message}
                      >
                        <input
                          id="workEmail"
                          type="email"
                          autoComplete="email"
                          className={inputClasses(!!errors.workEmail)}
                          {...register("workEmail")}
                        />
                      </Field>

                      <Field label="Phone (Optional)" htmlFor="phone">
                        <input
                          id="phone"
                          type="tel"
                          autoComplete="tel"
                          className={inputClasses(false)}
                          {...register("phone")}
                        />
                      </Field>
                    </div>

                    <Field
                      label="Revenue org size"
                      required
                      htmlFor="revenueOrgSize"
                      error={errors.revenueOrgSize?.message}
                    >
                      <select
                        id="revenueOrgSize"
                        defaultValue=""
                        className={cn(
                          inputClasses(!!errors.revenueOrgSize),
                          "cursor-pointer"
                        )}
                        {...register("revenueOrgSize")}
                      >
                        <option value="" disabled>
                          Select One
                        </option>
                        {orgSizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <div className="flex flex-col gap-2">
                      <label className="flex items-start gap-2.5 text-xs leading-snug text-brand-ink/70">
                        <input
                          type="checkbox"
                          className="mt-0.5 h-4 w-4 shrink-0 rounded border-brand-ink/30 accent-brand-orange"
                          {...register("consentCare")}
                        />
                        I consent to receive [customer care, notifications,
                        etc.] text messages from Uhubs (Upskillhubs) Limited.
                      </label>

                      <label className="flex items-start gap-2.5 text-xs leading-snug text-brand-ink/70">
                        <input
                          type="checkbox"
                          className="mt-0.5 h-4 w-4 shrink-0 rounded border-brand-ink/30 accent-brand-orange"
                          {...register("consentMarketing")}
                        />
                        I consent to receive [marketing, promotional, etc.]
                        text messages. Consent is not a condition of purchase
                        from Uhubs (Upskillhubs) Limited.
                      </label>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded-full bg-brand-orange px-8 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-orange-dark disabled:pointer-events-none disabled:opacity-50"
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                    </div>

                    <p className="text-xs leading-snug text-brand-ink/50">
                      Message frequency will vary. Msg &amp; data rates may
                      apply. Reply HELP for help or STOP to cancel. Click for
                      Privacy Policy{" "}
                      <a
                        href="https://www.uhubs.ai/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-brand-ink"
                      >
                        https://www.uhubs.ai/privacy-policy
                      </a>{" "}
                      and Terms and Conditions{" "}
                      <a
                        href="https://www.uhubs.ai/terms-and-conditions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-brand-ink"
                      >
                        https://www.uhubs.ai/terms-and-conditions
                      </a>
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium text-brand-ink"
      >
        {label}
        {required && (
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClasses(hasError: boolean) {
  return cn(
    "w-full border-0 border-b bg-transparent px-0 py-1.5 text-sm text-brand-ink outline-none transition-colors focus:border-brand-orange",
    hasError ? "border-red-400" : "border-brand-ink/20"
  );
}

"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const consultationSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(6, "Please enter your phone number"),
  company: z.string().min(2, "Please enter your company"),
  jobTitle: z.string().min(2, "Please enter your job title"),
  revenueOrgSize: z.enum(["1-10", "11-25", "26-50", "51-100", "100+"], {
    message: "Please select your revenue org size",
  }),
});

type ConsultationFormValues = z.infer<typeof consultationSchema>;

const orgSizes: ConsultationFormValues["revenueOrgSize"][] = [
  "1-10",
  "11-25",
  "26-50",
  "51-100",
  "100+",
];

export function ConsultationModal({
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
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
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

  const onSubmit = async (data: ConsultationFormValues) => {
    // Frontend-only for now: backend submission will be wired up later.
    console.log("Consultation request submitted:", data);
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
            aria-labelledby="consultation-modal-title"
            className="relative z-10 w-full max-w-4xl rounded-3xl bg-[#F7F2E5] p-6 shadow-2xl sm:p-8"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute right-5 top-5 rounded-full p-1.5 text-brand-ink/60 transition-colors hover:bg-black/5 hover:text-brand-ink focus-visible:outline-2 focus-visible:outline-brand-ink"
            >
              <X className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <CheckCircle2
                  className="h-12 w-12 text-emerald-600"
                  aria-hidden="true"
                />
                <h2
                  id="consultation-modal-title"
                  className="text-2xl font-semibold text-brand-ink"
                >
                  Request received
                </h2>
                <p className="max-w-sm text-sm text-brand-ink/60">
                  Thanks — a member of our team will be in touch with you to
                  find an available slot!
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-2 rounded-full bg-brand-ink px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-black"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h2
                  id="consultation-modal-title"
                  className="pr-8 text-2xl font-light uppercase tracking-wide text-brand-ink sm:text-3xl"
                >
                  Book Consultation
                </h2>
                <p className="mt-3 text-xs text-brand-ink/50 sm:text-sm">
                  A member of our team will be in touch with you to find an
                  available slot!
                </p>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="mt-5 flex flex-col gap-4"
                >
                  <div className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                    <Field
                      label="Full name"
                      htmlFor="consult-fullName"
                      error={errors.fullName?.message}
                    >
                      <input
                        id="consult-fullName"
                        type="text"
                        autoComplete="name"
                        className={inputClasses(!!errors.fullName)}
                        {...register("fullName")}
                      />
                    </Field>
                    <div className="hidden sm:block" />

                    <Field
                      label="Email"
                      htmlFor="consult-email"
                      error={errors.email?.message}
                    >
                      <input
                        id="consult-email"
                        type="email"
                        autoComplete="email"
                        className={inputClasses(!!errors.email)}
                        {...register("email")}
                      />
                    </Field>

                    <Field
                      label="Phone Number"
                      htmlFor="consult-phone"
                      error={errors.phone?.message}
                    >
                      <input
                        id="consult-phone"
                        type="tel"
                        autoComplete="tel"
                        className={inputClasses(!!errors.phone)}
                        {...register("phone")}
                      />
                    </Field>

                    <Field
                      label="Company"
                      htmlFor="consult-company"
                      error={errors.company?.message}
                    >
                      <input
                        id="consult-company"
                        type="text"
                        autoComplete="organization"
                        className={inputClasses(!!errors.company)}
                        {...register("company")}
                      />
                    </Field>

                    <Field
                      label="Job Title"
                      htmlFor="consult-jobTitle"
                      error={errors.jobTitle?.message}
                    >
                      <input
                        id="consult-jobTitle"
                        type="text"
                        autoComplete="organization-title"
                        className={inputClasses(!!errors.jobTitle)}
                        {...register("jobTitle")}
                      />
                    </Field>
                  </div>

                  <Field
                    label="Revenue org size"
                    htmlFor="consult-revenueOrgSize"
                    error={errors.revenueOrgSize?.message}
                  >
                    <select
                      id="consult-revenueOrgSize"
                      defaultValue=""
                      className={cn(
                        inputClasses(!!errors.revenueOrgSize),
                        "cursor-pointer"
                      )}
                      {...register("revenueOrgSize")}
                    >
                      <option value="" disabled>
                        Select one...
                      </option>
                      {orgSizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <div className="flex justify-end border-t border-brand-ink/10 pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-full bg-brand-ink px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-black disabled:pointer-events-none disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              </>
            )}
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
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-brand-ink">
        {label}
        <span className="text-red-500" aria-hidden="true">
          *
        </span>
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
    "w-full border-0 border-b bg-transparent px-0 py-2 text-sm text-brand-ink outline-none transition-colors focus:border-brand-ink",
    hasError ? "border-red-400" : "border-brand-ink/25"
  );
}

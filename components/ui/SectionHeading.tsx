"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className,
  titleClassName,
}: {
  badge?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
}) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "flex flex-col gap-4",
        isCenter ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {badge && <Badge>{badge}</Badge>}
      <h2
        className={cn(
          "font-semibold leading-[1.2] tracking-tight text-brand-ink",
          isCenter
            ? "max-w-3xl text-xl sm:text-2xl"
            : "text-xl sm:text-2xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-sm leading-relaxed text-brand-ink/60",
            isCenter ? "max-w-xl" : "max-w-lg"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

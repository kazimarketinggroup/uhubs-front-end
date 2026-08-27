import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-medium text-brand-ink shadow-sm ring-1 ring-black/5",
        className
      )}
    >
      {children}
    </span>
  );
}

import { cn } from "@/lib/utils/cn";
import type { BadgeVariant } from "@/lib/types";

const VARIANT_STYLES: Record<BadgeVariant, React.CSSProperties> = {
  green: {
    background: "rgba(62,207,110,0.12)",
    color: "var(--color-accent-green)",
    border: "1px solid rgba(62,207,110,0.2)",
  },
  blue: {
    background: "rgba(74,158,255,0.12)",
    color: "var(--color-accent-blue)",
    border: "1px solid rgba(74,158,255,0.2)",
  },
  gray: {
    background: "rgba(255,255,255,0.06)",
    color: "var(--color-text-secondary)",
    border: "1px solid var(--color-border)",
  },
};

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ label, variant = "gray", className }: BadgeProps) {
  return (
    <span
      className={cn("inline-flex items-center rounded px-1.5 py-0.5", className)}
      style={{
        ...VARIANT_STYLES[variant],
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: "0.04em",
      }}
    >
      {label}
    </span>
  );
}

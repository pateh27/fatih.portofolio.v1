import { cn } from "@/lib/utils/cn";

interface SectionWrapperProps {
  id: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({
  id,
  label,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("flex flex-col gap-6 py-10", className)}
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      {/* Section label */}
      <span className="text-section-label">{label}</span>
      {children}
    </section>
  );
}

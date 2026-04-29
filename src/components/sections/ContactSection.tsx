"use client";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import type { ContactLink } from "@/lib/types";

interface ContactSectionProps {
  contacts: ContactLink[];
}

export function ContactSection({ contacts }: ContactSectionProps) {
  return (
    <SectionWrapper id="contact" label="Contact">
      <div className="flex flex-col gap-2">
        {contacts.map((c) => (
          <div key={c.label} className="flex items-center gap-3">
            <span
              className="w-16 flex-shrink-0"
              style={{ color: "var(--color-text-muted)", fontSize: 12 }}
            >
              {c.label}
            </span>
            <Link
              href={c.href}
              target={c.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-xs transition-colors duration-150"
              style={{ color: "var(--color-text-secondary)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)")
              }
            >
              {c.href.replace("mailto:", "")} ↗
            </Link>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

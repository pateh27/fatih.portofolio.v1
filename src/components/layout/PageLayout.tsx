"use client";

import { useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import type { Profile, ContactLink } from "@/lib/types";

interface PageLayoutProps {
  children: React.ReactNode;
  profile: Profile;
  contacts: ContactLink[];
}

const NAV_LINKS = [
  { label: "About", href: "#about", id: "about" },
  { label: "Proficiencies", href: "#proficiencies", id: "proficiencies" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Certificates", href: "#certificates", id: "certificates" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export function PageLayout({ children, profile }: PageLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <div className="relative min-h-screen" style={{ background: "var(--color-background)" }}>
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-5 py-3 md:hidden"
        style={{
          background: "rgba(10,10,10,0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <span style={{ color: "var(--color-text-primary)", fontSize: 13, fontWeight: 500 }}>
          {profile.name}
        </span>
        <button onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu"
          style={{ color: "var(--color-text-secondary)", fontSize: 16 }}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      {menuOpen && (
        <nav className="fixed inset-x-0 top-[41px] z-40 flex flex-col gap-1 p-4 md:hidden"
          style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="px-3 py-2 rounded text-sm"
              style={{ color: activeSection === l.id ? "var(--color-text-primary)" : "var(--color-text-secondary)" }}>
              {l.label}
            </a>
          ))}
        </nav>
      )}

      <div className="mx-auto flex w-full max-w-[860px]" style={{ padding: "0 24px" }}>
        <aside className="hidden md:flex flex-col pt-16 pr-10" style={{ width: "var(--sidebar-width)", flexShrink: 0 }}>
          <nav className="sticky top-10 flex flex-col gap-0.5">
            {NAV_LINKS.map((l) => {
              const isActive = activeSection === l.id;
              return (
                <a key={l.href} href={l.href}
                  className="rounded px-2 py-1 text-xs transition-all duration-150"
                  style={{ color: isActive ? "var(--color-text-secondary)" : "var(--color-text-muted)", fontWeight: isActive ? 500 : 400 }}>
                  {l.label}
                </a>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 py-14" style={{ maxWidth: "var(--content-max-width)", minWidth: 0 }}>
          {children}
        </main>
      </div>

      <footer className="mt-10 px-6 py-6 text-center"
        style={{ borderTop: "1px solid var(--color-border)", color: "var(--color-text-muted)", fontSize: 11 }}>
        © 2025 {profile.name} · Designed in Figma · Built in Cursor · Coffee with pride in Indonesia
      </footer>
    </div>
  );
}

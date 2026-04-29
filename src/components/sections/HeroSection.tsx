import Image from "next/image";
import type { Profile } from "@/lib/types";

interface HeroSectionProps {
  profile: Profile;
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <div id="about" className="flex flex-col gap-5 pb-10">
      {/* Name + Avatar row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1
            style={{
              color: "var(--color-text-primary)",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            {profile.name}
          </h1>

          {/* Highlight pills */}
          <div className="flex flex-wrap gap-1.5 mt-1">
            {profile.highlights.map((h) => (
              <span
                key={h}
                className="rounded px-2 py-0.5"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-secondary)",
                  fontSize: 11,
                }}
              >
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div
          className="relative flex-shrink-0 overflow-hidden rounded-lg"
          style={{
            width: 100,
            height: 150,
            border: "1px solid var(--color-border)",
            background: "var(--color-surface)",
          }}
        >
          <Image
            src={profile.avatar}
            alt={profile.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* About text */}
      <p
        style={{
          color: "var(--color-text-secondary)",
          fontSize: 13,
          lineHeight: 1.75,
          maxWidth: 480,
        }}
      >
        {profile.about}
      </p>
    </div>
  );
}
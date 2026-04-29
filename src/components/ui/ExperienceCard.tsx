import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { WorkExperience, Education } from "@/lib/types";

type CardData = WorkExperience | Education;

interface ExperienceCardProps {
  data: CardData;
}

function isWork(data: CardData): data is WorkExperience {
  return "company" in data;
}

export function ExperienceCard({ data }: ExperienceCardProps) {
  const title = isWork(data) ? data.role : data.degree;
  const subtitle = isWork(data) ? data.company : data.institution;
  const subtitleHref = isWork(data) ? data.companyUrl : undefined;
  const location = isWork(data) ? data.location : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      {/* Row 1: title + badge */}
      <div className="flex items-center gap-2 flex-wrap">
        <span style={{ color: "var(--color-text-primary)", fontWeight: 500, fontSize: 13 }}>
          {title}
        </span>
        {data.badge && <Badge label={data.badge.label} variant={data.badge.variant} />}
      </div>

      {/* Row 2: meta */}
      <div
        className="flex items-center gap-2 flex-wrap text-xs"
        style={{ color: "var(--color-text-muted)" }}
      >
        {subtitleHref ? (
          <Link
            href={subtitleHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {subtitle}
          </Link>
        ) : (
          <span style={{ color: "var(--color-text-secondary)" }}>{subtitle}</span>
        )}
        <span>·</span>
        {location && (
          <>
            <span>{location}</span>
            <span>·</span>
          </>
        )}
        <span>{data.period}</span>
      </div>

      {/* Description */}
      {data.description && (
        <p style={{ color: "var(--color-text-muted)", fontSize: 12, lineHeight: 1.7 }}>
          {data.description}
        </p>
      )}
    </div>
  );
}

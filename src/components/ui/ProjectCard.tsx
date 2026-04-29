import Link from "next/link";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const Wrapper = project.url ? Link : "div";
  const wrapperProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    // @ts-expect-error polymorphic wrapper
    <Wrapper
      {...wrapperProps}
      className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150"
      style={{
        border: "1px solid var(--color-border)",
        background: "var(--color-surface)",
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
        (e.currentTarget as HTMLElement).style.background = "var(--color-surface-hover)";
        (e.currentTarget as HTMLElement).style.borderColor = "#2a2a2a";
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
        (e.currentTarget as HTMLElement).style.background = "var(--color-surface)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
      }}
    >
      {/* Icon */}
      <div
        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md text-sm"
        style={{ background: "var(--color-border)" }}
      >
        {project.icon ?? "◆"}
      </div>

      {/* Text */}
      <div className="flex flex-col min-w-0">
        <span style={{ color: "var(--color-text-primary)", fontSize: 12, fontWeight: 500 }}>
          {project.name}
        </span>
        <span style={{ color: "var(--color-text-muted)", fontSize: 11 }}>
          {project.description}
        </span>
      </div>

      {/* Arrow */}
      {project.url && (
        <span
          className="ml-auto flex-shrink-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
          style={{ color: "var(--color-text-muted)", fontSize: 12 }}
        >
          ↗
        </span>
      )}
    </Wrapper>
  );
}

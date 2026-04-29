import { SectionWrapper } from "@/components/ui/SectionWrapper";
import type { SkillGroup } from "@/lib/types";

interface ProficienciesSectionProps {
  skills: SkillGroup[];
}

export function ProficienciesSection({ skills }: ProficienciesSectionProps) {
  return (
    <SectionWrapper id="proficiencies" label="Proficiencies">
      <div className="flex flex-col gap-5">
        {skills.map((group) => (
          <div key={group.category} className="flex gap-6">
            {/* Category label */}
            <span
              className="w-28 flex-shrink-0 pt-0.5"
              style={{ color: "var(--color-text-muted)", fontSize: 12 }}
            >
              {group.category}
            </span>

            {/* Items */}
            <div className="flex flex-col gap-0.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  style={{ color: "var(--color-text-secondary)", fontSize: 12 }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

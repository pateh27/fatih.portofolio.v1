import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import type { WorkExperience } from "@/lib/types";

interface WorkSectionProps {
  experiences: WorkExperience[];
}

export function WorkSection({ experiences }: WorkSectionProps) {
  return (
    <SectionWrapper id="work" label="Work">
      <div className="flex flex-col gap-7">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} data={exp} />
        ))}
      </div>
    </SectionWrapper>
  );
}

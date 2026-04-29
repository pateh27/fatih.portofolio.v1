import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import type { Education } from "@/lib/types";

interface EducationSectionProps {
  educations: Education[];
}

export function EducationSection({ educations }: EducationSectionProps) {
  return (
    <SectionWrapper id="education" label="Education">
      <div className="flex flex-col gap-7">
        {educations.map((edu) => (
          <ExperienceCard key={edu.id} data={edu} />
        ))}
      </div>
    </SectionWrapper>
  );
}

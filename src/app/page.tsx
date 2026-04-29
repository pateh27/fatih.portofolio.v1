import { SITE_DATA } from "@/lib/constants/site-data";
import { PageLayout } from "@/components/layout/PageLayout";
import { ProficienciesSection } from "@/components/sections/ProficienciesSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";

export default function HomePage() {
  const { profile, skills, educations, certificates, projects, contacts } =
    SITE_DATA;

  return (
    <PageLayout profile={profile} contacts={contacts}>
      <HeroSection profile={profile} />
      <ProficienciesSection skills={skills} />
      <EducationSection educations={educations} />
      <CertificatesSection certificates={certificates} />
      <ProjectsSection projects={projects} />
      <ContactSection contacts={contacts} />
    </PageLayout>
  );
}

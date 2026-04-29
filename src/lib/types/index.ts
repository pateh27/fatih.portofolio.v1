// ─── Proficiency ──────────────────────────────────────────────────────────────
export interface SkillGroup {
  category: string;
  items: string[];
}

// ─── Work Experience ──────────────────────────────────────────────────────────
export type BadgeVariant = "green" | "blue" | "gray";

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  description: string;
  badge?: {
    label: string;
    variant: BadgeVariant;
  };
}

// ─── Education ────────────────────────────────────────────────────────────────
export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
  badge?: {
    label: string;
    variant: BadgeVariant;
  };
}

// ─── Certificate ──────────────────────────────────────────────────────────────
export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

// ─── Project ──────────────────────────────────────────────────────────────────
export interface Project {
  id: string;
  name: string;
  description: string;
  url?: string;
  githubUrl?: string;
  icon?: string;
  tags?: string[];
}

// ─── Contact ──────────────────────────────────────────────────────────────────
export interface ContactLink {
  label: string;
  href: string;
  icon?: string;
}

// ─── Profile ──────────────────────────────────────────────────────────────────
export interface Profile {
  name: string;
  title: string;
  avatar: string;
  about: string;
  highlights: string[];
}

// ─── Site Data ────────────────────────────────────────────────────────────────
export interface SiteData {
  profile: Profile;
  skills: SkillGroup[];
  educations: Education[];
  certificates: Certificate[];
  projects: Project[];
  contacts: ContactLink[];
}

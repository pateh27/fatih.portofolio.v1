import type { SiteData } from "@/lib/types";

export const SITE_DATA: SiteData = {
  profile: {
    name: "Muhammad Al-Fatih Ulima Robby",
    title: "Junior Web Developer",
    avatar: "/images/profile.png",
    about:
      "When I'm not coding, you'll find me on the sports court, offroading, or sharing a good meal with friends.",
    highlights: [
      "Passionate about crafting elegant and efficient web solutions",
      "Eager to learn and grow in the ever-evolving world of web development",
      "Open to Work",
    ],
  },

  skills: [
    {
      category: "Skills",
      items: [
        "API Design",
        "Frontend Architecture",
        "Problem Solving",
      ],
    },
    {
      category: "Database & Tools",
      items: ["VS Code", "Figma", "Git", "Stripe API", "Firebase", "Supabase",],
    },
    {
      category: "Tech Stack",
      items: [
        "React",
        "TypeScript",
        "Node.js",
        "Next.js",
        "Tailwind CSS",
        "C++",
        "Python",
        "MySQL",

        "...",
      ],
    },
    {
      category: "Spoken Languages",
      items: ["English", "Indonesian"],
    },
  ],


  educations: [
    {
      id: "edu-1",
      degree: "MIT AR-ROIHAN",
      institution: "Elementary School",
      period: "2010 — 2017",
      description:
        "I first got involved with an organization when I was in elementary school, through the Scouting program. There, I won second place in the Greater Malang region competition.",
    },
    {
      id: "edu-2",
      degree: "SMP Bani Hasyim ",
      institution: "Junior High School",
      period: "2017 — 2020",
      description:
        "In middle school, I was a member of the student council, and in my second year, I served as student council president for the 2018-2019 term.",
    },
    {
      id: "edu-3",
      degree: "SMA Negeri 1 Purwosari",
      institution: "Vocational High School",
      period: "2020 — 2023",
      description:
        "In high school, I was part of the programming club and participated in various programming competitions.",
    },
    {
      id: "edu-4",
      degree: "State of Polytechnic of Malang",
      institution: "Bachelor of Computer Science",
      period: "2023 — Present",
      description:
        "I am currently pursuing a Bachelor of Computer Science at the State of Polytechnic of Malang.",
    },
  ],

  certificates: [
    {
      id: "cert-1",
      name: "AI Ignition Training Program",
      issuer: "Training on how to use artificial intelligence wisely and learn to use proper language in engineering activities.",
      date: "April, 2026",
    },
  ],

  projects: [
    {
      id: "proj-1",
      name: "Simapres",
      description: "Sistem Informasi Manajemen Prestasi Mahasiswa State of Polytechnic of Malang",
      url: "https://github.com/anugerahhrama/simapres-app",
      icon: "🏆",
    },
    {
      id: "proj-2",
      name: "Jawara Mobile App",
      description: "Jawara Mobile is a resident management app for a housing complex.",
      url: "https://github.com/FarhanMawaludin/Jawara_Mobile",
      icon: "🔷",
    },
    {
      id: "proj-3",
      name: "Aquavion",
      description: "Aquavion is a water quality monitoring system that utilizes IoT technology to provide real-time data on water conditions.",
      url: "https://github.com",
      icon: "💧",
    },
  ],

  contacts: [
    { label: "Mail", href: "m.alfatihgithub@gmail.com" },
    { label: "GitHub", href: "https://github.com/pateh27" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-al-fatih-ulima-robby/" },
  ],
};

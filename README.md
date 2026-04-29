# Portfolio — Jake Smith

Personal portfolio built with **Next.js 14 App Router + TypeScript + Tailwind CSS**.  
Dark theme, clean architecture, responsive layout matching the Figma reference.

---

## Tech Stack

| Layer        | Choice                          |
|-------------|----------------------------------|
| Framework   | Next.js 14 (App Router)          |
| Language    | TypeScript (strict)              |
| Styling     | Tailwind CSS + CSS Variables     |
| Animations  | Framer Motion                    |
| Fonts       | Geist Sans + Geist Mono (Vercel) |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        ← Root layout, font loading, metadata
│   └── page.tsx          ← Home page, composes all sections
│
├── components/
│   ├── layout/
│   │   └── PageLayout.tsx        ← Sidebar + content wrapper
│   │
│   ├── sections/                 ← One file per page section
│   │   ├── HeroSection.tsx
│   │   ├── ProficienciesSection.tsx
│   │   ├── WorkSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── CertificatesSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   │
│   ├── ui/                       ← Reusable primitives
│   │   ├── Badge.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SectionWrapper.tsx
│   │
│   └── index.ts                  ← Barrel exports
│
├── hooks/
│   └── useActiveSection.ts       ← Scroll-based active nav tracking
│
├── lib/
│   ├── constants/
│   │   └── site-data.ts          ← ✏️  EDIT THIS to customize content
│   ├── types/
│   │   └── index.ts              ← All TypeScript interfaces
│   └── utils/
│       └── cn.ts                 ← Tailwind class merger
│
└── styles/
    └── globals.css               ← Design tokens (CSS variables) + base reset
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → http://localhost:3000

# Type check
npm run type-check

# Build for production
npm run build
```

---

## Customizing Content

All content lives in a single file:

```
src/lib/constants/site-data.ts
```

Edit the `SITE_DATA` object to update:
- **profile** — name, title, avatar, about text, highlight pills
- **skills** — proficiency categories and items
- **experiences** — work history
- **educations** — education history
- **certificates** — certifications
- **projects** — featured projects
- **contacts** — contact links

---

## Customizing Design

Design tokens are defined as CSS variables in `src/styles/globals.css`:

```css
:root {
  --color-background: #0a0a0a;
  --color-surface:    #111111;
  --color-accent-green: #3ecf6e;
  /* ... */
}
```

Change any variable to update the entire theme consistently.

---

## Adding Your Avatar

Place your photo at:
```
public/images/avatar.jpg
```

Or update the path in `site-data.ts`:
```ts
profile: {
  avatar: "/images/your-photo.jpg",
  ...
}
```

---

## Deployment

Deploy to Vercel with zero config:

```bash
npx vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for auto-deploys.

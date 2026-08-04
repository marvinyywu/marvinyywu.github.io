# Marvin Wu — Personal Portfolio

My personal portfolio site, built with Next.js, React, and TypeScript. It covers my background, work experience, projects, skills, education, and certifications, and is continually updated as I build new things and my career progresses.

**Live site:** [marvinyywu.github.io](https://marvinyywu.github.io/)

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS with [shadcn/ui](https://ui.shadcn.com/) components (Radix UI primitives)
- **Icons:** [react-icons](https://react-icons.github.io/react-icons/) and [react-devicons](https://www.npmjs.com/package/react-devicons)
- **Animation:** [Motion](https://motion.dev/)
- **Forms/validation:** react-hook-form + zod

## Project Structure

```
src/
  app/            # Page sections and layout (About, Experience, Projects, Skills, Education, Certifications, Navigation, etc.)
  components/ui/  # shadcn/ui component library
  hooks/          # Shared React hooks
  lib/            # Shared utilities
public/           # Static assets (images, logos, resume PDF)
```

Each portfolio section (`about.tsx`, `experience.tsx`, `projects.tsx`, `skills.tsx`, `education.tsx`, `certifications.tsx`) is a self-contained component composed together in [page.tsx](src/app/page.tsx).

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

Other scripts:

```bash
npm run build   # Production build
npm run start   # Serve the production build
npm run lint    # Run ESLint
```

## Deployment

The site is automatically built and deployed to GitHub Pages via GitHub Actions ([.github/workflows/nextjs.yml](.github/workflows/nextjs.yml)) on every push to `main`. A separate CI workflow ([.github/workflows/ci.yml](.github/workflows/ci.yml)) lints and builds on pull requests to catch issues before merge.

# Hacker News Clone - Project Context

## Project Overview
A fully responsive clone of Hacker News (Y Combinator) built for a hackathon. The goal is to replicate the classic, information-dense aesthetic while using a modern headless stack.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **CMS:** Sanity.io (Headless CMS)
- **Icons:** Lucide React
- **Deployment:** Vercel

## Key Features & Constraints
1. **Classic UI:** Stick to the original Hacker News design philosophy (minimalist, system fonts, high information density).
2. **Submit Link Mock:** When the "Submit" button is clicked, show a popup: *"This is just a clone haha using gemini for hackathon, please visit the original one."*
3. **Responsiveness:** Fully responsive design that scales from mobile to desktop.
- **Content Management:** Sanity will be used to store stories and comments.
- **Data Source:** Manual entry or custom script (no live HN API sync for now).

## Specialized Guidance
- Use the `epic-react-best-practices` skill for code quality and patterns.
- Follow Next.js App Router best practices (Server Components by default).

# LaunchPad — Product feedback & roadmap SaaS

LaunchPad is a polished, responsive frontend prototype for a multi-tenant product feedback platform. It includes a private workspace dashboard and a public product portal.

## Features

- Dashboard overview with KPI cards, activity chart and trending feedback
- Feedback board with search, status filters, sorting, voting and create-feedback modal
- Roadmap kanban grouped by Planned, In progress and Complete; update item status
- Analytics charts and top requested ideas
- Workspace settings and branding UI
- Public product home, feedback board, roadmap and changelog (`/acme`)
- Responsive navigation and reusable UI components
- Shared in-memory client state across dashboard and public portal

## Tech stack

- Next.js 15 App Router + React 19 + TypeScript
- Tailwind CSS
- Recharts for analytics
- Lucide React icons

## Getting started

Requirements: Node.js 20.9+ and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The admin dashboard opens by default. Visit [http://localhost:3000/acme](http://localhost:3000/acme) for the public portal.

## Available routes

| Route | Description |
|---|---|
| `/dashboard` | Workspace overview |
| `/dashboard/feedback` | Manage feedback and create ideas |
| `/dashboard/roadmap` | Roadmap kanban |
| `/dashboard/analytics` | Community analytics |
| `/dashboard/settings` | Workspace settings |
| `/[productSlug]` | Public product landing page |
| `/[productSlug]/feedback` | Public feedback board |
| `/[productSlug]/roadmap` | Public roadmap |
| `/[productSlug]/changelog` | Product updates |

## Project structure

```text
src/
├── app/
│   ├── (dashboard)/dashboard/     # Private workspace routes
│   ├── (public)/[productSlug]/    # Public product portal
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── layout/                    # Sidebar and dashboard shell
│   ├── providers.tsx              # Shared client-side demo state
│   └── ui.tsx                     # Reusable UI primitives
├── lib/data.ts                    # Seed/demo data
└── types/index.ts                 # Shared TypeScript types
```

## Important implementation note

This repository is a frontend portfolio project, not a production backend. Feedback, votes and status changes are held in React client state and reset on refresh. Authentication, organization isolation, persistent storage, server-side authorization, email delivery, real-time events and file uploads are intentionally not simulated as secure production features.

### Suggested next backend milestones

1. Add Auth.js authentication and organization membership.
2. Add PostgreSQL + Prisma models and migrations.
3. Move mutations into validated server actions / route handlers.
4. Enforce organization-level authorization on every read and write.
5. Add durable voting constraints (`@@unique([userId, feedbackId])`).
6. Add tests with Vitest and Playwright.
7. Add email notifications and realtime updates.

## Quality commands

```bash
npm run typecheck
npm run build
```

## Deployment

Import the repository into Vercel, select the Next.js framework preset, and deploy. Add environment variables when backend services are introduced.

## Resume description

**LaunchPad — Product Feedback & Roadmap SaaS** | Next.js, TypeScript, Tailwind CSS, Recharts

Built a responsive SaaS product feedback platform featuring a customer-facing feedback portal, interactive voting, roadmap management, workspace analytics and configurable settings. Designed reusable components and modular App Router layouts, with shared client-side state for an end-to-end frontend prototype.

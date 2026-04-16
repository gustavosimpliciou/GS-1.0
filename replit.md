# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Artifacts

### `artifacts/portfolio` — Gustavo Simplício Portfolio (preview at `/`)
Single-page portfolio for graphic designer & web designer Gustavo Jesus de França Simplício.
- React + Vite, Framer Motion animations, Inter font
- Sections: Hero, About, Portfolio Gallery (lightbox), Web Design video, CTA, Footer
- Floating WhatsApp button (https://wa.me/5583981926225)
- Dark theme with near-black palette (#0d0d0d background)
- Portfolio images: `public/assets/art1.jpg` – `art8.jpg`
- Portfolio video: `public/assets/video1.mp4`
- Graceful fallbacks when assets are missing

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

# CLAUDE.md — Next.js Project

## Stack
- Framework : Next.js (TypeScript)
- Rendering : App Router (RSC + Client Components)
- Styling   : CSS Modules

## Commands
- `npm run dev`   — development server (http://localhost:3000)
- `npm run build` — production build
- `npm start`     — production server
- `npm test`      — run tests

## Structure
src/
  app/          ← App Router pages and layouts
  components/   ← shared UI components
  lib/          ← server utilities, db clients
  utils/        ← shared helpers

> A PROJECT_BLUEPRINT.md is present — Claude Code will read it during Phase 0.

## Conventions
1. Server Components by default, `'use client'` only when needed
2. API routes in `src/app/api/`
3. Environment variables via `src/env.ts` (validated)
4. Tout output console passe par un logger centralisé

# AGENT_WORKFLOW.md — todo-app

> Decomposition produced in Phase 0 from `PROJECT_BLUEPRINT.md`.
> Stack: Next.js 14 (App Router) + TypeScript + Tailwind CSS + localStorage (no backend).
> 4 agents, ordered by dependency. Each has a runnable success criterion.

---

## Agent 1 — Infra & Configuration

**Goal**: Scaffold a working Next.js 14 (App Router) + TypeScript + Tailwind CSS project.

**Scope (in)**:
- Initialize `package.json` with Next.js 14, React 18, TypeScript, Tailwind CSS, and required dev dependencies (`@types/*`, `postcss`, `autoprefixer`).
- Configuration files: `next.config.js` (or `.mjs`), `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `.gitignore`, `.eslintrc.json` (next/core-web-vitals).
- App Router skeleton: `src/app/layout.tsx`, `src/app/page.tsx` (placeholder), `src/app/globals.css` with Tailwind directives.
- Folder structure per CLAUDE.md: `src/app/`, `src/components/`, `src/lib/`, `src/utils/`.

**Scope (out)**:
- No business logic, no Task model, no components beyond the placeholder page.

**Deliverables**:
- `package.json`, `tsconfig.json`, `next.config.mjs`, `tailwind.config.ts`, `postcss.config.js`, `.gitignore`, `.eslintrc.json`
- `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`

**Success criterion**:
```bash
npm install && npm run build
```
Build must succeed with zero errors. `npm run dev` must serve a blank page at http://localhost:3000.

---

## Agent 2 — Data Layer (Types, Storage, Hooks)

**Goal**: Implement the Task domain model, localStorage persistence, and a custom hook exposing CRUD + filter state to the UI.

**Scope (in)**:
- `src/lib/types.ts` — `Task` type (`id`, `title`, `completed`, `createdAt`) and `Filter` type (`'all' | 'active' | 'completed'`).
- `src/lib/storage.ts` — pure functions `loadTasks()`, `saveTasks(tasks)` with SSR-safe `typeof window` guards and JSON parse error handling.
- `src/lib/useTasks.ts` (client hook) — `useTasks()` returning `{ tasks, addTask, toggleTask, deleteTask, filter, setFilter, filteredTasks, activeCount }`. Hydrates from localStorage on mount; persists on every change.

**Scope (out)**:
- No UI components, no styling.

**Deliverables**:
- `src/lib/types.ts`
- `src/lib/storage.ts`
- `src/lib/useTasks.ts`

**Success criterion**:
```bash
npm run build
```
Build must succeed. `npx tsc --noEmit` must report zero type errors.

---

## Agent 3 — UI Components & Page

**Goal**: Build the full Todo UI wired to the data layer.

**Scope (in)**:
- `src/components/TaskForm.tsx` — controlled input + submit, calls `addTask`.
- `src/components/TaskItem.tsx` — checkbox (toggle), title (line-through when completed), delete button.
- `src/components/TaskList.tsx` — renders filtered tasks, empty state.
- `src/components/TaskFilter.tsx` — three buttons (all / active / completed), highlights active filter.
- `src/components/TaskFooter.tsx` — displays active task count (e.g. "3 items left").
- `src/app/page.tsx` — replaces placeholder; client component composing the above with `useTasks()`.
- Tailwind styling: clean, centered card layout, responsive.

**Scope (out)**:
- No editing of existing data layer or config.

**Deliverables**:
- The 5 components above + updated `src/app/page.tsx`.

**Success criterion**:
```bash
npm run build
```
Build must succeed. Manual smoke test via `npm run dev`: add a task, toggle it, delete it, switch filters, reload the page — tasks persist.

---

## Agent 4 — Build & Release Verification

**Goal**: Confirm the production build is clean and ready to ship.

**Scope (in)**:
- Run `npm run build` (production) and `npm start` to verify the production server boots.
- Run `npx tsc --noEmit` and `npm run lint` (next lint) — fix any warnings.
- Verify `.gitignore` excludes `node_modules`, `.next`, `out`.
- Confirm README commands still match reality.

**Scope (out)**:
- No new features, no refactors.

**Deliverables**:
- A clean production build artifact in `.next/`.
- All lint and type checks passing.

**Success criterion**:
```bash
npm run build && npx tsc --noEmit && npm run lint
```
All three commands must exit 0.

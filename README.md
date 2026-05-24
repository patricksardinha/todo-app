# todo-app

> A simple web app where you can create, complete and delete tasks. Tasks persist across page reloads.

## Overview

A simple web app where you can create, complete and delete tasks. Tasks persist across page reloads.

## Tech Stack

| Technology | Details |
|---|---|
| **Framework** | Next.js |
| **Language** | TypeScript |

**Tech constraints (from blueprint)**:
- Next.js 14 (App router)
- Typescript
- Tailwind CSS
- localStorage for persistance (no backend)

## Getting Started

```bash
npm install
npm run dev   # development server (http://localhost:3000)
npm run build # production build
```

## Features

- Add a task with a title
- Mark a task as complete
- Delete a task
- Filter tasks: all / active / completed
- Task count displayed at the bottom

## Project Structure

```
src/
  app/          ← App Router pages and layouts
  components/   ← shared UI components
  lib/          ← server utilities, db clients
  utils/        ← shared helpers
```

## Built with AgentKit

This project was scaffolded with [AgentKit](https://www.npmjs.com/package/@patricksardinha/agentkit-cli) — a CLI that generates AI-native agent workflows for Claude Code.

Read `PLAYBOOK.md` to understand the agent workflow that built this project.

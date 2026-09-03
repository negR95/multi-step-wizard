# Persian Multi-Step Wizard

A three-step form built with Next.js, TypeScript, Tailwind CSS, and Zod. Form data is preserved across routes and page refreshes, then submitted in a single request to a mock API at the end.

## Features

- **Multi-step wizard** with three distinct routes using the Next.js App Router
- **State management** via React Context and Reducer
- **Persistence** of form data in `localStorage` so it survives route changes and reloads
- **Schema validation** with Zod — per-step schemas plus a final aggregated schema
- **Server-side revalidation** in the Route Handler before final submission
- **Single submission** of the complete payload to the API endpoint
- **Custom progress bar** showing current step and completion status
- **Reusable styles** using Tailwind's `@apply` directive
- **Right-to-left (RTL) interface** with the local Vazirmatn font

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Using pnpm
pnpm install

# Or using npm
npm install
```

### Development

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Quality Checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Project Structure

```
src/
├── app/
│   ├── api/submissions/        # Mock API endpoint (POST)
│   ├── wizard/
│   │   ├── basic-step/         # Step 1
│   │   ├── address-step/       # Step 2
│   │   └── additional-step/    # Step 3 + final submission
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/                 # Shared UI (FormField, StepHeading, WizardProgress, etc.)
├── context/                    # WizardContext (state + reducer)
├── hooks/                      # useBasicForm, useAddressForm, useAdditionalForm, useWizardProgress
├── lib/                        # validation.ts, wizardData.ts
└── types/                      # Shared TypeScript types
```

## Technical Notes

- Each step lives at its own route so navigation and the back/forward buttons work naturally.
- Step-level Zod schemas validate input as the user advances; the full schema re-validates the payload on the server before it is accepted.
- Form values are hydrated from `localStorage` on mount and written back on every change.
- The submission route handler at `/api/submissions` echoes back the validated payload and a success status.

## Scripts

| Script      | Description                  |
| ----------- | ---------------------------- |
| `dev`       | Start the development server |
| `build`     | Create a production build    |
| `start`     | Run the production build     |
| `lint`      | Run ESLint                   |
| `typecheck` | Run TypeScript type checks   |

## License

This project is provided as a sample/demo application.

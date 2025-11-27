# Tech Stack

## Core Framework
- **Next.js 16** (App Router) with React 19
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** for styling

## UI Libraries
- **shadcn/ui** - Accessible component library (New York style)
- **Aceternity UI** - Advanced animated components
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Utilities
- `clsx` + `tailwind-merge` - Conditional class merging via `cn()` helper
- `class-variance-authority` - Component variant management

## Build System
- Next.js built-in bundler (Turbopack in dev)
- PostCSS with Tailwind CSS v4
- ESLint for code quality

## Common Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint

# Add UI Components
npx shadcn@latest add [component-name]  # Add shadcn/ui component
```

## Path Aliases
- `@/*` maps to project root (e.g., `@/components`, `@/lib`)

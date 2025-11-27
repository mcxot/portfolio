# Project Structure

## Directory Organization

```
/app                    # Next.js App Router pages and layouts
  layout.tsx           # Root layout with fonts and metadata
  page.tsx             # Home page
  globals.css          # Global styles and CSS variables

/components            # React components
  /ui                  # UI library components (shadcn/ui + Aceternity)

/lib                   # Utility functions and helpers
  utils.ts             # cn() helper for class merging
  aceternity-utils.ts  # Aceternity UI utilities

/public                # Static assets (images, SVGs)

/.kiro                 # Kiro AI assistant configuration
  /steering            # AI steering rules
```

## Code Conventions

### Component Patterns
- Use `"use client"` directive for client components with interactivity
- Server components by default (no directive needed)
- Export components as named or default exports

### Styling
- Use Tailwind utility classes
- CSS variables defined in `globals.css` for theming
- Use `cn()` helper from `@/lib/utils` for conditional classes
- Dark mode via `.dark` class on root element

### TypeScript
- Strict mode enabled
- Use proper typing for props and functions
- Prefer `type` over `interface` for component props

### Imports
- Use `@/` path alias for absolute imports
- Group imports: React → Next.js → Third-party → Local

### UI Components
- shadcn/ui components go in `/components/ui`
- Aceternity UI components also go in `/components/ui`
- Both libraries can coexist and share the same directory

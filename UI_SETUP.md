# UI Libraries Setup

This project now has **shadcn/ui** and **Aceternity UI** installed and configured.

## shadcn/ui

### Installation Complete ✓
- Dependencies installed: `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`
- Configuration file: `components.json`
- Utility function: `lib/utils.ts`
- CSS variables configured in `app/globals.css`

### Adding Components
To add shadcn/ui components, use the CLI:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
# etc.
```

### Usage Example
```tsx
import { Button } from "@/components/ui/button"

export default function Page() {
  return <Button>Click me</Button>
}
```

## Aceternity UI

### Installation Complete ✓
- Dependencies installed: `framer-motion`, `clsx`, `tailwind-merge`
- Utility function: `lib/aceternity-utils.ts`

### Adding Components
Copy components from [Aceternity UI](https://ui.aceternity.com/components) into `components/ui/` directory.

### Usage Example
```tsx
// After copying a component from Aceternity UI
import { HeroHighlight } from "@/components/ui/hero-highlight"

export default function Page() {
  return <HeroHighlight>Your content</HeroHighlight>
}
```

## Next Steps

1. **shadcn/ui**: Run `npx shadcn@latest add [component-name]` to add components
2. **Aceternity UI**: Visit https://ui.aceternity.com/components and copy desired components
3. Both libraries work together seamlessly with Tailwind CSS

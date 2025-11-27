# Modern Dark Portfolio

A premium dark mode portfolio website built with Next.js 16, featuring stunning animations and modern UI components.

## Features

- **Dark Mode Design** - Deep blacks with purple/blue gradient accents
- **Smooth Animations** - Powered by Framer Motion
- **Interactive Components** - 3D cards, spotlight effects, and micro-interactions
- **Fully Responsive** - Optimized for all screen sizes
- **Modern Tech Stack** - Next.js 16, React 19, TypeScript, Tailwind CSS v4

## Sections

1. **Hero** - Animated spotlight effect, text generation, and floating navigation
2. **About** - Bento grid layout with skill cards and hover effects
3. **Projects** - 3D card carousel with project details and modal dialogs
4. **Services** - Animated tabs with pricing cards
5. **Contact** - Interactive form with social links and toast notifications

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui components
- Aceternity UI components
- Framer Motion
- Lucide React icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Customization

### Update Content

- **Hero Section**: Edit `components/sections/hero.tsx`
- **About Section**: Modify skills array in `components/sections/about.tsx`
- **Projects**: Update projects array in `components/sections/projects.tsx`
- **Services**: Edit services array in `components/sections/services.tsx`
- **Contact**: Customize form in `components/sections/contact.tsx`

### Colors

The color scheme uses CSS variables defined in `app/globals.css`. The primary gradient is purple (#8b5cf6) to blue (#3b82f6).

### Add More Components

```bash
# Add shadcn/ui components
npx shadcn@latest add [component-name]

# Copy Aceternity UI components from https://ui.aceternity.com/components
```

## Project Structure

```
/app                    # Next.js pages and layouts
/components
  /sections            # Main page sections
  /ui                  # UI components (shadcn + Aceternity)
/lib                   # Utility functions
/public                # Static assets
```

## Deploy

Deploy easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

MIT

# PixelForge

A personal UI playground and component library for collecting, crafting, and refining beautiful interfaces.

## About
PixelForge is a curated collection of React components, interactive patterns, and UI experiments. It serves as an active workspace for testing animations, building accessibility-first components, and organizing design inspiration into a reusable library.

## Goals
- **Collect**: Gather beautiful UI patterns and inspiration from the web.
- **Experiment**: Prototype new layouts, animations, and micro-interactions.
- **Refine**: Polish components for accessibility, responsiveness, and dark mode support.
- **Document**: Catalog components visually with Storybook.
- **Reuse**: Provide a stable foundation for exporting and reusing components across other projects.

## Tech Stack
- **React** (v19)
- **TypeScript** (Strict)
- **Vite** (Build & Dev)
- **Storybook** (Visual Component Development)
- **Tailwind CSS v4** (Primary Styling Strategy)
- **Framer Motion** (Animations)
- **Vitest** (Unit Testing)

## Repository Structure
- `components/` - Stable, independent, reusable UI components (e.g., Buttons, Cards).
- `patterns/` - Compositions of components (e.g., Dashboards, Authentication).
- `experimental/` - Early-stage prototypes and motion experiments.
- `styles/` - Global stylesheets and design tokens.
- `lib/` - Shared utilities like Tailwind merge functions.
- `inspiration/` - Documentation of external UI references and attributions.
- `templates/` - Standard boilerplate for creating new components.
- `docs/` - Comprehensive guides on architecture and contribution.

## Development

Install dependencies:
```bash
npm install
```

Start the Vite development server:
```bash
npm run dev
```

Start the Storybook visual testing environment:
```bash
npm run storybook
```

Run tests and checks:
```bash
npm run test          # Run Vitest
npm run lint          # Run ESLint
npm run typecheck     # Verify TypeScript types
npm run format:check  # Check Prettier formatting
```

Build the library:
```bash
npm run build
```

## Component Philosophy
Components are built to be:
- **Independently renderable**: Do not rely on global app state.
- **Portable**: Easily imported into other projects.
- **Accessible**: Built with semantic HTML and appropriate ARIA roles.
- **Responsive**: Fluid layouts using modern CSS techniques.
- **Typed**: Fully typed with strict TypeScript props.
- **Documented**: Every component features an interactive Storybook story.
- **Tested**: Verified with unit and behavior tests where meaningful.

## Inspiration & Attribution
When building components inspired by the community, attributions are tracked in the `inspiration/` folder and noted in the component's README. See `inspiration/README.md` for our approach to external code and design references.

## Status
🚧 **Actively Evolving** - PixelForge is a personal, living repository. Components are frequently refactored and APIs may change without warning.

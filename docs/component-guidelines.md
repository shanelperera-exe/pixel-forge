# Component Guidelines

## Component Structure

Every reusable component must follow this directory structure:

```text
ComponentName/
├── ComponentName.tsx
├── ComponentName.stories.tsx
├── ComponentName.test.tsx
├── README.md
└── index.ts
```

## Styling

- Favor **Tailwind CSS** for all styling needs.
- Keep components as independently renderable and portable as possible.

## Naming

- Use `PascalCase` for component directories and `.tsx` files.
- Use `kebab-case` for category directories (e.g., `data-display/`).

## Props

- Explicitly type all component props using TypeScript `type` or `interface`.
- Export the prop type from the component file if it might be useful for composition.

## Accessibility

- Use semantic HTML tags (`<button>`, `<a>`, `<dialog>`).
- Ensure all interactive elements have visible focus states.
- Support keyboard interaction for all custom interactive components.

## Responsiveness

- Components should adapt to their container size.
- Use Tailwind's responsive modifiers (`sm:`, `md:`, `lg:`) to handle responsive behavior.

## Animation & Reduced Motion

- Use `framer-motion` for complex animations.
- Always respect `prefers-reduced-motion`. In Framer Motion, use `useReducedMotion` hook or `transition` properties conditionally.

## Testing

- Write tests in `ComponentName.test.tsx` using `Vitest` and `React Testing Library`.
- Focus on behavior and accessibility rather than implementation details.

## Component Lifecycle

1. **Idea**: An initial concept.
2. **Experiment**: Drafted in `src/experimental/`.
3. **Prototype**: Refined functionality.
4. **Stable Component**: Moved to `src/components/`, fully tested, and exported via `src/index.ts`.

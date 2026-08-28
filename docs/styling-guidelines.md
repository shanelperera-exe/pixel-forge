# Styling Guidelines

## Tailwind CSS
Tailwind CSS v4 is the default and preferred styling strategy for PixelForge. You should use Tailwind for almost all styling needs.

## CSS Modules
While CSS Modules are supported, their usage should be minimal. Use them only when a specific styling requirement is extremely complex or impossible to achieve cleanly with Tailwind CSS.

## Design Tokens
We use Tailwind's configuration for global design tokens, such as specific colors, shadows, and fonts. When adding a new, globally shared color or spacing value, add it to the Tailwind configuration.

## Component-specific Styling
When a component has its own unique visual identity, try to encapsulate its classes within the component itself. Avoid polluting the global CSS with component-specific styles.

## Responsive Styling
Always design with responsiveness in mind. Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) to handle different breakpoints, ensuring components look great on any device.

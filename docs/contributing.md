# Contributing to PixelForge

## Branch Naming

- Use descriptive branch names: `feature/component-name`, `fix/component-name`, `experiment/idea`.

## Commit Conventions

- Use conventional commits: `feat: add Button component`, `fix: correct Button padding`, `docs: update styling guidelines`, `chore: update dependencies`.

## Adding Components

- Follow the structure defined in `docs/component-guidelines.md`.
- Use the provided component template in `templates/component/` as a starting point.
- Write a `.stories.tsx` file to document all variants and states.
- Ensure the component is accessible and responsive.

## Testing

- Add Vitest/React Testing Library tests for component behavior in `ComponentName.test.tsx`.
- Run `npm run test` before committing.

## Attribution

- When adapting external code, properly attribute the source in `inspiration/sources.md` and the component's `README.md`.

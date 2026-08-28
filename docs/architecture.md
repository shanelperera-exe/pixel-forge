# Architecture

## Overall Architecture

PixelForge is structured to serve as a personal UI component library, not a single monolithic application. It consists of self-contained, reusable React components built using TypeScript.

## Components vs Patterns vs Experimental

- **Components (`src/components/`)**: The fundamental building blocks of the UI. These are self-contained, independent React components such as Buttons, Cards, or Badges.
- **Patterns (`src/patterns/`)**: Compositions of smaller components to create larger, functional UI sections, such as Authentication Layouts or Dashboards.
- **Experimental (`src/experimental/`)**: Work-in-progress, highly experimental, or animated components that have not yet reached a stable API. Once stable, they can be promoted to `components/`.

## Storybook's Role

Storybook is the primary development and documentation environment for this project. Every component should have an associated `.stories.tsx` file to demonstrate its usage, variants, and behavior in isolation.

## Library Build

This repository is configured using Vite's library mode (`vite.config.ts`), enabling components to be exported as a reusable package.

## Public Exports

The file `src/index.ts` is the explicit entry point for the component library. Only components intended for public consumption should be exported from this file.

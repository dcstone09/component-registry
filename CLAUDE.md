# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a shadcn/ui component registry template built with Next.js, allowing you to distribute custom components, hooks, pages, and files to React projects. The registry is compatible with the `shadcn` CLI and includes v0 integration.

## Development Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the Next.js application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality checks
- `pnpm registry:build` - Build the registry using shadcn CLI (generates static JSON files in `public/r/`)

## Architecture

### Registry System
- `registry.json` - Central configuration defining all registry items with metadata, dependencies, and file paths
- `registry/new-york/` - Source directory containing all registry components organized by type:
  - `blocks/` - Complete components/pages with business logic
  - `ui/` - Base UI components (button, card, input, etc.)
- `public/r/` - Generated static JSON files served to CLI consumers

### Component Structure
Registry items can include multiple file types:
- `registry:component` - React components
- `registry:page` - Full pages with routing targets
- `registry:lib` - Utility libraries and helpers  
- `registry:hook` - Custom React hooks

### Dependencies
- Uses shadcn/ui design system with Tailwind CSS v4
- Radix UI primitives for accessible components
- React Server Components (RSC) enabled
- TypeScript with strict configuration
- Class Variance Authority (CVA) for component variants

### Path Aliases
- `@/components` - Component directory
- `@/lib` - Utility libraries
- `@/hooks` - Custom hooks
- `@/components/ui` - UI components

## Registry Development

When adding new registry items:
1. Create component files in appropriate `registry/new-york/` subdirectory
2. Update `registry.json` with item metadata, dependencies, and file paths
3. Run `pnpm registry:build` to generate public JSON files
4. Components should follow shadcn/ui patterns with CVA variants and proper TypeScript types

The registry supports complex components with multiple files, external dependencies, and cross-component references through `registryDependencies`.
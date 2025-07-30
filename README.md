# Component Registry

You can use the `shadcn` CLI to run your own component registry. Running your own
component registry allows you to distribute your custom components, hooks, pages, and
other files to any React project.

> [!IMPORTANT]  
> This template uses Tailwind v4. For Tailwind v3, see [registry-template](https://github.com/shadcn-ui/registry-template).

## Getting Started

This is a template for creating a custom registry using Next.js.

- The template uses a `registry.json` file to define components and their files.
- The `shadcn build` command is used to build the registry.
- The registry items are served as static files under `public/r/[name].json`.
- The template also includes a route handler for serving registry items.
- Every registry item are compatible with the `shadcn` CLI.
- We have also added v0 integration using the `Open in v0` api.

## Development

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build the registry:
   ```bash
   npm run registry:build
   ```

### Adding Components

1. Create your component in the `registry/new-york/` directory structure
2. Add the component definition to `registry.json`
3. Run `npm run registry:build` to generate the JSON files
4. Test locally with `npm run dev`

## Using This Registry

Once deployed, users can install components from this registry using:

```bash
npx shadcn@latest add https://dcstone09.github.io/component-registry/r/[component-name].json
```

### Available Components

- **hello-world** - A simple hello world component
- **example-form** - A contact form with Zod validation
- **complex-component** - A complex component showing hooks, libs and components
- **example-with-css** - A login form with a CSS file

Example installation:
```bash
npx shadcn@latest add https://dcstone09.github.io/component-registry/r/hello-world.json
```

## Registry Structure

```
registry/
└── new-york/
    ├── blocks/           # Complete components/pages
    └── ui/               # Base UI components
```

The `registry.json` file defines all available components with their metadata, dependencies, and file paths.

## Deployment

This registry is deployed to GitHub Pages using GitHub Actions. The deployment:

1. Builds the registry with `npm run registry:build`
2. Builds the Next.js static export with `npm run build`  
3. Deploys to GitHub Pages automatically on pushes to main

## Documentation

Visit the [shadcn documentation](https://ui.shadcn.com/docs/registry) to view the full documentation.

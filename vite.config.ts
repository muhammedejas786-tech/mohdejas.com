// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When building for GitHub Pages, PAGES_BASE is set to "/<repo-name>/" by the
// deploy workflow. Leave it unset for Lovable hosting (defaults to "/").
const pagesBase = process.env.PAGES_BASE;

export default defineConfig({
  ...(pagesBase ? { vite: { base: pagesBase } } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Pre-render the homepage to plain HTML at build time so the site can be
    // hosted as a fully static bundle (e.g. GitHub Pages).
    pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});

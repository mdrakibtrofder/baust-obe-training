// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: process.env.BASE_URL || "/",
  },
  // GitHub Pages only serves static files — override the default Cloudflare
  // Workers preset with the static preset so `bun run build` emits plain
  // prerendered HTML/CSS/JS into dist/client instead of a Workers bundle.
  nitro: {
    preset: "static",
    output: {
      dir: "dist",
      serverDir: "dist/server",
      publicDir: "dist/client",
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Crawl every route reachable from "/" and write a static .html file for
    // each — required because GitHub Pages has no server to run SSR/loaders.
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoStaticPathsDiscovery: true,
    },
  },
});

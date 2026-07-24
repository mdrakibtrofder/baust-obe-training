import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// Simple, pure-client Vite config used for GitHub Pages deployment.
// Skips the TanStack Start / Nitro SSR layer completely — plain React SPA
// build that produces a static dist/ with an index.html GitHub Pages can serve.
export default defineConfig({
  base: process.env.BASE_URL || "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    tsconfigPaths: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});

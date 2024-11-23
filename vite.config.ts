import { defineConfig } from "vite"
import { fileURLToPath } from "node:url"
import react from "@vitejs/plugin-react"
import path from "node:path"

const dirname = path.dirname(fileURLToPath(new URL(import.meta.url)))
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "publish",
  },
  resolve: {
    alias: {
      "@": path.resolve(dirname, "src"),
    },
  },
})

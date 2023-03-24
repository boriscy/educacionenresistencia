import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"

export default defineConfig({
  base: "educacionenresistencia/",
  plugins: [sveltekit()],
  server: { port: 4000 }
})

import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/kit/vite"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null,
      precompress: false,
      strict: true,
      default: true,
      trailingSlash: "always",
      fallback: "200.html"
    })
  },
  preprocess: vitePreprocess(),
  files: {
    assets: "static",
    hooks: "src/hooks",
    lib: "src/lib",
    params: "src/params",
    routes: "src/routes",
    serviceWorker: "src/service-worker",
    template: "src/app.html"
  }
}

export default config
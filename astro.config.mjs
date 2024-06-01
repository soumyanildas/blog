import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.soumyanildas.com",
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
      wrap: true,
    },
  },
  integrations: [mdx(), sitemap(), tailwind()],
});

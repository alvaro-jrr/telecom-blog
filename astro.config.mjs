import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { loadEnv } from "vite";

import tailwind from "@astrojs/tailwind";

const { SITE_URL = "" } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	integrations: [mdx(), sitemap(), tailwind()],
});

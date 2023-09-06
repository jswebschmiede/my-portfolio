import { defineConfig, sharpImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import mdx from "@astrojs/mdx";

const sites = [
  "https://master.dpoxj8hd9osr0.amplifyapp.com/",
  "https://portfolio.joerg-schoeneburg.de/",
];

// https://astro.build/config
export default defineConfig({
  image: {
    service: sharpImageService(),
  },
  integrations: [sitemap(), tailwind({ applyBaseStyles: false }), prefetch(), mdx()],
  site: sites[1],
});

import { defineConfig, sharpImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

const sites = ["https://master.dpoxj8hd9osr0.amplifyapp.com/", "https://joerg-schoeneburg.de/"];

// https://astro.build/config
export default defineConfig({
    image: {
        service: sharpImageService(),
    },
    integrations: [sitemap(), tailwind({ applyBaseStyles: false }), mdx()],
    site: sites[1],
    prefetch: true,
    output: "static",
});

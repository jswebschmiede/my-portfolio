import { defineConfig, sharpImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    image: {
        service: sharpImageService(),
    },
    integrations: [sitemap(), tailwind({ applyBaseStyles: false }), mdx()],
    site: "https://joerg-schoeneburg.de",
    prefetch: true,
    output: "static",
});

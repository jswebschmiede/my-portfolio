import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import prefetch from '@astrojs/prefetch';
import image from '@astrojs/image';

export default defineConfig({
    integrations: [
        sitemap(),
        tailwind(),
        prefetch(),
        image({
            serviceEntryPoint: '@astrojs/image/sharp'
        })
    ],
    site: 'https://master.dpoxj8hd9osr0.amplifyapp.com/'
});

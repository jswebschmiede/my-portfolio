import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import prefetch from '@astrojs/prefetch';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
    integrations: [
        sitemap(),
        tailwind(),
        prefetch(),
        image({
            serviceEntryPoint: '@astrojs/image/sharp'
        })
    ],

    buildOptions: {
        canonicalBaseUrl: 'https://master.dpoxj8hd9osr0.amplifyapp.com/'
    }
});

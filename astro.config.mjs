import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import prefetch from '@astrojs/prefetch';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';

const sites = [
    'https://master.dpoxj8hd9osr0.amplifyapp.com/',
    'https://portfolio.joerg-schoeneburg.de/'
];

// https://astro.build/config
export default defineConfig({
    integrations: [
        sitemap(),
        tailwind(),
        prefetch(),
        image({
            serviceEntryPoint: '@astrojs/image/sharp'
        }),
        mdx()
    ],
    site: sites[1]
});

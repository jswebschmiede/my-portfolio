import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        image: z.object({
            src: z.string(),
            alt: z.string()
        }),
        isFeatured: z.boolean()
    })
});

export const collections = {
    projects: projectsCollection
};

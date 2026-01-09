import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', // Markdown/MDX posts
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    // Add more fields like tags: z.array(z.string()).optional() if needed
  }),
});

export const collections = {
  blog: blogCollection,
};

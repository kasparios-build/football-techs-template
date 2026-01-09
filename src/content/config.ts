// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content', // ✅ must be content for .md/.mdx
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
  }),
});

export const collections = { news };

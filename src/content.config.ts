import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Features', 'Guides', 'Setup', 'Troubleshooting', 'Updates']),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    readMinutes: z.number().int().min(1).optional(),
    tags: z.array(z.string()).default([]),
    featuredImage: z.string().optional().default(''),
    imageAlt: z.string().optional().default(''),
    featured: z.boolean().optional().default(false),
    relatedSlugs: z.array(z.string()).default([]),
    faq: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        }),
      )
      .optional()
      .default([]),
  }),
});

export const collections = { blog };

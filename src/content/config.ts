import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: "content",
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		hero: z
			.object({
				src: z.string(),
				height: z.number(),
				width: z.number(),
				alt: z.string(),
			})
			.optional(),
		authors: z.array(z.string()),
	}),
});

export const collections = { blog };

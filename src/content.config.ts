import { defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";
import { docsLoader } from "@astrojs/starlight/loaders";

export const collections = {
    docs: defineCollection({ schema: docsSchema(), loader: docsLoader() })
};

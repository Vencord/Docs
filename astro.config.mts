import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
    site: "https://docs.vencord.dev",
    integrations: [
        starlight({
            plugins: [starlightLinksValidator()],

            title: "Vencord Docs",
            logo: {
                src: "./src/assets/favicon.png"
            },
            favicon: "favicon.png",
            editLink: {
                baseUrl: "https://github.com/Vencord/Docs/tree/main/"
            },
            social: {
                github: "https://github.com/Vencord",
                discord: "https://vencord.dev/discord"
            },
            customCss: ["./src/style/custom.css", "./src/style/headingLinks.css"],
            lastUpdated: true,
            sidebar: [
                {
                    label: "Introduction",
                    link: "/intro"
                },
                {
                    label: "Installation & Preparation",
                    autogenerate: { directory: "installing" }
                },
                {
                    label: "Plugin Development",
                    autogenerate: { directory: "plugins" }
                }
            ]
        })
    ],

    markdown: {
        rehypePlugins: [
            rehypeHeadingIds,
            [
                rehypeAutolinkHeadings,
                {
                    behavior: "wrap"
                }
            ]
        ]
    }
});

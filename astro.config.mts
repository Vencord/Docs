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
                    label: "Contributing to Vencord",
                    link: "/contribute"
                },
                {
                    label: "Code of Conduct",
                    link: "/coc"
                },
                {
                    label: "Plugin Development",
                    items: [
                        {
                            label: "Installation & Preparation",
                            autogenerate: { directory: "installing" }
                        },
                        {
                            label: "Building the Plugin",
                            autogenerate: { directory: "plugins" }
                        }
                    ]
                },
                {
                    label: "Advanced Development",
                    items: [
                        {
                            label: "Utils",
                            autogenerate: { directory: "utils" }
                        }
                    ]
                },
                {
                    label: "Additional Information",
                    autogenerate: { directory: "additional" }
                },
                // {
                //     label: "Troubleshooting",
                //     autogenerate: { directory: "troubleshoot" }
                // }
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

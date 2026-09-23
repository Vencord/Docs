import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import starlightLlmsTxt from "starlight-llms-txt";

// https://astro.build/config
export default defineConfig({
    site: "https://docs.vencord.dev",
    integrations: [
        starlight({
            plugins: [starlightLinksValidator(), starlightLlmsTxt()],
            title: "Vencord Docs",
            logo: {
                src: "./src/assets/favicon.png"
            },
            favicon: "favicon.png",
            editLink: {
                baseUrl: "https://github.com/Vencord/Docs/tree/main/"
            },
            social: [
                { icon: "github", href: "https://github.com/Vencord", label: "GitHub" },
                { icon: "discord", href: "https://vencord.dev/discord", label: "Discord" }
            ],
            customCss: ["./src/style/custom.css", "./src/style/headingLinks.css"],
            lastUpdated: true,
            sidebar: [
                {
                    label: "Introduction",
                    link: "/intro"
                },
                {
                    label: "Installation & Preparation",
                    items: [{ autogenerate: { directory: "installing" } }]
                },
                {
                    label: "Plugin Development",
                    items: [{ autogenerate: { directory: "plugins" } }]
                },
                {
                    label: "Navigating Discord's Code",
                    items: [{ autogenerate: { directory: "discord-code" } }]
                }
            ]
        })
    ],
    vite: {
        assetsInclude: ["src/assets/**/*"]
    }
});

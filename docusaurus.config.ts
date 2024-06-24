import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "Vencord Developer Docs",
    tagline: "The cutest documentation!",
    favicon: "img/favicon.png",

    // Set the production url of your site here
    url: "https://docs.vencord.dev",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    // organizationName: 'facebook', // Usually your GitHub org/user name.
    // projectName: 'docusaurus', // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"]
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/Vencord/Docs/tree/main/"
                },
                theme: {
                    customCss: "./src/css/custom.css"
                }
            } satisfies Preset.Options
        ]
    ],

    themeConfig: {
        // Replace with your project's social card
        //image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "Vencord Developer Docs",
            logo: {
                alt: "Vencord logo",
                src: "img/favicon.png"
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "left",
                    label: "Docs"
                },
                {
                    href: "https://github.com/Vencord/Docs",
                    label: "Contribute to the Docs",
                    position: "right"
                },
                {
                    href: "https://vencord.dev",
                    label: "Website",
                    position: "right"
                },
                {
                    href: "https://github.com/Vencord",
                    label: "GitHub",
                    position: "right"
                }
            ]
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Introduction",
                            to: "/docs/intro"
                        },
                        {
                            label: "Installing",
                            to: "/docs/installing"
                        },
                        {
                            label: "Creating Plugins",
                            to: "/docs/creating-plugins"
                        }
                    ]
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Discord",
                            href: "https://vencord.dev/discord"
                        }
                    ]
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/Vencord"
                        },
                        {
                            label: "Official Website",
                            href: "https://vencord.dev"
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Vencord contributors. Built with Docusaurus!`
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula
        }
    } satisfies Preset.ThemeConfig
};

export default config;

// https://vitepress.dev/guide/custom-theme
import Layout from "./Layout.vue";
import type { Theme } from "vitepress";

import "normalize.css";

import "./styles/prose.css";
import "./styles/vencord.css";

import "./styles/components/custom-block.css";

export default {
    Layout,
    enhanceApp({ app, router, siteData }) {
        // ...
    },
} satisfies Theme;

<script setup lang="ts">
import { useData } from "vitepress";

import NavBar from "./components/NavBar.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData();
</script>

<template>
    <NavBar />
    <div v-if="frontmatter.home">
        <h1>{{ site.title }}</h1>
        <p>{{ site.description }}</p>
        <ul>
            <li><a href="/markdown-examples.html">Markdown Examples</a></li>
            <li><a href="/api-examples.html">API Examples</a></li>
        </ul>
    </div>
    <div v-else>
        <Content />
    </div>
</template>

<style scoped>
div {
    margin: 2em var(--horizontal-margin);
    height: 100%;
    flex: 1;
    position: relative;
}
</style>

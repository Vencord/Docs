import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vencord Docs",
  description: "User and developer documentation for Vencord.",
  markdown: {
    theme: {
      light: 'css-variables',
      dark: 'css-variables'
    }
  }
})

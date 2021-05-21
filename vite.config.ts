import path from "path"
import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import Pages from "vite-plugin-pages"
import Layouts from "vite-plugin-vue-layouts"
import ViteIcons, { ViteIconsResolver } from "vite-plugin-icons"
import ViteComponents from "vite-plugin-components"
import Markdown from "vite-plugin-md"
import WindiCSS from "vite-plugin-windicss"
import { VitePWA } from "vite-plugin-pwa"
import VueI18n from "@intlify/vite-plugin-vue-i18n"
import Prism from "markdown-it-prism"

export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ["vue", "md"],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/vite-plugin-md
    Markdown({
      wrapperClasses: "flex flex-col",
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
      },
    }),

    // https://github.com/antfu/vite-plugin-components
    ViteComponents({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],

      // allow auto import and register components used in markdown
      customLoaderMatcher: (id) => id.endsWith(".md"),

      // auto import icons
      customComponentResolvers: [
        // https://github.com/antfu/vite-plugin-icons
        ViteIconsResolver({
          componentPrefix: "",
          // enabledCollections: ['carbon']
        }),
      ],
    }),

    // https://github.com/antfu/vite-plugin-icons
    ViteIcons(),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS(),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        short_name: "Liyas",
        name: "Liyas Thomas",
        icons: [
          {
            src: "/images/icons-192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "/images/icons-512.png",
            type: "image/png",
            sizes: "512x512",
            purpose: "any maskable",
          },
        ],
        start_url: "/?source=pwa",
        background_color: "#ffffff",
        display: "standalone",
        scope: "/",
        theme_color: "#ffffff",
        shortcuts: [
          {
            name: "Twitter",
            short_name: "Twitter",
            description: "View my Twitter profile",
            url: "/twitter",
            icons: [{ src: "/images/twitter.png", sizes: "96x96" }],
          },
          {
            name: "LinkedIn",
            short_name: "LinkedIn",
            description: "View my LinkedIn profile",
            url: "/linkedin",
            icons: [{ src: "/images/linkedin.png", sizes: "96x96" }],
          },
          // {
          //   name: "GitHub",
          //   short_name: "GitHub",
          //   description: "View my GitHub profile",
          //   url: "/github",
          //   icons: [{ src: "/images/github.png", sizes: "96x96" }],
          // },
          {
            name: "E-mail",
            short_name: "E-mail",
            description: "Send me an E-mail",
            url: "/email",
            icons: [{ src: "/images/email.png", sizes: "96x96" }],
          },
          {
            name: "Calendar",
            short_name: "Calendar",
            description: "Choose a time slot to have a chat with me",
            url: "/calendar",
            icons: [{ src: "/images/calendar.png", sizes: "96x96" }],
          },
        ],
        description: "Founder & CEO of Hoppscotch",
        screenshots: [
          {
            src: "/images/screenshot1.png",
            type: "image/png",
            sizes: "540x720",
          },
          {
            src: "/images/screenshot2.png",
            type: "image/png",
            sizes: "540x720",
          },
        ],
      },
    }),

    // https://github.com/intlify/vite-plugin-vue-i18n
    VueI18n({
      include: [path.resolve(__dirname, "locales/**")],
    }),
  ],
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: "async",
    formatting: "minify",
  },

  optimizeDeps: {
    include: ["vue", "vue-router", "@vueuse/core"],
    exclude: ["vue-demi"],
  },
})

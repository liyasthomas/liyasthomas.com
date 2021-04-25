import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
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
  ],
});

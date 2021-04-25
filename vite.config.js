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
          },
        ],
        start_url: "/?source=pwa",
        background_color: "#ffffff",
        display: "standalone",
        scope: "/",
        theme_color: "#ffffff",
        shortcuts: [
          {
            name: "Schedule an event",
            short_name: "Calendar",
            description: "Choose a time slot to have a chat with me",
            url: "/calendar?source=pwa",
            icons: [{ src: "/images/calendar.png", sizes: "192x192" }],
          },
          {
            name: "Twitter @liyasthomas",
            short_name: "Twitter",
            description: "View my Twitter profile",
            url: "/twitter?source=pwa",
            icons: [{ src: "/images/twitter.png", sizes: "192x192" }],
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
            src: "/images/screenshot2.jpg",
            type: "image/jpg",
            sizes: "540x720",
          },
        ],
      },
    }),
  ],
});

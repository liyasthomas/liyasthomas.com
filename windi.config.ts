import { defineConfig } from "vite-plugin-windicss"
import colors from "windicss/colors"

export default defineConfig({
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
      },
    },
    container: {
      center: true,
    },
  },
})

<template>
  <header
    class="
      flex
      top-0
      flex-col
      p-8
      z-1
      md:(sticky
      flex-row
      items-center
      justify-between)
      header-gradient
    "
  >
    <nav
      class="
        flex flex-col
        items-start
        space-y-4
        md:(space-x-4
        flex-row
        space-y-0)
      "
    >
      <router-link to="/" class="header-link">
        <span>Home</span>
      </router-link>

      <router-link to="/timeline" class="header-link">
        <span>Timeline</span>
      </router-link>

      <router-link to="/works" class="header-link">
        <span>Works</span>
      </router-link>

      <router-link to="/blog" class="header-link">
        <span>Blog</span>
      </router-link>

      <router-link to="/newsletter" class="header-link">
        <span>Newsletter</span>
      </router-link>

      <router-link to="/about" class="header-link">
        <span>About</span>
      </router-link>
    </nav>
    <div class="flex mt-8 items-start space-x-4 md:(mt-0)">
      <button
        class="header-link"
        aria-label="Toggle dark mode"
        @click="toggleDark"
      >
        <heroicons-solid-moon v-if="isDark" />
        <heroicons-solid-sun v-else />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from "~/logic"
</script>

<style scoped>
.header-link {
  @apply inline-flex;
  @apply items-center;
  @apply justify-center;
  @apply px-2;
  @apply py-1;
  @apply font-bold;
  @apply rounded-lg;
  @apply text-blue-700;
  @apply focus:outline-none;
  @apply focus-within:(ring ring-indigo-400);
  @apply hover:text-blue-800;
  @apply dark:(text-indigo-400 focus-within:ring-blue-600 hover:text-indigo-200);
  @apply transition-all;
}

.header-gradient {
  @apply bg-gradient-to-b;
  @apply from-gray-50;
  @apply via-gray-50;
  @apply dark:(from-gray-900 via-gray-900);
}
</style>

<template>
  <header
    class="
      flex
      bg-gray-50
      dark:bg-gray-900
      top-0
      flex-col
      p-8
      z-1
      md:(sticky
      flex-row
      items-center
      justify-between)
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
        <span>{{ t("button.home") }}</span>
      </router-link>

      <router-link to="/timeline" class="header-link">
        <span>{{ t("button.timeline") }}</span>
      </router-link>

      <router-link to="/works" class="header-link">
        <span>{{ t("button.works") }}</span>
      </router-link>

      <router-link to="/blog" class="header-link">
        <span>{{ t("button.blog") }}</span>
      </router-link>

      <router-link to="/newsletter" class="header-link">
        <span>{{ t("button.newsletter") }}</span>
      </router-link>

      <router-link to="/about" class="header-link">
        <span>{{ t("button.about") }}</span>
      </router-link>
    </nav>
    <div class="flex mt-8 items-start space-x-4 md:(mt-0)">
      <button
        class="header-link"
        :aria-label="t('button.toggle_dark')"
        @click="toggleDark"
      >
        <heroicons-solid-moon v-if="isDark" />
        <heroicons-solid-sun v-else />
      </button>
    </div>
  </header>
</template>

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
</style>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { isDark, toggleDark } from "~/logic"
const { t } = useI18n()
</script>

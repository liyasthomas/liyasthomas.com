<template>
  <footer
    class="flex flex-col items-start m-8 text-sm md:(flex-row items-center justify-between)"
  >
    <nav
      class="flex flex-col items-start space-y-4 md:(space-x-4 space-y-0 flex-row)"
    >
      <a href="https://twitter.com/liyasthomas" target="_blank" rel="noopener"
        >Twitter</a
      >
      <a
        href="https://www.linkedin.com/in/liyasthomas"
        target="_blank"
        rel="noopener"
        >LinkedIn</a
      >
      <a href="https://github.com/liyasthomas" target="_blank" rel="noopener"
        >GitHub</a
      >
      <a href="mailto:hi@liyasthomas.com">E-mail</a>
      <a
        href="https://calendly.com/liyasthomas/30m"
        target="_blank"
        rel="noopener"
        >Calendar</a
      >
    </nav>
    <div class="flex mt-8 items-start space-x-4 md:(mt-0)">
      <button
        class="nav-link"
        @click="toggleLocales"
        :aria-label="t('button.toggle_langs')"
      >
        <heroicons-solid-translate />
      </button>
    </div>
  </footer>
</template>

<style scoped>
a,
button {
  @apply px-2;
  @apply py-1;
  @apply rounded-lg;
  @apply text-gray-400;
  @apply focus:outline-none;
  @apply focus-within:(ring ring-gray-400);
  @apply hover:text-gray-500;
  @apply dark:(text-gray-500 focus-within:ring-gray-600 hover:text-gray-400);
  @apply transition-all;
}
</style>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <header class="flex sticky top-0 flex-col md:flex-row p-8 z-1 md:items-center md:justify-between">
    <nav class="flex flex-col items-start space-y-4 md:(space-x-4 flex-row space-y-0)">
      <router-link to="/" class="nav-link" :title="t('button.home')">
        <heroicons-solid-home />
        <span>{{ t('button.home') }}</span>
      </router-link>

      <router-link to="/timeline" class="nav-link" :title="t('button.events')">
        <heroicons-solid-heart />
        <span>{{ t('button.events') }}</span>
      </router-link>

      <router-link to="/newsletter" class="nav-link" :title="t('button.newsletter')">
        <heroicons-solid-speakerphone />
        <span>{{ t('button.newsletter') }}</span>
      </router-link>

      <router-link to="/about" class="nav-link" :title="t('button.about')">
        <heroicons-solid-user />
        <span>{{ t('button.about') }}</span>
      </router-link>
    </nav>
    <div class="flex mt-8 items-start space-x-4 md:(mt-0)">
      <button class="nav-link" :title="t('button.toggle_dark')" @click="toggleDark">
        <heroicons-solid-moon v-if="isDark" />
        <heroicons-solid-sun v-else />
      </button>
      <button class="nav-link" :title="t('button.toggle_langs')" @click="toggleLocales">
        <heroicons-solid-translate />
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav-link {
  @apply inline-flex;
  @apply items-center;
  @apply justify-center;
  @apply px-2;
  @apply py-1;
  @apply rounded-lg;
  @apply text-blue-600;
  @apply focus:outline-none;
  @apply focus-within:(ring ring-indigo-400);
  @apply hover:text-blue-700;
  @apply dark:(text-indigo-400 focus-within:ring-blue-600 hover:text-indigo-200);
  @apply transition-all;
}
.nav-link span {
  @apply ml-3;
}
</style>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { isDark, toggleDark } from '~/logic'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

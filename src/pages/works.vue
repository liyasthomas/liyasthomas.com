<template>
  <h1 class="inline-flex mb-8 text-2xl font-bold">
    {{ t("button.projects") }}
  </h1>
  <Projects />
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
const { t } = useI18n()
import { useHead } from "@vueuse/head"

useHead({
  title: "Works - Liyas Thomas",
})
</script>

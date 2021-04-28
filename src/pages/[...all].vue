<template>
  <div>
    {{ t("not-found") }}
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { useHead } from "@vueuse/head"

useHead({
  title: "404 - Liyas Thomas",
})
const { t } = useI18n()
</script>

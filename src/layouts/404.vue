<script setup lang="ts">
import { useRouter } from "vue-router"
import { useI18n } from "vue-i18n"

const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main class="px-4 py-8 text-center dark:text-gray-200">
    <div>
      <p class="text-4xl">
        <carbon-warning class="inline-block" />
      </p>
    </div>
    <router-view />
    <div>
      <button class="m-2 mt-8 text-sm" @click="router.back()">
        {{ t("button.back") }}
      </button>
    </div>
  </main>
</template>

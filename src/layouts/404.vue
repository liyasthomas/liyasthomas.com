<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()
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
      <button class="m-2 mt-8 text-sm" @click="router.back()">Back</button>
    </div>
  </main>
</template>

<style scoped>
button {
  @apply px-2;
  @apply py-1;
  @apply rounded-lg;
  @apply text-gray-500;
  @apply border-2;
  @apply border-gray-500;
  @apply focus:outline-none;
  @apply focus-within:(ring ring-gray-400);
  @apply hover:text-gray-600;
  @apply hover:border-gray-600;
  @apply dark:(text-gray-400 border-gray-400 focus-within:ring-gray-600 hover:text-gray-300 hover:border-gray-300);
  @apply transition-all;
}
</style>

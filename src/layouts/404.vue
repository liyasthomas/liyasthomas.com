<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()
</script>

<template>
  <div class="flex container flex-col min-h-screen">
    <Header />
    <main class="flex flex-col flex-1 m-8 text-center dark:text-gray-200">
      <p class="text-4xl">
        <carbon-warning class="inline-block" />
      </p>
      <router-view />
      <div>
        <router-link to="/" class="error-link">Home</router-link>
        <button class="error-link" @click="router.back()">Back</button>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.error-link {
  @apply mx-2;
  @apply my-8;
  @apply px-4;
  @apply py-2;
  @apply rounded-lg;
  @apply text-sm;
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

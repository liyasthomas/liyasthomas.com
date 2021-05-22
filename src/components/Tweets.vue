<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
    <blockquote
      v-for="(tweet, index) in tweets"
      :key="`tweet-${index}`"
      class="twitter-tweet"
      data-dnt="true"
      :data-theme="isDark ? 'dark' : 'light'"
    >
      <a
        class="rounded-lg w-full h-full py-4 px-4"
        :href="tweet.url"
        target="_blank"
        rel="noopener"
      >
        <div class="animate-pulse flex space-x-4">
          <div
            class="rounded-full bg-gray-300 dark:bg-gray-600 h-12 w-12"
          ></div>
          <div class="flex-1 space-y-4 py-1">
            <div class="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
            <div class="space-y-2">
              <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </a>
    </blockquote>
  </div>
</template>

<script setup lang="ts">
import tweets from "../assets/data/tweets"
import { onMounted } from "vue"
import { isDark } from "~/logic"

onMounted(() => {
  let externalScript = document.createElement("script")
  externalScript.setAttribute("src", "https://platform.twitter.com/widgets.js")
  document.head.appendChild(externalScript)
})
</script>

<style scoped>
.twitter-tweet {
  @apply flex;
  @apply flex-col;
  @apply items-start;
  @apply justify-start;
  @apply h-full;
  @apply bg-gray-100;
  @apply rounded-lg;
  @apply border;
  @apply border-gray-200;
  @apply dark:(border-gray-800 bg-gray-800);
}
</style>

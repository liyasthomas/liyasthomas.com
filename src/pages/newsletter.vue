<template>
  <div>
    <Subscribe />
    <h1 class="inline-flex my-8 text-2xl font-bold"></h1>
    <Tweets />
  </div>
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head"

useHead({
  title: "Newsletter - Liyas Thomas",
})
</script>

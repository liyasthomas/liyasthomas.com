<template>
  <div class="space-y-24">
    <ProfileMe />
    <Contact />
  </div>
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head"

useHead({
  title: "About - Liyas Thomas",
})
</script>

<script setup lang="ts">
import { useHead } from "@vueuse/head"

useHead({
  title: "Home - Liyas Thomas",
})
</script>

<template>
  <div class="space-y-24">
    <AppHome />
    <Events :home="true" />
    <Articles :home="true" />
    <ProfileSubscribe />
  </div>
</template>

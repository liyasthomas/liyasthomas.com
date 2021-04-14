<template>
  <div class="flex flex-col">
    <Logo />
    <HelloWorld />
    <Footer />
  </div>
</template>

<script setup>
import Logo from "./components/Logo.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
#app {
  @apply p-4;
}
</style>

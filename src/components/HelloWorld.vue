<template>
  <div class="flex flex-col p-8">
    <h1 class="text-4xl font-bold">Liyas Thomas</h1>
    <p class="mt-4 text-xl">
      Founder & CEO of
      <a href="https://hoppscotch.io" target="_blank" rel="noopener"
        >Hoppscotch</a
      >
    </p>
  </div>
</template>

<style scoped>
a {
  @apply px-2;
  @apply py-1;
  @apply rounded-lg;
  @apply focus:outline-none;
  @apply focus-within:ring;
  @apply focus-within:ring-green-400;
  @apply dark:focus-within:ring-pink-600;
  @apply text-pink-600;
  @apply hover:text-pink-800;
  @apply dark:text-green-400;
  @apply dark:hover:text-green-200;
  @apply transition-all;
}
</style>

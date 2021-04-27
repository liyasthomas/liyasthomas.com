<template>
  <div class="flex flex-col m-8">
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
  @apply text-pink-700;
  @apply focus:outline-none;
  @apply focus-within:(ring ring-green-400);
  @apply hover:text-pink-800;
  @apply dark:(text-green-400 focus-within:ring-pink-700 hover:text-green-200);
  @apply transition-all;
}
</style>

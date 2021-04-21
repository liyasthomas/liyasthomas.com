<template>
  <footer
    class="flex flex-col items-start p-8 space-y-4 text-sm md:space-x-4 md:flex-row md:space-y-0"
  >
    <a href="https://twitter.com/liyasthomas" target="_blank" rel="noopener"
      >Twitter</a
    >
    <a
      href="https://www.linkedin.com/in/liyasthomas"
      target="_blank"
      rel="noopener"
      >LinkedIn</a
    >
    <a href="https://github.com/liyasthomas" target="_blank" rel="noopener"
      >GitHub</a
    >
    <a href="mailto:liyascthomas@gmail.com">E-mail</a>
    <a
      href="https://calendly.com/liyasthomas/30m"
      target="_blank"
      rel="noopener"
      >Calendar</a
    >
  </footer>
</template>

<style scoped>
a {
  @apply px-2;
  @apply py-1;
  @apply rounded-lg;
  @apply focus:outline-none;
  @apply focus-within:ring;
  @apply focus-within:ring-indigo-400;
  @apply dark:focus-within:ring-blue-600;
  @apply text-blue-600;
  @apply hover:text-blue-700;
  @apply dark:text-indigo-400;
  @apply dark:hover:text-indigo-200;
  @apply transition-all;
}
</style>

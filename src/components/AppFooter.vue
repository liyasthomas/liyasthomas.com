<template>
  <footer
    class="flex flex-col m-8 text-sm md:(flex-row items-center justify-between)"
  >
    <nav
      class="flex flex-col items-start space-y-4 md:(space-x-4 space-y-0 flex-row)"
    >
      <a
        class="footer-link"
        href="https://twitter.com/liyasthomas"
        target="_blank"
        rel="noopener"
        >Twitter</a
      >
      <a
        class="footer-link"
        href="https://www.linkedin.com/in/liyasthomas"
        target="_blank"
        rel="noopener"
        >LinkedIn</a
      >
      <a
        class="footer-link"
        href="https://github.com/liyasthomas"
        target="_blank"
        rel="noopener"
        >GitHub</a
      >
      <a class="footer-link" href="mailto:hi@liyasthomas.com">E-mail</a>
      <a
        class="footer-link"
        href="https://calendly.com/liyasthomas/30m"
        target="_blank"
        rel="noopener"
        >Calendar</a
      >
    </nav>
    <div class="flex mt-8 items-start space-x-4 md:(mt-0)">
      <a
        class="footer-link"
        href="https://github.com/liyasthomas/liyasthomas.com"
        target="_blank"
        rel="noopener"
      >
        <bi-github />
      </a>
    </div>
  </footer>
</template>

<style scoped>
.footer-link,
button {
  @apply inline-flex;
  @apply items-center;
  @apply justify-center;
  @apply px-2;
  @apply py-1;
  @apply rounded-lg;
  @apply text-gray-500;
  @apply focus:outline-none;
  @apply focus-within:(ring ring-gray-400);
  @apply hover:text-gray-600;
  @apply dark:(text-gray-400 focus-within:ring-gray-600 hover:text-gray-300);
  @apply transition-all;
}
</style>

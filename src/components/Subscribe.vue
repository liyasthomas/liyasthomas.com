<template>
  <form
    class="m-8"
    action="https://launchaco.us20.list-manage.com/subscribe/post?u=807aba6832422fc0a3a1ac751&amp;id=03385b483f"
    method="post"
    target="_blank"
    validate
  >
    <label for="mce-EMAIL" class="inline-flex my-8 text-2xl font-bold"
      >Subscribe</label
    >
    <div class="flex flex-col space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
      <input
        name="EMAIL"
        id="mce-EMAIL"
        class="form-input"
        type="email"
        placeholder="E-mail"
        required
      />
      <input
        id="mc-embedded-subscribe"
        type="submit"
        value="Subscribe"
        name="subscribe"
        class="form-button"
      />
    </div>
  </form>
</template>

<style scoped>
.form-input {
  @apply flex;
  @apply px-5;
  @apply py-3;
  @apply rounded-lg;
  @apply focus:outline-none;
  @apply focus-within:ring;
  @apply focus-within:ring-pink-400;
  @apply dark:focus-within:ring-indigo-600;
  @apply text-gray-800;
  @apply bg-gray-100;
  @apply hover:bg-gray-200;
  @apply focus:bg-gray-200;
  @apply dark:bg-gray-800;
  @apply dark:hover:bg-gray-700;
  @apply dark:focus:bg-gray-700;
  @apply dark:text-gray-50;
  @apply transition-all;
}
.form-button {
  @apply px-5;
  @apply py-3;
  @apply rounded-lg;
  @apply font-bold;
  @apply focus:outline-none;
  @apply focus-within:ring;
  @apply focus-within:ring-pink-400;
  @apply dark:focus-within:ring-indigo-600;
  @apply text-gray-50;
  @apply bg-indigo-600;
  @apply hover:bg-indigo-800;
  @apply dark:bg-pink-400;
  @apply dark:hover:bg-pink-200;
  @apply dark:text-gray-900;
  @apply transition-all;
  @apply cursor-pointer;
}
</style>

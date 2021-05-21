<template>
  <div class="flex flex-col">
    <form
      action="https://launchaco.us20.list-manage.com/subscribe/post?u=807aba6832422fc0a3a1ac751&amp;id=03385b483f"
      method="post"
      target="_blank"
      validate
    >
      <label for="mce-EMAIL" class="inline-flex mb-8 text-2xl font-bold"
        >Subscribe</label
      >
      <div class="flex flex-col space-y-2 md:(space-x-2 space-y-0 flex-row)">
        <input
          id="mce-EMAIL"
          name="EMAIL"
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
    <h1 class="inline-flex my-8 text-2xl font-bold"></h1>
    <Tweets />
  </div>
</template>

<style scoped>
.form-input {
  @apply flex;
  @apply px-5;
  @apply py-3;
  @apply rounded-lg;
  @apply text-gray-800;
  @apply bg-gray-100;
  @apply focus:(outline-none bg-gray-200);
  @apply focus-within:(ring ring-pink-400);
  @apply hover:bg-gray-200;
  @apply dark:(text-gray-50 bg-gray-800 focus:bg-gray-700 focus-within:ring-indigo-600 hover:bg-gray-700);
  @apply transition-all;
}

.form-button {
  @apply px-5;
  @apply py-3;
  @apply rounded-lg;
  @apply font-bold;
  @apply text-gray-50;
  @apply bg-indigo-600;
  @apply focus:outline-none;
  @apply focus-within:(ring ring-pink-400);
  @apply hover:bg-indigo-800;
  @apply dark:(text-gray-900 bg-pink-400 focus-within:ring-indigo-600 hover:bg-pink-200);
  @apply transition-all;
  @apply cursor-pointer;
}
</style>

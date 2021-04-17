<template>
  <div class="relative flex flex-1 mx-4 my-8">
    <div
      class="absolute top-0 h-full border-r-2 border-gray-200 dark:border-gray-600"
      style="z-index: -1; left: 15px"
    ></div>
    <ul class="flex flex-col justify-end space-y-16">
      <li
        v-for="(event, index) in timeline"
        :key="`event-${index}`"
        class="event-item"
      >
        <div class="event-heading">
          <div class="event-indicator"></div>
          <component
            :is="event.link ? 'a' : 'div'"
            :href="event.link"
            target="_blank"
            rel="noopener"
            class="event-headline"
          >
            <span class="event-date">{{ event.date }}</span>
            <span class="event-divider">—</span>
            <span class="event-title">{{ event.title }}</span>
          </component>
        </div>
        <div v-if="event.description" class="event-description">
          {{ event.description }}
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.event-item {
  @apply flex;
  @apply flex-col;
  @apply space-y-2;
}
.event-heading {
  @apply flex;
  @apply items-center;
}
.event-indicator {
  @apply flex;
  @apply flex-shrink-0;
  @apply w-8;
  @apply h-8;
  @apply bg-gray-400;
  @apply border-8;
  @apply border-white;
  @apply rounded-full;
  @apply dark:border-black;
  @apply dark:bg-gray-600;
}
.event-headline {
  @apply ml-4;
  @apply font-medium;
}
.event-description {
  @apply ml-12;
  @apply text-gray-500;
  @apply dark:text-gray-400;
}
.event-divider {
  @apply mx-2;
}
a {
  @apply text-purple-600;
  @apply dark:text-yellow-400;
}
a:hover {
  @apply text-purple-800;
  @apply dark:text-yellow-200;
}
</style>

<script>
import data from "../assets/data/timeline";

export default {
  setup() {
    return {
      timeline: data,
    };
  },
};
</script>

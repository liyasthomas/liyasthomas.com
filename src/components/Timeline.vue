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
          <div class="event-headline">
            <span class="event-date">{{ event.date }}</span>
            <span class="event-divider">—</span>
            <span class="event-title">{{ event.title }}</span>
          </div>
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
  @apply text-gray-400;
  @apply dark:text-gray-400;
}
.event-divider {
  @apply mx-2;
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

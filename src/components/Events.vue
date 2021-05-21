<template>
  <div class="relative flex flex-col">
    <div
      class="
        absolute
        border-r-2 border-gray-200
        bottom-1
        top-1
        dark:border-gray-800
      "
      style="z-index: -1; left: 15px"
    ></div>
    <ul class="flex flex-col justify-end space-y-10 md:space-y-8">
      <li
        v-for="(event, index) in timeline.slice(0, eventCount)"
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
            :class="{ 'event-link': event.link }"
          >
            <span class="event-date">{{
              new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }).format(new Date(event.date))
            }}</span>
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
  <div v-if="eventCount < timeline.length" class="more-container">
    <button class="more-event" @click="eventCount += 5">Show more</button>
  </div>
</template>

<style scoped>
.event-item {
  @apply flex;
  @apply flex-col;
}

.event-heading {
  @apply flex;
}

.event-indicator {
  @apply flex;
  @apply flex-shrink-0;
  @apply w-8;
  @apply h-8;
  @apply my-1;
  @apply bg-gray-400;
  @apply border-8;
  @apply border-gray-50;
  @apply rounded-full;
  @apply dark:(border-gray-900 bg-gray-600);
}

.event-headline {
  @apply px-2;
  @apply py-1;
  @apply mx-4;
  @apply my-1;
  @apply font-medium;
}

.event-description {
  @apply px-2;
  @apply ml-12;
  @apply text-gray-500;
  @apply dark:text-gray-400;
}

.event-divider {
  @apply mx-2;
}

.more-container {
  @apply flex;
  @apply items-center;
  @apply justify-center;
  @apply md:justify-start;
  @apply h-0;
  @apply border-b;
  @apply border-dashed;
  @apply my-12;
  @apply border-gray-200;
  @apply dark:border-gray-800;
}

.more-event {
  @apply absolute;
  @apply px-4;
  @apply py-2;
  @apply md:ml-14;
  @apply rounded-lg;
  @apply font-bold;
  @apply text-gray-50;
  @apply bg-purple-600;
  @apply focus:outline-none;
  @apply focus-within:(ring ring-yellow-400);
  @apply hover:(bg-purple-800);
  @apply dark:(text-gray-900 bg-yellow-400 focus-within:ring-purple-600 hover:bg-yellow-200);
  @apply transition-all;
}

.event-link {
  @apply rounded-lg;
  @apply text-purple-600;
  @apply focus:outline-none;
  @apply focus-within:(ring ring-yellow-400);
  @apply hover:(text-purple-800);
  @apply dark:(text-yellow-400 focus-within:ring-purple-600 hover:text-yellow-200);
  @apply transition-all;
}
</style>

<script setup lang="ts">
import timeline from "../assets/data/timeline"
import { ref } from "vue"

const eventCount = ref(5)
</script>

<template>
  <div class="relative flex flex-col">
    <div
      class="absolute border-r-2 border-gray-200 bottom-1 top-1 dark:border-gray-800"
      style="z-index: -1; left: 15px"
    ></div>
    <ul class="flex flex-col justify-end space-y-10 md:space-y-8">
      <li
        v-for="(project, index) in projects.slice(0, projectCount)"
        :key="`project-${index}`"
        class="project-item"
      >
        <div class="project-heading">
          <div class="project-indicator"></div>
          <component
            :is="project.link ? 'a' : 'div'"
            :href="project.link"
            target="_blank"
            rel="noopener"
            class="project-headline"
          >
            <span class="project-title">{{ project.title }}</span>
          </component>
        </div>
        <div v-if="project.description" class="project-description">
          {{ project.description }}
        </div>
      </li>
    </ul>
  </div>
  <div v-if="projectCount < projects.length" class="more-container">
    <button class="more-project" @click="projectCount += 5">Show more</button>
  </div>
</template>

<style scoped>
.project-item {
  @apply flex;
  @apply flex-col;
}
.project-heading {
  @apply flex;
}
.project-indicator {
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
.project-headline {
  @apply px-2;
  @apply py-1;
  @apply mx-4;
  @apply my-1;
  @apply font-medium;
}
.project-description {
  @apply px-2;
  @apply ml-12;
  @apply text-gray-500;
  @apply dark:text-gray-400;
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
.more-project {
  @apply flex;
  @apply items-center;
  @apply justify-center;
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
a {
  @apply rounded-lg;
  @apply text-purple-600;
  @apply focus:outline-none;
  @apply focus-within:(ring ring-yellow-400);
  @apply hover:(text-purple-800);
  @apply dark:(text-yellow-400 focus-within:ring-purple-600 hover:text-yellow-200);
  @apply transition-all;
}
</style>

<script>
import data from "../assets/data/projects"

export default {
  setup() {
    return {
      projects: data,
    }
  },
  data() {
    return {
      projectCount: 5,
    }
  },
}
</script>

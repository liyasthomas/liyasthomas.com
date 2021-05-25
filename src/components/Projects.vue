<template>
  <div>
    <h1 class="inline-flex mb-8 text-2xl font-bold">Projects</h1>
    <div class="flex flex-col">
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <li
          v-for="(project, index) in projects.slice(
            0,
            props.home ? props.projectCount : projectCount
          )"
          :key="`project-${index}`"
        >
          <component
            :is="project.link ? 'a' : 'div'"
            :href="project.link"
            target="_blank"
            rel="noopener"
            class="project-item"
            :class="{ 'project-link': project.link }"
          >
            <div class="project-heading">
              <div class="project-headline">
                <span class="project-title">{{ project.title }}</span>
              </div>
            </div>
            <div v-if="project.description" class="project-description">
              {{ project.description }}
            </div>
          </component>
        </li>
      </ul>
    </div>
    <div v-if="projectCount < projects.length" class="more-container">
      <router-link v-if="props.home" to="/works" class="more-project">
        View all
      </router-link>
      <button v-else class="more-project" @click="projectCount += 6">
        Show more
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import projects from "../assets/data/projects"
import { ref } from "vue"
import { defineProps } from "vue"

const projectCount = ref(6)

const props = defineProps({
  projectCount: {
    type: Number,
    default: 4,
  },
  home: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.project-item {
  @apply flex;
  @apply flex-col;
  @apply h-full;
  @apply px-6;
  @apply py-6;
  @apply border;
  @apply border-gray-200;
  @apply rounded-lg;
  @apply hover:border-gray-300;
  @apply dark:(border-gray-800 hover:border-gray-700);
  @apply transition-all;
}

.project-heading {
  @apply flex;
}

.project-headline {
  @apply mb-2;
  @apply font-medium;
}

.project-description {
  @apply text-gray-500;
  @apply dark:text-gray-400;
}

.more-container {
  @apply flex;
  @apply items-center;
  @apply justify-center;
  @apply h-0;
  @apply border-b;
  @apply border-dashed;
  @apply my-12;
  @apply border-gray-200;
  @apply dark:border-gray-800;
}

.more-project {
  @apply absolute;
  @apply px-4;
  @apply py-2;
  @apply rounded-lg;
  @apply font-bold;
  @apply text-gray-50;
  @apply bg-fuchsia-600;
  @apply focus:outline-none;
  @apply focus-within:(ring ring-teal-400);
  @apply hover:(bg-fuchsia-800);
  @apply dark:(text-gray-900 bg-teal-400 focus-within:ring-fuchsia-600 hover:bg-teal-200);
  @apply transition-all;
}

.project-link {
  @apply rounded-lg;
  @apply text-fuchsia-600;
  @apply focus:outline-none;
  @apply focus-within:(ring ring-teal-400);
  @apply hover:(text-fuchsia-800);
  @apply dark:(text-teal-400 focus-within:ring-fuchsia-600 hover:text-teal-200);
  @apply transition-all;
}
</style>

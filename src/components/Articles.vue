<template>
  <div class="relative flex flex-col">
    <div
      class="absolute border-r-2 border-gray-200 bottom-1 top-1 dark:border-gray-800"
      style="z-index: -1; left: 15px"
    ></div>
    <ul class="flex flex-col justify-end space-y-10 md:space-y-8">
      <li
        v-for="(article, index) in articles.slice(0, articleCount)"
        :key="`article-${index}`"
        class="article-item"
      >
        <div class="article-heading">
          <div class="article-indicator"></div>
          <router-link :to="`/blog/${article.slug}`" class="article-headline">
            <span class="article-date">{{
              new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }).format(new Date(article.date))
            }}</span>
            <span class="article-divider">—</span>
            <span class="article-title">{{ article.title }}</span>
          </router-link>
        </div>
        <div v-if="article.description" class="article-description">
          {{ article.description }}
        </div>
      </li>
    </ul>
  </div>
  <div v-if="articleCount < articles.length" class="more-container">
    <button class="more-article" @click="articleCount += 5">Show more</button>
  </div>
</template>

<style scoped>
.article-item {
  @apply flex;
  @apply flex-col;
}
.article-heading {
  @apply flex;
}
.article-indicator {
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
.article-headline {
  @apply px-2;
  @apply py-1;
  @apply mx-4;
  @apply my-1;
  @apply font-medium;
}
.article-description {
  @apply px-2;
  @apply ml-12;
  @apply text-gray-500;
  @apply dark:text-gray-400;
}
.article-divider {
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
.more-article {
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
  @apply bg-green-600;
  @apply focus:outline-none;
  @apply focus-within:(ring ring-cyan-400);
  @apply hover:(bg-green-800);
  @apply dark:(text-gray-900 bg-cyan-400 focus-within:ring-green-600 hover:bg-cyan-200);
  @apply transition-all;
}
a {
  @apply rounded-lg;
  @apply text-green-600;
  @apply focus:outline-none;
  @apply focus-within:(ring ring-cyan-400);
  @apply hover:(text-green-800);
  @apply dark:(text-cyan-400 focus-within:ring-green-600 hover:text-cyan-200);
  @apply transition-all;
}
</style>

<script>
import data from "../assets/data/articles"

export default {
  setup() {
    return {
      articles: data,
    }
  },
  data() {
    return {
      articleCount: 5,
    }
  },
}
</script>

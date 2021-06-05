<template>
  <div class="flex container flex-col min-h-screen">
    <Header />
    <main class="flex flex-col flex-1 m-8">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

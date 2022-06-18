<script setup lang="ts">
useHead({
  title: 'Nuxt 3 starter',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'Nuxt 3 starter template' }],
});
</script>

<template>
  <main class="flex flex-col h-screen">
    <Navbar />
    <slot />
  </main>
</template>

<template>
  <main class="flex p-4 px-5">
    <section class="flex justify-between w-full">
      <NuxtLink
        to="/"
        class="dark:text-white font-bold text-2xl"
      >
        Logo
      </NuxtLink>
      <select
        v-model="$colorMode.preference"
        class="bg-black text-white rounded p-1"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </section>
  </main>
</template>

<script setup>
useColorMode();
</script>

<style></style>

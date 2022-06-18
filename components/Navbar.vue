<template>
  <main class="flex p-2">
    <section class="flex justify-between w-full">
      <h1 class="dark:text-white">Logo</h1>
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

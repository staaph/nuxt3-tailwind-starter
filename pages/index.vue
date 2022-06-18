<template>
  <div>
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <button @click="$colorMode.preference = 'dark'">dark</button>
    <button @click="$colorMode.preference = 'light'">light</button>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
console.log(colorMode.preference);
</script>

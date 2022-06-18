<template>
  <div>
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <button
      v-if="$colorMode.preference === 'light'"
      @click="$colorMode.preference = 'dark'"
    >
      dark
    </button>
    <button
      v-if="$colorMode.preference === 'dark'"
      @click="$colorMode.preference = 'light'"
    >
      light
    </button>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
console.log(colorMode.preference);
</script>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';

const test = 'test';
</script>

<template>
  <h1 class="text-3xl font-bold underline text-green-400">
    {{ test }}
  </h1>
  <HelloWorld msg="Vite + Vue" />
</template>

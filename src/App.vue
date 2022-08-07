<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import useUserStore from './stores/useUserStore';

const userStore = useUserStore();

setTimeout(() => {
  userStore.updateName('tester');
}, 2000);
</script>

<template>
  <hello-world msg="Vite + Vue" />
  {{ userStore.user.name }}
</template>

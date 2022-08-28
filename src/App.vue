<script setup lang="ts">
import { ref } from 'vue';
import useUserStore from './stores/user';
import VueButton from './components/VueButton.vue';
import VueHeaderNavigation from './components/VueHeaderNavigation.vue';
import useEvent from './composables/event';

const userStore = useUserStore();
const newName = ref('');
useEvent(window, 'scroll', (event : Event) : void => {
  console.log(window.scrollY);
  console.log(event);
});

</script>

<template>
  <vue-header-navigation />
  <h1 class="text-2xl underline h-screen mb-20">
    Hello {{ userStore.name }}
  </h1>
  <input
    v-model="newName"
    type="text"
  >
  <vue-button
    type="button"
    @click="userStore.updateName(newName)"
  >
    Change Name
  </vue-button>
</template>

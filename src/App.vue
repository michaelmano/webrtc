<script setup lang="ts">
import { ref } from 'vue';
import useUserStore from './stores/user';
import VueButton from './components/VueButton.vue';
import VueHeaderNavigation from './components/VueHeaderNavigation.vue';
import useEventListener from './composables/event';
import SvgClock from './assets/clock.svg';

const userStore = useUserStore();
const newName = ref('');
useEventListener(window, 'scroll', (event : Event) : void => {
  console.log(window.scrollY);
  console.log(event);
});

</script>

<template>
  <vue-header-navigation />
  <h1 class="text-2xl underline h-screen mb-20">
    Hello {{ userStore.name }} <svg-clock />
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

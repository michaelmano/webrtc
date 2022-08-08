<script setup lang="ts">
import { ref } from 'vue';
import useUserStore from './stores/user';
import VueButton from './components/VueButton.vue';
import VueHeaderNavigation from './components/VueHeaderNavigation.vue';

const userStore = useUserStore();
const newName = ref('');

</script>

<template>
  <vue-header-navigation />
  <h1 class="text-2xl underline">
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

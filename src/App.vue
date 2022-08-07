<script setup lang="ts">
import { ref } from 'vue';
import useUserStore from './stores/useUserStore';
import VueButton from './components/VueButton.vue';

const userStore = useUserStore();
const newName = ref('');

</script>

<template>
  <h1 class="text-2xl underline">
    Hello {{ userStore.user.name }}
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

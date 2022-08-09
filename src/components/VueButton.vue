<script setup lang="ts">
// import { ButtonHTMLAttributes } from 'vue';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;
// type ButtonType = Pick<ButtonHTMLAttributes, 'type'>; // This interface does not include undefined.

interface Props {
  type : ButtonType,
}

defineProps<Props>();
defineEmits(['click']);

</script>

<template>
  <button
    :type="type"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

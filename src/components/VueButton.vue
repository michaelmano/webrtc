<script setup lang="ts">
type ButtonType = 'button' | 'submit' | 'reset' | undefined;

interface Props {
  type: ButtonType,
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

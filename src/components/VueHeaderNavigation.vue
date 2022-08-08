<script setup lang="ts">
import {
  Menu as VueMenu,
  MenuButton as VueMenuButton,
  MenuItems as VueMenuItems,
  MenuItem as VueMenuItem,
} from '@headlessui/vue';

const currentPath = window.location.pathname;
</script>

<template>
  <vue-menu>
    <vue-menu-button>More</vue-menu-button>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <vue-menu-items as="ul">
        <vue-menu-item
          v-slot="{ active }"
          as="li"
        >
          <a
            :class="{ 'bg-blue-500': active || currentPath === '/' }"
            href="/"
          >
            Account settings
          </a>
        </vue-menu-item>
        <vue-menu-item
          v-slot="{ active }"
          as="li"
        >
          <a
            :class="{ 'bg-blue-500': active || currentPath === '/account-settings' }"
            href="/account-settings"
          >
            Documentation
          </a>
        </vue-menu-item>
        <vue-menu-item
          as="li"
          disabled
        >
          <span class="opacity-75">Invite a friend (coming soon!)</span>
        </vue-menu-item>
      </vue-menu-items>
    </transition>
  </vue-menu>
</template>

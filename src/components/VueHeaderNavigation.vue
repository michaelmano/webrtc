<script setup lang="ts">
import {
  Menu as VueMenu,
  MenuButton as VueMenuButton,
  MenuItems as VueMenuItems,
  MenuItem as VueMenuItem,
} from '@headlessui/vue';

interface MenuItem {
  name : string;
  path : string;
}

const currentPath = window.location.pathname;

const menuItems : MenuItem[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Profile',
    path: '/profile',
  },
  {
    name: 'Logout',
    path: '/logout',
  },
];
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
          v-for="(item, index) in menuItems"
          :key="index"
          v-slot="{ active }"
          as="li"
        >
          <a
            :class="{ 'bg-blue-500': active || currentPath === item.path }"
            href="/"
          >
            {{ item.name }}
          </a>
        </vue-menu-item>
      </vue-menu-items>
    </transition>
  </vue-menu>
</template>

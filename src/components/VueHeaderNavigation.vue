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
  <vue-menu
    as="div"
    class="flex flex-wrap justify-content-end"
  >
    <vue-menu-button class="px-4 py-2 m-2 border-b-4 border-slate-700 rounded bg-gray-500 text-white ml-auto">
      Menu
    </vue-menu-button>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <vue-menu-items
        as="ul"
        class="w-full md:flex md:flex-wrap bg-teal-500"
      >
        <vue-menu-item
          v-for="(item, index) in menuItems"
          :key="index"
          v-slot="{ active }"
          as="li"
          class="w-full md:w-auto"
        >
          <a
            :class="{ 'bg-teal-400': active || currentPath === item.path }"
            class="link w-full text-center px-4 py-2 block text-white font-light"
            href="/"
          >
            {{ item.name }}
          </a>
        </vue-menu-item>
      </vue-menu-items>
    </transition>
  </vue-menu>
</template>

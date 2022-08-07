import { ref } from 'vue';
import { defineStore } from 'pinia';
import type User from '../types/User';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: ref < User >({
      name: 'James',
      email: 'James@example.com',
    }),
  }),
  getters: {
    website() {
      this.user.email.substring(this.user.email.lastIndexOf('@') + 1);
    },
  },
  actions: {
    updateName(newName: string):void {
      this.user.name = newName;
    },
  },
  persist: {
    enabled: true,
  },
});

export default useUserStore;

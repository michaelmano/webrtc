import { ref } from 'vue';
import { defineStore } from 'pinia';
import type User from '../types/User';

const useUserStore = defineStore({
  id: 'user',
  state: () => ref < User >({
    name: 'James',
    email: 'James@example.com',
  }),
  getters: {
    website() : string {
      return this.email.substring(this.email.lastIndexOf('@') + 1);
    },
  },
  actions: {
    updateName(newName : string) : void {
      this.name = newName;
    },
  },
  persist: {
    enabled: true,
  },
});

export default useUserStore;

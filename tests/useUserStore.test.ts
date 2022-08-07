import {
  expect, describe, it, beforeEach,
} from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import useUserStore from '@/stores/user';

describe('User Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it('allows the user to change their name', () => {
    const userStore = useUserStore();
    expect(userStore.user.name).toBe('James');
    userStore.updateName('John');
    expect(userStore.user.name).toBe('John');
  });
});

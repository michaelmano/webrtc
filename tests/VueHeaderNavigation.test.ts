import { mount } from '@vue/test-utils';
import {
  expect, describe, it,
} from 'vitest';
import VueHeaderNavigation from '@/components/VueHeaderNavigation.vue';

describe('VueHeaderNavigation.vue', () => {
  it('should exist', async () => {
    expect(VueHeaderNavigation).toBeTruthy();
  });

  it('should have consistant menu items', async () => {
    const wrapper = mount(VueHeaderNavigation);
    const menuItems = [
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
    expect(wrapper.vm.menuItems).toEqual(menuItems);
  });
});

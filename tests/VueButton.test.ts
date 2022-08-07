import { mount } from '@vue/test-utils';
import {
  expect, describe, it,
} from 'vitest';
import VueButton from '@/components/VueButton.vue';

describe('VueButton.vue', () => {
  it('should exist', async () => {
    expect(VueButton).toBeTruthy();
  });

  it('should render the label', async () => {
    const label = 'Click Me';
    const wrapper = mount(VueButton, {
      slots: {
        default: label,
      },
    });
    expect(wrapper.find('button').text()).toEqual(label);
  });

  it('should emit when clicked', async () => {
    const wrapper = mount(VueButton, {
      props: { label: 'test' },
    });
    await wrapper.get('button').trigger('click');

    expect(wrapper.emitted().click).toBeTruthy();
  });
});

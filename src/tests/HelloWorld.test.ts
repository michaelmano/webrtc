import { mount } from '@vue/test-utils';
import {
  expect, describe, it,
} from 'vitest';
import HelloWorld from '../components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  expect(HelloWorld).toBeTruthy();

  it('should display header text', async () => {
    const msg = 'HelloWorld';
    const wrapper = mount(HelloWorld, {
      props: {
        msg,
      },
    });

    expect(wrapper.find('h1').text()).toEqual(msg);
  });

  it('should increment the button when clicked', async () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'test' },
    });
    await wrapper.get('button').trigger('click');

    expect(wrapper.find('button').text()).toEqual('count is 1');
  });

  // it('will match the snapshot', async () => {
  //   const msg = 'HelloWorld';

  //   const wrapper = mount(HelloWorld, {
  //     props: { msg },
  //   });

  //   expect(wrapper).toMatchSnapshot();
  // });
});

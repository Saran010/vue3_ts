import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';
import router from '@/router';

describe('App.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = '||';
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.text()).toBe(msg);
  });
});

import { defineStore, acceptHMRUpdate } from 'pinia';

// eslint-disable-next-line import/prefer-default-export
const useUserStore = defineStore('main', {
  state() {
    return {
      name: '123123',
    };
  },
});

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept([], acceptHMRUpdate(useUserStore, import.meta.webpackHot));
}

export default useUserStore;

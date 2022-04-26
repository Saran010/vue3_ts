import { defineStore, acceptHMRUpdate } from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const useUserStore = defineStore('main', {
  state() {
    return {
      name: 'alex',
    };
  },
});

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept(acceptHMRUpdate(useUserStore, import.meta.webpackHot));
}

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>{{ userStore.name }}</div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import user from '@/store/user'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  setup() {
    const userStore = user();

    return {
      userStore,
    };
  },
});
</script>

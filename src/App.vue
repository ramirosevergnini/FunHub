<template>
  <div id="app">
    <Header v-if="showHeader" />
    <router-view />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  setup() {
    const route = useRoute();
    const showHeader = computed(() => route.path !== '/login' && route.path !== '/register');

    return { showHeader };
  },
};
</script>

<style>
/* Seus estilos globais */
</style>

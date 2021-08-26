<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Layout from './components/Layout.vue';

const route = useRoute();
let isRequiredAuth = computed(() => route.meta.isRequiredAuth);
</script>

<template>
  <layout v-if="isRequiredAuth" />
  <router-view v-else />
</template>

<style lang="scss">
html,
body,
#app,
.page-container {
  width: 100vw;
  height: 100vh;
}
</style>

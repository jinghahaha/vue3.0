<script setup lang="ts">
import Menu from './Menu.vue';
</script>

<template>
  <el-container class="page-container">
    <Menu />
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.page-container {
  width: 100vw;
  height: 100vh;
}
</style>

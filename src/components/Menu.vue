<template>
  <el-aside width="200px">
    <div class="side-title">反侦测作业平台</div>
    <el-menu
      background-color="#062c82"
      text-color="rgba(255, 255, 255, 0.7)"
      active-text-color="#fff"
      router
      :default-active="route.path"
    >
      <sub-menu :menuList="menu" />
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import SubMenu from './SubMenu.vue';
import menu from '../common/menu';

const route = useRoute();
</script>

<style lang="scss" scoped>
$sideBgc: #062c82;

.el-aside {
  background-color: $sideBgc;
  .side-title {
    font-size: 24px;
    font-weight: 600;
    line-height: 60px;
    text-align: center;
    color: rgba($color: #fff, $alpha: 0.7);
  }
  .el-menu {
    border-right: none;
  }
}
</style>

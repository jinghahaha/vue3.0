<template>
  <div v-for="menu in menuList" :key="menu.path">
    <el-sub-menu v-if="menu.children" :index="menu.path">
      <template #title>
        <i v-if="menu.icon" :class="menu.icon" />
        {{ menu.name }}
      </template>
      <sub-menu :menuList="menu.children" />
    </el-sub-menu>
    <el-menu-item v-else-if="!menu.isHide" :index="menu.path" :route="menu.router">
      <template #title>
        <i v-if="menu.icon" :class="menu.icon" />
        {{ menu.name }}
      </template>
    </el-menu-item>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

interface MenuFace {
  path: string;
  name: string;
  icon?: string;
  children?: object[];
}
const { menuList } = defineProps<{ menuList: MenuFace }>();
</script>

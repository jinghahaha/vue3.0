<template>
  <div>
    <page-table :data="list" v-model:current-page="pager.current" v-model:page-size="pager.size" :total="pager.total">
      <el-table-column label="用户名" prop="name" />
    </page-table>
  </div>
</template>
<script setup lang="ts">
const list = [
  {
    name: 'ssss',
  },
];
const pager = {
  current: 1,
  size: 10,
  total: list.length,
};
</script>

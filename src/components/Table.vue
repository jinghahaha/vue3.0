<template>
  <div>
    <el-table v-bind="$attrs">
      <slot name="header" />
      <slot />
    </el-table>
    <el-pagination background layout="prev, pager, next, sizes, total" v-bind="$attrs" />
  </div>
</template>

<style lang="scss" scoped>
::v-deep {
  .el-pagination {
    text-align: right;
    padding-top: 10px;
  }
}
</style>

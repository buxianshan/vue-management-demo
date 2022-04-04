<template>

  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import CommonAside from "../src/components/CommonAside";
  export default {
    name: 'Home',
    data() {
      return {

      }
    },
    components: {
      CommonAside
    }
  }
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding-top: 0;
}

</style>
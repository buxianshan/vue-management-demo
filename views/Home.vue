<template>

  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>

</template>

<script>
import CommonAside from "../src/components/CommonAside";
  export default {
    name: 'Home',
    data() {
      return {
        menu: [
          {
            path: '/',
            name: 'home',
            label: '首页',
            icon: 's-home',
            url: '/Home/Home'
          },
          {
            path: '/mall',
            name: 'mall',
            label: '商品管理',
            icon: 'video-play',
            url: '/MallManage/MallManage'
          },
          {
            path: '/user',
            name: 'user',
            label: '用户管理',
            icon: 'user',
            url: '/UserManage/UserManage'
          },
          {
            label: '其它',
            icon: 'location',
            children: [
              {
                path: '/page1',
                name: 'page1',
                label: '页面1',
                icon: 'setting',
                url: '/Other/PageOne'
              },
              {
                path: '/page2',
                name: 'page2',
                label: '页面2',
                icon: 'setting',
                url: '/Other/PageTwo'
              },
            ]
          },
        ]
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
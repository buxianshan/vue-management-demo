<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="#545c64" text-color="white"
           active-text-color="#ffd04b" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <router-link to="/">
      <h3>{{ isCollapse ? '后台' : 'Vue后台管理系统' }}</h3>
    </router-link>
    <el-menu-item @click="clickMenu(item)" v-for="item in noChild" :index="item.path" :key="item.path">
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChild" :key="item.name" :index="item.name">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item @click="clickMenu(subItem)" v-for="(subItem, subIndex) in item.children" :key="subItem.path"
                    :index="subItem.path">
        <i :class="`el-icon-${subItem.icon}`"></i>
        <span slot="title">{{ subItem.label }}</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        // {
        //   path: '/',
        //   name: 'home',
        //   label: '首页',
        //   icon: 's-home',
        //   url: '/Home/Home'
        // },
        // {
        //   path: '/mall',
        //   name: 'mall',
        //   label: '商品管理',
        //   icon: 'video-play',
        //   url: '/MallManage/MallManage'
        // },
        // {
        //   path: '/user',
        //   name: 'user',
        //   label: '用户管理',
        //   icon: 'user',
        //   url: '/UserManage/UserManage'
        // },
        // {
        //   label: '其它',
        //   name: 'other',
        //   icon: 'location',
        //   children: [
        //     {
        //       path: '/page1',
        //       name: 'page1',
        //       label: '页面1',
        //       icon: 'setting',
        //       url: '/Other/PageOne'
        //     },
        //     {
        //       path: '/page2',
        //       name: 'page2',
        //       label: '页面2',
        //       icon: 'setting',
        //       url: '/Other/PageTwo'
        //     },
        //   ]
        // },
      ]
    };
  },
  computed: {
    noChild() {
      console.log(this.syncMenu.filter((item) => !item.children))
      return this.syncMenu.filter((item) => !item.children)
    },
    hasChild() {
      console.log(this.syncMenu.filter((item) => item.children))
      return this.syncMenu.filter((item) => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
    syncMenu() {
      return this.$store.state.tab.menu
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      this.$router.push({
        name: item.name
      })
      this.$store.commit('selectMenu', item)
    },
  }
}
</script>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  height: 100%;
  border: none;

  h3 {
    color: white;
    text-align: center;
    line-height: 48px;
  }
}
</style>
<template>
  <header>
    <div class="left-content">
      <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
      <h3 style="color: white">首页</h3>
    </div>
    <div class="right-content">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img class='user' :src="userIcon">
        </span>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CommonHeader',
  data() {
    return {
      userIcon: require('../assets/wufan.png')
    }
  },
  methods: {
    handleMenu() {
      console.log("ccccc")
      this.$store.commit('collapseMenu')
    }
  }
}

</script>

<style lang="less" scoped>
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.left-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.right-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}

</style>
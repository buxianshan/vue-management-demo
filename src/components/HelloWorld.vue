<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/">
      <el-button>Home</el-button>
    </router-link>
    <router-link to="/user">
      <el-button>User</el-button>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 20px;
}
</style>

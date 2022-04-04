<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from '../views/Home'
import User from '../views/User'

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  height: 100vh;
}
</style>

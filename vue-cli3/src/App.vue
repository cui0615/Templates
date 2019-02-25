<template>
  <div id="app">
    <router-link to='/'>首页</router-link> |
    <router-link to='/demo'>demo</router-link>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;
  a {
    color: #2c3e50;
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

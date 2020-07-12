<template>
  <div id="app">
    <app-header></app-header>
    <users></users>
    <app-footer></app-footer>
  </div>
</template>

<script>
// 局部注册组件
import Header from './components/Header'
import Users from './components/Users'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    'app-header': Header,
    'users': Users,
    'app-footer': Footer
  }
}
</script>

<style>
*{margin: 0; padding:0}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

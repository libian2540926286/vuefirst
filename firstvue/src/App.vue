<!--模板 html结构-->
<template>
  <div id="app">
    <app-header></app-header>
    <users></users>
    <!-- <router-view/> -->
    <app-footer></app-footer>
  </div>
</template>

<!--行为 处理逻辑-->
<script>
import Header from './components/Header'
import Users from './components/Users'
import Footer from './components/Footer'
export default {
  name: 'App',
  // data () {
  //   return {
  //     title: '这是我的第一个脚手架项目！'
  //   }
  // },
  components: {
    'users': Users,
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>

<!--样式 样式设置-->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

// 导入 Vue.js 和组件
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 模块化机制编程时使用
Vue.use(Router)
// 定义路由及创建路由实例
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

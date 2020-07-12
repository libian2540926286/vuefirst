// 导入 Vue.js 和组件
import Vue from 'vue'
import Router from 'vue-router'
// 模块化机制编程时使用
Vue.use(Router)
// 定义路由及创建路由实例
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello 李辩+1'
    }
  ]
})

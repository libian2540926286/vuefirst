<template>
  <header class="app-header">
      <div class="header_left">
        <a href="#">亲，请登录</a> 免费注册
      </div>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <a href="#">{{item}}</a>
        </li>
      </ul>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      items: ['我的淘宝', '购物车', '收藏夹', '商品分类', '卖家中心', '联系客服', '网站导航']
    }
  }
}
</script>

<style scoped>
*{margin: 0;padding: 0;}
header{
  background-color: rgb(230, 115, 121);
  overflow: hidden;
  padding: 0 250px;
  color: white;
}
.header_left{
  width: 20%;
  float: left;
  line-height: 80px;
}
.header_left a{
  color:rgb(192, 197, 115);
  text-decoration: none;
}
ul{
  list-style: none;
  float: right;
  margin: 0 auto;
}
ul li{
  float: left;
}
ul li a{
  display: block;
  padding: 20px;
  width: 70px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  color: white;
}
ul li a:hover{
  color: rgb(165, 189, 209);
}
</style>

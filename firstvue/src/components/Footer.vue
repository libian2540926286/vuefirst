<template>
  <footer class="app-footer">
    <div class="footer_hd">
      <p>
        <template v-for="(item, index) in items ">
        <span :key="index"><a href="#" class="footer_a">{{item}}</a></span>
        <b :key="index"> | </b>
        </template>
      </p>
    </div>
    <div class="footer_bd">
      <p>
        <template v-for="(link, index) in links ">
        <span :key="index"><a href="#" class="footer_a">{{link}}</a></span>
        </template>
        <b> | </b>
        <em>{{copyright}}</em>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  data () {
    return {
      copyright: '© 2003-现在 Taobao.com 版权所有',
      items: ['阿里巴巴', '淘宝网', '天猫', '聚划算', '全球速卖通', '阿里巴巴国际交易市场', '1688', '阿里妈妈', '飞猪', '淘小铺', '阿里云计算', 'AliOS', '阿里通信', '一淘', '万网', '高德', 'UC', '友盟', '阿里安全', '虾米', '钉钉', '支付宝', '优酷', '土豆', '阿里健康'],
      links: ['关于淘宝', '合作伙伴', '营销中心', '廉正举报', '联系客服', '开放平台', '诚征英才', '联系我们', '网站地图', '隐形权政策', '法律声明', '知识产权']
    }
  }
}
</script>

<style scoped>
p, a{margin: 0;padding: 0;}
.app-footer{
  width: 60%;
  text-align: left;
  margin: 0 auto;
}
.footer_hd{
  border-top: 1px solid rgb(206, 203, 203);
  border-bottom: 1px solid rgb(206, 203, 203);
  opacity: 0.7;
  filter:alpha(opacity=0.7);
  padding:5px 0px;
  margin: 30px 0px 10px 0px;
}
.footer_bd{
  opacity: 0.7;
  filter:alpha(opacity=0.7);
}
.footer_a{
  font-size: 12px;
  color:black;
  text-decoration: none;
  display: inline-block;
  padding: 0px 5px;
  height: 30px;
  line-height: 30px;
}
.footer_a:hover{
  color: red;
}
em{
  font-size: 12px;
  margin-left: 40px;
}
</style>

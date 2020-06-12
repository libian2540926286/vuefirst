<template>
    <div class="users">
      <div class="search_input">
        <div class="login">
          <img src="..\assets\img\taobao.png" alt="login">
        </div>
        <div class="search">
          <input type="text" value="" placeholder="女装"/>
          <button class="search_main" value="搜索">搜索</button>
          <div class="search_names">
            <a v-for="(SearchName, index) in SearchNames" :key="index" href="javascript:;">
              {{SearchName}}
            </a>
          </div>
        </div>
      </div>
      <div class="search_bar">
          <span>你是不是想找：女装夏 | 女套装 | </span>
      </div>
      <div class="search_option">
        <div class="search_price">
          <span>价格： </span>
          <input type="text" value="$" placeholder="$"> -
          <input type="text" value="$" placeholder="$">
          <select>
            <option>发货地</option>
            <option></option>
            <option></option>
          </select>
        </div>
        <div class="choose">
          <input type="checkbox" name="choice" value="包邮">包邮
          <input type="checkbox" name="choice" value="正品保证">正品保证
          <input type="checkbox" name="choice" value="7天退换">7天退换
          <input type="checkbox" name="choice" value="消费者保障">消费者保障
        </div>
      </div>
      <div class="searchResult">
        <div class="item" v-for="index in 10" :key="index">
          <img src="https://img.alicdn.com/imgextra/i4/58811448/O1CN01dD2zPR1MZE6hpjb61_!!0-saturn_solar.jpg_220x220.jpg_.webp">
          <div class="info">
            <p class="price">
              <span class="pricedetail"><strong>72.9</strong></span>
              <span class="postalicon">包邮</span>
            </p>
            <span class="title">2020新款夏女装上衣桑蚕丝连衣裙百搭打底衫女真丝短袖衬衫t恤女</span>
            <p class="shopName">
              <span class="shopNic">潮流女鞋89</span>
              <span class="payNum">4人付款</span>
            </p>
            <div class="moreInfo">
              <div class="dsr_info">
                <!-- <span class="active dsr-info-tgr"> -->
                  <span class="icon-btn-dsr">如实描述：</span>
                  <span class="dsr-info-num">4.7</span>
                  <span class="dropdown-tgr-arrow"></span>
                <!-- </span> -->
              </div>
              <ul class="dsr-info-list">
                  <li>
                    <span class="lessthan">如实描述: <b>4.7</b></span>
                    <!-- <span></span> -->
                  </li>
                  <li>
                    <span class="lessthan">服务态度: <b>4.8</b></span>
                  </li>
                  <li>
                    <span class="lessthan">发货速度: <b>4.8</b></span>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination_page">
        <a class="page" href="#">上一页</a>
        <a class="page current" href="#">1</a>
        <a class="page" href="#">2</a>
        <a class="page" href="#">3</a>
        <a class="page" href="#">...</a>
        <a class="page" href="#">100</a>
        <a class="page" href="#">下一页</a>
        <span> 共100页 </span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      SearchNames: ['连衣裙', '沙发', '窗帘', '零食', '床垫', '茶几', '耳机', '风扇', '电脑椅']
    }
  }
}
</script>

<style scoped>
.users{
  min-height: 700px;
  padding: 0;
  margin: 0 auto;
  width: 1345px;
}
.search_input::after, .search_option::after, .searchResult::after{
  content: "";
  display: block;
  clear: both;
}
.login{
  float: left;
}
.search{
  position: relative;
  float: left;
  width: 60%;
  padding:25px 60px;
}
.search input{
  width: 100%;
  height: 30px;
  border: 2px solid red;
  text-indent: 1em;
  outline: none;
}
.search_main{
  position: absolute;
  right: 58px;
  top: 26px;
  width: 80px;
  height: 34px;
  background: red;
  border: 0;
  outline: none;
  color: white;
}
.search_names a:link,.search_names a:visited{
  padding-top: 8px;
  font-size: 14px;
  display: block;
  float: left;
  width: 60px;
  text-decoration: none;
  color:black;
}
.search_names a:hover,.search_names a:active{
  color: red;
}
.search_bar,.search_price{
  background: rgb(237, 240, 238);
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: darkgrey;
  font-weight: 300;
  padding-left: 20px;
  border: 1px solid rgb(235, 231, 231);
}
.search_price{
  background-color: white;
  margin-top: 10px;
  width: 70%;
  float: left;
}
.search_price input{
  width: 40px;
}
.search_price select{
  width: 70px;
  height: 23px;
  color: darkgrey;
}
.choose{
  float: right;
  width: calc(30% - 33px);
  height: 40px;
  line-height: 40px;
  margin-top: 10px;
  padding-left: 10px;
  font-size: 14px;
  color: rgb(39, 36, 36);
  border: 1px solid rgb(235, 231, 231);
  border-left: none;
}
.searchResult{
  width: 100%+12px;
  min-height: 600px;
  padding:20px 0px;
  overflow: hidden;
}
.item{
  float: left;
  box-sizing: border-box;
  padding: 15px;
  margin: 0 0px 20px 15px;
  width: 256.5px;
  border: 1px solid #eee;
}
.item:nth-child(5n+1){
  margin-left: 0px;
}
@media screen and (min-width: 1190px) and (max-width: 1349){
  /* 更小屏幕时使用 */
}
@media screen and (min-width: 1350px) {
  /* 当前15.6寸屏幕 */
  .users{
    padding: 0;
    margin: 0 auto;
    width: 1345px;
  }
  .item{
  float: left;
  box-sizing: border-box;
  padding: 15px;
  margin: 0 0px 20px 15px;
  width: 256.5px;
  border: 1px solid #eee;
  }
}
.item:hover{
  border: 1px solid red;
}
.item img{
  width: 100%;
}
.pricedetail{
  font-size: 16px;
  color:#f85300;

}
.postalicon{
  display: inline-block;
  background-color: #f85300;
  color: white;
  font-size: 12px;
  width: 26px;
  text-align: center;
}
.title{
  font-size: 12px;
}
.shopName{
  font-size: 12px;
  overflow: hidden;
}
.shopNic{
  float: left;
  display: block;
  overflow: hidden;
  width: 100px;
  white-space: nowrap;
  color: #888;
  text-decoration: underline;
}
.payNum{
  float: right;
  width: 68px;
  overflow: hidden;
  text-align: right;
  display: block;
  color: #888;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.moreInfo{
  height: 23px;
  margin-top: 5px;
  position: relative;
}
.dsr_info {
  position: relative;
  float: right;
  height: 18px;
  width: 105px;
  line-height: 18px;
  padding-left: 3px;
  margin-top: 5px;
  text-decoration: none;
  border: 1px solid #d9d9d9;
  font-size: 12px;
  color: gray;
  overflow: hidden;
}
.dsr-info-num, .lessthan b {
    margin-left: 5px;
}
.dropdown-tgr-arrow {
    position: absolute;
    top: 6px;
    right: 3px;
    width: 7px;
    display: inline-block;
    height: 4px;
    font-size: 0;
    padding: 0;
    background: url(//g.alicdn.com/tb/bsrp/0.14.1/assets/images/normal/btn.png) -129px -285px no-repeat;
}
.moreInfo:hover .dsr-info-list{
  display: block;
}
.dsr-info-list{
  display: none;
  z-index: 3;
  background-color:white;
  position: absolute;
  left: 114px;
  width: 108px;
  border: 1px solid #d9d9d9;
  font-size: 12px;
  color: red;
  line-height: 16px;
  list-style-type: none;
  text-align: left;
  margin-top: 5px;
  padding: 0;
}
.dsr-info-list li:first-child span{
  color: green;

}
.lessthan{
  height: 18px;
  line-height: 18px;
  padding-left: 3px;
}
.pagination_page{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 12px;
}
.page{
  display: inline-block;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: 1px solid #eee;
  color: black;
  text-decoration: none;
}
.current{
  background-color: red;
  color: white;
}
</style>

<template>
  <div id="app">
    <mt-header fixed class="kugou_header">
      <router-link class="logo" to="/" slot="left">
        <img src="http://m.kugou.com/v3/static/images/index/logo.png" />
      </router-link>
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>
    <!--把路径对应的组件，替换在这个位置-->
    <router-view class="navbar" name="nav" />

    <div class="content">
      <mt-spinner type="triple-bounce" v-show="$store.state.isLoading"></mt-spinner>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*
以iphone 6s plus为标准
转换的rem = 量到的像素 / 3(设计图上的宽度/参照手机的宽度 或者 设计图上的高度/参照手机的高度) / 初始设置的font-size
          1118px   / 3( 1242px/414px 或者 2208px/736px ) / 41.4px
*/
html{
  font-size:41.4px;
}
@media (min-device-width :320px) and (max-device-width : 374px) {
  html {
    font-size: 32px !important;
  }
}
@media (min-device-width : 375px) and (max-device-width : 413px) {
  html {
    font-size: 37.5px !important;
  }
}
body {
  font-family: Microsoft Yahei, '微软雅黑';
  margin: 0;
  background: #fcfcfc;
}
.kugou_header {
  padding: 0.39rem 0 0.39rem 0.34rem;
  height: 1.57rem;
}
.logo img {
  height: 0.8rem;
}
#app .navbar {
  top: 1.57rem;
  box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
}
.content {
  padding-top: 3.12rem;
}

.mint-cell-wrapper {
  padding: 2rem 0;
}
.mint-spinner-triple-bounce {
  text-align: center;
}
.mint-swipe-indicators {
  bottom: -0.05rem;
}
.mint-swipe-indicator {
  width: 0.34rem;
  height: 0.34rem;
  background: hsla(0,0%,100%,.6);
  box-shadow: 0 1px 1px #f4f4f4;
  opacity: 1;
}
</style>

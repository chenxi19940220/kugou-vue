<template>
  <div id="app">
    <mt-header fixed class="kugou_header">
      <router-link class="logo" to="/" slot="left">
        <img src="http://m.kugou.com/v3/static/images/index/logo.png" />
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
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
body {
  font-family: Microsoft Yahei, '微软雅黑';
  margin: 0;
  background: #fcfcfc;
}
.kugou_header {
  padding: 1rem;
  height: 4rem;
}
.logo img {
  height: 2rem;
  display: inline-block;
  vertical-align: middle
}
#app .navbar {
  top: 4rem;
  box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
}
.content {
  padding-top: 8.255rem;
}

.new_song_swipe {
  margin-top: .4375rem
}
.song_cell {
  padding-left: 1.375rem;
}
.mint-cell-wrapper {
  padding: 2rem 0;
}
.mint-spinner-triple-bounce {
  text-align: center;
}
</style>

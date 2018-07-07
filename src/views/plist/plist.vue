<template>
  <div class="plist">
    <mt-cell class="song_cell" v-for="item in list" :key="item.specialid" :title="item.specialname" is-link>
      <div>
        <i></i>
        <span>{{item.playcount}}</span>
      </div>
      <img class="plist_img" slot="icon" src="http://imge.kugou.com/soft/collection/400/20180705/20180705110130253842.jpg" alt="" width="107" height="107">
    </mt-cell>
  </div>
</template>

<script>
import { getPlists } from '@/server'

export default {
  name: 'Plist',
  data () {
    return {
      list: []
    }
  },
  async created () {
    let { data } = await getPlists()
    console.log(data)
    this.list = data.data
    console.log(data.data)
  }
}
</script>

<style>
.plist .plist_img {
  width: 6.72rem;
  height: 6.72rem;
}
.plist .plist_cell {
  padding: 5px 0;
}
.plist .song_cell {
  padding: 0.2rem 0 0.2rem 0.875rem;
}
.plist .song_cell .icon_music {
  display: inline-block;
  width: .3rem;
  height: .3rem;
  background: url('http://m.kugou.com/v3/static/images/index/icon_music.png') no-repeat;
  background-size: 100%;
}
.plist .mint-cell-wrapper {
  padding: 0.875rem 0 1.1875rem;
}
.plist .mint-cell img {
  position: absolute;
  top: 0.875rem;
  left: 0.875rem;
}
.plist .mint-cell-title {
  height: 4.75rem;
  padding: 1.875rem 3.125rem 1.25rem 8.125rem;
  border-bottom: 1px solid #e5e5e5;
}
.plist .mint-cell-text {
  padding-top: 1.4286rem;
  font-size: 1.25rem;
  line-height: 1.875rem;
}
.plist .mint-cell-value {
  position: absolute;
  top: 6.85rem;
  left: 10.125rem;
  color: #999999;
}
</style>

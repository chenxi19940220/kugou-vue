<template>
  <div class="plist">
    <mt-cell class="song_cell" v-for="(item,index) in list" :key="index" :title="item.specialname" is-link>
      <div>
        <i class="plist_music"></i>
        <span>{{item.playcount}}</span>
      </div>
      <img class="plist_img" slot="icon" :src="item.imgurl.replace('{size}', kuGouSize)" :alt="item.specialname">
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
  computed: {
    kuGouSize (state) {
      return this.$store.state.kuGouSize
    }
  },
  async created () {
    let { data } = await getPlists()
    // console.log(data)
    this.list = data.data
    // console.log(data.data)
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
  padding-left: 0.875rem;
}
.plist .song_cell .icon_music {
  display: inline-block;
  width: .3rem;
  height: .3rem;
  background: url('http://m.kugou.com/v3/static/images/index/icon_music.png') no-repeat;
  background-size: 100%;
}
.plist .mint-cell-wrapper {
  position: relative;
  padding: 0.875rem 0 0;
}
.plist .mint-cell img {
  position: absolute;
  top: 0.875rem;
  left: 0;
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
  top: 6.6875rem;
  left: 8.125rem;
  color: #999999;
}
.plist .mint-cell-value i.plist_music {
  display: inline-block;
  width: 0.875rem;
  height: 0.875rem;
  background: url(../../assets/img/icon_music.png) no-repeat;
  background-size: 100%;
}
.plist .mint-cell-allow-right::after {
  width: 0.8rem;
  height: 1.75rem;
  margin-top: -0.875rem;
  border: none;
  background: url(../../assets/img/arrow_icon.png) no-repeat;
  background-size: 100%;
  -webkit-transform: translateY(0%) rotate(0deg);
  transform: translateY(0%) rotate(0deg);
}
</style>

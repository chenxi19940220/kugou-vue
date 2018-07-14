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
.plist .song_cell {
  padding-left: 0.34rem;
}
.plist .mint-cell-wrapper {
  position: relative;
  padding: 0;
}
.plist .mint-cell-title {
  height: 2.61rem;
  padding: 0.34rem 1.57rem 0.43rem 3.16rem;
  border-bottom: 1px solid #e5e5e5;
  align-items: center;
}
.plist .plist_img {
  width: 2.61rem;
  height: 2.61rem;
}
.plist .mint-cell img {
  position: absolute;
  top: 0.34rem;
  left: 0;
}
.plist .mint-cell-text {
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
  font-size: 0.43rem;
  line-height: 0.68rem;
}
.plist .mint-cell-value {
  position: absolute;
  top: 2.58rem;
  left: 3.12rem;
  color: #999999;
}
.plist .mint-cell-value i.plist_music {
  display: inline-block;
  width: 0.34rem;
  height: 0.34rem;
  background: url(../../assets/img/icon_music.png) no-repeat;
  background-size: 100%;
}
.plist .mint-cell-allow-right::after {
  width: 0.29rem;
  height: 0.48rem;
  margin-top: -0.24rem;
  border: none;
  background: url(../../assets/img/arrow_icon.png) no-repeat;
  background-size: 100%;
  -webkit-transform: translateY(0%) rotate(0deg);
  transform: translateY(0%) rotate(0deg);
}
</style>

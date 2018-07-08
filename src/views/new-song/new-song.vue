<template>
  <div class="new_songs">
    <div class="new_song_swipe">
      <mt-swipe :auto="0">
        <mt-swipe-item v-for="item in banner" :key="item.id">
          <img :src="item.imgurl" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="song_list">
      <mt-cell class="song_cell" v-for="item in list" :key="item.hash" :title="item.filename" is-link></mt-cell>
    </div>
  </div>
</template>

<script>
import { getNewSongs } from '@/server'

export default {
  name: 'NewSong',
  data () {
    return {
      banner: [],
      list: []
    }
  },
  async created () {
    let { data } = await getNewSongs({loading: 1})
    // console.log(data)
    this.banner = data.banner
    this.list = data.data
  }
}
</script>

<style>
.new_songs .new_song_swipe {
  height: 10rem;
}
.new_songs .new_song_swipe img {
  width: 100%;
}
.new_songs .mint-cell-wrapper {
  line-height: 1.625rem;
  padding-left: 0.5rem;
  padding-right: 2.657rem;
  border-bottom: 1px solid #e5e5e5;
}
.new_songs .mint-cell-text {
  font-size: 1.25rem;
}
.new_songs .mint-cell-allow-right::after {
  width: 1.0357rem;
  height: 1.0814rem;
  margin-top: -0.5407rem;
  border: none;
  background: url(../../assets/img/download_icon_2.png) no-repeat;
  background-size: 100%;
  -webkit-transform: translateY(0%) rotate(0deg);
  transform: translateY(0%) rotate(0deg);
}
</style>

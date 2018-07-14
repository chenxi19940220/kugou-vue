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
    this.$store.commit('updatedIsLoading', {isLoading: false})
  }
}
</script>

<style>
.new_songs .new_song_swipe {
  height: 4.13rem;
  margin-top: 0.2rem;
}
.new_songs .new_song_swipe img {
  max-width: 100%;
  height: 4.13rem;
}
.song_cell {
  padding-left: 0.34rem;
}
.new_songs .mint-cell-wrapper {
  line-height: 0.53rem;
  padding: 0.7rem 1.23rem 0.68rem 0.17rem;
  border-bottom: 0.02rem solid #e5e5e5;
}
.new_songs .mint-cell-text {
  font-size: 0.48rem;
}
.new_songs .mint-cell-allow-right::after {
  width: 0.51rem;
  height: 0.51rem;
  margin-top: -0.255rem;
  border: none;
  background: url(../../assets/img/download_icon_2.png) no-repeat;
  background-size: 100%;
  -webkit-transform: translateY(0%) rotate(0deg);
  transform: translateY(0%) rotate(0deg);
}
</style>

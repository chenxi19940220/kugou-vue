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
    let { data } = await getNewSongs()
    console.log(data)
    this.banner = data.banner
    this.list = data.data
  }
}
</script>

<style>
.new_song_swipe {
  height: 10rem;
}
.new_song_swipe img {
  width: 100%;
}
.new_songs .mint-cell-wrapper {
  padding-left: 0.5rem;
  border-bottom: 1px solid #e5e5e5;
}
.new_songs .mint-cell-text {
  font-size: 1.25rem;
}
</style>

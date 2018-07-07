<template>
  <div class="singer">
    <mt-cell class='song-cell singer-song-cell' v-for="item in list" :key="item.classid" :title="item.classname"  is-link></mt-cell>
  </div>
</template>

<script>
import { getSingers, getSingerList } from '@/server'

export default {
  name: 'Singer',
  data () {
    return {
      list: []
    }
  },
  async created () {
    let { data } = await getSingers()
    console.log(data)
    this.list = data.data
    console.log(this.list)

    let { data1 } = await getSingerList()
    console.log(data1)
    this.list = data1.data
    console.log(this.list)
  }
}
</script>

<style>
.song-cell {
  margin: 1rem .7143rem 1.0714rem;
  background: #fbfbfb;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
}
.singer .mint-cell-wrapper {
  padding: .7143rem;
}
</style>

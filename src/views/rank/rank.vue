<template>
  <div class="rank">
    <mt-cell class="song_cell" v-for="item in list" :key="item.id" :title="item.rankname" is-link>
      <img class="ran_img" slot="icon" src="http://imge.kugou.com/mcommon/400/20150717/20150717100030907982.png" />
    </mt-cell>
  </div>
</template>

<script>
import { getRankLists } from '@/server'

export default {
  name: 'Rank',
  data () {
    return {
      rankImg: [],
      list: []
    }
  },
  async created () {
    let { data } = await getRankLists({loading: 2})
    console.log(data)
    this.rankImg = data
    this.list = data.data
    console.log(this.list)
  }
}
</script>

<style>
.ran-img {
  width: 2rem;
  height: 2rem;
}
.rank-cell {
  padding: 5px 0;
}
.song-cell {
  padding: 0.2rem 0;
}
.rank img {
  width: 6.6875rem;
  height: 6.6875rem;
}
</style>

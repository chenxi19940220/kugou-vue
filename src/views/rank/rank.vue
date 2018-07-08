<template>
  <div class="rank">
    <mt-cell class="song_cell" v-for="item in list" :key="item.id" :title="item.rankname" is-link>
      <img class="ran_img" slot="icon" :src="item.imgurl.replace('{size}', kuGouSize)" />
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
  computed: {
    kuGouSize (state) {
      return this.$store.state.kuGouSize
    }
  },
  async created () {
    let { data } = await getRankLists({loading: 2})
    // console.log(data)
    this.rankImg = data
    this.list = data.data
    // console.log(this.list)
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
.rank .song_cell {
  padding-left: 0.875rem;
}
.rank .mint-cell-wrapper {
  padding: 0.875rem 0 0.9375rem;
  border-bottom: 1px solid #e5e5e5;
}
.rank .mint-cell-text {
  margin-left: 1.25rem;
  font-size: 1.375rem;
  font-weight: normal;
}
.rank .mint-cell-mask::after {
  background: transparent;
}
.rank .mint-cell-allow-right::after {
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

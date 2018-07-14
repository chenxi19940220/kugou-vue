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
.rank .song_cell {
  padding-left: 0.34rem;
}
.rank .mint-cell-wrapper {
  padding: 0.34rem 0;
  border-bottom: 0.02rem solid #e5e5e5;
}
.ran_img {
  width: 2.61rem;
  height: 2.61rem;
}
.rank .mint-cell-text {
  margin-left: 0.34rem;
  font-size: 0.48rem;
  font-weight: normal;
}
.rank .mint-cell-mask::after {
  background: transparent;
}
.rank .mint-cell-allow-right::after {
  width: 0.29rem;
  height: 0.48rem;
  margin-top: -0.24rem;
  border: none;
  background: url(../../assets/img/arrow_icon.png) no-repeat;
  background-size: 100%;
  -webkit-transform: translateY(0%) rotate(0deg);
  transform: translateY(0%) rotate(0deg);
}
.rank .rank-cell {
  padding: 5px 0;
}
.rank .song-cell {
  padding: 0.2rem 0;
}
</style>

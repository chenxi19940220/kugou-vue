<template>
  <div class="singer">
    <mt-cell class='song-cell singer-song-cell' v-for="item in list" :key="item.classid" :title="item.classname"  is-link :to="{path: '/singerList', query: {itemId:item.classid}}"></mt-cell>
  </div>
</template>

<script>
import { getSingers } from '@/server'

export default {
  name: 'Singer',
  data () {
    return {
      list: [],
      userInfo: []
    }
  },
  watch: {
    $route () {
      this.getData()
    }
  },
  async created () {
    let { data } = await getSingers()
    console.log(data)
    this.list = data.data
    // console.log(this.list)
    console.log(this.list)
  }
}
</script>

<style>
.singer .song-cell {
  margin: 0.53rem 0.34rem 0.53rem;
  background: #fbfbfb;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
}
.singer .mint-cell-wrapper {
  padding: 0.46rem 0 0.39rem 0.41rem;
}
.singer .mint-cell-text {
  font-size: 0.46rem;
}
.singer .mint-cell-allow-right::after {
  width: 0.27rem;
  height: 0.46rem;
  margin-top: -0.23rem;
  border: none;
  background: url(../../assets/img/arrow_icon.png) no-repeat center center;
  background-size: 80%;
  -webkit-transform: translateY(0%) rotate(0deg);
  transform: translateY(0%) rotate(0deg);
}
</style>

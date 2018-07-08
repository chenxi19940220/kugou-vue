<template>
  <mt-navbar fixed v-model="selected">
    <mt-tab-item :id="item.path" v-for="item in routes" :key="item.path">
      <router-link :to="{path: item.path}" tag="div">{{item.title}}</router-link>
    </mt-tab-item>
  </mt-navbar>
</template>

<script>
import { routes } from '@/router/routes'

export default {
  data () {
    return {
      selected: '/',
      routes
    }
  },
  created () {
    this.selected = this.$route.path
  }
}
</script>

<style>
.mint-tab-item-label {
  font-size: 1.4rem;
  color: #333;
}
.navbar {
  padding: 0 0.875rem;
}
.mint-navbar .mint-tab-item {
  padding: 1.25rem 0 1.375rem;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 0.26rem solid #33a3f5;
  margin-bottom: 0;
}
</style>

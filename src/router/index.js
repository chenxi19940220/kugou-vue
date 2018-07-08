import Vue from 'vue'
import Router from 'vue-router'

import Search from '@/views/search/search'
import SingerList from '@/views/singer-list/singer-list'

import { routes } from './routes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...routes,
    {
      path: '/search',
      name: 'Search',
      components: {
        default: Search
      }
    },
    {
      path: '/singerList',
      name: 'SingerList',
      components: {
        default: SingerList
      }
    }
  ]
})

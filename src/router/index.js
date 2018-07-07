import Vue from 'vue'
import Router from 'vue-router'

import Search from '@/views/search/search'

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
    }
  ]
})

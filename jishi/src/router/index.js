import Vue from 'vue'
import Router from 'vue-router'
import page from '@/router/page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:carnum',
      name: 'page',
      component: page
    }
  ]
})

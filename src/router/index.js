import Vue from 'vue'
import Router from 'vue-router'
import firstscreen from '@/components/firstscreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstscreen',
      component: firstscreen
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main/Main'
import Address from '@/components/Address/Address'
import Calendar from '@/components/Calendar/Calendar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    }
  ]
})

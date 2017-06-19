import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import DateTimePicker from '@/components/DateTimePicker'
import ToolSites from '@/components/ToolSites'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/datepicker',
      name: 'DatePicker',
      component: DateTimePicker
    },
    {
      path: '/tool-sites',
      name: 'ToolSites',
      component: ToolSites
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

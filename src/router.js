import Vue from 'vue'
import Router from 'vue-router'
import Hello from './components/HelloWorld.vue'
import Inbox from './components/Inbox.vue'
import Star from './components/Star.vue'
import Management from './components/Management.vue'
// import vuetify from './plugins/vuetify'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/hello/:id',
      name: 'hello',
      component: Hello,
    },
    {
      path: '/inbox',
      name: 'inbox',
      component: Inbox,
    },
    {
      path: '/star',
      name: 'star',
      component: Star,
    },
    {
      path: '/management',
      name: 'management',
      component: Management,
    },
  ],
})

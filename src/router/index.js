import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  { path: '', redirect: '/cart' },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/cart', component: () => import('../views/Cart')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/templates',
    name: 'templates',
    component: () => import('../views/Templates.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../views/Resume.vue')
  },
  {
    path: '/rec',
    name: 'rec',
    component: () => import('../views/Rec.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

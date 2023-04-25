import { createRouter, createWebHistory } from 'vue-router'
import Aluratube from '../views/AluraTube.vue'

const routes = [
  {
    path: '/',
    name: 'AluraTube',
    component: Aluratube
  },
  {
    path: '/AddVideo',
    name: 'AddVideo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddVideo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

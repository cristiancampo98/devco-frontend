import { createRouter, createWebHistory } from 'vue-router'
import AssignView from '../views/AssignView.vue'
import HomeView from '../views/HomeView.vue'
import UsersView from '../views/UsersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/assign',
      name: 'assign',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AssignView
    }
  ]
})

export default router

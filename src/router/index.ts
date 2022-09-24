import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/Home.vue')
    }
  ]
})

export default router

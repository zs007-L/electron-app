import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/login/Login.vue')
    }
  ]
})

export default router

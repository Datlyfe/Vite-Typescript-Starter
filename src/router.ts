import { createRouter, createWebHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Home, meta: { title: 'Home' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

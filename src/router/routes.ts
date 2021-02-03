import { RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Home, meta: { title: 'Home' } },
]

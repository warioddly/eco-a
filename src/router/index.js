import { createRouter, createWebHistory } from 'vue-router'
import MapView from '@/views/MapView.vue'
import ListView from "@/views/ListView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: MapView,
  },
  {
    path: '/list',
    name: 'list',
    component: ListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

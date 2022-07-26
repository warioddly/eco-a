import { createRouter, createWebHistory } from 'vue-router'
import MapView from '@/views/ObjectViews/MapView'
import ListView from "@/views/ObjectViews/ListView";
import WasteCollectionCalendarView from "@/views/CalendarViews/WasteCollectionCalendarView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: MapView,
    children: [
      {
        path: '/list',
        name: 'list',
        component: ListView
      },
    ]
  },
  {
    path: '/list',
    name: 'list',
    component: ListView
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: WasteCollectionCalendarView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

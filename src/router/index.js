import { createRouter, createWebHistory } from 'vue-router'
import MapView from '@/views/ObjectViews/MapView'
import ListView from "@/views/ObjectViews/ListView";
import WasteCollectionCalendarView from "@/views/CalendarViews/WasteCollectionCalendarView";
import ApplicationsView from "@/views/Applications/ApplicationsView";
import HandOverRecyclablesView from "@/views/Applications/HandOverRecyclablesView";

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
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: WasteCollectionCalendarView
  },
  {
    path: '/applications/',
    name: 'applications',
    component: ApplicationsView,
  },
  {
    path: "/applications/handOverRecyclables",
    name: "handOverRecyclables",
    component: HandOverRecyclablesView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

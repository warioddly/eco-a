import { createRouter, createWebHistory } from 'vue-router'
import MapView from '@/views/ObjectViews/MapView'
import ListView from "@/views/ObjectViews/ListView";
import WasteCollectionCalendarView from "@/views/CalendarViews/WasteCollectionCalendarView";
import ApplicationsView from "@/views/Applications/ApplicationsView";
import HandOverRecyclablesView from "@/views/Applications/HandOverRecyclablesView";
import ApplicationsSuccessView from "@/views/Applications/ApplicationsSuccessView";
import ApplicationsShowView from "@/views/Applications/ApplicationsShowView";
import ApplicationsCancelView from "@/views/Applications/ApplicationsCancelView";
import ApplicationsCancelRequestView from "@/views/Applications/ApplicationsCancelRequestView";
import ProfileView from "@/views/Profile/ProfileView";
import GreetingPageView from "@/views/GreetingPage/GreetingPageView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: MapView,
  },
  {
    path: '/objects/list',
    name: 'objectList',
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
  {
    path: "/applications/success",
    name: "applicationsSuccess",
    component: ApplicationsSuccessView
  },
  {
    path: "/applications/canceled",
    name: "applicationsCancel",
    component: ApplicationsCancelView
  },
  {
    path: "/applications/list/:id",
    name: "applicationsShow",
    component: ApplicationsShowView,
  },
  {
    path: "/applications/list/:id/cancel",
    name: "applicationsCancelRequest",
    component: ApplicationsCancelRequestView
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView
  },
  {
    path: "/greeting",
    name: "greeting",
    component: GreetingPageView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router

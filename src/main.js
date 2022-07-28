import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/main.scss'
import './assets/scss/_icons.scss'

import Vue3TouchEvents from 'vue3-touch-events'
import { Calendar, DatePicker } from 'v-calendar';
const app = createApp(App)
    .use(store)
    .use(router)
    .use(Vue3TouchEvents)

app.component('Calendar', Calendar)
app.component('date-picker', DatePicker)

app.mount('#app')

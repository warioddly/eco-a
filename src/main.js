import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/main.scss'
import './assets/scss/_icons.scss'
import 'vue-input-ui/dist/vue-input-ui.css';

import Vue3TouchEvents from 'vue3-touch-events'
import { Calendar } from 'v-calendar';
import VueInputUi from 'vue-input-ui';


const app = createApp(App)
    .use(store)
    .use(router)
    .use(Vue3TouchEvents)

app.component('Calendar', Calendar)
app.component('ui-input', VueInputUi);

app.mount('#app')

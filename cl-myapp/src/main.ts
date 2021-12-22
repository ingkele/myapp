import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import utils from '@/js/utils'
import store from '@/store/index'
import clApp from '@page/app'
import publicComponents from '@components//public/index'

const app = createApp(App)
app.config.globalProperties.$utils = utils;

app.use(router)
    .use(store)
    .use(clApp)
    .use(publicComponents)
    .mount('#app')


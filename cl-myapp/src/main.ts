import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import utils from '@/ts/utils'
import store from '@/store/index'
import Components from '@components/index'

const app = createApp(App)
app.config.globalProperties.$utils = utils;

app.use(router)
    .use(store)
    .use(Components)
    .mount('#app')


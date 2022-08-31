import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router, { vueRouters } from "@router/index"
import utils from '@/ts/utils'
import store from '@/store/index'
import Components from '@components/index'
import '@/css/style.css'


//highlight 的样式，依赖包，组件
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'




const app = createApp(App)

app.config.globalProperties.$utils = utils;

app.use(router)
    .use(store)
    .use(hljsVuePlugin)
    .use(Components)
    .mount('#app')

  
    

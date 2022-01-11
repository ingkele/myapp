import publicComponents from '@components/public/index';
import loginComponents from '@components/login/index';
import tabs from '@/components/tabs/tabs.vue';
import tabsPane from '@/components/tabs/tabsPane.vue';

// 导出组件
export default {
    install(Vue) {
        Vue.use(publicComponents)
        Vue.use(loginComponents)
        Vue.component(tabs.name, tabs)
        Vue.component(tabsPane.name, tabsPane)
    },
}

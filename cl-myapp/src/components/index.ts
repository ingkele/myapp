import publicComponents from '@components/public/index';
import loginComponents from '@components/login/index';

// 导出组件
export default {
    install(Vue) {
        Vue.use(publicComponents)
        Vue.use(loginComponents)
    },
}

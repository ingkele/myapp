import login1 from './login1.vue';
import loginJD from './loginJD.vue';
// 这里是重点
const clpublic = {
    install: function (Vue) {
        Vue.component("login1", login1);
        Vue.component("loginJD", loginJD);
    }
}

// 导出组件
export default clpublic
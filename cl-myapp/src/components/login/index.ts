import login1 from '@components/login/login1.vue';
import loginJD from '@components/login/loginJD.vue';
// 这里是重点
const clpublic = {
    install: function (Vue) {
        Vue.component("login1", login1);
        Vue.component("loginJD", loginJD);
    }
}

// 导出组件
export default clpublic
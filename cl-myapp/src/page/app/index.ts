import login1 from './login/login1.vue';
// 这里是重点
const clpublic = {
    install: function (Vue) {
        Vue.use(login1)
    }
}

// 导出组件
export default clpublic
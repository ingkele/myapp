import clist from './CList.vue';
// 这里是重点
const clpublic = {
    install: function (Vue) {
        Vue.component('c-list', clist);
    }
}

// 导出组件
export default clpublic
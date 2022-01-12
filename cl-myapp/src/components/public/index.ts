import clist from './CList.vue';
import tableMenu from './tableMenu.vue';
// 这里是重点
const clpublic = {
    install: function (Vue) {
        Vue.component('cl-list', clist)
        .component('cl-tableMenu', tableMenu)
    }
}

// 导出组件
export default clpublic
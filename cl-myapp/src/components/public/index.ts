import clist from '@components/public/CList.vue';
import tableMenu from '@components/public/tableMenu.vue';
// 这里是重点
const clpublic = {
    install: function (Vue) {
        Vue.component('cl-list', clist)
            .component('cl-tableMenu', tableMenu)
    }
}

// 导出组件
export default clpublic
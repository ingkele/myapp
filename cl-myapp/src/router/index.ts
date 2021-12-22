import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import index from '@page/main/index.vue';


const history = createWebHistory()
const routes: Array<RouteRecordRaw> = [
    {
        //设置根目录
        path: '/',
        name: "首页",
        //import里边写组件地址
        component: index
    },
]
const router = createRouter({
    history,
    routes
})
export default router

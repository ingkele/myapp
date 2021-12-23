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
//自动注册路由部分
let clrouter = import.meta.glob(`/src/page/**/*.vue`);
for (let element in clrouter) {
    const path = element.split("/").pop().split(".")[0]
    routes.push({
        path: "/" + path,
        name: path,
        component: () => import(element)
    })
}
const router = createRouter({
    history,
    routes
})
export default router


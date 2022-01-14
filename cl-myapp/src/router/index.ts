import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import index from '@page/main/index.vue';
import { App, defineAsyncComponent } from "vue";


const history = createWebHistory()
function getModules() {
    const components = import.meta.glob('/src/page/**/*.vue')
    return components
}
function getComponents() {
    const components = import.meta.globEager('/src/page/**/*.vue')
    return components
}
// 自动注册组件
export const asyncComponent = function (app: App<Element>): void {
    const modules = getModules();
    const components = getComponents();
    Object.keys(modules).forEach((key: string) => {
        const viewSrc = components[key];
        const file = viewSrc.default;
        if (!file.isComponents) return
        const AsyncComponent = defineAsyncComponent(modules[key])
        app.component(file.name, AsyncComponent)
    });
};

// 自动注册路由
export const vueRouters = function (): Array<RouteRecordRaw> {
    let routerList: Array<RouteRecordRaw> = [];
    const modules = getModules();
    const components = getComponents();
    Object.keys(modules).forEach(key => {
        const viewSrc = components[key];
        const file = viewSrc.default;
        const path = modules[key].name.split("/").pop().split(".")[0]
        routerList.push({
            path: "/" + path,
            name: path,
            component: modules[key]
        });
    })
    return routerList
}

const routes: Array<RouteRecordRaw> = [
    {
        //设置根目录
        path: '/',
        name: "首页",
        //import里边写组件地址
        component: index
    },
    ...vueRouters()
]

//自动注册路由部分

const router = createRouter({
    history: createWebHistory("/"),
    routes
})
export default router


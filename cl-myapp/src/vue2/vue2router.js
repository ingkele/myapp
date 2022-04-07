import Vue from 'vue'   //引入Vue
import router from 'vue-router'  //引入vue-router
import index from '@page/index.vue';
import store from '@/store'

Vue.use(router)  //Vue全局使用Router


function getModules() {
    const components = require.context("/src/page", true, /.vue/);
    return components
}

// 自动注册组件
function getComponents() {
    const components = require.context("/src/components", true, /.vue/);
    components.keys().forEach((key) => {
        Vue.component(components(key).default.name, components(key).default)
    })
    return components
}

getComponents()
// 自动注册路由
function vueRouters() {
    let routerList = [];
    const modules = getModules();
    modules.keys().forEach((key) => {
        const keyArr = key.split(".");

        //#region 底部导航判断
        let footer = false;
        store.state.state.footer.forEach(element => {
            if (element.url == keyArr[1]) {
                footer = true;
            }
        });
        //#endregion

        //#region 头部导航判断
        let header = false;
        store.state.state.header.forEach(element => {
            if (element.url == keyArr[1]) {
                header = true;
            }
        });
        //#endregion
        routerList.push({
            path: keyArr[1],
            name: keyArr[1],
            component: modules(key).default,
            meta: { isfooter: footer, isheader: header, title: modules(key).default.title }
        });
    })
    return routerList
}


const routeArr = [
    {
        //设置根目录
        path: '/',
        name: "/",
        //import里边写组件地址
        component: index,
        meta: { isfooter: true, isheader: true, title: "首页" }
    },
    ...vueRouters()
]
//自动注册路由部分

const vuerouter = new router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: routeArr,
});

export default vuerouter;


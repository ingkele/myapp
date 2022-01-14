import { createStore, } from "vueX";
import state from '@/store/config'
const store = createStore({
    state: {
        //这里放全局参数
        state,
        submenu: {},
    },
    mutations: {
        //这里是set方法
    },
    getters: {        //这里是get方法   },
    },
    actions: {
        //加载待办数据,预加载请求写入这里
        setSubMenu(context, playload) {
            context.state.submenu = playload.menu;
        }
    },
    modules: {
        //这里是我自己理解的是为了给全局变量分组，所以需要写提前声明其他store文件，然后引入这里

    }
})

export default store

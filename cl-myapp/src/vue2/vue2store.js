import Vue from 'vue'
import Vuex from "vuex";
import state from '@/store/config'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        //这里放全局参数
        state,
        submenu: {},
        count: 1,
        loginCodeImgUrl: "http://192.168.1.241:1111/web/getCaptcha"
    },
    mutations: {
        //这里是set方法
        //    mutations 接受 state 作为其第一个参数
        increment(state, n) {
            // 变更状态
            state.count + n
        }
        //调用示例 store.commit('increment', 10)
    },
    getters: {
        //这里是get方法
        //Getter 接受 state 作为其第一个参数
        doneTodos: (state) => {
            return state.count
        }
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
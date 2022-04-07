let sysConfig = {
    menu: [
        { url: "/", label: "首页", submenu: "home" },
        { url: "/app", label: "移动端常用组件", submenu: "appMenu" },
        { url: "/pc", label: "PC端常用组件", submenu: "pcMenu" },
        { url: "/Vue3", label: "Vue3配置", submenu: "Vue3Menu" },
        { url: "/Vue2", label: "Vue2配置", submenu: "Vue2Menu" },
    ],
    submenu: {
        home: [
            { url: "/", label: "div+css命名大全", select: true },
            { url: "/html", label: "html常识" },
            { url: "/css", label: "css基础" },
        ],
        appMenu: [
            { url: "/login", label: "常用登录界面", select: true },
            { url: "/ffindex", label: "头部导航" },
            { url: "", label: "底部导航" },
        ],
        Vue3Menu: [
            { url: "/viteconfig", label: "vite.config.ts配置", select: true },
            { url: "/tsconfig", label: "tsconfig.json配置" },
            { url: "/store", label: "store配置" },
            { url: "/router", label: "router自动化路由配置" },
            { url: "/axios", label: "axios请求封装" },
        ],
        Vue2Menu: [
            { url: "/webpack", label: "webpack.js配置", select: true },
            { url: "/vue2store", label: "store配置" },
            { url: "/vue2router", label: "router自动化路由配置" },
            { url: "/vue2axios", label: "axios请求封装" },
            { url: "/storage", label: "storage缓存封装", },
        ],
        pcMenu: [
            { url: "/tabs", label: "tabs", select: true },
        ],
    },
}

export default sysConfig


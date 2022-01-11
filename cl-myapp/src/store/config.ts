let sysConfig = {
    menu: [
        { url: "/", label: "首页", submenu: null },
        { url: "/index", label: "移动端常用组件", submenu: "appMenu" },
        { url: "/Vite", label: "PC端常用组件", submenu: "pcMenu" },
        { url: "/Vue", label: "Vue配置", submenu: "VueMenu" },
    ],
    submenu: {
        appMenu: [
            { url: "/login", label: "常用登录界面", select: true },
            { url: "/ffindex", label: "头部导航" },
            { url: "", label: "底部导航" },
        ],
        VueMenu: [
            { url: "/viteconfig", label: "vite.config.ts配置", select: true },
            { url: "/tsconfig", label: "tsconfig.json配置" },
            { url: "/store", label: "store配置" },
            { url: "/router", label: "router自动化路由配置" },
        ],
        pcMenu: [
            { url: "/tabs", label: "tabs", select: true },
            { url: "/tsconfig", label: "tsconfig.json配置" },
            { url: "/store", label: "store配置" },
            { url: "/router", label: "router自动化路由配置" },
        ],
    },
}

export default sysConfig


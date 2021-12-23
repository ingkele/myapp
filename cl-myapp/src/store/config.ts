let sysConfig = {
    menu: [
        { url: "/", label: "首页", submenu: null },
        { url: "/index", label: "移动端常用组件", submenu: "appMenu" },
        { url: "/Vite", label: "PC端常用组件", submenu: "pcMenu" },
        { url: "/", label: "css命名", submenu: null },
    ],
    submenu: {
        appMenu: [
            { url: "/login", label: "常用登录界面", select: true },
            { url: "/ffindex", label: "头部导航" },
            { url: "", label: "底部导航" },
        ],
        // pcMenu: [
        //     { url: "/css3-tutorial", label: "常用登录界面", select: true },
        //     { url: "/css3-grid", label: "头部导航" },
        //     { url: "/cc", label: "标签" },
        // ],
    },
}

export default sysConfig


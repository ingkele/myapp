<template>
    <div class="css-main">
        <cl-tableMenu :menu="menu" @active="active"></cl-tableMenu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                { label: "Id 和 Class", url: "/css-id-class" },
                { label: "CSS 背景", url: "/css-background" },
                { label: "文本格式", url: "/css-text" },
                { label: "字体", url: "/css-font" },
                { label: "链接", url: "/css-link" },
                { label: "列表", url: "/css-list" },
                { label: "表格", url: "/css-table" },
                { label: "盒子模型", url: "/css-id-class" },
                { label: "边框属性", url: "/css-id-class" },
                { label: "轮廓", url: "/css-id-class" },
                { label: "分组 和 嵌套 选择器", url: "/css-id-class" },
                { label: "尺寸 ", url: "/css-id-class" },
                { label: "显示(隐藏)", url: "/css-id-class" },
                { label: "Position(定位)", url: "/css-id-class" },
                { label: "Overflow", url: "/css-id-class" },
                { label: "浮动", url: "/css-id-class" },
                { label: "水平 & 垂直对齐", url: "/css-id-class" },
                { label: "组合选择符", url: "/css-id-class" },
                { label: "伪类", url: "/css-id-class" },
                { label: "伪元素", url: "/css-id-class" },
                { label: "导航栏", url: "/css-id-class" },
                { label: "下拉菜单", url: "/css-id-class" },
                { label: "提示工具", url: "/css-id-class" },
                { label: "图片廊", url: "/css-id-class" },
                { label: "图像透明/不透明", url: "/css-id-class" },
                { label: "媒体类型", url: "/css-id-class" },
                { label: "属性 选择器", url: "/css-id-class" },
                { label: "表单", url: "/css-id-class" },
                { label: "计数器", url: "/css-id-class" },
                { label: "网页布局", url: "/css-id-class" },
                { label: "!important 规则", url: "/css-id-class" },
                { label: "CSS3 边框", url: "/css-id-class" },
                { label: "CSS3 圆角", url: "/css-id-class" },
                { label: "CSS3 背景", url: "/css-id-class" },
                { label: "CSS3 渐变", url: "/css-id-class" },
                { label: "CSS3 文本效果", url: "/css-id-class" },
                { label: "CSS3 字体", url: "/css-id-class" },
                { label: "CSS3  2D 转换", url: "/css-id-class" },
                { label: "CSS3  3D 转换", url: "/css-id-class" },
                { label: "CSS3  过渡", url: "/css-id-class" },
                { label: "CSS3  动画", url: "/css-id-class" },
                { label: "CSS3  多列", url: "/css-id-class" },
                { label: "CSS3  用户界面", url: "/css-id-class" },
                { label: "CSS3  图片", url: "/css-id-class" },
                { label: "CSS3  按钮", url: "/css-id-class" },
                { label: "CSS3  分页", url: "/css-id-class" },
                { label: "CSS3  框大小", url: "/css-id-class" },
                { label: "CSS3  弹性盒子", url: "/css-id-class" },
                { label: "CSS3  网格布局", url: "/css-id-class" },
                { label: "CSS3  网格容器", url: "/css-id-class" },
                { label: "CSS3  网格元素", url: "/css-id-class" },
            ],
        }
    },
    methods: {
        active(val) {
            this.$router.push(val.url)
            this.$store.dispatch("setSubMenu", {
                menu: this.menu
            })
        }
    }
}
</script>
<style lang="scss">
.css-main {
    width: 100%;
    height: 100%;
    margin: 10px;
}
</style>
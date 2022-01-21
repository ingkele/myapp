<template>
    <div class="html-main">
        <cl-tableMenu :menu="menu" @active="active"></cl-tableMenu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                { label: "1. HTML介绍", url: "/HTML1" },
                { label: "2. HTML基本结构", url: "/HTML2" },
                { label: "3. HTML基础语法", url: "/HTML3" },
                { label: "4. HTML文字颜色与排版", url: "/HTML4" },
                { label: "5. HTML图像和超链接", url: "/HTML5" },
                { label: "6. 网页常用列表", url: "/HTML6" },
                { label: "7. 网页表格Table标签", url: "/HTML7" },
                { label: "8. 认识表单标签", url: "/HTML8" },
                { label: "9. 与用户交互,表单域", url: "/HTML9" },
                { label: "10. frame和iframe框架", url: "/HTML10" },
                { label: "11. 多媒体和跑马灯", url: "/HTML11" },
                { label: "12. 特殊字符", url: "/HTML12" },
                { label: "13. DOCTYPE彻底掌握", url: "/HTML13" },
                { label: "14. meta标签使用", url: "/HTML14" },
                { label: "文章内容来源", url: "/HTMLWord" },
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
.html-main {
    width: 100%;
    height: 100%;
    margin: 10px;
}
</style>
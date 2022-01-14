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
                { label: "元素标签" },
                { label: "HTML 属性" },
                { label: "区块元素" },
                { label: "HTML 布局" },
                { label: "HTML 表单" },
                { label: "HTML 框架" },
                { label: "HTML 脚本" },
                { label: "速查列表" },
                { label: "标签简写及全称" },
                { label: "HTML5 新元素" },
                { label: "内联 SVG" },
                { label: "拖放（Drag 和 Drop）" },
                { label: "Video(视频)" },
                { label: "Audio(音频)" },
                { label: "Input 类型" },
                { label: "地理定位" },
                { label: "Web 存储" },
                { label: "语义元素" },
                { label: "Web SQL" },
                { label: "应用程序缓存" },
                { label: "Web Workers" },
                { label: "服务器发送事件（SSE）" },
                { label: "WebSocket" },
                { label: "画布" },
                { label: "HTTP 方法" },
                { label: "标签" },
            ],
        }
    },
    methods: {
        active(val) {
            alert(val)
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
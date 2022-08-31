<template>
  <div class="msg">
    <msgbox :show="isshow" v-model:myshow="isshow"></msgbox>
    当前窗口弹出状态：{{ isshow ? "打开了" : "关闭中" }}
    <div class="msg">
      <button @click="showmsg">点击弹出窗口</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow: false,
    };
  },
  watch: {
    sss(e) {
      console.log("值变动了", e);
    },
  },
  methods: {
    showmsg() {
      this.isshow = !this.isshow;
    },
  },
};
</script>

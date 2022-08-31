<template>
  <div class="cus-tab">
    <msgbox :show="isshow" v-model:myshow="isshow">
      <div>
        长文本控件 <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>提交到后台</button>
      </div>
    </msgbox>
    <tabs v-model="value">
      <tabs-pane title="标签1">1</tabs-pane>
      <tabs-pane title="标签2">2</tabs-pane>
      <tabs-pane title="标签3">3</tabs-pane>
      <tabs-pane @click="show" title="标签4123123">4</tabs-pane>
    </tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "1", // 当前激活的tab索引
      isshow: false,
    };
  },
  watch: {
    value(nv) {
      console.log(nv);
    },
  },
  methods: {
    tabChange(index) {
      this.curTab = index;
    },
    show() {
      this.isshow = true;
    },
  },
};
</script>
<template>
  <div class="cus-tab">
    <tabs v-model="value">
      <tabs-pane title="标签1">1</tabs-pane>
      <tabs-pane title="标签2">2</tabs-pane>
      <tabs-pane title="标签3">3</tabs-pane>
      <tabs-pane title="标签4">4</tabs-pane>
    </tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '1'// 当前激活的tab索引
    }
  },
  methods: {
    tabChange(index) {
      this.curTab = index
    }
  }
}
</script>
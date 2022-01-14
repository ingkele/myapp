<template>
  <div class="tab-guid">
    <div class="tab-guid-item">
      <div class="tab-guid-item-button" v-for="(item,index) in navList" :key="index">
        <div v-if="currentValue==index" class="tab-guid-item-label"></div>
        <button class="button" :class="currentValue==index?'onceTab':''" @click="once(index)">{{item.title}}</button>
      </div>
    </div>
  </div>
  <div class="tabs-content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    value: [String, Number],
  },
  name: "tabs",
  data() {
    return {
      currentValue: this.value,
      navList: [],
      spane: []
    }
  },
  methods: {
    once(item) {
      this.currentValue = item;
      let nav = this.navList[item]
      let index = nav.index
      this.currentValue = item
      this.$emit('input', item)
      this.$emit('on-click', item)
    },
    getTabs() {
      //获取pane
      let defaults = this.$slots.default();
      return defaults;
    },
    updateNav() {
      //获取标题，name,并放置到navList数组中
      this.navList = []
      let _this = this;
      this.getTabs().forEach(function (pane, index) {
        _this.navList.push({
          title: pane.props.title,
          index: index

        })
        if (index === 0) {
          _this.currentValue = index
        }
      })
      this.updateStatus()
    },
    updateStatus() {
      let tabs = this.getTabs()
      let _this = this
      tabs.forEach(function (tab, index) {
        let b = index === _this.currentValue
        tab.type.data().show = b
        console.log(tab)
        _this.$forceUpdate()
        return tab.type.data().show
      })
    }
  },
  watch: {
    value: function (val) {
      this.currentValue = val
    },
    currentValue() {
      this.updateStatus()
    }
  }
}
</script>

<style lang="scss">
.tab-guid {
  width: 90%;
  height: 5vh;
  float: left;
  margin: 0 5vw 0 5vw;
  .tab-guid-item {
    display: flex;
    line-height: 200%;
    height: 100%;
    .tab-guid-item-button {
      width: auto;
      height: 100%;
      position: sticky;
      margin: 0px 32px 0px 0px;
    }
    .onceTab {
      font-size: 20px !important;
      font-weight: 600;
    }
    .button {
      background: none; /* Green */
      border: none;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      cursor: pointer;
      font-size: 16px;
      position: relative;
      padding: 0;
    }
    .tab-guid-item-label {
      height: 9px;
      background: skyblue;
      border-radius: 7px;
      position: absolute;
      top: 19px;
      min-width: 50px;
      width: 100%;
    }
  }
  .tabs-content {
    padding: 8px 0;
  }
}
</style>
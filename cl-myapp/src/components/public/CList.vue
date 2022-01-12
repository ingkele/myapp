<template>
  <div class="c-list">
    <router-link v-for="item in list" :key="item.url" :to="item.url">
      <button
        :class="isEqual(menuSelect, item) ? 'select' : ''"
        @click="itemChoice(item)"
        class="c-list-item button"
      >{{ item.label }}</button>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Object
    },
  },
  data() {
    return {
      menuSelect: {}
    }
  },
  methods: {
    itemChoice(val) {
      this.menuSelect = val;
    },
    isEqual(val1, val2) {
      return this.$utils.isEqual(val1, val2);
    }
  },
  watch: {
    list(val, nv) {
      let toName = this.$route.path;
      for (var x in val) {
        let element = val[x];
        console.log(element.url, toName)
        if (element.url == toName) {
          this.menuSelect = element;
          return
        }
      };
    }
  }
}
</script>
<style lang="scss">
.c-list {
  position: absolute;
  top: 0;
  width: 100%;
  .c-list-item {
    width: 100%;
    color: white;
    height: 35px;
  }
  .select {
    background: #96b97d !important;
  }
  .button {
    background: none; /* Green */
    border: none;
    color: black;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
  }
  .button:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
}
</style>
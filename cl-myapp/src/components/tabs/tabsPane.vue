<template>
  <div class="pane" v-show="show">
    {{ title }}
    {{ show }}
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabs-pane",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    updateNav() {
      this.$parent.updateNav();
    },
  },
  watch: {
    title(val, nv) {
      console.log(val, nv);
      this.updateNav();
    },
    show(val, nv) {
      console.log(val, nv);
    },
  },
  mounted() {
    this.updateNav();
  },
  computed: {
    active() {
      return false;
    },
  },
};
</script>

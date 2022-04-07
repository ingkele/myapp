<template>
  <highlightjs language="javascript" :code="code" />
</template>
<script>
import store from "@/vue2/vue.config.js?raw";
export default {
  data() {
    return {};
  },
  computed: {
    code() {
      return store;
    },
  },
  methods: {},
};
</script>
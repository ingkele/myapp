<template>
  <highlightjs language="javascript" :code="code" />
</template>
<script>
import store from "@/vue2/vue2store.js?raw";
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
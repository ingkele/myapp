<template>
  <highlightjs language="javascript" :code="code" />
</template>
<script>
import store from "@/vue2/vue2router.js?raw";
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
<template>
  <highlightjs language="javascript" :code="code" />
</template>
<script>
import tsconfig from '../../../tsconfig.json?raw'
export default {
  data() {
    return {
    }
  },
  computed: {
    code() {
      return tsconfig
    }
  },
  methods: {
  }
}
</script>
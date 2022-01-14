<template>
  <highlightjs language="javascript" :code="code" />
</template>
<script>
import tsconfig from '../../../vite.config.ts?raw'
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
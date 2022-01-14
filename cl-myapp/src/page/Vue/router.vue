<template>
    <highlightjs language="javascript" :code="code" />
</template>
<script>
import router from '@router/index?raw'
export default {
    data() {
        return {
        }
    },
    computed: {
        code() {
            return router
        }
    },
    methods: {
    }
}
</script>
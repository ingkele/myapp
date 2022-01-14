<template>
    <highlightjs language="javascript" :code="code" />
</template>
<script>
import store from '@/store/index?raw'
export default {
    data() {
        return {
        }
    },
    computed: {
        code() {
            return store
        }
    },
    methods: {
    }
}
</script>
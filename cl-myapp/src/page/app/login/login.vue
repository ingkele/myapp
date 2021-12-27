<template>
  <div class="cl-login">
    <div class="cl-login-list" v-for="item in loginList" :key="item">
      <component :is="item.name" @back="back"></component>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginList: [
        {
          name: "login1"
        },
        {
          name: "loginJD"
        },
      ],
    }
  },
  methods: {
    back() {
      alert("点击了返回")
      //   this.$router.back()
    }
  }
}
</script>
<style lang="scss">
.cl-login {
  background: aliceblue;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  padding: 10px;
  overflow: scroll;
  overflow-y: hidden;
  .cl-login-list {
    width: 255px;
    height: 487px;
    margin: 15px;
    box-shadow: 10px 10px 5px #888888;
  }
}
</style>
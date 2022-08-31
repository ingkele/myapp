<template>
  <div class="msgbox" v-if="myshow" @click.self="showmsg">
    <div class="box" @click="boxclick">
      <slot>
        <input type="text" value="账号" />
        <input type="text" value="密码" />
      </slot>
    </div>
  </div>
</template>


<script>
export default {
  name: "msgbox",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      myshow: false,
    };
  },
  watch: {
    show(nv, ov) {
      console.log("变动了", nv, ov);
      this.myshow = nv;
      this.$emit("update:myshow", nv);
    },
  },
  methods: {
    showmsg() {
      console.log("遮罩点击");
      this.myshow = !this.myshow;
      this.$emit("update:myshow", this.myshow);
    },
    boxclick() {
      console.log("盒子点击");
    },
  },
};
</script>


<style  >
.msgbox {
  z-index: 99999;
  position: fixed;
  background: rgb(0, 0, 0, 0.6);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.box {
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
  width: 300px;
  height: 350px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
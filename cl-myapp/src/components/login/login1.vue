<template>
  <div class="cl-login-com">
    <div class="cl-login-background-top">
      <img class="background-img" src="@assets/1995396230.png" alt="">
    </div>
    <div class="cl-login-background-bottom"></div>
    <div class="cl-login-msg-content">
      <h3 class="cl-logo">常用前端</h3>
      <input type="text" class="cl-login-input" placeholder="请输入账号">
      <input type="password" class="cl-login-input" placeholder="请输入密码">
      <button class="cl-login-button">登录</button>
      <p class="cl-login-msg">忘记密码</p>
      <p class="cl-login-msg">没有账号。马上<label class="cl-login-msg">注册</label></p>

    </div>
    常用前端模板
  </div>
</template>
<style lang="scss">
.cl-login-com {
  text-align: center;
  background: #caf0d3;
  height: 100%;
  position: relative;
  .cl-login-background-top {
    width: 100%;
  }
  .cl-login-background-bottom {
    width: 100%;
  }
  .background-img {
    width: 100%;
  }
  .cl-login-msg-content {
    width: 90%;
    height: 80%;
    background: white;
    // border-radius: 20px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .cl-logo {
    font-family: cursive;
  }
  .cl-login-input {
    width: 80%;
    height: 45px;
    margin: 10px;
    border-radius: 12px;
    border: none;
    background: aliceblue;
    text-align: center; /*让div内部文字居中*/
    font-size: 18px;
  }
  .cl-login-button {
    width: 80%;
    height: 45px;
    margin: 10px;
    border-radius: 12px;
    border: none;
    background: #58d183;
    font-size: 18px;
  }
  .cl-login-msg {
    font-size: 14px;
  }
}
</style>
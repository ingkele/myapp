<template>
  <div class="cl-login-JD">
    <div class="cl-login-container">
      <div>
        <label class="floatleft" @click="back()">
          &lt;
        </label>
        <label>京东登录注册</label>
      </div>
      <div class="cl-login-loginbar">
        <form action="" method="post" autocomplete="on">
          <div class="cl-login-login-input" v-if="model=='code'">
            <div class="login-input-row">
              <select>
                <option>+86</option>
                <option>+89</option>
              </select>
              <!--右侧带图标的输入框,长度限制为40个字符,禁止输入表情和某一些特殊元素 -->
              <div class="input-co-type">
                <input type="text" placeholder="请输入手机号" required class="input-type" @focusout="isselect=false" @focus="isselect=true" />
                <div v-if="isselect" class="inputicon" @click="clearvalue($event)">
                  <label for="">x</label>
                </div>
              </div>
            </div>
            <div class="login-input-row">
              <div class="input-co-type">
                <input type="text" placeholder="请输入验证码" class="input-type" @focusout="isphoneselect=false" @focus="isphoneselect=true" />
                <div v-if="isphoneselect" class="inputicon" @click="clearvalue($event)">
                  <label for="">x</label>
                </div>
              </div>
              <button class="cl-login-code">获取验证码</button>
            </div>
          </div>
          <div class="cl-login-login-input" v-else-if="model=='user'">
            <div class="login-input-row">
              <!--右侧带图标的输入框,长度限制为40个字符,禁止输入表情和某一些特殊元素 -->
              <div class="input-co-type">
                <input type="text" placeholder="账号/邮箱/手机号" class="input-type" @focusout="isselect=false" @focus="isselect=true" />
                <div v-if="isselect" class="inputicon" @click="clearvalue($event)">
                  <label for="">x</label>
                </div>
              </div>
            </div>
            <div class="login-input-row">
              <div class="input-co-type">
                <input :type="pwdType" placeholder="请输入密码" class="input-type" @focusout="isphoneselect=false" @focus="isphoneselect=true" />
                <div v-if="isphoneselect" class="inputicon" @click="clearvalue($event)">
                  <label for="">x</label>
                </div>
                <div class="inputicon">
                  <span v-if="SwitchPassDis=='show'" @click="changeType">
                    <svg t="1640594358268" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20522" width="200" height="200">
                      <path
                        d="M935 510.7c-0.9-36.4-14.1-72.1-38-103.3-17.8-23.1-67.3-82.1-145.1-133.5-78.7-52-158.7-78.3-237.8-78.3-79.2 0-159.3 26.4-238 78.3-77.8 51.4-127.5 110.5-145.2 133.5l-0.1 0.2-0.1 0.2C107 439 94 474.9 93.1 511.8v3.8c0.9 36.2 13.9 71.8 37.6 103l0.1 0.2 0.1 0.2c17.7 23 67.3 82.1 145.1 133.5 78.7 52 158.7 78.3 237.9 78.3 79.2 0 159.3-26.4 238-78.4C829.7 701 879.3 642 897 618.9c24-31.2 37.1-67.2 38-104.3v-3.9z m-42.7 2.9c-0.7 27.9-10.8 55.4-29.2 79.3-16.4 21.3-62.3 76-134.8 123.9-71.6 47.3-143.7 71.3-214.4 71.3-70.7 0-142.8-24-214.4-71.3-72.4-47.8-118.3-102.6-134.7-123.9v-0.2c-18.3-24-28.3-51.1-28.9-78.2v-1.6c0.7-27.8 10.6-55.2 29-79.3 16.4-21.3 62.4-76.1 134.9-123.9 71.6-47.3 143.8-71.3 214.5-71.3 70.6 0 142.7 24 214.3 71.3C801 357.5 847 412.3 863.4 433.6c18.4 23.9 28.5 51 29.2 78.4v0.9l-0.3 0.7z"
                        p-id="20523"></path>
                      <path
                        d="M514 330.8c-100.6 0-182.4 81.8-182.4 182.4S413.4 695.6 514 695.6c100.6 0 182.4-81.8 182.4-182.4S614.6 330.8 514 330.8z m0 322.1c-77 0-139.7-62.7-139.7-139.7S437 373.5 514 373.5c77 0 139.7 62.7 139.7 139.7S591 652.9 514 652.9z"
                        p-id="20524"></path>
                    </svg>
                  </span>
                  <span v-if="SwitchPassDis=='hide'" @click="changeType">
                    <svg t="1640594393048" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20661" width="200" height="200">
                      <path
                        d="M512.013303 568.954153c-182.932356 0-353.458147-90.019223-445.067588-234.926544-5.915733-9.330506-3.127224-21.710464 6.228865-27.599591 9.330506-5.942339 21.710464-3.127224 27.599591 6.228865 84.337827 133.38694 241.911632 216.265532 411.238109 216.265532s326.900282-82.878592 411.212526-216.265532c5.89015-9.330506 18.243503-12.171204 27.599591-6.228865 9.356089 5.89015 12.144598 18.270109 6.228865 27.599591C865.497033 478.933907 694.944636 568.954153 512.013303 568.954153zM350.139565 720.688973c-1.511423 0-3.075035-0.12996-4.613064-0.390903-14.516622-2.554172-24.238031-16.366759-21.710464-30.884404l24.472368-140.111085c2.527566-14.516622 16.445554-24.238031 30.884404-21.710464 14.516622 2.554172 24.238031 16.366759 21.710464 30.884404l-24.472368 140.111085C374.143259 711.567221 362.858238 720.688973 350.139565 720.688973zM670.342308 720.688973c-12.405541 0-23.508413-8.67866-26.114774-21.292955l-28.903284-140.111085c-2.970658-14.43885 6.306636-28.564569 20.745487-31.535227 14.386662-2.919493 28.564569 6.306636 31.535227 20.745487l28.903284 140.111085c2.970658 14.43885-6.306636 28.564569-20.745487 31.535227C673.938206 720.506824 672.140257 720.688973 670.342308 720.688973zM136.610354 617.273648c-3.049452 0-6.124488-0.520863-9.148357-1.6158-13.839193-5.056156-20.979824-20.38119-15.923668-34.220383l51.160193-140.111085c5.056156-13.891382 20.406772-20.954241 34.220383-15.923668 13.839193 5.056156 20.979824 20.38119 15.923668 34.220383l-51.160193 140.111085C157.720138 610.575086 147.504472 617.273648 136.610354 617.273648zM883.871519 640.625496c-10.607592 0-20.641109-6.385431-24.811082-16.836457l-55.591109-140.111085c-5.420453-13.709233 1.277086-29.216415 14.959713-34.663474 13.682627-5.421476 29.189809 1.277086 34.663474 14.959713l55.591109 140.111085c5.420453 13.709233-1.277086 29.216415-14.959713 34.663474C890.491287 640.025838 887.155309 640.625496 883.871519 640.625496z"
                        p-id="20662"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <button class="cl-login-code">忘记密码</button>
            </div>
          </div>
          <button class="cl-login-subimt" type="submit">登 录</button>
        </form>
        <p class="quick-btn">
          <span class="J_ping planBLogin" v-if="model=='code'" @click="model='user'">账号密码登录</span>
          <span class="J_ping planBLogin" v-if="model=='user'" @click="model='code'">短信验证码登录</span>
          <span class="J_ping quickReg">手机快速注册</span>
        </p>
      </div>
      <div class="tableTitle"><span class="midText">其他登录方式</span></div>
      <div class="cl-login-logintab">
        <div class="cl-login-logo-type">
          <a class="QQ">QQ</a>
          <a class="WX">微信</a>
          <a class="Iphone">苹果</a>
        </div>
        <div class="JD-agreement">
          <p v-if="model=='code'">
            <input type="checkbox" class="policy_tip-checkbox">
            <span>若您输入的手机号未注册，将为您直接注册，注册即视为同意</span>
            <span>
              <a href="#">京东用户注册协议</a>
              <span>、</span>
            </span>
            <a href="#">用户隐私政策</a>
          </p>

          <p v-else>
            <input type="checkbox" class="policy_tip-checkbox">
            <span>登录即代表您已同意</span>
            <a href="#">用户隐私政策</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      SwitchPassDis: "hide",
      model: "user",
      isselect: false,
      isphoneselect: false,
      pwdType: "password",
    }
  },
  methods: {
    back() {
      this.$emit("back")
    },
    clearvalue(e) {
      console.log( //获得点击元素的前一个元素
        e.currentTarget.previousElementSibling.value
      )
      e.currentTarget.previousElementSibling.value = "";
    },
    changeType() {
      this.pwdType = this.pwdType === 'password' ? 'text' : 'password';
      this.SwitchPassDis = this.SwitchPassDis === 'hide' ? 'show' : 'hide';
    }
  }
}
</script>
<style lang="scss">
.cl-login-JD {
  font-size: 14px;
  height: 100%;
  position: relative;
  background: white;
  text-align: center;
  .tableTitle {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 1px;
    background-color: #d4d4d4;
    text-align: center;
    font-size: 0.5rem;
    color: rgba(101, 101, 101, 1);
  }
  .midText {
    position: absolute;
    left: 50%;
    background-color: #ffffff;
    padding: 0 15px;
    transform: translateX(-50%) translateY(-50%);
  }
  .cl-login-subimt {
    width: 100%;
    height: 0.5rem;
    min-height: 30px;
    font-size: 0.16rem;
    margin: 20px 0 0 0;
    display: block;
    line-height: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    color: white;
    background-image: linear-gradient(90deg, #fab3b3, #ffbcb3 73%, #ffcaba);
    text-align: center;
    font-family: PingFangSC-Semibold;
  }
  .cl-login-container {
    margin: 0 10px 0 10px;
    height: 100%;
  }
  .floatleft {
    float: left;
    font-weight: 600;
    font-size: 20px;
    font-family: Georgia, "Times New Roman", Times, serif;
  }
  .cl-login-loginbar {
    width: 100%;
    height: 50%;
    padding: 25px 0 20px 0;
    .login-input-row {
      display: flex;
      width: 100%;
      border: none;
      border-bottom: 1px solid #aabbcc5c;
      text-align: left;
      .input-co-type {
        position: relative;
        width: 100%;
        display: flex;
        .input-type {
          width: 100%;
        }
        .inputicon {
          display: flex;
          label {
            color: #6c71768c;
            position: relative;
            right: 15px;
            align-self: center;
          }
          span {
            align-self: center;
          }
          .icon {
            width: 20px;
            height: 20px;
          }
        }
      }
      .cl-login-code {
        border: none;
        background: none;
        font-size: 12px;
        width: 44%;
        border-left: 1px solid #6c71768c;
      }
      select,
      input {
        border: none;
        height: 48px;
        outline: none;
      }
    }
  }
  .cl-login-logintab {
    width: 100%;
    height: 30%;
    text-align: center;
    .cl-login-logo-type {
      width: 70%;
      margin: 0 auto;
      margin-top: 1.5rem;
      height: 4rem;
      display: grid;
      grid-template-columns: auto auto auto;
      a {
        display: inline-block;
        width: 40px;
        color: rgba(0, 0, 0, 0.4);
        margin: 0 0.15rem;
        background-size: 100% auto;
        padding-top: 40px;
        background-repeat: no-repeat;
      }
      .QQ {
        background-image: url(data:image/png;base64,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);
      }
      .WX {
        background-image: url(data:image/png;base64,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);
      }
      .Iphone {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAABC1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8CAgIGBgYSEhLa2to/Pz8lJSX7+/v09PSnp6eHh4cKCgrIyMi8vLx6enpVVVX4+PhtbW0vLy8pKSkfHx8UFBTu7u7n5+fk5OTf39+wsLCtra1hYWE5OTkYGBjR0dG0tLSdnZ2Xl5eTk5OOjo6AgIBlZWXOzs7Dw8OioqJzc3NwcHBoaGhcXFxJSUkzMzMPDw/q6uq1tbWU4JMlAAAAJXRSTlMAA/yynTMr7dvYycR2ZyMU5fjz78y/t66liod/b09KKB4cEAvmUZjpTgAABHhJREFUeNrN3NdW20AQBuCV5F7AmN5CQvhH7saU0AkJkALp/f2fJMd2AiGAmV/W+ux36Ssd7e7seHdGJhpvZbmQCKansqWyXy5lp6aDRGF5xTMj4iULQcbHXfxMUEhaf5DUUjCJwSaDpZSxZmwxA53M4pixYLWYByNfXI37FSQmwJpIxPkyUnM+ovDn4poZydkQUYWzSTO88USIYYSJ8WGDQTGNYaWL3lDDkEMcctEHxFvwEQ9/IeKreJJHfPJPTASP0ohT+hE/DvMh4hXOk+PxdAbxm3lKBYUcbMgRoeJxFnZkH6u3hxJsKaWUj5CGPemUaiBKsKmkGI7xLOzKjj+4KHOwLffAEvVmYN/M4GA1j1GYH7hHhBiF8NGAnTKN0Ujfu4t6eYxK/r4psYDRWbgncfMxnGoVan7yzpHIYRj768fyCXo5z9xWxBA6F00R2QGheEeMTiO6Rk26tkFI347ZCUS3dyQ9DTAStyZkiMiqx9JTAyX8f1rOIroT6bsEZ9bckAoRWV36WlVwwpv5zByi25S+LbDmbhxx+IjsrCk9GyFY/lhMi+Kl9JwfgHB7aaxOILp16do8QAQTq/GEyI8icvQFnNvBMo8hbH14/bWCiPJXMxK0Rv3r9m4H/9jf3rpY36mzT/N3Vi6Cs79ek67myXYFPWefNqSv1T4FY9H0ZcDorD+TK4cX9R8/tk+a8o/2GfQypicFxn5NHnK8C71+rFwCYfdIHtYiHmLJdAXQOzgWjef6aBH0crhJ6P0SlVdVaE163cwBei9F5W0IvW4WUYBaWBON12AUuOmwLRrnFTACLjpsisZ3UDLGeD60Ki1ROAHH98wK1Oqi8Q2kFbMMtS1RaFVAWmaWxRtR2ASrwKRxL0ThI1gJZml+EIV1sAIzDbVzVYwEa9pMQW1DFF6ANWWyUCBC1AZYWbMGtbYoNA9AWjNlqF2KxjuQysaHArNzvw/B8Zn30BArL6JsStA7Eo3DBiglZl2gLSq1MzCyTHzAF9F5vgfCFBMn0RCl1k4ItWkTgLAhWm2oBYp9k8+ruePShCmA0DkUnWdVqBUUeRSXxvDp/bJZAWOvKSrMwljp5tWMtxL3Bu577OlD9VAzG/ahl+n9z6J8jjufC3r/NymV9w+HyQ4Ihd7/bk6jJYM1T8FI9s8fOO9ksEswJj3FOQwbJF6EYATX51GM8NWgnLYDytL1uRylc/UQta3TaqX6fasmf2xWwUldn09yws8/u2GgXcdf9faz7orYCcHJXJ/T0iqn3/YqN3/ZrTdAWyTOq20ZI87tLckT9xe2FIl7HEsmVon7LEsSxL2eJf4Ycb9pyRxxz2tJmCLuuy2ZJe79LQmTRP2DJQmiDsSS9DhRD2NJkagLsiTnEfVRdvhJZ+vEnKiXc6Fu0In6SSfqSJ2op3WhrtiJ+mon6sydqLd3ou/Aif4LJ/pQnOjHcaIvyYn+LDf61Jzo13Oib9GN/k0n+ljd6Od1o6/Zjf5uN/rc3ej3d+S7B458/+HWdzDWyn55bcjvYPwGhuimKWCwYFgAAAAASUVORK5CYII=);
      }
    }
  }
  .quick-btn {
    color: rgba(0, 0, 0, 0.4);
    font-size: 0.14rem;
    margin-top: 0.2rem;
    overflow: hidden;
    .planBLogin {
      float: left;
    }
    .quickReg {
      float: right;
    }
  }
  .JD-agreement {
    font-size: 12px;
    color: #6c71768c;
  }
}
</style>
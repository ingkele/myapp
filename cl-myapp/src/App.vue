<template>
  <div class="css-app">
    <div class="css-header">
      <div class="css-header-logo">
        <index></index>
        <h1 class="app-title">常用前端</h1>
      </div>
      <div class="css-header-search">
        <input class="css-header-search-input" type="text" />
      </div>
    </div>
    <div class="css-topnav">
      <div class="css-topnav-menu">
        <router-link v-for="item in menu" :key="item.url" :to="item.url">
          <button class="css-topnav-menu-item button">{{ item.label }}</button>
        </router-link>
      </div>
    </div>
    <div class="css-container">
      <div class="css-containet-content">
        <router-view></router-view>
      </div>
      <div
        class="back_top"
        @mouseover="enterBackTop"
        @mouseout="outBackTop"
        ref="backTop"
        :style="{ opacity: opacity }"
        v-show="gotop"
        @click="handleScrollTop"
      >
        <span class="iconfont icon-backtotop">顶</span>
      </div>
    </div>
    <div v-if="menuList" :class="!gotop ? 'css-container-sidebar' : 'css-container-sidebar-gotop'">
      <cl-list :list="menuList"></cl-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // menuList: null,
      filled: "",
      opacity: '0.3',
      gotop: false,
      scrollHeight: 100,
      scrollTop: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);  // 注册滚动事件
  },
  methods: {
    enterBackTop() {
      this.opacity = '1';
    },
    outBackTop() {
      this.opacity = '0.3';
    },
    handleScroll(e) {
      const that = this;
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      that.scrollTop > this.scrollHeight
        ? (this.gotop = true, console.log(11112))
        : (this.gotop = false);
    },
    handleScrollTop() {
      // this.$nextTick(() => {
      //   this.ele.scrollIntoView({ behavior: 'smooth' });
      // });
      const that = this;
      const timer = setInterval(() => {
        const ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    }
  },
  computed: {
    menu() {
      return this.$store.state.state.menu;
    },
    menuList() {
      return this.$store.state.submenu;
    }
  },
  watch: {
    $route(to, from) {
      let submenu = this.$store.state.state.submenu;
      let toName = to.path;
      this.filled = toName;
      for (var x in this.menu) {
        if (this.menu[x].url == toName) {
          this.$store.dispatch("setSubMenu", {
            menu: submenu[this.menu[x].submenu]
          })
          return
        } else {
          for (var y in submenu) {
            for (var i in submenu[y]) {
              if (submenu[y][i].url == toName) {
                let ss = submenu[y];
                this.$store.dispatch("setSubMenu", {
                  menu: ss
                })
                return
              }
            }

          }
        }
      }
    },
  }
}
</script>

<style lang="scss">
html {
  overflow-y: overlay;
}
.css-app {
  height: 100%;
  .css-header {
    padding: 0px 13%;
    min-height: 10vh;
    .css-header-logo {
      float: left;
      .app-title {
        text-align: left;
        font-family: fangsong;
      }
    }
    .css-header-search {
      float: right;
      line-height: 10vh;
      .css-header-search-input {
        border: 1px solid #a79898;
        border-radius: 6px;
        width: 26vw;
        height: 4vh;
        box-shadow: 10px 10px 5px #888888;
      }
    }
  }
  .css-topnav {
    width: 90%;
    height: 5vh;
    float: left;
    background: #96b97d;
    margin: 0 5vw 0 5vw;
    .css-topnav-menu {
      padding: 0px 11%;
      display: flex;
      line-height: 200%;
      color: white;
      height: 100%;
      .css-topnav-menu-item {
        width: auto;
        height: 100%;
      }
      .button {
        background: none; /* Green */
        border: none;
        color: white;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        cursor: pointer;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.4s;
      }
      .button:hover {
        box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
          0 17px 50px 0 rgba(0, 0, 0, 0.19);
      }
    }
  }
  .css-container {
    float: right;
    width: 63vw;
    padding-right: 7vw;
    .back_top {
      width: 50px;
      height: 50px;
      background: rgb(126, 120, 120);
      position: fixed;
      right: 50px;
      bottom: 36px;
      font-size: 20px;
      color: black;
      text-align: center;
      line-height: 50px;
    }
  }
  .css-container-sidebar {
    position: relative;
    top: 1vh;
    left: 12vw;
    width: 15vw;
    height: 82vh;
    background: rgb(156 161 153 / 22%);
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .css-container-sidebar::-webkit-scrollbar {
    display: none;
  }

  .css-container-sidebar-gotop {
    position: fixed;
    top: 1vh;
    left: 12.5vw;
    width: 15vw;
    height: 98vh;
    background: rgb(156 161 153 / 22%);
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .css-containet-column {
    margin-top: 1vh;
    width: 13vw;
    background: #888888;
    float: right;
    height: 70vh;
  }
  .css-containet-content {
    width: 100%;
  }
}
</style>

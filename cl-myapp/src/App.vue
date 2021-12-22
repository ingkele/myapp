<template>
  <div class="css-app">
    <div class="css-header">
      <div class="css-header-logo">
        <index></index>
        <h1 class="app-title">常用前端</h1>
      </div>
      <div class="css-header-search">
        <input class="css-header-search-input" type="text">
      </div>
    </div>
    <div class="css-topnav">
      <div class="css-topnav-menu">
        <router-link v-for="item in menu" :key="item.url" :to="item.url" @click="menuClick(item)">
          <button class="css-topnav-menu-item button">{{item.label}}</button>
        </router-link>
      </div>
    </div>
    <div class="css-container">
      <div class="css-containet-content">
        <router-view></router-view>
      </div>
      <!-- <div class="css-containet-column">
        栏目
      </div> -->
    </div>
    <div v-if="menuList" class="css-container-sidebar">
      <c-list :list="menuList"></c-list>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
  data() {
    return {
      menu: this.$store.state.state.menu,
      menuList: undefined,
    }
  },
  created() {
    console.log('objecttest', this.$store.state.state.submenu)
  },
  methods: {
    menuClick(val) {
      console.log(val)
      this.menuList = this.$store.state.state.submenu[val.submenu];
    },
  },
}
</script>

<style lang="scss">
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
    width: 100%;
    height: 5vh;
    float: left;
    background: #96b97d;
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
  }
  .css-container-sidebar {
    position: relative;
    top: 1vh;
    left: 12vw;
    width: 15vw;
    height: 75vh;
    background: rgb(156 161 153 / 22%);
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .css-container-sidebar::-webkit-scrollbar {
    display: none;
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

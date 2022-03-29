<template>
  <div id="menu">
    <button type="button" class="menu-btn" @click="openMenu" id="openMenu">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </button>
    <div class="menu" v-bind:class="{ 'is-active': open }">
      <p class="header-p">Welcome Home! Mr."{{ userName }}"!</p>
      <router-link to="/" class="menu__item" v-if="!isLoginSuccessed"
        >Login</router-link
      >
      <router-link to="/signup" class="menu__item" v-if="!isLoginSuccessed"
        >SignUp</router-link
      >
      <router-link to="/public" class="menu__item" v-if="isLoginSuccessed"
        >Public Post</router-link
      >
      <router-link to="/main" class="menu__item" v-if="isLoginSuccessed"
        >User Main Menu</router-link
      >
      <router-link to="/logout" class="menu__item" v-if="isLoginSuccessed"
        >Logout</router-link
      >
    </div>
    <div id="invisible-closeMenu" @click="closeMenu" v-show="false"></div>
  </div>
</template>
<script>
import url from "@/const/const.js";
export default {
  mixins: [url],
  data() {
    return {
      open: false,
      userName: "",
      isLoginSuccessed: false,
    };
  },
  methods: {
    closeMenu: function () {
      this.open = false;
    },
    openMenu: function () {
      this.$emit("buttonPressed", true);
      if (this.open == true) {
        this.open = false;
      } else {
        this.open = true;
        this.axios
          .get(this.url[1])
          .then((response) => {
            this.userName = response.data.userName;
            if (this.userName) {
              this.isLoginSuccessed = true;
            } else {
              this.isLoginSuccessed = false;
              this.userName = "Guest";
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
<style>
@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
</style>
<style scoped>
/* ----------header内のハンバーガーメニュー---------- */

.menu-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 3;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  color: #fff;
}

/*----------------メニュー本体--------------*/
.menu {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 30vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: rgba(104, 104, 104, 0.589);
}

.menu__item {
  width: 100%;
  height: auto;
  padding: 0.5em 1em;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
}

/*-------------アニメーション部分------------*/

/* アニメーション前のメニューの状態 */
.menu {
  transform: translateX(100vw);
  transition: all 0.4s linear;
}
/* アニメーション後のメニューの状態 */
.menu.is-active {
  transform: translateX(0);
}

.header-p {
  margin: auto;
  margin-top: 0%;
  margin-left: 0%;
  margin-bottom: 50px;
  background-color: rgb(54, 40, 19);
  color: whitesmoke;
}
</style>
<template>
  <div id="app" @click="closeMenu">
    <p class="clockmouseover" @mouseover="show = !show">Current Time :</p>
    <p class="clock" v-if="show">
      {{ datetime }}
    </p>
    <Menu @buttonPressed="buttonPressed" />
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from "./components/menu/template.vue";
export default {
  name: "app",
  components: { Menu },
  data() {
    return {
      menubuttonPressed: false,
      datetime: "",
      show: true,
    };
  },
  created: function () {
    let that = this;
    this.timer = setInterval(() => {
      that.datetime = new Date().toLocaleString();
    }, 1000);
  },
  methods: {
    closeMenu: function () {
      if (this.menubuttonPressed == true) {
        this.menubuttonPressed = false;
        return;
      }
      document
        .getElementById("invisible-closeMenu")
        .dispatchEvent(new Event("click"));
    },
    buttonPressed: function (value) {
      this.menubuttonPressed = value;
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Oswald:700");
</style>
<style>
body {
  background-color: rgb(214, 250, 238);
  font-family: "Oswald";
}
.clock {
  position: fixed; /* 要素の位置を固定する */
  left: 0; /* 基準の位置を画面の一番右に指定する */
  top: 40px;
  margin: 0 0 0 0;
  border: 3px solid #326693; /* ボーダーを指定する */
  background-color: #00d49481;
  color: white;
}
.clockmouseover {
  position: fixed; /* 要素の位置を固定する */
  left: 0; /* 基準の位置を画面の一番右に指定する */
  top: 0;
  margin: 0 0 0 0;
  border: 3px solid #326693; /* ボーダーを指定する */
  background-color: #00d49481;
  color: white;
}
</style>
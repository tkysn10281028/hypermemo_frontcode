<template>
  <div id="signup">
    <Header />
    <div class="form">
      <p class="clickhere" v-on:click="show = !show">Click Here For Details.</p>
      <h1>Sign Up</h1>
      <p>Emailaddress</p>
      <input type="text" v-model="emailaddress" class="formdesign" />
      <p>Password</p>
      <input type="password" v-model="password" class="formdesign" />
      <p>UserName</p>
      <input type="text" v-model="userName" class="formdesign" />
      <p><button class="btn-flat-border">Submit!</button></p>
      <transition name="slide-fade">
        <div class="details" v-if="show">
          <p>・We Will Send A Validation Code to Your EmailAddress.</p>
          <br />
          <p>
            ・After Submitting Your UserInfos, Check Your Validation Code We
            Sended.
          </p>
          <br />
          <p>
            ・Your Password Should Include At Least One Alphabet And One Number.
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/template.vue";
export default {
  name: "signup",
  components: { Header },
  data() {
    return {
      show: false,
      emailaddress: "",
      password: "",
      userName: "",
    };
  },
};
</script>
<style scoped >
h1 {
  margin: 0 0 0 0;
}
.formdesign {
  border: 0;
  padding: 10px;
  font-size: 1.3em;
  color: rgb(0, 0, 0);
  border: solid 1px #a85757;
  margin: 0 0 20px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  -webkit-box-shadow: 0px 1px rgba(255, 255, 255, 0.5);
  -moz-box-shadow: 0px 1px rgba(255, 255, 255, 0.5);
  box-shadow: 0px 1px rgba(255, 255, 255, 0.5);
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}
.form {
  text-align: center;
  padding: 0.5em 1em;
  margin: 2em 0;
  color: #d47800;
  background: #fff3e4; /*背景色*/
  border-top: solid 6px #d47800;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32); /*影*/
}
.clickhere {
  display: flex;
  justify-content: right;
  margin: 0 0 0 0;
  font-weight: bold;
  color: #6091d3; /*文字色*/
}
.details {
  position: fixed; /* 要素の位置を固定する */
  bottom: 20%; /* 基準の位置を画面の一番下に指定する */
  left: 0; /* 基準の位置を画面の一番右に指定する */
  top: 0;
  width: 200px; /* 幅を指定する */
  border: 3px solid #326693; /* ボーダーを指定する */
  background-color: #d4780081;
  color: white;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.btn-flat-border {
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: #ffca67;
  border: solid 2px #ffca67;
  border-radius: 3px;
  transition: 0.4s;
}

.btn-flat-border:hover {
  background: #ffca67;
  color: white;
}
</style>

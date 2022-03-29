<template>
  <div id="loginform">
    <Header />
    <div class="form">
      <h1>Please Login Here.</h1>
      <p>Emailaddress</p>
      <input type="text" v-model="emailaddress" class="formdesign" />
      <p>Password</p>
      <input type="password" v-model="password" class="formdesign" />

      <p><button class="btn-flat-border" v-on:click="login">Login</button></p>
    </div>
  </div>
</template>

<script>
import url from "@/const/const.js";

import Header from "@/components/header/template.vue";
export default {
  components: { Header },
  mixins: [url],
  data() {
    return {
      emailaddress: "",
      password: "",
      show: true,
    };
  },
  methods: {
    login: function () {
      // console.log(this.emailaddress);
      // console.log(this.password);
      // console.log(this.url[0]);
      const params = new URLSearchParams();
      params.append("emailaddress", this.emailaddress); // 渡したいデータ分だけappendする
      params.append("password", this.password);
      this.axios
        .post(this.url[0], params, this.serverPass + "login")
        .then((response) => {
          if (response.data.userName) {
            window.alert("Welcome! " + response.data.userName);
          } else {
            console.log(response.data);
          }
        })
        .catch((error) => {
          window.alert("Failed To Login. Please Check Your Id or Pass.");
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
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
  color: #00bcd4;
  background: #e4fcff; /*背景色*/
  border-top: solid 6px #1dc1d6;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32); /*影*/
}
.btn-flat-border {
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: #67c5ff;
  border: solid 2px #67c5ff;
  border-radius: 3px;
  transition: 0.4s;
}

.btn-flat-border:hover {
  background: #67c5ff;
  color: white;
}
</style>
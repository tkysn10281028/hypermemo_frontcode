<template>
  <div id="logoutform">
    <div class="form">
      <a href="/hypermemo"><img src="img/oysterworld_icon.jpg" alt="icon" /></a>
      <h3 class="header-h3">You Are Successfully Logged Out.</h3>
      <h3 class="header-h3">Thank You For Using Our Website!</h3>
    </div>
  </div>
</template>
<script>
import url from "@/const/const.js";
export default {
  mixins: [url],
  created: function () {
    this.axios
      .get(this.url[2])
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.form {
  padding: 0.5em 1em;
  margin: auto;
  font-weight: bold;
  color: #6091d3; /*文字色*/
  background: #fff;
  border: solid 3px #6091d3; /*線*/
  border-radius: 10px; /*角の丸み*/
  width: 50vw;
}
.header-h3 {
  text-align: center;
  margin: auto 0 0 0 0;
}
</style>
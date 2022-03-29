<template>
  <div id="headerform">
    <div class="titles">
      <img
        src="img/oysterworld_icon.jpg"
        alt="icon"
        @click="showTitle = !showTitle"
      />
    </div>
    <transition name="bounce">
      <h1 class="header-h1" v-on:click="show = !show" v-if="showTitle">
        Welcome Hyper Memo
      </h1>
    </transition>
  </div>
</template>
<script>
export default {
  name: "headerform",
  data() {
    return {
      flag: true,
      show: false,
      showTitle: true,
    };
  },
  methods: {},
  updated: function () {
    console.log("updated");
  },
};
</script>
<style scoped>
.titles {
  display: flex;
  justify-content: center;
}

.header-h1 {
  text-align: center;
  margin: auto 0 0 0 0;
}

/* ----------トランジション---------- */
.bounce-enter-active {
  animation: bounce-in 0.7s;
}
.bounce-leave-active {
  animation: bounce-in 0.7s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
<template>
  <div v-show="isVisible" class="container">
    <span class="loader">SIGN</span>
    <span class="text" v-text="message" />
  </div>
</template>

<script>
export default {
  name: "LowLoading",
  props: {
    isVisible: {
      type: Boolean,
      require: false,
      default: false,
    },
    message: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style lang="css" scoped>
span.text {
  color: #fff;
}

.loader-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #263038;
  z-index: 9999;
  cursor: pointer;
}
.loader {
  font-size: 48px;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #e5433e;
  letter-spacing: 2px;
  position: relative;
  box-sizing: border-box;
}
.loader::after {
  content: "SIGN";
  position: absolute;
  left: 0;
  top: 0;
  color: #263238;
  text-shadow: 0 0 2px #fff, 0 0 1px #fff, 0 0 1px #fff;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  animation: animloader 6s linear infinite;
}

@keyframes animloader {
  0% {
    height: 100%;
  }
  100% {
    height: 0%;
  }
}
</style>
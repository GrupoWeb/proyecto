<template>
  <div v-show="isVisible" class="loader-overlay">
    <span class="loader"></span>
  </div>
</template>

<script>

export default {
  name: "LoadingComponent",
  props: {
    isVisible: { type: Boolean, required: false, default: false },
    message: { type: String, required: false, default: "" }
  }
}
</script>

<style scoped lang="css">

.loader-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(38, 48, 56, .6);
  z-index: 9999;
  cursor: default;
}

.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: absolute;
  left: calc(51% - 40px);
  top: calc(51% - 40px);
  display: inline-block;
  border-top: 4px solid #FFF;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-bottom: 4px solid #FF3D00;
  border-left: 4px solid transparent;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
<template>
  <div class="loader-wrapper">
    <span class="loader"></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loader-wrapper {
  display: flex;
  justify-content: center;
  padding: 64px 0;
  position: absolute;
  height: 100%;
  min-height: 48px;
  width: 100%;
  background: #fff;
}
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #000;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
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

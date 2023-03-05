<template>
  <div class="skeleton-wrapper">
    <div class="skeleton-box"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.skeleton-wrapper {
  width: 100%;
}
.skeleton-box {
  position: relative;
  width: 100%;
  height: 460px;
  background: #ebebeb;
  overflow: hidden;
  margin-bottom: 32px;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #ebebeb 0%, #fff 50%, #ebebeb 100%);
    animation: blink 1.6s infinite alternate;
    transform: translateX(-50%);
  }
}

@keyframes blink {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>

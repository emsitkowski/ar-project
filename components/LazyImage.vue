<template>
  <div class="lazy-image">
    <img
      @load="toggleLoading"
      :src="src"
      :alt="alt"
      loading="lazy"
      ref="image"
    />
  </div>
</template>

<script>
export default {
  props: ["src", "alt"],

  methods: {
    toggleLoading() {
      console.log("loaded!");
      this.$refs.image.parentElement.classList.add("loaded");
    },
  },
};
</script>

<style lang="scss" scoped>
.lazy-image {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: #ebebeb;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #ebebeb, #f2f2f2, #ebebeb);
    animation: blink 1.6s infinite alternate;
    transform: translateX(-100%);
  }

  @keyframes blink {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: 0.6s ease-in-out;
  }

  &.loaded {
    &::after {
      content: unset;
    }

    img {
      opacity: 1;
    }
  }
}
</style>

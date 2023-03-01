<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/">Projekty</nuxt-link>
      </li>
      <li>
        <nuxt-link to="o-mnie">O mnie</nuxt-link>
      </li>
      <li>
        <nuxt-link to="kontakt">Kontakt</nuxt-link>
      </li>
    </ul>
    <div>
      <!-- menu icon -->
      <svg
        @click="toggleMenu"
        class="burger"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
      >
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
      </svg>
    </div>
    <div class="logo">
      <img src="~/assets/img/ar-logo.svg" alt="" />
    </div>

    <!-- fullscreen menu -->
    <div v-if="isMenuOpen" class="menu">
      <svg
        @click="toggleMenu"
        class="menu__close"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
      >
        <path
          d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
        ></path>
      </svg>

      <div class="menu__content">text</div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: true,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style lang="scss">
.nuxt-link-exact-active {
  color: #191919;
  transition: 0.2s linear;
}
nav {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 86px;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  ul {
    display: none;
    align-items: center;
    gap: 20px;
    list-style-type: none;
    width: 33.333%;
    @media (min-width: 768px) {
      display: flex;
    }

    li {
      white-space: nowrap;
      a {
        color: #999;
        text-decoration: none;
        font-size: 18px;
        font-weight: 400;
      }
    }
  }

  .logo {
    width: 33.333%;
    text-align: center;
    img {
      width: 48px;
    }
  }

  .burger {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    user-select: none;
    cursor: pointer;
    @media (min-width: 768px) {
      display: none;
    }
  }

  .menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 100;
    @media (min-width: 768px) {
      display: none;
    }

    &__content {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    &__close {
      position: absolute;
      right: 6%;
      top: 38px;
      user-select: none;
      cursor: pointer;
    }
  }
}
</style>

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
    <div class="logo">
      <img src="~/assets/img/ar-logo.svg" alt="" />
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
.nuxt-link-exact-active {
  color: #191919;
  transition: 0.2s linear;
}
nav {
  display: flex;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 86px;
  ul {
    display: flex;
    align-items: center;
    gap: 20px;
    list-style-type: none;
    width: 33.333%;

    li {
      a {
        color: #999;
        text-decoration: none;
        font-size: 18px;
        font-weight: 500;
      }
    }
  }

  .logo {
    width: 33.333%;
    text-align: center;
    img {
      width: 42px;
    }
  }
}
</style>

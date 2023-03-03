<template>
  <div>
    <div class="header">
      <h1>śmiało!</h1>
      <h2>
        Zadzwoń lub napisz, chętnie odpowiem na&nbsp;wszystkie&nbsp;pytania.
      </h2>
    </div>

    <div class="contact">
      <a href="mailto:ms.radkiewicz@gmail.com">ms.radkiewicz@gmail.com</a>
      <a href="tel:+48504907313">504 907 313</a>
      <img
        class="contact__phone"
        src="~/assets/img/old-phone.png"
        alt="telefon"
      />
    </div>
    <Copyright />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h2 {
  max-width: 420px;
  margin: 0 auto;
}
.contact {
  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    font-size: 2rem;
    text-align: center;
    font-weight: 500;
  }

  &__phone {
    width: 100%;
    max-width: 264px;
    margin: 32px auto;
  }
}
</style>

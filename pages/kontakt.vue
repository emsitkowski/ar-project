<template>
  <div>
    <div class="header">
      <h1>śmiało!</h1>
      <h2>Zadzwoń lub napisz, chętnie odpowiem na wszystkie pytania.</h2>
    </div>

    <div class="contact">
      <a href="mailto:ms.radkiewicz@gmail.com">ms.radkiewicz@gmail.com</a>
      <a href="tel:+48504907313">504 907 313</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    font-size: 2rem;
    text-align: center;
    font-weight: 500;
  }
}
</style>

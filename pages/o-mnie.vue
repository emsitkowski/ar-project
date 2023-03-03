<template>
  <div>
    <div class="header">
      <h1>poznajmy się!</h1>
    </div>
    <div class="content">
      <LazyImage src="~assets/img/aga-radkiewicz.jpg" alt="Aga Radkiewicz" />
      <div class="content__copy">
        <p>
          <strong>Nazywam się Aga Radkiewicz,</strong>
        </p>
        <p>
          wiem jak pomagać firmom wyróżnić się poprzez niezwykłe kreacje
          wizualne. Zajmuję się projektowaniem graficznym od kilku lat i
          potrafię z sukcesem zidentyfikować czego potrzebują marki, aby
          przyciągnąć uwagę swoich odbiorców. Projekty które tworzę nie tylko są
          estetyczne i piękne, ale przede wszystkim mają sens i coś komunikują.
          Mam sporą wiedzę w zakresie UX design – zawsze biorę pod uwagę
          wrażenia końcowego odbiorcy zarówno przy projektowaniu stron
          internetowych, jak i przy projektach marketingowych.
        </p>
        <p>
          Jestem ciekawa świata i różnych kultur. Potrafię zasiedzieć się na
          długie godziny planując wyprawy i czytając o ludziach i ich kulturach.
          Interesuje mnie w jaki sposób ludzie podejmują decyzje zakupowe i
          życiowe, dlatego często znajdziesz mnie z nosem w książkach o
          psychologii człowieka.
        </p>
        <p>
          <strong
            >Jeśli chcesz przenieść strategię marketingową swojej firmy na
            wyższy poziom zadzwoń lub napisz do mnie. Posiadam odpowiednie
            narzędzia i wiedzę, aby Twoja firma była pozytywnie odbierana.
          </strong>
        </p>
      </div>
    </div>
    <Copyright />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__copy {
  }

  p {
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

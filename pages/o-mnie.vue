<template>
  <div>
    <div class="header">
      <h1>poznajmy się!</h1>
    </div>
    <div class="content">
      <LazyImage
        :src="require(`~/assets/img/aga-radkiewicz.jpg`)"
        alt="Aga Radkiewicz"
      />
      <div class="content__copy">
        <h3>
          <strong>Nazywam się Aga Radkiewicz,</strong>
        </h3>
        <p>
          jestem projektantką graficzną z&nbsp;czteroletnim stażem pracy na tym
          stanowisku. Zajmuję&nbsp;się tworzeniem kreacji wizualnych, które
          pomagają firmom wyróżnić się na&nbsp;rynku. Dzięki mojemu
          doświadczeniu i&nbsp;umiejętnościom, potrafię dokładnie zrozumieć
          potrzeby marki i&nbsp;jej odbiorców. Każdy projekt, który tworzę, ma
          nie tylko być estetyczny, ale również przekazywać sens
          i&nbsp;wartości. Posiadam również wiedzę z&nbsp;zakresu UX design,
          dzięki czemu uwzględniam oczekiwania i&nbsp;wrażenia końcowego
          odbiorcy przy projektowaniu stron internetowych i&nbsp;działań
          marketingowych.
        </p>
        <p>
          <strong
            >Jeśli chcesz podnieść strategię marketingową Twojej firmy na wyższy
            poziom, skontaktuj się ze mną dzwoniąc lub pisząc. Posiadam
            odpowiednie narzędzia i&nbsp;wiedzę, aby Twoja firma była pozytywnie
            postrzegana.
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
    gap: 64px;
    grid-template-columns: 1fr 1fr;
  }

  img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__copy {
    h3 {
      margin-bottom: 16px;
    }
  }

  p {
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

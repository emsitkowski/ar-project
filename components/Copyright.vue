<template>
  <div class="copyright">
    <p>Copyright by Aga Radkiewicz</p>
    <p>
      Wykonanie strony:
      <a href="https://emsitkowski.com" target="_blank" rel="noopener"
        ><strong>emsitkowski.com</strong></a
      >
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.copyright {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 64px 0;
  text-align: center;

  @media (min-width: 576px) {
    padding: 86px 0;
  }

  p {
    color: #999;
    font-size: 14px;
  }

  a {
    color: black;
    &:hover {
      text-decoration: underline;
    }

    strong {
      font-weight: 500;
    }
  }
}
</style>

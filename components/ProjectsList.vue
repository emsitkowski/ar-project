<template>
  <div>
    <div v-for="project in projects" :key="project.id">
      <nuxt-link :to="project.slugs[0]" class="project">
        <div class="project__cover">
          <img :src="project.data.cover.url" alt="" />
        </div>
        <div class="project__details">
          <h3>{{ project.data.name }}</h3>
          <span>{{ project.data.category }}</span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
    };
  },

  async fetch() {
    const ref = await fetch(
      "https://ar-project.cdn.prismic.io/api/v2?access_token=MC5ZXzM3UXhBQUFDWUFLY3Rp.77-9I1nvv73vv73vv715bO-_ve-_ve-_ve-_vU3vv73vv73vv73vv71k77-977-9FwHvv70o77-977-977-9H--_ve-_vQbvv70"
    )
      .then((res) => res.json())
      .then((res) => res.refs[0].ref);

    this.projects = await fetch(
      `https://ar-project.cdn.prismic.io/api/v2/documents/search?ref=${ref}&access_token=MC5ZXzM3UXhBQUFDWUFLY3Rp.77-9I1nvv73vv73vv715bO-_ve-_ve-_ve-_vU3vv73vv73vv73vv71k77-977-9FwHvv70o77-977-977-9H--_ve-_vQbvv70`
    )
      .then((res) => res.json())
      .then((res) => res.results);
  },
};
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  height: 460px;

  &__details {
    background-color: #f2f2f2;
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__cover {
    flex-basis: 60%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>

<template>
  <div>
    <h1>{{ project.data.name }}</h1>
    <p>{{ project.data.description[0].text }}</p>
    <div v-for="slice in slices" :key="slice.id">
      <div v-if="slice.slice_type == 'button_link'">
        <a :href="slice.primary.url.url">
          {{ slice.primary.text }}
        </a>
      </div>

      <img
        v-if="slice.slice_type == 'full_width_photo'"
        class="fullwidth"
        :src="slice.primary.photo.url"
        :alt="slice.primary.photo.alt"
      />

      <div class="halfwidth" v-if="slice.slice_type == 'half_width_photo'">
        <img
          :src="slice.primary.left_photo.url"
          :alt="slice.primary.left_photo.alt"
        />
        <img
          :src="slice.primary.right_photo.url"
          :alt="slice.primary.right_photo.alt"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const ref = await fetch(
      "https://ar-project.cdn.prismic.io/api/v2?access_token=MC5ZXzM3UXhBQUFDWUFLY3Rp.77-9I1nvv73vv73vv715bO-_ve-_ve-_ve-_vU3vv73vv73vv73vv71k77-977-9FwHvv70o77-977-977-9H--_ve-_vQbvv70"
    )
      .then((res) => res.json())
      .then((res) => res.refs[0].ref);

    const project = await fetch(
      `https://ar-project.cdn.prismic.io/api/v2/documents/search?ref=${ref}&access_token=MC5ZXzM3UXhBQUFDWUFLY3Rp.77-9I1nvv73vv73vv715bO-_ve-_ve-_ve-_vU3vv73vv73vv73vv71k77-977-9FwHvv70o77-977-977-9H--_ve-_vQbvv70`
    )
      .then((res) => res.json())
      .then(
        (res) =>
          res.results.filter((project) => project.slugs.includes(params.uid))[0]
      );

    // define slices
    const slices = project.data.slices;

    return { project, slices };
  },

  mounted() {
    console.log(this.callToAction);
  },
};
</script>

<style lang="scss" scoped>
.fullwidth {
  width: 100%;
  max-width: 100%;
}

.halfwidth {
  display: flex;

  img {
    width: 50%;
    max-width: 50%;
  }
}
</style>

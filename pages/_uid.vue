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
      <div class="fullwidth">
        <img
          v-if="slice.slice_type == 'full_width_photo'"
          :src="slice.primary.photo.url"
          :alt="slice.primary.photo.alt"
        />
      </div>

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
import { fetchSingleProject } from "../composables/fetchSingleProject";

export default {
  async asyncData({ params }) {
    const project = await fetchSingleProject({ params });

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
  img {
    display: block;
    max-width: 100%;
  }
}

.halfwidth {
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    flex-direction: row;
  }
  img {
    display: block;
    max-width: 100%;
    @media (min-width: 576px) {
      max-width: 50%;
    }
  }
}
</style>

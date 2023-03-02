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
      <div v-if="slice.slice_type == 'full_width_photo'" class="fullwidth">
        <img :src="slice.primary.photo.url" :alt="slice.primary.photo.alt" />
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

    <div v-for="project in moreProjects" :key="project.id">more project</div>
  </div>
</template>

<script>
import { fetchAllProjects } from "../composables/fetchAllProjects";
import { fetchSingleProject } from "../composables/fetchSingleProject";

export default {
  async asyncData({ params }) {
    const project = await fetchSingleProject({ params });

    // define slices
    const slices = project.data.slices;

    const allProjects = await fetchAllProjects();

    const moreProjects = [];

    allProjects.forEach((project, index) => {
      if (!project.slugs.includes(params.uid)) {
        moreProjects.push(project);
      }
    });

    return { project, slices, moreProjects };
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
.fullwidth {
  padding: 32px 0;
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

    &:first-child {
      padding: 0 0 32px 0;
    }
    @media (min-width: 576px) {
      max-width: 50%;
      &:first-child {
        padding: 0 16px 0 0;
      }
      &:last-child {
        padding: 0 0 0 16px;
      }
    }
  }
}
</style>

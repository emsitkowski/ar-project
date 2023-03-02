<template>
  <div>
    <div class="details">
      <h1>{{ project.data.name }}</h1>
      <span>{{ project.data.secondary_name }}</span>
      <p>{{ project.data.description[0].text }}</p>
    </div>
    <div v-for="slice in slices" :key="slice.id">
      <div class="cta-wrapper" v-if="slice.slice_type == 'button_link'">
        <a class="cta" :href="slice.primary.url.url" target="_blank">
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
    <Copyright />
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
.details {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px 0;

  h1 {
    font-size: 2.6rem;
    margin-bottom: 4px;
  }

  span {
    color: rgb(153, 153, 153);
    font-weight: 400;
    padding: 8px 0;
    margin-bottom: 32px;
  }

  p {
    text-align: start;
    max-width: 80%;
    margin-bottom: 8px;
  }
}

.cta-wrapper {
  display: flex;
  justify-content: center;

  .cta {
    margin-bottom: 32px;
  }
}
.fullwidth {
  padding: 16px 0;
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
      padding: 0 0 16px 0;
    }
    @media (min-width: 576px) {
      max-width: 50%;
      &:first-child {
        padding: 0 8px 0 0;
      }
      &:last-child {
        padding: 0 0 0 8px;
      }
    }
  }
}
</style>

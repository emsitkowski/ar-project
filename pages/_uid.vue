<template>
  <div class="project">
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
        <LazyImage
          :src="slice.primary.photo.url"
          :alt="slice.primary.photo.alt"
        />
      </div>

      <div class="halfwidth" v-if="slice.slice_type == 'half_width_photo'">
        <LazyImage
          :src="slice.primary.left_photo.url"
          :alt="slice.primary.left_photo.alt"
        />
        <LazyImage
          :src="slice.primary.right_photo.url"
          :alt="slice.primary.right_photo.alt"
        />
      </div>
    </div>

    <div class="more">
      <h3>zobacz więcej</h3>
      <div class="more__wrapper">
        <div
          class="more__wrapper-box"
          v-for="mproject in moreProjects"
          :key="mproject.id"
        >
          <nuxt-link :to="mproject.slugs[0]">
            <div class="more__cover">
              <LazyImage :src="mproject.data.cover.url" alt="test" />
            </div>
            <div class="more__details">
              <h3>{{ mproject.data.name }}</h3>
              <span>{{ mproject.data.category }}</span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
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
.project {
  min-height: 100vh;
}
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
  padding: 8px 0;
  img {
    display: block;
    max-width: 100%;
  }
}

.halfwidth {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 0;
  @media (min-width: 576px) {
    flex-direction: row;
  }
  img {
    display: block;
    max-width: 100%;
  }
}

.more {
  margin-top: 64px;

  h3 {
    margin-bottom: 32px;
  }

  .more__wrapper {
    display: flex;

    &-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      min-height: 320px;
      background: #f7f7f7;

      @media (min-width: 576px) {
        width: 33.333%;
      }

      &:hover {
        .more__details {
          background-color: rgb(15, 15, 15);
        }
        .more__cover {
          filter: brightness(70%);
        }
        h3 {
          color: #fff;
        }
      }

      h3 {
        font-size: 16px;
        margin-bottom: 6px;
      }

      span {
        font-size: 14px;
        color: rgb(153, 153, 153);
        font-weight: 400;
        text-transform: uppercase;
      }

      a {
        height: 100%;
        width: 100%;
        display: grid;
      }
    }
  }
  &__details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 16px;
  }

  &__cover {
    transition: 0.1s linear;
  }
}
</style>

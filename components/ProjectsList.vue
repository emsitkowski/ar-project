<template>
  <div style="position: relative">
    <SkeletonLoader v-if="$fetchState.pending" />
    <nuxt-link
      v-else
      v-for="project in projects"
      :key="project.id"
      :to="project.slugs[0]"
      class="project"
    >
      <div class="project__cover">
        <LazyImage :src="project.data.cover.url" alt="test" />
      </div>
      <div class="project__details">
        <h3>{{ project.data.name }}</h3>
        <span>{{ project.data.category }}</span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import { fetchAllProjects } from "../composables/fetchAllProjects";

export default {
  data() {
    return {
      projects: [],
    };
  },

  async fetch() {
    this.projects = await fetchAllProjects();
  },
};
</script>

<style lang="scss" scoped>
.project {
  display: grid;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    min-height: 460px;
  }

  &:nth-child(even) {
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row-reverse;
    }
  }

  &:hover {
    .project__details {
      background-color: rgb(15, 15, 15);
    }
    .project__cover {
      filter: brightness(90%);
    }
    h3 {
      color: #fff;
    }
  }

  &__details {
    background-color: #f2f2f2;
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }

  &__cover {
    flex-basis: 60%;
    pointer-events: none;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  span {
    color: rgb(153, 153, 153);
    font-weight: 400;
    text-transform: uppercase;
    padding: 8px 0;
    font-size: 14px;
  }
}
</style>

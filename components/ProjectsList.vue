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
  display: flex;
  height: 460px;
  background-color: #000;

  &:hover {
    .project__details {
      background-color: rgb(15, 15, 15);
    }
    .project__cover {
      opacity: 0.7;
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
  }

  &__cover {
    flex-basis: 60%;
    pointer-events: none;
    transition: 0.1s linear;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  span {
    color: rgb(153, 153, 153);
    font-weight: 400;
    padding: 8px 0;
  }
}
</style>

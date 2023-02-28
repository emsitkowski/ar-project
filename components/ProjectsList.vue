<template>
  <div>
    <h1>Project List</h1>

    <div v-for="project in projects" v-key="project.id">
      <h2>{{ project.data.name }}</h2>
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
    this.projects = await fetch(
      "https://ar-project.cdn.prismic.io/api/v2/documents/search?ref=Y_35pxAAACkAKcNl&access_token=MC5ZXzM3UXhBQUFDWUFLY3Rp.77-9I1nvv73vv73vv715bO-_ve-_ve-_ve-_vU3vv73vv73vv73vv71k77-977-9FwHvv70o77-977-977-9H--_ve-_vQbvv70"
    )
      .then((res) => res.json())
      .then((res) => res.results);
  },
};
</script>

<style scoped></style>

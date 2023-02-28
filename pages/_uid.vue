<template>
  <div>
    <h1>project page</h1>
    {{ project.name }}
  </div>
</template>

<script>
export default {
  async asyncData() {
    const project = await fetch(
      "https://ar-project.cdn.prismic.io/api/v2/documents/search?ref=Y_35pxAAACkAKcNl&access_token=MC5ZXzM3UXhBQUFDWUFLY3Rp.77-9I1nvv73vv73vv715bO-_ve-_ve-_ve-_vU3vv73vv73vv73vv71k77-977-9FwHvv70o77-977-977-9H--_ve-_vQbvv70"
    )
      .then((res) => res.json())
      .then((res) => res.results[0].data);

    if (project) {
      return { project };
    } else {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped></style>

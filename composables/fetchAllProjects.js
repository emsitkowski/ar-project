import { getCurrentRef } from "../composables/getCurrentRef";

// >>>> Fetch all projects
export async function fetchAllProjects() {
  // get current API ref
  const ref = await getCurrentRef();

  return await fetch(
    `https://ar-project.cdn.prismic.io/api/v2/documents/search?ref=${ref}&access_token=MC5ZXzM3UXhBQUFDWUFLY3Rp.77-9I1nvv73vv73vv715bO-_ve-_ve-_ve-_vU3vv73vv73vv73vv71k77-977-9FwHvv70o77-977-977-9H--_ve-_vQbvv70`
  )
    .then((res) => res.json())
    .then((res) => res.results);
}

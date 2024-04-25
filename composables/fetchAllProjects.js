import { getCurrentRef } from "../composables/getCurrentRef";

// >>>> Fetch all projects
export async function fetchAllProjects() {
  // get current API ref
  const ref = await getCurrentRef();

  return await fetch(
    `https://agaradkiewicz.cdn.prismic.io/api/v2/documents/search?ref=${ref}`
  )
    .then((res) => res.json())
    .then((res) => res.results);
}

import { getCurrentRef } from "../composables/getCurrentRef";

// >>>> Fetch all projects
export async function fetchAllProjects() {
  // get current API ref
  const ref = await getCurrentRef();
  const access_token =
    "MC5aQWVsN3hBQUFDZ0FVNlJw.77-977-977-9bXrvv73vv73vv73vv73vv71-77-977-9Tu-_vSAjHgp5JVnvv73vv70Y77-977-977-977-977-977-9QA";

  return await fetch(
    `https://agaradkiewicz.cdn.prismic.io/api/v2/documents/search?ref=${ref}&access_token=${access_token}`
  )
    .then((res) => res.json())
    .then((res) => res.results);
}

// >>>> Get current API ref
export async function getCurrentRef() {
  const ref = await fetch(
    "https://ar-project.cdn.prismic.io/api/v2?access_token=MC5ZXzM3UXhBQUFDWUFLY3Rp.77-9I1nvv73vv73vv715bO-_ve-_ve-_ve-_vU3vv73vv73vv73vv71k77-977-9FwHvv70o77-977-977-9H--_ve-_vQbvv70"
  )
    .then((res) => res.json())
    .then((res) => res.refs[0].ref);
  return ref;
}

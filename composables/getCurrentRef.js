// >>>> Get current API ref
export async function getCurrentRef() {
  const access_token =
    "MC5aQWVsN3hBQUFDZ0FVNlJw.77-977-977-9bXrvv73vv73vv73vv73vv71-77-977-9Tu-_vSAjHgp5JVnvv73vv70Y77-977-977-977-977-977-9QA";

  const ref = await fetch(
    `https://agaradkiewicz.cdn.prismic.io/api/v2?access_token=${access_token}`
  )
    .then((res) => res.json())
    .then((res) => res.refs[0].ref);
  return ref;
}

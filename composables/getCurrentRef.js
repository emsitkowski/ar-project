// >>>> Get current API ref
export async function getCurrentRef() {
  const ref = await fetch(`https://agaradkiewicz.cdn.prismic.io/api/v2`)
    .then((res) => res.json())
    .then((res) => res.refs[0].ref);
  return ref;
}

export async function getAssociationData() {
  const res = await fetch("http://localhost:1337/api/top-contents?populate=*");
  const json = await res.json();
  return json.data[0];
}


export async function getCouncilsData() {
  const res = await fetch("http://127.0.0.1:1337/api/top-contents?populate=*");
  const json = await res.json();

  // Councils ka record slug se pick karo
  return json.data.find((item: any) => item.slug === "iaam-councils");
}


export async function getSocietiesData() {
  const res = await fetch("http://127.0.0.1:1337/api/top-contents?populate=*",{ cache: "no-store" });
  const json = await res.json();
  return json.data.find((item: any) => item.slug === "iaam-societies");
}

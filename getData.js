const url = "https://git.fahrul.id/koda/data/raw/branch/main/talents.json";

async function getData() {
  const res = await fetch(url);
  const data = await res.json();

  const nama = data.map(item => `${item.name} - batch-4`);
  console.log(nama);

  return nama;
}

// export langsung function
module.exports = getData;

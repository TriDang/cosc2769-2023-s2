async function getCatFact() {
  const response = await fetch(`https://catfact.ninja/fact`);
  const data = await response.json();
  return data.fact;
}

function displayRandomFact() {
  console.log('Begin getting');
  getCatFact().then((fact) => {
    console.log(fact);
  });
  console.log('After getting');
}

displayRandomFact();
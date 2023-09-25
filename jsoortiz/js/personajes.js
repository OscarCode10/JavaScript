//Url API

let urlapi="https://rickandmortyapi.com/api/character"

//Obtener los datos de todos los personajes

fetch(urlapi)
        .then(response => response.json())
        .then(json => {
          printPersonajes(json.results);
        });

// Pinta todos los personajes insertando un HTML dentro del #container

function printPersonajes(personajes) {
  const contenedor = document.getElementById('contenedor')
  personajes.forEach(personaje => {
    contenedor.innerHTML = `
    ${contenedor.innerHTML}
    <div class="carta">
    <img src="https://rickandmortyapi.com/api/character/avatar/${personaje.id}.jpeg"/>
    <span>Nº.${personaje.id}</span>
    <h2>${personaje.name}</h2>
    </carta>
  `;
  });
}

// En esta ruta de la API no nos viene el id de cada pokemon, pero si que nos viene
// una URL, para poder obtener todos los datos de ese pokemon, la cual contiene su ID
// así que le extraigo el ID a la URL
function getPokemonId(url) {
  return url.replace('https://rickandmortyapi.com/api/character/', '').replace('/','')
}
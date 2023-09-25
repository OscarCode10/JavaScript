/*console.log("1.Chocolate");
setTimeout(()=>{
    console.log("2.Huevos");
}, 1000.5)
console.log("3.Pan");
console.log("4.Tamal");*/

//1.asincrona
/*let add=(num1,num2)=>{    
    return num1+num2
}
let rest=(num1,num2)=>{    
    return num1-num2
}

//2. funcion que llama a al asincrona (callback)

let calculate=(n1,n2,callback)=>{
    return callback(n1,n2)
}

//3. Invocar la función principal
console.log(calculate(4,4,add));
console.log(calculate(4,4,rest));*/

let urlapi="https://pokeapi.co/api/v2/pokemon"

//1. Crear un objeto xhr

/*let xhttp= new XMLHttpRequest();

xhttp.onreadystatechange=function(){
    // si, nada de error
    if (this.readyState==4&&this.status==200) {
        // La respuesta, aunque sea JSON, viene en formato texto, por esto se pasea
        console.log(JSON.parse(this.responseText));
    }
}

// 2. Conectarme al API
xhttp.open("GET",urlapi,true)
xhttp.setRequestHeader("Content-type", "application/json")

// enviar los datos al API

xhttp.send(null)*/

//Método fetch
/*fetch(urlapi)
    .then(response=>response.json())
    .then(json=>console.log(json))*/

// Pilas no olvide integrar la librearia al proyecto
// <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

/*axios.get(urlapi)
    .them(function(response){
        console.log(response);
    })
    .cathc(function(error){
        // funcion para capturar el error
        console.log(error);
    })*/

//Obtener los datos de todos los pokemon
// Obtenemos los datos de todos los pokemon 
fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(json => {
            printPokemons(json.results);
        });

// Pinta todos los pokemos insertando un HTML dentro del #container
function printPokemons(pokemons) {
  const container = document.getElementById('container')
  pokemons.forEach(pokemon => {
    container.innerHTML = `
    ${container.innerHTML}
    <div class="card">
    <img src="https://pokeres.bastionbot.org/images/pokemon/${getPokemonId(pokemon.url)}.png"/>
    <span>Nº.${getPokemonId(pokemon.url)}</span>
    <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
    </card>
  `;
  });
}

// En esta ruta de la API no nos viene el id de cada pokemon, pero si que nos viene
// una URL, para poder obtener todos los datos de ese pokemon, la cual contiene su ID
// así que le extraigo el ID a la URL
function getPokemonId(url) {
  return url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/','')
}
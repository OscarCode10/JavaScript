//Crear un array

let food=["Empanada", "Tamal"]

//imprimir un array
console.log(food);

//acceder a un elemento de array
element1=food[1]
console.log(food[1]); 
console.log(element1);


//última poisición del array
console.log(food[food.length-1]);

//Recorrer un array
food.forEach(function(valor,posicion,array) {
    console.log(`En la posición ${posicion} hay ${valor}`);
})

//Añadir elementos al final del array
food.push("Jugo")
console.log(food);

food.push("Pan")
console.log(food);

food.push("Leche")
console.log(food);

//Eliminar ultimo elemento del array

food.pop()
console.log(food);

//añadir elemento al inicio del array
food.unshift("Leche")
console.log(food);

//Eliminar el primero elemento del array
//food.shift()
//console.log(food);

//Eliminar de una posición en específico
food.splice(1,1)
console.log(food);

//Método de busqueda filter Encuentra elementos similares y parecidos
let search1=food.filter(food=>food=="Tamal")
console.log(search1);

//Método de busqueda find Encuentra un elemento del array y lo guarda en la variable asignada

let search2=food.find(food=>food=="Empanada")
console.log(search2);

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
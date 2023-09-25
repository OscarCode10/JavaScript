//Funciones

//Métodos para definir funciones 

//Función por declaración

//Declarar la función 

/*function greet(){
    //cuerpo o tareas de la función 
    console.log("Buenos días por la mañana");
}

//2. invocar o llamar la función

greet()*/

let number1=parseInt(prompt("Ingrese el primer número"))
let number2=parseInt(prompt("Ingrese el segundo numero número"))

/*function add(){
    let add=number1+number2
    alert(`El total de la suma entre ${number1} y ${number2} es ${add}`)
}
add()*/

/*function add(n1,n2){
    let add=n1+number2
    alert(`El total de la suma entre ${n1} y ${n2} es ${add}`)
}
add(number1,number2)*/


function add(n1,n2){
    /*let add=n1+n2
    return add*/
    return n1+n2
}

console.log(`la suma es ${add(number1,number2)}`)
let result=add(number1, number2)


//Función por expresión 

let subtract=function subtract(n1,n2){
    console.log(`La resta entre ${n1} y ${n2} es ${n1-n2}`);
}
//función por expresión que se invoca con el nombre de la variable
subtract(number1,number2)


//Función anónima -> no tiene nombre en la función

let mult=function(n1,n2){
    return n1*n2
}

console.log(`La multiplicación de los numero es ${mult(number1,number2)}`);

//Función arrow o flecha
let div=(n1,n2)=>{
    console.log(`La resta entre ${n1} y ${n2} es ${n1/n2}`);
}

div(number1,number2)


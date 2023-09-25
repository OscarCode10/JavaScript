console.log("hola desde afuera")
let numberOne
let numberTwo
let name="Oscar"
let age=17
let state=false
const iva=19
console.log(`Mi nombre es ${name} y tengo ${age}, el iva de mi edad es ${(age/100)*iva}.`)
//numberOne=window.prompt()
numberOne=prompt("Ingrese primer el número")
numberTwo=parseInt(prompt("Ingrese el segundo numero"))
let add=parseInt(numberOne)+numberTwo
alert("El resultado de la suma es: "+add)

if (numberOne>numberTwo) {    
    //si la condición se cumple
    alert(`El número mayor es ${numberOne}`)
}
else if(numberOne===numberTwo){
    //si la segunda condición es correcta
    console.log(`Los  ${numberTwo}`)
}
else{
    console.log(``)
}
let numMayor=(numberOne>numberTwo)
? "El numero mayor es el primero" //Si condición se cumple   
: "El número mayor es el segundo" //Si condición no se cumple

console.log(numMayor)

for (let i = 1; i <=5; i++) {
    //cuerpo del ciclo
    console.log("Hola, estoy dentro del ciclo for")
}

/*ciclo while indeterminado*/ 
/*follow="si"
while (follow="si") {
    console.log("Hola estoy dentro del ciclo while")
    seguir=prompt("Desea continuar?")
}*/

/*follow=1
while (follow==1) {
    console.log("Hola estoy dentro del ciclo while")
    seguir=parseInt(prompt("Desea continuar? diga 1 si quiere y 2 si no quiere"))
}*/

follow=true
while (follow===true) {
    console.log("Hola estoy dentro del ciclo while")
    seguir=confirm("Desea continuar?")
}
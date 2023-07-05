//Acceder al elemento por su id

let contenido=document.getElementById("features")
console.log(contenido)

//Acceder al elemento por su selector por etiqueta

let con1=document.querySelector("p")
console.log(con1)

//Acceder al elemento por su selector por id

let con2=document.querySelector("#fueatures")
console.log(con2)

//Acceder al elemento por su selector por class

let con3=document.querySelector(".feature")
console.log(con3)

//Acceder al elemento por su selector por todas las etiquetas

let con4=document.querySelectorAll("p")
console.log(con4);

//Acceder al elemento por su selector del nodeList

let con5=document.querySelectorAll("p")[0]
console.log(con5);

//Recorrer un nodeList

document.querySelectorAll("p").forEach((el)=>console.log(el))

//Ejemplo de acceso a campo de formulario
let num1=document.getElementById("num1").value
console.log(num1)

//Acceder a el valor de un atributo

document.querySelector("a").getAttribute("href")

//Cambiar el valor de un atributo

document.querySelector("a").setAttribute("href","https://outlook.office365.com/mail/")

//Acceder al atributo style para cambiar estilos css interno

let mys=document.querySelector("#features")
mys.style.setProperty("color","#FF0000") 
let mi=document.querySelector("body")
mi.style.setProperty("background-color","#AFC5F5")

//Acceder a un selector y cambiar su contenido (nodo de texto)

let miso=document.querySelector(".feature")
let text=`
<h1>Este es el feature 1</h1>
<p>otro párrafo</p>
<p>un párrafo</p>
`
miso.textContent=text
miso.innerHTML=text

let change=document.querySelector(".feature-2")
let text2=`
<h1>Oscar Ortiz</h1>
<p>Aprendiz ficha 2687390 de ADSO</p>
`
change.textContent=text2
change.innerHTML=text2

//Crear Contenido en el DOM

let img1=document.createElement("img")
img1.src="https://elcomercio.pe/resizer/g0KaywyzKbviGQljgMU1M6mIXws=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/K4NLEUWUV5DM5GB2KGIBNSZUPQ.jpg"

document.body.appendChild(img1)

let caja=document.createElement("div")
caja.innerHTML=`<img src="img/miles.png">`
change.appendChild(caja)

change.remove(caja)
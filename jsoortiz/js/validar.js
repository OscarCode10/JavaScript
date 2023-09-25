// 1. Acceder al formulario
let frmvalidacion=document.getElementById("frmvalidacion")
let feedback1=document.querySelector("#campoNoDoc .feedback")
let feedback2=document.querySelector("#campoNombre .feedback")
let feedback3=document.querySelector("#campoApellido .feedback")
let feedback4=document.querySelector("#campoCorreo .feedback")
//2. reglas de validación
const $num=/^[0-9]{1,15}/
const $text=/^[A-Za-zñÑáÁ]{10,50}/
const $email=/\S+@\S+\.\S+/
const $name=/[A-Za-zñÑáÁ]{3,15}/
const $lastName=/[A-Za-zñÑáÁ]{6,15}/

//3. Validación antes de enviar al formulario
//Numero Doc
frmvalidacion.noDoc.addEventListener('input',(e)=>{
    e.preventDefault();
    //console.log(e.target.value);
    if ($num.test(e.target.value)) {
        frmvalidacion.noDoc.setAttribute("class","sucess")
        feedback1.style.setProperty("visibility","hidden")
        feedback1.style.setProperty("opacity","0")
    }
    else{
        frmvalidacion.noDoc.setAttribute("class","error")
        feedback1.textContent="Solo pueden ir números"
        feedback1.style.setProperty("visibility","visible")
        feedback1.style.setProperty("opacity","1")
    }
})
//Nombre
frmvalidacion.name.addEventListener('input',(e)=>{
    e.preventDefault();
    //console.log(e.target.value);
    if ($name.test(e.target.value)) {
        frmvalidacion.name.setAttribute("class","sucess")
        feedback2.style.setProperty("visibility","hidden")
        feedback2.style.setProperty("opacity","0")
    }
    else{
        frmvalidacion.name.setAttribute("class","error")
        feedback2.textContent="Solo se puede digitar texto o tener más de 3 carácteres"
        feedback2.style.setProperty("visibility","visible")
        feedback2.style.setProperty("opacity","1")
    }
})
//Apellido
frmvalidacion.lastName.addEventListener('input',(e)=>{
    e.preventDefault();
    //console.log(e.target.value);
    if ($lastName.test(e.target.value)) {
        frmvalidacion.lastName.setAttribute("class","sucess")
        feedback3.style.setProperty("visibility","hidden")
        feedback3.style.setProperty("opacity","0")
    }
    else{
        frmvalidacion.lastName.setAttribute("class","error")
        feedback3.textContent="Solo se puede digitar texto o tener menos de 6 carácteres"
        feedback3.style.setProperty("visibility","visible")
        feedback3.style.setProperty("opacity","1")
    }
})
//Correo
frmvalidacion.email.addEventListener('input',(e)=>{
    e.preventDefault();
    //console.log(e.target.value);
    if ($email.test(e.target.value)) {
        frmvalidacion.email.setAttribute("class","sucess")
        feedback4.style.setProperty("visibility","hidden")
        feedback4.style.setProperty("opacity","0")
    }
    else{
        frmvalidacion.email.setAttribute("class","error")
        feedback4.textContent="No entendemos tu correo"
        feedback4.style.setProperty("visibility","visible")
        feedback4.style.setProperty("opacity","1")
    }
})

//4. Validación de campos vacíos
frmvalidacion.addEventListener("submit",(e)=>{
    e.preventDefault() //Detener propagación

    const noDoc=frmvalidacion.noDoc.value;

    if (noDoc==null || noDoc==0) {
        alert(`Debe ingresar un número de documento`)
        frmvalidacion.noDoc.focus()
        frmvalidacion.noDoc.setAttribute("class","error")
    }
    else{
        frmvalidacion.submit()//Reanudar el envio del formulario
        alert(`Los datos fueron enviados`)
    }
})

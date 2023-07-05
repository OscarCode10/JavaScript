// 1. Acceder al formulario
let frmvalidacion=document.getElementById("frmvalidacion")
let feedback1=document.querySelector("#campoNoDoc .feedback")
let feedback2=document.querySelector("#campoNombre .feedback")
let feedback3=document.querySelector("#campoApellido .feedback")
let feedback4=document.querySelector("#campoFechaNacimiento .feedback")
let feedback5=document.querySelector("#campoCorreo .feedback")
let feedback6=document.querySelector("#campoPswd .feedback")
let feedback7=document.querySelector("#campoPswdC .feedback")
let feedback8=document.querySelector("#campoTp .feedback")

//2. reglas de validación
const $num=/^[0-9]{5,15}/
const $text=/^[A-Za-zñÑáÁ]{10,50}/
const $email=/\S+@\S+\.\S+/
const $name=/[A-Za-zñÑáÁ]{3,15}/
const $lastName=/[A-Za-zñÑáÁ]{6,15}/
const $fecha=/[A-Za-z\d@$!%*#?&]{8,}/;
const $pswd=/^[A-Za-zñÑáÁ0-9]{8,20}/

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
        feedback1.textContent="Solo pueden ir números y debe ser mayor de 5 digitos"
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
//Fecha Nacimiento
frmvalidacion.fechaNacimiento.addEventListener('input',(e)=>{
    e.preventDefault();
    //console.log(e.target.value);
    if ($fecha.test(e.target.value)) {
        frmvalidacion.fechaNacimiento.setAttribute("class","sucess")
        feedback4.style.setProperty("visibility","hidden")
        feedback4.style.setProperty("opacity","0")
    }
    else{
        frmvalidacion.fechaNacimiento.setAttribute("class","error")
        feedback4.textContent="No esta bien escrita la fehca"
        feedback4.style.setProperty("visibility","visible")
        feedback4.style.setProperty("opacity","1")
    }
})
//Correo
frmvalidacion.email.addEventListener('input',(e)=>{
    e.preventDefault();
    //console.log(e.target.value);
    if ($email.test(e.target.value)) {
        frmvalidacion.email.setAttribute("class","sucess")
        feedback5.style.setProperty("visibility","hidden")
        feedback5.style.setProperty("opacity","0")
    }
    else{
        frmvalidacion.email.setAttribute("class","error")
        feedback5.textContent="No entendemos tu correo o no esta bien escrito"
        feedback5.style.setProperty("visibility","visible")
        feedback5.style.setProperty("opacity","1")
    }
})
//Contraseña
let confirmar=frmvalidacion.pswd.addEventListener('input',(e)=>{
    e.preventDefault();
    //console.log(e.target.value);
    if ($pswd.test(e.target.value)) {
        frmvalidacion.pswd.setAttribute("class","sucess")
        feedback6.style.setProperty("visibility","hidden")
        feedback6.style.setProperty("opacity","0")
    }
    else{
        frmvalidacion.pswd.setAttribute("class","error")
        feedback6.textContent="La contraseña debe tener minimo 8 caracteres"
        feedback6.style.setProperty("visibility","visible")
        feedback6.style.setProperty("opacity","1")
    }
})
//Confirmar Contraseña
frmvalidacion.pswdC.addEventListener('input',(e)=>{
    e.preventDefault();
    //console.log(e.target.value);
    if (confirmar==e.target.value) {
        frmvalidacion.pswdC.setAttribute("class","sucess")
        feedback7.style.setProperty("visibility","hidden")
        feedback7.style.setProperty("opacity","0")
    }
    else{
        frmvalidacion.pswdC.setAttribute("class","error")
        feedback7.textContent="La confirmación es diferente a la contraseña"
        feedback7.style.setProperty("visibility","visible")
        feedback7.style.setProperty("opacity","1")
    }
})
//Términos y Condiciones
frmvalidacion.terminosCondiciones.addEventListener('input',(e)=>{
    e.preventDefault();
    //console.log(e.target.value);
    if ($text.test(e.target.value)) {
        frmvalidacion.terminosCondiciones.setAttribute("class","sucess")
        feedback8.style.setProperty("visibility","hidden")
        feedback8.style.setProperty("opacity","0")
    }
    else{
        frmvalidacion.terminosCondiciones.setAttribute("class","error")
        feedback8.textContent="No entendemos tu correo"
        feedback8.style.setProperty("visibility","visible")
        feedback8.style.setProperty("opacity","1")
    }
})
//4. Validación de campos vacíos
//noDoc
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
//Nombre
frmvalidacion.addEventListener("submit",(e)=>{
    e.preventDefault() //Detener propagación

    const name=frmvalidacion.name.value;

    if (name==null || name==0) {
        alert(`Debe ingresar un nombre`)
        frmvalidacion.name.focus()
        frmvalidacion.name.setAttribute("class","error")
    }
    else{
        frmvalidacion.submit()//Reanudar el envio del formulario
        alert(`Los datos fueron enviados`)
    }
})
//Apellido
frmvalidacion.addEventListener("submit",(e)=>{
    e.preventDefault() //Detener propagación

    const lastName=frmvalidacion.lastName.value;

    if (lastName==null || lastName==0) {
        alert(`Debe ingresar un Apellido`)
        frmvalidacion.lastName.focus()
        frmvalidacion.lastName.setAttribute("class","error")
    }
    else{
        frmvalidacion.submit()//Reanudar el envio del formulario
        alert(`Los datos fueron enviados`)
    }
})
//FechaNacimiento
frmvalidacion.addEventListener("submit",(e)=>{
    e.preventDefault() //Detener propagación

    const fechaNacimiento=frmvalidacion.fechaNacimiento.value;

    if (fechaNacimiento==null || fechaNacimiento==0) {
        alert(`Debe ingresar una Fecha de Nacimiento`)
        frmvalidacion.fechaNacimiento.focus()
        frmvalidacion.fechaNacimiento.setAttribute("class","error")
    }
    else{
        frmvalidacion.submit()//Reanudar el envio del formulario
        alert(`Los datos fueron enviados`)
    }
})
//Correo
frmvalidacion.addEventListener("submit",(e)=>{
    e.preventDefault() //Detener propagación

    const email=frmvalidacion.email.value;

    if (name==email || email==0) {
        alert(`Debe ingresar un Correo`)
        frmvalidacion.email.focus()
        frmvalidacion.email.setAttribute("class","error")
    }
    else{
        frmvalidacion.submit()//Reanudar el envio del formulario
        alert(`Los datos fueron enviados`)
    }
})
//Contraseña
frmvalidacion.addEventListener("submit",(e)=>{
    e.preventDefault() //Detener propagación

    const pswd=frmvalidacion.pswd.value;

    if (pswd==null || pswd==0) {
        alert(`Debe ingresar una Contraseña`)
        frmvalidacion.pswd.focus()
        frmvalidacion.pswd.setAttribute("class","error")
    }
    else{
        frmvalidacion.submit()//Reanudar el envio del formulario
        alert(`Los datos fueron enviados`)
    }
})
//Contraseña Confirmar
frmvalidacion.addEventListener("submit",(e)=>{
    e.preventDefault() //Detener propagación

    const pswdC=frmvalidacion.pswdC.value;

    if (name==null || name==0) {
        alert(`Debe ingresar una confirmación de la contraseña`)
        frmvalidacion.pswdC.focus()
        frmvalidacion.pswdC.setAttribute("class","error")
    }
    else{
        frmvalidacion.submit()//Reanudar el envio del formulario
        alert(`Los datos fueron enviados`)
    }
})
//Términos y Condiciones
frmvalidacion.addEventListener("submit",(e)=>{
    e.preventDefault() //Detener propagación

    const terminosCondiciones=frmvalidacion.terminosCondiciones.value;

    if (terminosCondiciones==null || terminosCondiciones==0) {
        alert(`Debe aceptar los Términos y Condiciones`)
        frmvalidacion.terminosCondiciones.focus()
        frmvalidacion.terminosCondiciones.setAttribute("class","error")
    }
    else{
        frmvalidacion.submit()//Reanudar el envio del formulario
        alert(`Los datos fueron enviados`)
    }
})

let user=""
let password=""
user=prompt("Ingresa tu usuario")
password=prompt("Ingresa tu contraseña")
if (user==="Oscar" && password==="123") {
    alert(`Bienvenido a mi App`)
} else if (user==="Oscar" && password!=="123"){
    alert(`Upps, parece que tus datos de acceso son incorrectos`)
} else if(user!=="Oscar" && password==="123"){
    alert(`Nombre de usuario inválido`)
} else{
    alert(`Acceso denegado`)
}

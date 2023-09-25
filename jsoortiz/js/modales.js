let ventanaModal=document.getElementById("ventanaModal")
let abrirModal=document.getElementById("abrirModal")
let modal=document.querySelector("modal")

abrirModal.onclick=function(){
    ventanaModal.style.setProperty("display","flex")
}

let X=document.querySelector(".X")
X.onclick=function(){
    ventanaModal.style.setProperty("display","none")
}

window.onclick=function(event){
    if (event.target == ventanaModal) {
        ventanaModal.style.setProperty("display","none")
    }
}
window.addEventListener("click",function(event){
    if (event.target==modal) {
        ventanaModal.style.setProperty("display","flex")
    }
})
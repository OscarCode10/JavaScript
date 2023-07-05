let click=document.getElementById("click") 
click.onclick=function(){
    alert(`Este es el evento de click`)
}

let submit=document.getElementById("submit")
submit.onsubmit=function(event) {
    event.preventDefault()
    alert(`El evento submit fue utilizado`)
}

let keyDown=document.getElementById("keyDonw")
keyDown.addEventListener('keydown', function(event) {
    alert(`Oprimiste una tecla:, ${event.key}`);
})

let mouseover=document.getElementById("mouseover")
mouseover.addEventListener("mouseover",function(event){
    mouseover.style.background="#87c6ab"
    mouseover.style.color="black"
})
mouseover.addEventListener("mouseout",function(event){
    mouseover.style.background="#e5e5e5"
})

let load=document.getElementById("load")
load.addEventListener('load', function() {
    alert(`La imagen del evento 6 se ha cargado correctamente`)
});

let change=document.getElementById("change")    
change.addEventListener("change", function(event) {
  let newValue=event.target.value
  alert(`El nuevo valor del evento 7 es ${newValue}`)
});

let focus=document.getElementById("focus")
focus.addEventListener("focus", function(){
    alert(`Se ha ejecutado el evento de focus`)
    focus.style.background="#01D9F5"
})

let blur=document.getElementById("blur")
blur.addEventListener("blur",function(){
    alert(`Se ha ejecutado el evento de blur`)
    blur.style.background="#0FFFA7"
})

let scroll = document.getElementById('scroll');
scroll.addEventListener('scroll', function() {
    alert('Se ha ejecutado el evento de scroll');
});
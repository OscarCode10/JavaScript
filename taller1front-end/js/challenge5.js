// Cuadrado - Área
let ventanaModalCa=document.getElementById("ventanaModalCa");
let abrirModalCa=document.getElementById("abrirModalCa");
let modalCa=document.querySelector(".modalCa");

abrirModalCa.onclick=function() {
  ventanaModalCa.style.setProperty("display", "flex");
};

let XCa=document.querySelector(".XCa");
XCa.onclick=function() {
  ventanaModalCa.style.setProperty("display", "none");
};

window.addEventListener("click", function(event) {
  if (event.target==ventanaModalCa) {
    ventanaModalCa.style.setProperty("display", "none");
  }
});

let calculateAreaC=()=>{
  let cuadrado=document.getElementById("area").value;
  let areaC=cuadrado * cuadrado;
  alert(`El área de su cuadrado es: ${areaC}cm`);
};

// Cuadrado - Perímetro
let ventanaModalCp=document.getElementById("ventanaModalCp");
let abrirModalCp=document.getElementById("abrirModalCp");
let modalCp=document.getElementById("modalCp");

abrirModalCp.onclick=function() {
  ventanaModalCp.style.setProperty("display", "flex");
};

let XCp=document.querySelector(".XCp");
XCp.onclick=function() {
  ventanaModalCp.style.setProperty("display", "none");
};

window.addEventListener("click", function(event) {
  if (event.target==ventanaModalCp) {
    ventanaModalCp.style.setProperty("display", "none");
  }
});

let calculatePerimetroC=()=>{
  let lado=document.getElementById("lado").value;
  let perimeC=lado*4;
  alert(`El perímetro del cuadrado es: ${perimeC}cm`);
};
// Triángulo - Área
let ventanaModalTa=document.getElementById("ventanaModalTa");
let abrirModalTa=document.getElementById("abrirModalTa");
let modalTa =document.querySelector(".modalTa");

abrirModalTa.onclick=function() {
  ventanaModalTa.style.setProperty("display", "flex");
};

let XTa=document.querySelector(".XTa");
XTa.onclick=function() {
  ventanaModalTa.style.setProperty("display", "none");
};

window.addEventListener("click", function(event) {
  if (event.target==ventanaModalTa) {
    ventanaModalTa.style.setProperty("display", "none");
  }
});

let calculateAreaT=()=>{
  let base=document.getElementById("base").value
  let altura=document.getElementById("altura").value
  let areaT=(base*altura)/2
  alert(`El área de su triángulo es: ${areaT}cm`);
};

// Triángulo - Perímetro
let ventanaModalTp=document.getElementById("ventanaModalTp");
let abrirModalTp=document.getElementById("abrirModalTp");
let modalTp=document.getElementById("modalTp");

abrirModalTp.onclick=function() {
  ventanaModalTp.style.setProperty("display", "flex");
};

let XTp=document.querySelector(".XTp");
XTp.onclick=function() {
  ventanaModalTp.style.setProperty("display", "none");
};

window.addEventListener("click", function(event) {
  if (event.target==ventanaModalTp) {
    ventanaModalTp.style.setProperty("display", "none");
  }
});

let calculatePerimetroT=()=>{
  let lado1=parseInt(document.getElementById("lado1").value)
  let lado2=parseInt(document.getElementById("lado2").value)
  let lado3=parseInt(document.getElementById("lado3").value)
  let perimeT=lado1+lado2+lado3
  alert(`El perímetro del triángulo es: ${perimeT}cm`);
};
//Rectángulo - Área
let ventanaModalRa=document.getElementById("ventanaModalRa")
let abrirModalRa=document.getElementById("abrirModalRa")
let modalRa=document.querySelector("modalRa")

abrirModalRa.onclick=function(){
    ventanaModalRa.style.setProperty("display","flex")
}

let XRa=document.querySelector(".XRa")
XRa.onclick=function(){
    ventanaModalRa.style.setProperty("display","none")
}

window.onclick=function(event){
    if (event.target==ventanaModalRa) {
        ventanaModalRa.style.setProperty("display","none")
    }
}
window.addEventListener("click",function(event){
    if (event.target==modalRa) {
        ventanaModalRa.style.setProperty("display","flex")
    }
})
let calculateAreaR=()=>{
    let base=document.getElementById("baseR").value
    let altura=document.getElementById("alturaR").value
    let areaR=base*altura
    alert(`El área de su Rectángulo es: ${areaR}cm`);
};
//Rectángulo - Perímetro
let ventanaModalRp=document.getElementById("ventanaModalRp")
let abrirModalRp=document.getElementById("abrirModalRp")
let modalRp=document.querySelector("modalRp")

abrirModalRp.onclick=function(){
    ventanaModalRp.style.setProperty("display","flex")
}

let XRp=document.querySelector(".XRp")
XRp.onclick=function(){
    ventanaModalRp.style.setProperty("display","none")
}

window.onclick=function(event){
    if (event.target==ventanaModalRp) {
        ventanaModalRp.style.setProperty("display","none")
    }
}
window.addEventListener("click",function(event){
    if (event.target==modalRp) {
        ventanaModalRp.style.setProperty("display","flex")
    }
})
let calculatePerimetroR=()=>{
    let baseRp=parseInt(document.getElementById("baseRp").value)
    let alturaRp=parseInt(document.getElementById("alturaRp").value)
    let perimeR=(baseRp*2)+(alturaRp*2)
    alert(`El perímetro del Rectángulo es: ${perimeR}cm`);
};
//Circulo - Área
let ventanaModalCia=document.getElementById("ventanaModalCia")
let abrirModalCia=document.getElementById("abrirModalCia")
let modalCia=document.querySelector("modalCia")

abrirModalCia.onclick=function(){
    ventanaModalCia.style.setProperty("display","flex")
}

let XCia=document.querySelector(".XCia")
XCia.onclick=function(){
    ventanaModalCia.style.setProperty("display","none")
}

window.onclick=function(event){
    if (event.target==ventanaModalCia) {
        ventanaModalCia.style.setProperty("display","none")
    }
}
window.addEventListener("click",function(event){
    if (event.target==modalCia) {
        ventanaModalCia.style.setProperty("display","flex")
    }
})
let calculateAreaCi=()=>{
    let radio=parseInt(document.getElementById("radio").value)
    let areaCi=(radio*radio)*3.1416
    alert(`El área de su Circulo es: ${areaCi}cm`);
};
//Circulo - Perímetro
let ventanaModalCip=document.getElementById("ventanaModalCip")
let abrirModalCip=document.getElementById("abrirModalCip")
let modalCip=document.querySelector("modalCip")

abrirModalCip.onclick=function(){
    ventanaModalCip.style.setProperty("display","flex")
}

let XCip=document.querySelector(".XCip")
XCip.onclick=function(){
    ventanaModalCip.style.setProperty("display","none")
}

window.onclick=function(event){
    if (event.target==ventanaModalCip) {
        ventanaModalCip.style.setProperty("display","none")
    }
}
window.addEventListener("click",function(event){
    if (event.target==modalCip) {
        ventanaModalCip.style.setProperty("display","flex")
    }
})
let calculatePerimetroCi=()=>{
    let radioC=document.getElementById("radioC").value
    let perimeCi=2*3.1416*radioC
    alert(`El perímetro del Rectángulo es: ${perimeCi}cm`);
};
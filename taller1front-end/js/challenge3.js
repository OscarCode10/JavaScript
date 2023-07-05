let calculateTriangle=()=>{
    let lado1=parseFloat(document.getElementById("lado1").value)
    let lado2=parseFloat(document.getElementById("lado2").value)
    let lado3=parseFloat(document.getElementById("lado3").value)

    if (lado1==lado2 && lado1==lado3) {
        alert(`El triángulo es equilatero, los 3 lados son iguales ${lado1}`)
    }
    else if (lado1==lado2 && lado1!=lado3 || lado1==lado3 && lado1!=lado2 || lado2==lado3 && lado2!=lado1) {
        alert(`El triángulo es isoceles por que tiene dos lados iguales y uno no`)
    }
    else if (lado1!=lado2 && lado1!=lado3 && lado2!=lado3) {
        alert(`El triángulo es escaleno, ya qué sus tres lados son diferentes`)
    }
}
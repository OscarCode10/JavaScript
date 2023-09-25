let btn=document.getElementById("btnCalcular")

//Escuchar evento

btn.addEventListener('click', calculate=(e)=>{
    e.preventDefault()
    //Entradas
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    let op=document.getElementById("op").value
    if (op==1) {
        let result=num1+num2
        alert(`La suma entre ${num1} y ${num2} es: ${result}`)
    }
    else if(op==2){
        let result=num1-num2
        let rest= document.querySelector(".resultado")
        rest.innerHTML=`<p>La multiplicación entre ${num1} y ${num2} es: ${result}</p>`
    }
    else if(op==3){
        let result=num1*num2
        alert(`La multiplicación entre ${num1} y ${num2} es: ${result}`)
    }
    else{
        let result=num1/num2
        alert(`La suma división ${num1} y ${num2} es: ${result}`)
    }
})
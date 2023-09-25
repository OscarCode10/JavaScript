let color=document.querySelector("body")
color.style.setProperty("background-color","#AFC5F5")
let boton=document.querySelector(".boton")
boton.style.setProperty("color", "white")
boton.style.setProperty("background-color","#149D08")
boton.style.setProperty("border","1px solid #007C08")
boton.style.setProperty("border-radius","30px")
boton.style.setProperty("padding","15px 30px")
boton.style.setProperty("font-size","200%")
boton.style.setProperty("cursor","pointer")
boton.style.setProperty("width","250px")
boton.style.setProperty("box-shadow","3px 3px 7px black")
boton.style.setProperty("position","relative")
boton.style.setProperty("top","40px")
boton.style.setProperty("left","50px")

let inp=document.querySelector("input")
inp.style.setProperty("display","flex")
inp.style.setProperty("color","black")
inp.style.setProperty("border","2px solid black")
inp.style.setProperty("border-radius","8px")
inp.style.setProperty("padding","10px")
inp.style.setProperty("font-size","25px")



let calculate=(e)=>{
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
}
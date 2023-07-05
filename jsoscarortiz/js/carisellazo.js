function launchCoin(){
    let min = Math.ceil(1);
    let max = Math.floor(2);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let coin=launchCoin()

let valueTotal=parseInt(prompt("Ingrese el valor de dinero total con el que jugará"))
let name=prompt("Ingrese su nombre")
let op=true
do {
    let value=parseInt(prompt("Ingrese el dinero con el que apostará (Recuerde que no se puede pasar del total ingresado anteriormente)"))
        let win=()=>{
            valueTotal=valueTotal+value
        }
        let lose=()=>{
            valueTotal=valueTotal-value
        }
        if (value<valueTotal) {
            let decision=prompt("Elija si quiere cara o sello")
            switch (decision) {
                case "cara":
                    if (coin===1) {
                        win()
                        alert(`Ganaste, en total ahora tienes ${valueTotal}`)
                    }
                    else{
                        lose()
                        alert(`Perdiste, en total ahora tienes ${valueTotal}`)
                    }
                    break;
                case "sello":
                    if (coin===2) {
                        win()
                        alert(`Ganaste, en total ahora tienes ${valueTotal}`)
                    }
                    else{
                        lose()
                        alert(`Perdiste, en total ahora tienes ${valueTotal}`)
                    }
                    break;
                default: alert("No pudimos entender tu respuesta")
                    break;
                }
        }
        else{
            alert("Lo siento, el valor ingresado es mayor al permitido")
            times=times-1
        }
    op = confirm("Quieres seguir jugando?")

} while (op)

alert(`Usted ${name} termino el juego con un valor total de ${valueTotal}, espero vuelva a jugar pronto`)
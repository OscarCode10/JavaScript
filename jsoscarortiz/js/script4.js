let=op1=1
do {
    let op=""
    op=prompt("Tienes tres opciones: ingresar estudiante, ver estudiante y modificar estudiante")
    var typeDoc="", numDoc=0, name="", lasName=""
    switch (op) {
        case "ingresar estudiante":
            typeDoc=prompt("Ingrese su tipo de documento")
            numDoc=prompt("Ingrese su numero de documento")
            name=prompt("Ingrese su nombre")
            lasName=prompt("Ingrese su apellido")

            break;

        case "ver estudiante":
            if (typeDoc==="") {
                alert(`Para ver al estudiante debe primero ingresarlo`)
            } else{
                alert(`El estudiante ${name} ${lasName} identificado con ${typeDoc} No.${numDoc}.`)
            }
            break;
    
        case "modificar estudiante":
            if (typeDoc=="") {
                alert(`Para ver al estudiante debe primero ingresarlo`)
            } else {
                let decision=""
                decision=prompt("Que dato quieres modificar?, puede modificar el <<tipo de doc>>, el <<numero de doc>>, el <<nombre>> o el <<apellido>>")
                if (decision==="tipo de doc") {
                    typeDoc=prompt("Por cuál quieres cambiarlo?")
                    alert(`Hecho`)
                }
                else if (decision==="numero de doc") {
                    numDoc=prompt("Por cuál numero quieres cambiarlo?")
                    alert(`Hecho`)
                } 
                else if(decision==="nombre") {
                    name=prompt("Por cuál nombre quieres cambiarlo")
                    alert(`Hecho`)
                }
                else if(decision==="apellido") {
                    lastName=prompt("Por cuál nombre quieres cambiarlo")
                    alert(`Hecho`)
                }
                else{
                    alert(`No pudimos entender tu respuesta`)
                }
            }
            break;

        default:
            alert("No elegiste ninguna de las opciones")
            break;
    }
    op=prompt("Si quieres seguir escribe 1, si en tal caso no escribe 2")
} while (op1===1)
do {
    
} while (condition);
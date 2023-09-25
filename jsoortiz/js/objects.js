/*const teacher={
    name:"",
    lasName:"",
    topic:"",
    showIstructor(){
        this.name=prompt("Ingresar el nombre del instructor")
        this.lasName=prompt("Ingresar el apellido del instructor") 
        this.topic=prompt("Que materia dicta")
        alert(`El instructor ${name} ${lasName} dicta ${topic}`)
    }
}*/

//podemos crear un arreglo de objetos

/*let instructors=[
    {firstname:"Jennifer", lastName:"Fajardo",signeture:"JavaScript"},
    {firstname:"Tatiana", lastName:"Cabrera",signeture:"Java"}
]*/


//Agregar instructores

/*let instructor={
    firsname:"Uldarico",
    lastName:"Andrade",
    signeture:"Python",
}

instructors.push(instructor)

console.log(instructors)*/
/*let instructors=[]

op=true
do {
    const teacher={
        name:"",
        lastName:"",
        topic:"",
        addIstructor(){
            this.name=prompt("Ingresar el nombre del instructor")
            this.lastName=prompt("Ingresar el apellido del instructor") 
            this.topic=prompt("Que materia dicta")
        },
        showIstructor(){
            alert(`El instructor ${this.name} ${this.lastName} y dicta ${this.topic}`)
        }
    }
    teacher.addIstructor()
    instructors.push(teacher)
    console.log(teacher.showIstructor())
    console.log((instructors));
    op=confirm("Quieres seguir ingresando instructores?")
} while (op===true)*/

let instructors=[]
const instructor={
    name:"",
    lastName:"",
    topic:"",
    message:"",

    addInstructor(){
        let instruc={
            name:prompt("Ingresar el nombre del instructor"),
            lastName:prompt("Ingresar el apellido del instructor"),
            topic:prompt("Que materia dicta"),
        }
        instructors.push(instruc)
    },
    showInstructor(){
        let message = ""
        instructors.forEach((instructor, index) => {
            message += `Lista ${index+1}. Instructor ${instructor.name} ${instructor.lastName}, dicta ${instructor.topic}`
        })
        alert(message)
    },
    findInstructor(){
        let instructorI=prompt("Ingrese el nombre del instructor")
        let find=instructors.find(instructors=>instructors=instructorI)
        alert(`Encontramos a ${find}`)
    },
    updateInstructor(){
        let instructorI=prompt("Ingrese la posición del instructor que quiere actualizar")
        let update=this.addInstructor()
        instructors[instructorI]=update
        alert(`Se actualizo correctamente, así quedo la lista ${instructors}`)
    },
    deleteInstructor(){
        let instructorI=prompt("Ingrese la posición del instructor que quiere eliminar")
        instructors.splice(instructorI,1);
        alert(`Se ha eliminado correctamente: ${instructors}`)
    },
    orderInstructor(){
        instructors.sort()
        alert(`Se ordeno correctamente de la A-Z ${instructors}`)
    }
}
op=true
do {
    let decision=parseInt(prompt("Tiene 6 opciones para elegir que hacer: 1=agregar instructor, 2=ver instructor, 3=buscar instructor, 4=modificar instructor, 5=borrar instructor y 6=mostrar ordenando de la A-Z(Primero se debe agregar un instructor)"))
    if (decision>1&&instructors.length===0) {
        alert(`Primero debes agregar un instructor`)
    }
    else{
        switch (decision) {
            case 1:
                instructor.addInstructor()
                break;
            case 2:
                instructor.showInstructor()
                break;
            case 3:
                instructor.findInstructor()
                break;
            case 4:
                instructor.updateInstructor()
                break;
            case 5:
                instructor.deleteInstructor()
                break;
            case 6:
                instructor.orderInstructor()
                break;
            default: alert("No se entiende tu respuesta")
                break;
        }
    }
    op=confirm("Quieres seguir usando el programa?")
} while (op===true);

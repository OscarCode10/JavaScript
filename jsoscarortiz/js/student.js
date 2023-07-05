let op=true
let student=[]
let addStudent=()=>{
    let studentI=prompt("Ingrese el estudiante")
    student.push(studentI)
    alert(`Se ingreso correctamente a: ${studentI}`)
}
let showStudent=()=>{
    alert(student)
    console.log(student)
}
let findStudent=()=>{
    let studentI=prompt("Ingrese el nombre del estudiante que quiere buscar")
    let find=student.find(student=>student==studentI)
    alert(`Encontramos a ${find}`)
}
let updateStudent=()=>{1
    let studentI=prompt("Ingresa la posición del estudiante que quieres modificar")
    let update=prompt("Ingrese por cual estudiante quiere cambiarlo")
    student[studentI]= update
    alert(`Listo, modificaste correctamente a el estudiante, así quedo la lista: ${student}`)
}
let deleteStudent = () => {
    let studentI = prompt("Ingrese la posición del estudiante que quiere borrar");
    student.splice(studentI, 1);
    alert(`Se ha borrado correctamente: ${student}`);
}
let orderStudent=()=>{
    student.sort();
    alert(`Se ordeno correctamente: ${student}`);
}
do{
    let decision=parseInt(prompt("Tiene 6 opciones para elegir que hacer: 1=agregar estudiante, 2=ver estudiante, 3=buscar estudiante, 4=modificar estudiante, 5=borrar estudiante y 6=mostrar ordenando de la A-Z(Primero se debe agregar un estudiante)"))
    if (decision>1 && student.length===0) {
        alert(`Debes ingresar un estudiante primero`);
    }
    else{
        switch (decision) {
            case 1:
                addStudent()
                break;
            case 2:
                showStudent()
                break;
            case 3:
                findStudent()
                break;
            case 4:
                updateStudent()
                break;
            case 5:
                deleteStudent()
                break;
            case 6:
                orderStudent()
                break;
            default: alert("No se entiende tu respuesta")
                break;
        }
    }
    op = confirm("Quieres seguir usando el programa?")
} while (op)



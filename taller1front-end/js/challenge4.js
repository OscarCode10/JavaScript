let instructors=()=>{
    name=document.getElementById("name").value
    lastName=document.getElementById("lastName").value
    topic=document.getElementById("topic").value

    if (name=="Jennifer" && lastName=="Fajardo" && topic=="Javascript" ) {
        alert(`La respuesta es correcta`)
    }
    else if (name=="Tatiana" && lastName=="Cabrera" && topic=="Java" ) {
        alert(`La respuesta es correcta`)
    }
    else if (name=="Uldarico" && lastName=="Andrade" && topic=="Python" ) {
        alert(`La respuesta es correcta`)
    }
    else if (name=="Jonathan" && lastName=="Espitia" && topic=="Sql" ) {
        alert(`La respuesta es correcta`)
    }
    else{
        alert(`La respuesta es incorrecta`)
    }

}
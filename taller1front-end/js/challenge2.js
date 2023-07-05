let calulateTemp=()=>{
    let desicion1=parseInt(document.getElementById("decision1").value)
    let temp=parseFloat(document.getElementById("temp").value)
    let desicion2=parseInt(document.getElementById("decision2").value)
    
    if (desicion1==1 && desicion2==1) {
        alert(`Los grados Fahrenheit son: ${temp}`)
    }
    else if(desicion1==1 && desicion2==2){
        let C=(temp-32)/1.8
        alert(`Los grados Celsius son: ${C}`)
    }
    else if(desicion1==1 && desicion2==3){
        let K=(temp+459.67)/1.8
        alert(`Los grados Kelvin son: ${K}`)
    }
    else if(desicion1==2 && desicion2==1){
        let F=(temp*1.8)+32
        alert(`Los grados Fahrenheit son: ${F}`)
    }
    else if(desicion1==2 && desicion2==2){
        alert(`Los grados Celsius son: ${temp}`)
    }
    else if(desicion1==2 && desicion2==3){
        let K=temp+273.15
        alert(`Los grados Kelvin son: ${K}`)
    }
    else if(desicion1==3 && desicion2==1){
        let C=temp-273.15
        let F=(C*1.8)+32
        alert(`Los grados Fahrenheit son: ${F}`)
    }
    else if(desicion1==3 && desicion2==2){
        let C=temp-273.15
        alert(`Los grados Celsius son: ${C}`)
    }
    else if(desicion1==3 && desicion2==3){
        alert(`Los grados Kelvin son: ${temp}`)
    }
}
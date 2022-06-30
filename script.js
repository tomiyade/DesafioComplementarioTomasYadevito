
let numero1 = parseInt(prompt("Cuantas libertadores tiene Boca?"))

if(numero1 >=1 && numero1 <=3){
    alert("Tampoco es tan chico")
}else if (numero1 ===4){
    alert("Se esta acercando pero le faltan")
}else if(numero1 ===5){
    alert("Casi pero no")
}else if(numero1 ===6){
    alert("Correcto, Boca tiene 6 libertadores")
}else if (numero1 >=7){
    alert("Se paso")
}else{
    alert("Ingrese un numero")
}
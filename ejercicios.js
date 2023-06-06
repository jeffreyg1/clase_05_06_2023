var numero1=2
var numero2=2


if (numero1==0 && numero2==0){
  console.log("Tanto como el dividendo como el divisor son ceros")
}else if(numero1==0){
  console.log("El dividendo es cero")
  console.log(0)
}else if(numero2==0){
    console.log("El divisor es cero")
  console.log("Resultado indeterminado")
} else{
  var division=numero1/numero2
  console.log("El resultado de la division es: "+division)
}


var numero3=3

if(numero3%2==0){
  console.log("El numero es par")
}else{
  console.log("El numero es impar ")
}




var edad=20
var ingresos=2800000

if(edad>=19 && ingresos>=2500000){
  console.log("Debes tributar")
}else {
  console.log("No debes tributar")
}



var salario=34560

if(salario<10000){
  var impuesto=salario*0.05
  console.log("La renta a declarar es de: "+impuesto)
}else if(salario>=10000 &&  salario<20000){
    var impuesto=salario*0.15
  console.log("La renta a declarar es de: "+impuesto)
}else if(salario>=10000 && salario <35000){
    var impuesto=salario*0.2
  console.log("La renta a declarar es de: "+impuesto)
}else if(salario>=35000 && salario<=60000){
    var impuesto=salario*0.3
  console.log("La renta a declarar es de: "+impuesto)
}else{
      var impuesto=salario*0.45
  console.log("La renta a declarar es de: "+impuesto)
}
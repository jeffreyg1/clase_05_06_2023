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

if(imc<18.5){
console.log("Usted está dentro de los valores correspondientes a delgadez o bajo peso")
} else if(imc>=18.5 && imc <=24.9){
console.log("Usted está dentro de los valores normales o de peso saludable.")
} else if(imc>=25 && imc <=29.9){
console.log("Usted está dentro de los valores correspondientes a sobrepeso")
}else{
console.log("Usted está dentro de los valores correspondientes a obesidad")
}

var number = 8
if (number>10){
  console.log("Es mayor a 10")
}else{
  console.log("Es menor a 10")
}

var number = -2
if (number==0){
  console.log("Es igual a cero")
}else if( number>0){
  console.log("Es número positivo")
}else{
  console.log("Es un numero negativo")
}


var identificador=2

if(identificador==1){
  console.log("Lunes")
}else if(identificador==2){
  console.log("Martes")
}else if(identificador==3){
  console.log("Miercoles")
}else if(identificador==4){
  console.log("Jueves")
}else if(identificador==5){
  console.log("Viernes")
}else if(identificador==6){
  console.log("Sabado")
}else{
  console.log("Domingo")
}
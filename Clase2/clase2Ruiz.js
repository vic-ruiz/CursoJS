let numero = parseInt(prompt("Ingrese un numero para determinar si es par o impar"));

if (numero % 2 == 0){
    console.log("El numero "+ numero + " es par")
}else if( numero % 2 != 0 && Number.isInteger(numero) == true){
    console.log("El numero "+ numero +" es impar ")
}else {console.log("Dato ingresado no es valido")}
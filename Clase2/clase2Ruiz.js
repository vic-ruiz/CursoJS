let numero = parseInt(prompt("Ingrese un numero para determinar si es par o impar"));

if (numero % 2 == 0){
    alert("El numero "+ numero + " es par")
}else if( numero % 2 != 0 && Number.isInteger(numero) == true){
    alert("El numero "+ numero +" es impar ")
}else {alert("Dato ingresado no es valido")}
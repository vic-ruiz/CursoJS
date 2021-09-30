let numero = parseInt(prompt("Ingrese un numero entero para determinar si es par o impar"));

if (numero % 2 == 0){
    alert("El numero "+ numero + " es par")
}else if(Number.isInteger(numero)){
    alert("El numero "+ numero +" es impar ")
}else {alert("Dato ingresado no es valido")}
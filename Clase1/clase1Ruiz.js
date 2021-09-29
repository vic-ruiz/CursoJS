
let numeroA = parseInt(prompt("Ingrese un numero"));
let numeroB = parseInt(prompt("Ingrese otro numero"));
let opcion = parseInt(prompt("Ingrese :\n 1- Para sumar \n 2- Para restar \n 3- Para multiplicar "));

if (opcion == 1 ){
    console.log("El resultado de la suma es " + (numeroA+numeroB));
} else if (opcion == 2){
    console.log("El resultado de la resta es " + (numeroA-numeroB));
} else if(opcion == 3) {
    console.log("El resultado de la multiplicacion es " + (numeroA*numeroB));
} else {console.log("Opcion no valida") }

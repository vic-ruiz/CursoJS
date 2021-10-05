let opcion = " ";
while(opcion!="ESC"){
    let numero = parseInt(prompt("Ingrese un numero y obtenga sus primeros 5 multiplos"));
    for (let i = 1; i <= 5 ; i++){
        alert(numero + " x " + i + " es igual a " + (i*numero))
    }

    opcion = prompt("Ingrese: ESC Para detener el programa \nIngrese cualquier otro caracter para volver a ejecutar ").toUpperCase();
    /* toUpperCase por si el usuario ingresa esc en lowercase */

}



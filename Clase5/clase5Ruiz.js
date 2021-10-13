var total = 0;
var precio = 0;
var cantidad = 0;

class Pelicula {
    constructor(titulo, estreno, duracion) {
        this.titulo = titulo;
        this.estreno = estreno;
        this.duracion = duracion;
    }

    descripcion(){
        alert("Se selecciono la pelicula "+this.titulo+" estrenada en "+this.estreno+", con una duracion de "+this.duracion+" minutos");
    }

}

const pelicula1 = new Pelicula("Kimetsu no Yaiba: Mugen Ressha-hen",2020,117);
const pelicula2 = new Pelicula("Akira",1988,124);
const pelicula3 = new Pelicula("El viaje de Chihiro",2001,120);

function seleccionarCantidad(){
    return parseInt(prompt("Indique la cantidad de entradas que desea comprar"));
}
function precioOrden(){
    cantidad = seleccionarCantidad();
    return total += (500*cantidad);
}

do{
    let producto = parseInt(prompt("Seleccione a que pelicula desea ver \n 1-"+pelicula1.titulo+"\n 2-"+pelicula2.titulo+"\n 3-"+pelicula3.titulo));
    switch(producto){
        case 1:
            pelicula1.descripcion();
            precioOrden();
            break;
        case 2:
            pelicula2.descripcion();
            precioOrden();
            break;
        case 3:
            pelicula3.descripcion();
            precioOrden();
            break;
        default:
            alert("Opcion no valida")
    }

    otroProducto = confirm("¿Quiere reservar mas entradas?")
} while(otroProducto);

alert("Su total a pagar es " + total)
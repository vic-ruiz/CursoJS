var total = 0;
var precio = 0;
var cantidad = 0;

class Pelicula {
    constructor(titulo, estreno, duracion, id) {
        this.titulo = titulo;
        this.estreno = estreno;
        this.duracion = duracion;
        this.id = id
    }

    descripcion(){
        alert("Se selecciono la pelicula "+this.titulo+" estrenada en "+this.estreno+", con una duracion de "+this.duracion+" minutos");
    }

}

const pelicula1 = new Pelicula("Kimetsu no Yaiba: Mugen Ressha-hen",2020,117,1);
const pelicula2 = new Pelicula("Akira",1988,124,2);
const pelicula3 = new Pelicula("El viaje de Chihiro",2001,120,3);

const catalogo = [pelicula1, pelicula2, pelicula3]

function mostrarCatalogo(){
    if (preguntaCatalogo = confirm("¿Quiere ver el catalogo de peliculas?")){
        for (let i=0; i < catalogo.length; i++){
            alert(catalogo[i].id+"-"+catalogo[i].titulo)
        }
    }
}

function seleccionarCantidad(){
    return parseInt(prompt("Indique la cantidad de entradas que desea comprar"));
}

function precioOrden(){
    cantidad = seleccionarCantidad();
    return total += (500*cantidad);
}

do{
    mostrarCatalogo();
    let producto = parseInt(prompt("Seleccione a que pelicula desea ver de acuerdo a la enumeracion del catalogo"));
    catalogo.find(element => element.id === producto).descripcion();
    precioOrden();
    otroProducto = confirm("¿Quiere reservar mas entradas?")
} while(otroProducto);

alert("Su total a pagar es " + total)
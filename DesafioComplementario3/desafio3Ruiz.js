var total = 0;
var precio = 0;
var cantidad = 0;

/* Clases */ 
class Pelicula {
    constructor(titulo, estreno, duracion, id, precio, horarios) {
        this.titulo = titulo;
        this.estreno = estreno;
        this.duracion = duracion;
        this.id = id;
        this.precio = precio;
        this.horarios = horarios;
    }

    descripcion(){
        alert(`Se selecciono la pelicula ${this.titulo} estrenada en ${this.estreno}, con una duracion de ${this.duracion} minutos \nCon un precio de ${this.precio} pesos por entrada`);
    }


}

const horario1 = ["12:00", "14:15", "16:30", "19:00" , "21:15", "00:00"]
const horario2 = ["13:00", "15:15", "17:30", "19:45" , "22:00"]

const pelicula1 = new Pelicula("Kimetsu no Yaiba: Mugen Ressha-hen",2020,117,1,600, horario1);
const pelicula2 = new Pelicula("Akira", 1988, 124, 2, 700, horario2);
const pelicula3 = new Pelicula("El viaje de Chihiro", 2001, 120, 3, 800, horario1);

const catalogo = [pelicula1, pelicula2, pelicula3];

/*Funciones */
function mostrarCatalogo(){
    if (preguntaCatalogo = confirm("¿Quiere ver el catalogo de peliculas?")){
        for (let i=0; i < catalogo.length; i++){
            alert(`${catalogo[i].id}-${catalogo[i].titulo}`)
        }
    }
}

function seleccionarCantidad(){
    return parseInt(prompt("Indique la cantidad de entradas que desea comprar"));
}

function precioOrden(a){
    cantidad = seleccionarCantidad();
    return total += (a*cantidad);
}


/* Eventos*/

let catalogoClick = document.getElementsByClassName("btn")[0];
catalogoClick.addEventListener("click", () => {
    mostrarCatalogo();
})

let mostrarHorarios = document.getElementById("mostrarHorarios");
let horariosClick = document.getElementsByClassName("btn")[1];
horariosClick.addEventListener("click", () => {
    mostrarHorarios.innerHTML=``;
    let producto = parseInt(prompt("Seleccione la pelicula de la cual desea conocer sus horarios"));
    let pelicula = catalogo.find(element => element.id === producto);

    for (const horario of pelicula.horarios) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<div class="col-md-2 col-4">
                                    <h3 class="card"> ${horario}</h2>
                                </div>
                                `;
    
        mostrarHorarios.appendChild(contenedor);

    }
})


let compraClick = document.getElementsByClassName("btn")[2];
compraClick.addEventListener("click", () =>{
    do{
        let producto = parseInt(prompt("Seleccione a que pelicula desea ver de acuerdo a la enumeracion del catalogo"));
        catalogo.find(element => element.id === producto).descripcion();
        precioOrden(catalogo.find(element => element.id === producto).precio);
        otroProducto = confirm("¿Quiere reservar mas entradas?")
    } while(otroProducto);
    alert("Su total a pagar es " + total)
})





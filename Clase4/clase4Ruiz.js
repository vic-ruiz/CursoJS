var total = 0;
var precio = 0;
var cantidad = 0;

function seleccionarCantidad(){
    return parseInt(prompt("Indique la cantidad del producto seleccionado"));
}
function precioOrden(a){
    cantidad = seleccionarCantidad();
    return total += (a*cantidad);
}

do{
    let producto = parseInt(prompt("Ingrese que producto desea agregar a su carrito \n1-Remera\n 2-Jean \n 3-Campera"));
    switch(producto){
        case 1:
            precioOrden(500);
            break;
        case 2:
            precioOrden(1000);
            break;
        case 3:
            precioOrden(1500);
            break;
        default:
            alert("Opcion no valida")
    }

    otroProducto = confirm("¿Queres agregar otro producto?")
} while(otroProducto);

alert("Su total a pagar es " + total)


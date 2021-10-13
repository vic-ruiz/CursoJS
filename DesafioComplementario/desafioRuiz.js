var total = 0;
var precio = 0;
var cantidad = 0;
var descuento = 0;

function seleccionarCantidad(){
    return parseInt(prompt("Indique la cantidad del producto seleccionado"));
}
function precioOrden(a){
    cantidad = seleccionarCantidad();
    return total += (a*cantidad);
}

function calcularDescuento(a,b){
    return descuento = a*b;
}

function medioPago(a){
    let medio = parseInt(prompt("Ingrese el medio de pago \n1-Debito\n2-Credito \n3-Efectivo"));
    switch(medio){
        case 1:
            calcularDescuento(a,0.2);
            break;
        case 2:
            calcularDescuento(a,0.1);
            break;
        case 3:
            calcularDescuento(a,0.3)
            break;
        default:
            alert("Opcion no valida")
    }
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

medioPago(total);

alert("Su total a pagar es " + total+ " con un descuento de " + descuento+ "\nImporte final " + (total-descuento))


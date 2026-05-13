export function calcularEnvio(cantidadProductos) {

    if (cantidadProductos < 3) {
        return "No se permiten compras menores a 3 productos";

    } else if (cantidadProductos >= 3 && cantidadProductos <= 10) {
        return "Costo de envío: $15 USD";

    } else {
        return "Envío gratis";
    }

}

console.log(calcularEnvio(12));
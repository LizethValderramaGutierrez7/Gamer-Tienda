export function esVIP(cantidad, total) {

    if (cantidad > 20 && total > 1000) {
        return "El cliente es VIP";
    } else {
       return "El cliente no es VIP";
    }
}

 console.log(esVIP(12, 1000));
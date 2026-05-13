export function totalDescuento(totalFinal) {
    if (totalFinal < 200) {
        let faltante = 200 - totalFinal;
        return `Faltante $ ${faltante} para la promoción`;
    } else if (totalFinal >= 200 && totalFinal <= 500) {
        let descuento = totalFinal * 0.05;
        console.log(`Descuento aplicado ${descuento}`);
    } else {
        let descuento = totalFinal * 0.12;
        return `Descuento aplicado ${descuento}`;
    }
}

 console.log(totalDescuento(800));
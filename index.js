let nombre = prompt("¿Cuál es tu nombre?");
let carrito = prompt("¿Cuántos articulos hay en tu carrito?");
let monto = prompt("¿Cuál es el total de tu carrito?");

import { totalDescuento } from "./descuentos.js";

import { calcularEnvio } from "./envio.js";

import { esVIP } from "./vip.js";


console.log(`Hola ${nombre}!`);
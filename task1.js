// Calculadora de propinaaas

const prompt = require("prompt-sync")();

let total = Number(prompt("Introduzca monto total de la factura: "))
let porcentaje = Number(prompt("Introduzca cuánto es el porcentaje de la propina: "))

function calcularPropina(total, porcentaje) {
    let propina = (total * porcentaje) / 100;
    let resultado = total + propina;
    return resultado;
}
    let totalPagar = calcularPropina(total, porcentaje);
    console.log("Total sin propina: $", {total}, "Total con propina: $", {totalPagar})


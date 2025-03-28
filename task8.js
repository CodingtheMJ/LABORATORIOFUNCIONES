const prompt = require("prompt-sync")();

let montoCOP = parseFloat(prompt("Ingrese el monto total (COP) que desea convertir: "))

function convertirMoneda(montoCOP, monedaDestino) {
    let equiUSD = 0.00026;
    let equiEUR = 0.00024;

    if (monedaDestino === "USD"){
        return montoCOP * equiUSD; }

    else if (monedaDestino === "EUR"){
        return montoCOP * equiEUR; }

    else {
        return false
    }
}


let monedaDestino = prompt("Elija entre una moneda (EUR o USD) para convertir su monto: ")
monedaDestino = monedaDestino.toUpperCase();

let resultado = convertirMoneda(montoCOP, monedaDestino);

console.log("El monto convertido a la nueva moneda es: " + resultado + " " + monedaDestino);




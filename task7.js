const prompt = require("prompt-sync")();

function retirarDinero(saldo, monto) {
    if (saldo < monto) {
        console.log("Fondos insuficientes");}
    
    else if (saldo > monto) {
        saldo = (saldo - monto);
        console.log("Retiro exitoso. Su saldo ahora es: " + saldo.toFixed(3));}
    }

let saldoUs = parseFloat(prompt("Ingrese su saldo actual: "))
let montoARetirar = parseFloat(prompt("Ingrese el monto a retirar: "))

resultado = retirarDinero(saldoUs, montoARetirar)


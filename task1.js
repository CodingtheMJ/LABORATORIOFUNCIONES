// Calculadora de propinaaas

const prompt = require("prompt-sync")();                                                //Constante para el prompt de total y propinas

let total = Number(prompt("Introduzca monto total de la factura: ")) 
let porcentaje = Number(prompt("Introduzca cuánto es el porcentaje de la propina: "))


                                                                                        // Función para que agarre tanto el total como el porcentaje.
function calcularPropina(total, porcentaje) {
    let propina = (total * porcentaje) / 100;                                            //Defines propina basándote en la matemática de un porcentaje
    let resultado = total + propina;                                                     //Defines un resultado total para el valor total junto con la propina
    return resultado;                                                                    //Haces returno solo para poder utilizar resultado
}
    let totalPagar = calcularPropina(total, porcentaje);                                //Defines cuál sería tu total a pagar con base en la anterior función
    console.log("Total sin propina: $", {total}, "Total con propina: $", {totalPagar})  //Imprimes :3


//! VARIABLES:
let edad = 25;          
const nombre = "Ana";  

//! TIPOS DE DATOS:
//* Primitivos --> string, number, boolean, null, undefined.
let texto = "JavaScript";
let numero = 42;
let esMayor = true;
let nada = null;
let indefinido;  

//! FUCIONES:
//*Ejmplo 1
function sumar(a, b) {
    return a + b; 
}
let resultado = sumar(1, 2); 
console.log(resultado); 
//? Tambien podría ser
console.log(sumar(1,32));


//*Ejmplo 2
//? Uso real del return, una calculadora de descuentos
function calcularPrecioConDescuento(precioFull, descuento) {
    const descuentoAplicado = precioFull * (descuento / 100);
    const precioFinal = precioFull - descuentoAplicado;
    return precioFinal; 
}

const totalAPagar = calcularPrecioConDescuento(100, 20); 
console.log(`Precio final: $${totalAPagar}`);

//* Ejemplo 3
//? Acá solo quiero mostar algo, por ende no usaría Return
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
saludar("Ana");


//! CONDICIONAL IF
//* Ejmplo 1: if 
let edad2 = 18;
if (edad2 >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor");
}

//* Ejmplo 2: If Anidado
const prompt = require("prompt-sync")();

let num = prompt("Escribe un número: ");
num = Number(num);

function parOImpar(numero) {
  if (!Number.isInteger(numero)) {
    return "¡No es un número entero!";
  } else if (numero % 2 === 0) {
    return "¡Es par!";
  } else {
    return "¡Es impar!";
  }
}

console.log(num + " es " + parOImpar(num));

//! BUCLE for
for (let i = 0; i < 5; i++) {
    console.log(i);  
}

//! BUCLE WHILE
let contador = 0;
while (contador < 3) {
  console.log(contador);
  contador++;
}
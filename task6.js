const prompt = require("prompt-sync")();

let textoUsuario = prompt("Introduzca el texto que quiere contabilizar: ")

function contarPalabras(texto) {
    let contador = 0;
    let palabra = false;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == ' ') {
            if (palabra === false) {
                contador++;
                palabra = true;
            }
        } else {
            palabra = false;
        }
    }

    return contador;
}

console.log("Número de palabras:", contarPalabras(textoUsuario));
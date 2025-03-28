const prompt = require("prompt-sync")();

function validar(pwsrd) {
    for (let i = 0; i < pwsrd.length; i++) {
        let caracter = pwsrd[i];

        if (caracter === caracter.toUpperCase() && caracter >= "A" && caracter <= "Z") {
            tieneMayuscula = true;
        }

        if (caracter >= "0" && caracter <= "9") {
            tieneNumero = true;
        }
    }

    let tieneLongitud = pwsrd.length >= 8;

    return tieneMayuscula && tieneNumero && tieneLongitud;
}

function main() {
    let pwsrd = prompt("Ingresa tu contraseña: ");
    
    if (validar(pwsrd)) {
        console.log("¡Tu contraseña es correcta!");
    } else {
        console.log("Contraseña incorrecta. Inténtalo de nuevo.");
    }
}

main();
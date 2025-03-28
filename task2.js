const prompt = require("prompt-sync")();                                                    //Traigo la constante para que funcionen los prompts

function validar(pwsrd) {                                                                   //Hago función para validar la contraseña
    for (let i = 0; i < pwsrd.length; i++) {                                                //Defino mi contador para cada caracter de la contraseña
        let caracter = pwsrd[i];                                                            //Defino variable para que cada vez que la llame, se recorran los carácteres de contraseña

        if (caracter === caracter.toUpperCase() && caracter >= "A" && caracter <= "Z") {    //si la contraseña tiene mayúscula dentro del diccionario de A a la Z, entonces se cumple la función
            tieneMayuscula = true;
        }

        if (caracter >= "0" && caracter <= "9") {                                           //Si la contraseña tiene un número del 0 al 9, cumple la función
            tieneNumero = true;
        }
    }

    let tieneLongitud = pwsrd.length >= 8;                                                  //Definir variable para saber si la contraseña es del largo adecuado

    return tieneMayuscula && tieneNumero && tieneLongitud;                                  //Volver a traer todos los parámetros
}

function main() {                                                                           //función nueva main
    let pwsrd = prompt("Ingresa tu contraseña: ");                                          //definir el prompt
    
    if (validar(pwsrd)) {                                                                   //traer la función y aplicarla en pswrd como prompt
        console.log("¡Tu contraseña es correcta!");                                         //Imprimir si es válida
    } else {
        console.log("Contraseña incorrecta. Inténtalo de nuevo.");                          //Imprimir si no es válido
    }
}

main();                                                                                     //Traer función 2 (main) para que rompa bucle y se imprima
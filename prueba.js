const prompt = require("prompt-sync")();
let listaUsuarios = [
    {nombre: "Andres", edad: 23},
    {nombre: "Majo", edad: 14},
    {nombre: "Felipe", edad: 20},
    {nombre: "Omar", edad: 50},
    {nombre: "Daniel", edad: 17},
    {nombre: "Mapu", edad: 24}
];
function filtrarUsuarios(usuarios, edadMinima) {
    let lista2 = [];
 
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].edad >= edadMinima) {
            lista2.push(usuarios[i]); 
        }
    }
    return lista2; 
}
let edadMinima = Number(prompt("Ingrese la edad mínima: "));
let nuevoFiltro = filtrarUsuarios(listaUsuarios, edadMinima);
console.log("Usuarios que cumplen con la edad mínima:", nuevoFiltro);
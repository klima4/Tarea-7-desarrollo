const cadena = "quezadilla de jutiapa";
const appContenedor2 = document.querySelector("#ejerci3");
var palabraMayuscula = (campo) => {
    return campo.toLowerCase().replace(/^\w|\s\w/g, function(letter) {
        return appContenedor2.innerHTML = letter.toUpperCase();
    })
}

let dato = palabraMayuscula(cadena);
appContenedor2.innerHTML = dato;

console.log(dato);
console.log(cadena);
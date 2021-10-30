const objetos = {
    nombre: "Categorias",
    Categorias: [{
        categoria: 'limpieza',
        precio: 15
    }, {
        categoria: 'limpieza',
        precio: 0
    }, {
        categoria: 'baños',
        precio: 35
    }, {
        categoria: 'cocina',
        precio: 45
    }]

}

const appContenedor = document.querySelector("#ejercicio_numero_4");
const ejercicio4 = [10, 20, 30, 20, 30, 40, 60];
let suma = ejercicio4.reduce((anterior, actual) => {
    return appContenedor.innerHTML = anterior + actual;
})
const appContenedor3 = document.querySelector("#ejercicio_numero_4_1");
appContenedor3.innerHTML = `el promedio de este array es ${suma / ejercicio4.length}`;
console.log(ejercicio4);
console.log(suma / ejercicio4.length);
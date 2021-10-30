let lee_toda_la_banda = ["Diana", "Monica", "Maria", "Breny"];
item4 = lee_toda_la_banda.slice(1, 3)

const appcontendor = document.querySelector("#ejercicio_numero6");
const appcontendor1 = document.querySelector("#ejercicio_numero61");
const appcontendor2 = document.querySelector("#ejercicio_numero62");
const appcontendor3 = document.querySelector("#ejercicio_numero63");
const appcontendor4 = document.querySelector("#ejercicio_numero64");
const appcontendor5 = document.querySelector("#ejercicio_numero65");
const appcontendor6 = document.querySelector("#ejercicio_numero66");
const appcontendor7 = document.querySelector("#ejercicio_numero67");
lee_toda_la_banda.forEach(element => appcontendor.innerHTML += `<li>${element}</li>`);
console.log(lee_toda_la_banda);
//return `<li>${lee_toda_la_banda}</li>`


const item = lee_toda_la_banda.indexOf("Monica");
lee_toda_la_banda.splice(item, 1);
lee_toda_la_banda.forEach(element => appcontendor1.innerHTML += `<li>${element}</li>`);
console.log(lee_toda_la_banda);
const item2 = lee_toda_la_banda.indexOf("Breny");
lee_toda_la_banda.splice(item2, 1);
lee_toda_la_banda.forEach(element => appcontendor2.innerHTML += `<li>${element}</li>`);
console.log(lee_toda_la_banda);
lee_toda_la_banda.unshift("Jose");
lee_toda_la_banda.forEach(element => appcontendor3.innerHTML += `<li>${element}</li>`);
console.log(lee_toda_la_banda);
lee_toda_la_banda.push("Ricardo");
lee_toda_la_banda.forEach(element => appcontendor4.innerHTML += `<li>${element}</li>`);
console.log(lee_toda_la_banda);

const item3 = lee_toda_la_banda.find(element => element === "Diana");
appcontendor5.innerHTML += `${item3}`;
console.log(item3);

item4.forEach(element => appcontendor6.innerHTML += `<li>${element}</li>`);

const dato = item4.indexOf("Monicas");

const devolver = objeto => {
    if (objeto.indexOf("Monicas") != -1) {
        return "si existe"
    } else {
        return -1
    }
}

appcontendor7.innerHTML += devolver(item4);
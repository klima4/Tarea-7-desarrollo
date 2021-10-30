const numeroselevados = [-3, 2, -8, 12, 5];
const numeroselevados1 = [2, 4, 6];
const numselevados2 = [1, 2, 3, 4, 5];

const appContenedor = document.querySelector("#ejercicio1_0");
const numelevado = numeroselevados.map(elevado => {

    if (elevado % 2 == 0) {
        return appContenedor.innerHTML += `<li>${elevado*elevado}</li>`;
    } else {
        return appContenedor.innerHTML += `<li>${elevado}</li>`;
    }
})



const appContenedor1 = document.querySelector("#ejercicio1_1");
const numelevado1 = numeroselevados1.map(elevado1 => {

    if (elevado1 % 2 == 0) {
        return appContenedor1.innerHTML += `<li>${elevado1*elevado1}</li>`;
    } else if (elevado1 % 2 == 0 && elevado1 < 0) {
        return appContenedor1.innerHTML += `<li>${parseInt(-elevado1)*parseInt(-elevado1)}</li>`;
    }
})

console.log(numelevado);
console.log(numelevado1);

const appContenedor2 = document.querySelector("#ejercicio1_2");
const numelevado2 = numselevados2.map(elevado => {

    if (elevado % 2 == 0) {
        return appContenedor2.innerHTML += `<li>${elevado*elevado}</li>`;
    } else {
        return appContenedor2.innerHTML += `<li>${elevado}</li>`;
    }
})

console.log(numelevado2);
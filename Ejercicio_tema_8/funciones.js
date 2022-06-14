
//funcion que devuelve siempre true
function siempreTrue(){
    return true
}

console.log(siempreTrue());


//funcion asincrona timeout 5000
async function promesa(){
    return setTimeout(() => console.log("Hola, soy una promesa")
    ,5000)
}

console.log(promesa());

//funcion generadora
function* idsPares() {
    let id = 0;
    while(true) {
        yield id += 2;
    }
}

console.log(idsPares());
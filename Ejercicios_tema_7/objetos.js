const datos = {
    nombre: "Edison",
    apellido: "Proano",
    edad: 32,
    altura: 163,
    eresDesarrollador: true
};

const edad = datos.edad;

const lista = [
    {
        ...datos
    },

    {
        nombre: "Alejandro",
        apellido: "Guevara",
        edad: 33,
        altura: 173,
        eresDesarrollador: false
    },

    {
        nombre: "Jonathan",
        apellido: "Román",
        edad: 32,
        altura: 170,
        eresDesarrollador: true
    }
];

const listaOrdenada = lista.sort((a,b) => b.edad - a.edad);

console.log(listaOrdenada);
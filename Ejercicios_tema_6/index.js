const compra = ['Mantequilla', 'Huevos', 'Carne', 'Fideos', 'Leche'];

compra.push('Aceite de Girasol');
compra.pop();

const peliculas = [
    {
        titulo: 'Spider-Man: No way Home',
        director: 'Jon Watts',
        fecha: new Date(2021, 11 ,17)
    },
    {
        titulo: 'Matrix: Resurrecciones',
        director: 'Lana Wachowski',
        fecha: new Date(2021, 11, 22)
    },
    {
        titulo: 'Doctor Strange en el Multiverso de la Locura',
        director: 'Sam Reimi',
        fecha: new Date(2022, 04, 06)
    }
];

const nuevasPeliculas = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1));

const directores = peliculas.map(pelicula => {
    return pelicula.director;
});

const titulos = peliculas.map(pelicula => {
    return pelicula.titulo;
});

const directores_titulos = directores.concat(titulos);

const directores_titulos_propag = [...directores, ...titulos];


console.log(nuevasPeliculas)

//console.log(peliculas)

//console.log(compra);

//console.log(titulos);
//console.log(directores);

//console.log(directores_titulos)

//console.log(directores_titulos_propag)
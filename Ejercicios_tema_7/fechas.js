const hoy = new Date();
console.log(hoy);

const nacimiento = new Date(1990, 10, 19);
console.log(nacimiento);

const comparacion = hoy > nacimiento;
console.log(comparacion);

const diaNacimiento = nacimiento.getDate();
const mesNacimiento = nacimiento.getMonth() + 1;
const anioNacimiento = nacimiento.getFullYear();


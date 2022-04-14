//Ejercicio 1


for(let num = 1; num <= 100; num++) {
    if(num % 2 == 0) {
        console.log("El numero " + num + " es par");
    }
    else {
        console.log("El numero " + num + " es impar");
    }
}

//--------------------------------------------------------

//Ejercicio 2

bucle:
for (let num = 0; num < 11; num++) {
    if(num <= 1) {
        console.log(num);
        continue bucle;
    }
    for (let index = 2; index < num; index++) {
        if(num % index == 0) {
            console.log(num);
            continue bucle;
        }
        
    }
    console.log( num + " Es numero primo")
}
let factorial = 1;
let i = 10;
while(true) {
    factorial *= i;
    i--;
    if(i === 1){
        break;
    }
}

console.log(factorial);
function Fibonacci(num) {
    if (num === 1) return [1];
    if (num === 2) return [1,1];

    let list = [1,1]

    for (let index = 2; index < num; index++) {
        list.push(list[index - 1] + list[index - 2])
    }
    return list;
}

console.log(Fibonacci(12))
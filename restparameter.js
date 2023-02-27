function Sum(...x) {
    let total = 0;

    for(const arg of x){
        total += arg;
    }
    return total;
}

console.log(Sum(2, 3, 4, 7));
// console.log(typeof(Sum(3)));
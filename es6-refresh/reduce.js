let salaries = [4000, 2500, 800, 15000, 750, 5000]

let x = salaries.reduce((x, y) => x + y, 0)
let y = salaries.reduce((x, y) => x * y, 1)
let z = salaries.reduce((x, y) => x % y, 1)

console.log(x);
console.log(y);
console.log(z);
// console.log(4000 + 2500 + 800 + 15000 + 750 + 5000);
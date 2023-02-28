const numbers = [23, 45, 16, 34, 60, 67, 59, 20, 63, 89];

const x = numbers.filter(number => number >= 60);
// const z = numbers.filter((number, x, y) => console.log(number, x, y));
console.log(x);
// console.log(z);


const users = [
{name: "jerry", age: 13, isAdmin: true},
{name: "chris", age: 13, isAdmin: false},
{name: "samuel", age: 13, isAdmin: false},
{name: "david", age: 13, isAdmin: false},
{name: "musa", age: 13, isAdmin: true}

]

const x = users.map(user, _i) =>
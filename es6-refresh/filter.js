// const numbers = [23, 45, 16, 34, 67, 60, 59, 20, 63, 89];

// const x = numbers.filter(number => number > 60)
// const x = numbers.filter((number, x, y) => console.log(x));
// console.log(x);

const users = [
  { name: "SAmuel", age: 13, isAdmin: false },
  { name: "DAvid", age: 13, isAdmin: true },
  { name: "Jacob", age: 13, isAdmin: false },
  { name: "Jerry", age: 13, isAdmin: false },
  { name: "Musa", age: 13, isAdmin: false },
  { name: "Kenny", age: 13, isAdmin: true },
];


const adminUsers = users.filter(user => !!user.isAdmin)

console.log(adminUsers);


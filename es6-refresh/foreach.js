const users = [
  { name: "SAmuel", age: 13, isAdmin: false },
  { name: "DAvid", age: 13, isAdmin: true },
  { name: "Jacob", age: 13, isAdmin: false },
  { name: "Jerry", age: 13, isAdmin: false },
  { name: "Musa", age: 13, isAdmin: false },
  { name: "Kenny", age: 13, isAdmin: true },
];

const x = users.forEach((user, _i) =>
  console.log(`The user at index ${_i} is ${user.name}`)
);

console.log(x);

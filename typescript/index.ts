interface IUsers {
    name: string,
    age: number,
    isAdmin: boolean,
}

// any
const user: IUsers[] = [
    { name: "Samuel", age: 13, isAdmin: false },
    { name: "David", age: 13, isAdmin: true },
    { name: "Jacob", age: 13, isAdmin: false },
    { name: "Jerry", age: 13, isAdmin: false },
    { name: "Musa", age: 13, isAdmin: false },
    { name: "Kenny", age: 13, isAdmin: true },
];
  
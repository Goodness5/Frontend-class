// function sum(x, y, z, a, b) {
//   return x + y + z + a + b;
// }

// // const numbers = [1, 2, 3];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8,9,10];
// // const alp = ["a", "b", "c"];
// // const configure = [...numbers, ...alp];

// console.log(...numbers);
// // console.log("aaaaaaaaa: ", ...configure);
// // console.log(sum(...numbers));
// // Expected output: 6

const earlyBirdUsers = ["Ade", "Kunle", "Gerrad"];
const users = ["Bayo", "Terminator", "Mr Musa"];

function spreadIt(x, y, z) {
  return { x, y, z };
}

console.log(spreadIt(...earlyBirdUsers));

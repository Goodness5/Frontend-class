function sum(...numbers) {
  let total = 0;

  for (const arg of numbers) {
    total += arg;
  }

  return total;
}

console.log("a: ", sum(1, 2, 3));
//   // Expected output: 6

console.log("b: ", sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
//   // Expected output: 10


// .toFixed(23)
Math.ceil()
Math.floor()
Math.random()
Math.min()
Math.max()





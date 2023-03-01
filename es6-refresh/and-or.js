// AND -> && -> every condition must be true
// OR -> || -> at least one condition must be true

let age = 46;
let firstName = "Asiwaju";

// if (age === '46' && firstName === "Asiwaju") {
//   console.log("Good to go");
// } else {
//   console.log("Not good enough");
// }

// == -> compares values before checking the data type
// === -> check the data type before checking the value

if (age === "46" || firstName === "Asiwaju") {
  console.log("Good to go");
} else {
  console.log("Not good enough");
}

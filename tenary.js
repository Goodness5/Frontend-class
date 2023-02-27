// function checkAge(age) {
//   let x = age >= 18 ? "eligible" : "not eligible";

//   return x;
// }

// console.log(checkAge(18));

// a building has 16 floors, a user is in floor 1 - 4nshould say "web3bridge", a user in floor 5 -8
// should say "nigeria", a user on floor 9 -12 should say "smart-contract"
// other users should say "blockchain"

function building (floor) {
  let statement =
    floor <= 4
      ? 'web3bridge'
      : floor >= 5 && floor < 9
      ? 'Nigeria'
      : floor >= 9 && floor < 13
      ? 'smart contract'
      : 'blockchain'

      return statement;
}

console.log(building(16));

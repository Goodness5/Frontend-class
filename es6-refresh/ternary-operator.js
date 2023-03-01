// () ? "" : ""

function checkVotersAge(age) {
  //   let x = ""
  // age >= 18
  //   ? "You are eligible to vote"
  //   : "You are not eligible to vote in the south";

  //   let x = "";
  //   if (age < 12) {
  //     x = "You are a child";
  //   } else if (age >= 12 && age < 20) {
  //     x = "You are a teenager";
  //   } else if (age >= 20 && age < 40) {
  //     x = "You are a youth";
  //   } else if (age >= 40 && age < 70) {
  //     x = "You are an adult";
  //   } else {
  //     x = "You are an advanced citizen";
  //   }

  let x =
    age < 12
      ? "You are a child"
      : age >= 12 && age < 20
      ? "You are a teenager"
      : age >= 20 && age < 40
      ? "You are a youth"
      : age >= 40 && age < 70
      ? "You are an adult"
      : "You are an advanced citizen";

  // age >= 18
  //   ? "You are eligible to vote"
  //   : "You are not eligible to vote in the south";

  return x;
}

console.log(checkVotersAge(969));

// a building have 16 floors, a user is in floor 1 - 4
// should say "Web3Bridge", a user in floor 5 - 8 should
// say "Nigeria", a user on floor 9 - 12 should say
// "Smart Contract", other users should say "Blockchain"

function checkFloor(floor_) {
  let y =
    floor_ <= 4
      ? "Web3Bridge"
      : floor_ > 4 && floor_ <= 8
      ? "Nigeria"
      : floor_ > 8 && floor_ <= 12
      ? "Smart Contract"
      : "Blockchain";
  return y;
}

console.log(checkFloor(5));



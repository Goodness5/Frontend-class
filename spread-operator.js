// spread  const earlybirdusers = ["Ade", "Kunle", "Gerad"]
// const users = ["Bayo", "Terminator", "Mr Musa"]

function spread(...user) {
    let num = 0;
    for (const arg in user) {
        num ++;

        result = `user ${num}: ${user}`
    }
    return result;
}
const earlybirdusers = ["Ade", "Kunle", "Gerad"];
const users = ["Bayo", "Terminator", "Mr Musa"];

console.log(spread(...earlybirdusers));
console.log(spread(...users));
// three ways to declear a function


// 1. normal function 
function nameoffunction() {
    // .....
}

// 2. expression function
const funcname = function () {
    // ...
}

// 3. Arrow functions
// * the THIS keyword does not work in an arrow function
const functionname = () =>{
    // ...
}

const sum = (a, b) =>{
    return a+b;
}
console.log(sum(10, 30));
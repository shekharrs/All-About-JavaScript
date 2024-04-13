/*
  Variable Scope⚡🚀 --> Global, Local & Block Scope
*/

// var studentOneId = 10;     // Global Scope

// function studentSystem() {
//     var studentTwoId = 20; // Local Scope
//     console.log("This refers to local scope variable:",studentTwoId);
//     console.log("This refers to global scope variable:",studentOneId);
// }

// studentSystem();





/*
 Block Scope --> let and const both are block scope if we use var in block scope 
 it takes has a global scope and if we use var inside the function  
 it becomes a local variable of that function and cannot be accessed outside that 
 function. 
*/
 
let c = 15;
if(true) {
    var a = 5;
    let b = 10;    // block scope
    // const c = 15;  // block scope
}

console.log(a);
console.log(b);
console.log(c);
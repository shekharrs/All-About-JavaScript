/*
 First-Class Function👌✨
 A programming language is said to have First-class functions if functions 
 in that language are treated like other variables. So the functions can be 
 assigned to any other variable or passed as an argument or can be returned 
 by another function. JavaScript treat function as a first-class-citizens. 
 This means that functions are simply a value and are just another type of 
 object.
*/

/* 01 👇 */
const batch = function() {
    console.log("Welcome to the JavaScript learning web-series🚀");
}

batch();



/* 02 👇 */
function wrapper() {
    return "welcome to the JavaScript web-series🚀";
}

function greetMessage(inner,name) {
    console.log(name,inner());
}

greetMessage(wrapper,"Shekhar");



/* 03 👇 */
function jsBatch() {
    function wrapperBatch() {
        let studentName = "Shekhar";
        console.log(`Welcome ${studentName} to the JavaScript learning web-series🚀`);
    }
    return wrapperBatch;
}
/* 
const newBatch = jsBatch();
newBatch();

using this declaring the same👇
*/
jsBatch()();

/** Conditional Statement */

// const readlineSync = require("readline-sync");
// const number = Number(readlineSync.question("Enter a number: "));

// const remainderDivisionByThree = number % 3;
// const remainderDivisionByFive = number % 5;
// const remainderDivisionBySeven = number % 7;

// if (remainderDivisionByThree === 0 && remainderDivisionByFive === 0) {  //In And(&&) if both the condition is true then it will execute.
//     console.log("Fizz");
// } else if (remainderDivisionByThree === 0 || remainderDivisionByFive === 0) { //In Or(||) if one of the condition is true it will execute.
//     console.log("Buzz");
// } else if (remainderDivisionBySeven === 0) {
//     console.log("FizzBuzz");
// } else {
//     console.log("Not divisible by 7.");
// }








/** Conditional Statement Exercise
 * A Program that read 3 string and print the smallest string
*/


const firstString = "applee";
const secondString = "banana";
const thirdString = "watermelon";


const lengthOfFirstStr = firstString.length;
const lengthOfSecondStr = secondString.length;
const lengthOfThirdStr = thirdString.length;

if(lengthOfFirstStr < lengthOfSecondStr && lengthOfFirstStr < lengthOfThirdStr) {
    console.log(`${firstString} is the smallest string.`);
} else if(lengthOfSecondStr < lengthOfFirstStr && lengthOfSecondStr < lengthOfThirdStr) {
    console.log(`${secondString} is the smallest string.`);
} else if(lengthOfThirdStr < lengthOfFirstStr && lengthOfThirdStr < lengthOfSecondStr) {
    console.log(`${thirdString} is the smallest string.`);
} else {
    console.log("found 2 or more string of the same length.");
}
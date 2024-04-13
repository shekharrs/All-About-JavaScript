/*
 Higher-Order Function🔥⚡
 A function that accepts another function as an argument
 or returns a function or does both is called an H.O.F
*/

/* 
👇 this is a example of First-Class Function it is 
assigned a variable also pass the argument.
 */
function wrapper() {
    return "welcome to the JS Learn what matters web-series⚡";
}

function displayMessage(wrapper) {
    console.log("Shekhar",wrapper());
}

displayMessage(wrapper);




/*
  Higher-Order Function 
* also this is a First Class Function because in return line
  it is also return by another Function.⚡
  
*/
function greetMessage() {
    return function() {
        console.log("Hello, from the inner function🔥");
    }
}
/* 
const output = greetMessage();
output(); 
[👇using this way we can also call the function]
*/
greetMessage()();



// find the square of number in array
// const arr = [1,2,3,4,5];

// function squareOfNum(arr) {
//   let squaredNumber = [];
//   for(let number of arr){
//     squaredNumber.push(number ** 2);
//   }
//   return squaredNumber;
// }

// const output = squareOfNum(arr);
// console.log("The square of the given number of array:",output);





// find the cube of number in array
// const arrOfNum = [1,2,3,4,5];

// function cubeOfNum(arrOfNum) {
//   let cubedOfNum = [];
//   for(let number of arrOfNum) {
//     cubedOfNum.push(number ** 3);
//   }
//   return cubedOfNum;
// }

// const result = cubeOfNum(arrOfNum);
// console.log("The cube of the given number of array:",result);




// Through function calling multiple function square , cube , fourthPower Number
const arr = [1,2,3,4,5];

function squareOfNum(number) {
  return number ** 2;
}

function cubeOfNum(number) {
  return number ** 3;
}

function fourthPowerNum(number) {
  return number ** 4;
}

/* calculatePower recieves a function "squareOfNum" , "cubeOfNum" , "fourthPowerNum" 
as parameter, therefore calculatePower is a Higher-Order Function */
function calculatePower(wrapper , arr) {       
  let temArr = [];
  for(let number of arr) {
    temArr.push(wrapper(number))
  }
  return temArr;
}

const squareOfNumber = calculatePower(squareOfNum , arr);
console.log("The Square of number in the array is:",squareOfNumber);

const cubeOfNumber = calculatePower(cubeOfNum , arr);
console.log("The Cube of number in the array is:",cubeOfNumber);

const fourthPowerOfNumber = calculatePower(fourthPowerNum , arr);
console.log("The Fourth Power of number in the array is:",fourthPowerOfNumber);



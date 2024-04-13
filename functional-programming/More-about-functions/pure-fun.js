/*
  Pure Functions💕
  1. It takes an argument
  2. It should return something
  3. For same input you should get the same output
  4. The result should not be influenced by outer parameter
  5. It should not mutate the original argument 
*/
const outSideNum = 2;     // mutate the original argument 

function getDoubleNumbers(num){
    return num * 10 * outSideNum;    // this not a pure function
}

const result = getDoubleNumbers(5);
console.log(`The result is ${result} and it is not a Pure Function`);

     /* 👇 here you can see the Pure Function of the above js code*/

function getDoubleNumbersPure(num){
    return num * 2;
}

const pureValue = getDoubleNumbersPure(3);
console.log(`The result is ${pureValue} and it is a Pure Function`);








/* Different way to write a pure function */

function appendNumbers(arr){
    /* Created a new empty array */
    let newArr = [];
    /* Stored the pervious array into the new array 
    also insert a array with use of push method and 
    also use spread operator in pervious array to 
    spread the array in individual*/
    newArr.push(...arr,5,6);
    /* then return the array */
    return newArr;
}

const resultValue = appendNumbers([1,2,3,4]);
console.log(resultValue);
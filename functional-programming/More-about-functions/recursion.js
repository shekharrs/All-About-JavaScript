/*
  Recursion ♻🚀
  * Recursion is the way of writing a piece of code in an elegant manner by 
  calling the same function from within that function.

  *Recursion is a programming term where the function is called from itself
*/

/*
function numbers(x) {
  let total = 0;
  for (let i = 0; i <= x; i++) {
    total += i; // total = total + i;
  }
  return total;
}
const output = numbers(10); // 1+2+3+4...+10 
console.log(output);

** let do this code in recursive function👇 **
*/

/*
 ** Using Recursion the following code is executed **
function numberUsingRecursive(number) {
  if(number === 1){
    return number;
  }
  return number + numberUsingRecursive(number-1);
  // 10 + numberUsingRecursive(10 - 1 = 9)
  // 10 + 9 + numberUsingRecursive(9 - 1 = 8)
  // 10 + 9 + 8 + numberUsingRecursive(8 - 1 = 7)
  // 10 + 9 + 8 + 7 + numberUsingRecursive(7 - 1 = 6)
  // 10 + 9 + 8 + .....+ 10
}

const result = numberUsingRecursive(10);
console.log(result);
*/






/* Exercise- find the factorial of 5
function factorialNum(number) {
  let total = 1;
  for(let i=number ; i>=1; i--){
    total = total * i;
  }
  return total;
}

console.log(factorialNum(5));  //5 x 4 x 3 x 2 x 1 = 120

** Below this using recursive function the code is executed👇 **
*/

function recursiveFact(num) {
  if(num === 1){
    return num;
  }
  return num * recursiveFact(num - 1);
  // 5 x recursiveFact(5 - 1 = 4)
  // 5 x 4 x recursiveFact(4 - 1 = 3)
  // 5 x 4 x 3 ....1 = 120
}

const resultFac = recursiveFact(5);
console.log(resultFac);





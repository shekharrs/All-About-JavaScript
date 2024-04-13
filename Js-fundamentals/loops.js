/** LOOPS
 * --> for loop
 * --> Nested for loop
 * --> While loop
 * --> Do While loop
 */

// for (let i = 1; i <= 10; i++) {           //Nested for loop
//     for (let j = 1; j <= 12; j++) {
//         let product = i * j;
//         console.log(`${i} * ${j} = ${product}`);
//     }
//     console.log('----------');
// }




// const userName = "Shekhar Thakur";         //for loop

// const stringLength = userName.length;

// for(let i=0;i<stringLength;i++){
//     console.log(userName[i]);
// }





// let i=0;             //While loop
// while(i<10){
//     console.log(i);
//     i++;
// }





// let i = 0;                //do while loop

// do {
//     console.log(i);
//     i++;
// } while (i <= 10);









/** Exercise for loop */



/** Make a Star Pattern with the use of for loop 
 
const starPattern = "* ";

for(let i=1;i<=5;i++){           // Star Pattern
    console.log(starPattern.repeat(i));
}

for(let i=5;i>=1;i--){           // Reverse Star Pattern
    console.log(starPattern.repeat(i));
}


*/







/** find the total numbers of the string 
 
const userName = "Shekhar Thakur";
let count = 0;

for(let i=0;i<userName.length;i++){
    count++;      // count = count + 1
}
console.log(`The count of string is ${count}`);

*/






/** find the range of number from 1 to 101 all the even numbers 
 

let remainder;

for(let i=1;i<=101;i++){
    remainder = i%2;
    if(remainder === 0){
        console.log(`${i} is an even number`);
    } else{
        console.log(`${i} is an odd number`);
    }
}

*/







/** find the vowels in string 
 


const inputString = "hello Geeks, Welecome to geeksforgeeks!";
const vowels = "aeiou";

for (let i = 0; i < inputString.length; i++) {
    if (vowels.includes(inputString[i])) {
        console.log(`${inputString[i]} is a vowel`);
    } else {
        console.log(`${inputString[i]} is not a vowel`);
    }
}

*/








/** Given an integer s,  write a program to print a square wall of size s without using
  string multiplication. Use nested loops instead. The * character will make up the wall.

  * * * * *
  * * * * *
  * * * * *
  * * * * *
  * * * * *
  


  const squareWall = "*";
  let num = 5;

  for(let i=0;i<num;i++){
    for(let j=0;j<num;j++){
        process.stdout.write('* ');
    }
    process.stdout.write('\n');
  }

  */



  




  /** While loop exercise
     -->  user enters a number, if the number is greater than 50 
     then ask the user to enter a number less than 50 again


     
     let readlineSync = require("readline-sync");

     let number = 100;
     
     while(number>=50){
         number = readlineSync.question("Enter a number less than 50: ");
     }
     
     console.log("Number accepted");

   */

